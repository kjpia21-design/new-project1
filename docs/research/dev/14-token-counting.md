# dev/14 token counting API research note (2026-11-02)

Opened one page at a time with `curl -sL -m 30 -A "Mozilla/5.0" <url>.md`.

## Official URLs opened
- https://platform.claude.com/docs/en/build-with-claude/token-counting
- https://platform.claude.com/docs/en/api/messages/count_tokens (API reference; only the parameter list and the Returns section were read)
- https://platform.claude.com/docs/en/about-claude/pricing

## Facts confirmed
- Endpoint: `POST /v1/messages/count_tokens`; same structured inputs as creating a message (system, tools, images, PDFs). Returns `{ "input_tokens": N }` (total across messages, system prompt and tools). Headers in the docs' cURL: `x-api-key`, `content-type: application/json`, `anthropic-version: 2023-06-01`.
- Python: `client.messages.count_tokens(model=..., system=..., messages=...)`; also `ant messages count-tokens` CLI.
- Errors (`invalid_request_error`) for: server tools (web search, web fetch, code execution, tool search; the advisor tool is the exception), the MCP connector, `image`/`document` blocks with a `url` or `file` source. Images/PDFs must be base64.
- Count is an estimate; may differ slightly; may include system-added tokens that are not billed.
- All active models support it. Claude 4.7+ and Mythos Preview use a newer tokenizer: ~30% more tokens for the same text; recount against the target model. Fable/Mythos 5 and 5.1 share that tokenizer; count the same request with two models to compare.
- Thinking: previous-turn thinking blocks count on models that keep all prior turns; current-turn thinking counts.
- Free to use; RPM limits by tier: Start 5,000, Build 10,000, Scale 20,000; separate from message creation limits; "Request tier increase" on the Rate limits page in the Console.
- `cache_control` is accepted but caching does not happen at count time (FAQ).
- Not available in Managed Agents. Eligible for ZDR (excludes Covered Models) and HIPAA.
- Docs' example outputs: 14 tokens (basic), 403 (one tool), 1028 (image), 88 (thinking), 2188 (PDF) - for claude-opus-5-5 per the docs.
- Pricing page (as of 2026-11-02, USD per MTok input/output): Opus 5.5 $4/$20; Sonnet 5.5 $2/$10; Haiku 5.5 $0.10/$0.50 for prompts up to 100,000 tokens ($0.50/$2.50 over); Fable 5.1 $10/$50. Batch: 50% off input and output. Pricing page says current prices at claude.com/pricing.

## Not confirmed
- Exact error text/HTTP code for the unsupported inputs.
- Whether count_tokens needs identical `thinking` settings to match billing in every case (only the quoted notes).
- Real API behavior: no API key and no `anthropic` package here.

## Code check
- `python3 -m py_compile` passed. The `estimate()` function was run with a stub `anthropic` module and made-up token counts (1,200 in / 300 out): Opus 5.5 $108.00, Sonnet 5.5 $54.00, Haiku 5.5 $2.70 per 10,000 calls; half with batch. No real count_tokens call was made.
