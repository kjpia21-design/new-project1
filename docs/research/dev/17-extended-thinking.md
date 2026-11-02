# dev/17 extended thinking research note (2026-11-02)

Each page opened one at a time with plain `curl -sS -o <file> <url>.md` (default options, no header changes). All returned HTTP 200.

## Official URLs opened
- https://platform.claude.com/docs/en/build-with-claude/extended-thinking
- https://platform.claude.com/docs/en/build-with-claude/thinking
- https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost
- https://platform.claude.com/docs/en/build-with-claude/effort

## Facts confirmed
- extended-thinking page: "Extended thinking is a legacy feature." `thinking.type: "enabled"` + `budget_tokens` is deprecated; Claude 4.7 and later reject it with 400. Recommended: adaptive thinking. Manual rules: budget min 1,024, less than `max_tokens` (exception: interleaved thinking), target not strict cap, no `max_tokens: 0` pre-warming; start ~1,024 for simple and 16,000+ for complex; batch for budgets above 32k. Changing `budget_tokens` invalidates cache breakpoints. Migration: drop `budget_tokens`, `thinking: {type: adaptive}`, `output_config.effort`; behavioral change (adaptive may skip thinking). Managed Agents: not available for extended thinking; uses adaptive on newer models.
- thinking page: per-model table (Opus 5.5/Sonnet 5.5/Haiku 5.5: no field = adaptive, `enabled` = 400; `disabled` = 400 on Opus 5.5, 400 on Sonnet 5.5 (use `between_tools`, effort high or below), off at effort high or below on Haiku 5.5; Opus 4.8/4.7 off by default; 4.6 models `enabled` deprecated; 4.5 models `adaptive` = 400). Claude 5 and later: thinking on by default, `display` default `omitted`. `display` values summarized/omitted/updates (beta, header `thinking-display-updates-2026-08-18`). Billing same regardless of display. Thinking text is a summary from a different model. Streaming events thinking_delta/signature_delta; omitted sends empty thinking_delta then signature. Tool use: pass thinking blocks back unmodified, keep redacted_thinking; toggling mid-turn silently disables thinking; forced tool_choice rejected on Opus 5.5, Sonnet 5.5, Fable 5.1, Mythos 5.1. Sampling params 400 on listed new models; from API version 2026-10-21 on all models. Prefill rejected on 4.6+. Max output 128K (5.5 models) / 64K (4.5 models). SDK requires streaming when max_tokens > 21,333 (client-side). `reasoning_extraction` refusal on some models. Caching: config/effort changes invalidate; 1-hour cache suggested.
- steering page: adaptive thinking is per-request; effort levels table (low..max); defaults medium on Opus 5.5 and Haiku 5.5; `max_tokens` hard cap vs effort soft; fixes for `stop_reason: max_tokens`; prompt-based steering is wording-sensitive and unreliable on Sonnet 5.5/Haiku 5.5; pricing: thinking billed as output, `usage.output_tokens_details.thinking_tokens` (sample 348 / 312), breakdown only on final `message_delta` when streaming.
- effort page: `output_config.effort`; level descriptions; defaults; effort affects all tokens (text, tool calls, thinking); per-message effort beta keeps cache; top-level change invalidates cache; Opus 4.5 composes effort with budget_tokens.

## Not confirmed
- Prices for thinking/output tokens (pricing page not opened; no price table in the tutorial).
- Models API `capabilities.thinking.types` details, thinking-troubleshooting page, API version 2026-10-21 migration page, `updates` display beta details.
- That the batch page lists extended thinking as batchable (only repeated from the earlier dev/16 research note; not reopened).
- Any real API behavior: no API key and no `anthropic` package here; no real request was sent. No page example combines `thinking` and `output_config.effort` in one request (our composition of two documented parameters).

## Code check
- `python3 -I -m py_compile` passed. Ran `show()` against a local stub of `anthropic` (response with an empty thinking block, usage with thinking_tokens 312): printed as expected, request kwargs were max_tokens, messages, model, output_config, thinking. Does not test the real API.
