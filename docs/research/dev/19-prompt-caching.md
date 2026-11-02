# dev/19 prompt caching research note (2026-11-02)

Pages opened one at a time with plain `curl -sL <url>.md` (default options, `-L` only, no header changes). All three returned full markdown.

## Official URLs opened
- https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- https://platform.claude.com/docs/en/about-claude/pricing
- https://platform.claude.com/docs/en/build-with-claude/cache-diagnostics

## Facts confirmed
- Two modes: automatic (top-level `cache_control`, breakpoint on last cacheable block, moves forward) and explicit block breakpoints; up to 4 breakpoints; automatic uses one slot. Edge cases: last block with explicit different TTL -> 400; 4 explicit already -> 400; ineligible last block walks backward, skipped if none. Automatic not available on legacy Bedrock (Opus 4.6 and earlier) -> 400.
- Prefix order tools -> system -> messages; hash is cumulative; writes only at breakpoints; lookback 20 positions (consecutive tool_use run and consecutive tool_result run each count as one position on the Claude API); timestamp-in-last-block mistake example.
- Lifetime: 5 min default, refreshed free on use, measured from start of request; 1h via `"ttl": "1h"`; mixing: longer TTL before shorter; billing positions A/B/C. 1h hits do not count against rate limit; same latency behavior for 5m and 1h.
- Pricing multipliers (as of 2026-11-02): 5m write 1.25x, 1h write 2x, read 0.1x (0.05x Opus 5.5 and Sonnet 5.5, 0.025x Fable 5.1 and Mythos 5.1). Per MTok: Fable 5.1 $10/$12.50/$20/$0.25; Opus 5.5 $4/$5/$8/$0.20; Sonnet 5.5 $2/$2.50/$4/$0.10; Haiku 5.5 (<=100k) $0.10/$0.125/$0.20/$0.01. Pricing page: caching pays off after one read (5m) or two reads (1h). Multipliers stack with batch, long-context, data residency; Haiku 5.5 prompt length counts cache reads/writes.
- Minimums: 512 tokens (Fable 5.1, Mythos 5.1, Opus 5.5, Opus 5, Sonnet 5.5, Fable 5, Mythos 5, Haiku 5.5); 1,024 (Opus 4.8, Sonnet 5, Sonnet 4.6, 4.5, older); 2,048 (Mythos Preview, Opus 4.7); 4,096 (Opus 4.6, 4.5, Haiku 4.5). Shorter: processed uncached, no error. Entry available only after first response starts.
- Cacheable: tools, system, text, images/documents (user turns), tool_use/tool_result. Not directly: thinking blocks, sub-content (citations), empty text blocks.
- Invalidation table (tools, web search/citations toggle, speed, tool_choice, images, thinking params, effort, dropped thinking blocks). Effort change invalidates messages; per-message effort via `role: "system"` message keeps prefix.
- usage fields and total_input formula; `cache_creation` object with `ephemeral_5m_input_tokens` / `ephemeral_1h_input_tokens`.
- Workspace isolation (Claude API, Claude Platform on AWS, Foundry); org isolation (Bedrock, Google-managed). No manual cache clear. ZDR eligible (excludes Covered Models); HIPAA eligible. No beta prefix needed anymore.
- Pre-warming with `max_tokens: 0` and its rejected combinations (stream, thinking enabled, structured outputs, forced tool_choice, Message Batches).
- Batches: cache hits best-effort; suggested 1h-cache-first pattern.
- Cache diagnostics: `diagnostics.previous_message_id`, `cache_miss_reason` types, Claude API only, python example uses `client.beta.messages`, beta header no longer required.
- Examples on the pages use `claude-opus-5-5`.

## dev/02 consistency check
No contradiction found. dev/02 numbers (multipliers, 512-token minimum for Opus/Sonnet/Haiku 5.5, 4 breakpoints, 20-block lookback, TTL mixing order, workspace isolation, effort invalidation, per-message effort exception) match the pages. Notes only:
- dev/02 says the 1h cache needs "several reuses"; the pricing page gives the exact figure (two reads). Compatible, this lesson states it.
- dev/02 price table is dated 2026-10-11; values are identical to 2026-11-02.
- Not re-verified because the pages read here do not cover them: dev/02's "30-98%" batch hit-rate range, "median 84%" figure from the cost guide, `count_tokens` ignoring `cache_control`.

## Not confirmed
- Real API behavior: no API key and no `anthropic` package; no request sent. Hit/miss output shown is only from a local stub.
- Whether "minimum lifetime" wording (data retention section: entries live "a minimum of 5 minutes") means actual expiry can be later than 5 minutes; tutorial states 5 minutes as documented default.
- Cache diagnostics behavior in practice; retention duration of fingerprints ("short period", unspecified).
- Rate-limit numbers and how cache reads count toward ITPM on specific tiers (rate-limits page not opened).
- Bedrock per-model minimums (docs defer to AWS).

## Code check
- `python3 -I -m py_compile` passed for `cache_demo.py` and `cache_breakeven.py`.
- `cache_breakeven.py` run for real: Opus 5.5, 20,000 tokens, requests 1/2/3/5/10: none $0.08/0.16/0.24/0.40/0.80; 5m $0.10/0.104/0.108/0.116/0.136; 1h $0.16/0.164/0.168/0.176/0.196.
- `cache_demo.py` run against a stub `anthropic` module (breakpoint asserted on last system block): printed write then read. Does not test the real API.
