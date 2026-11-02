# dev/16 batch API research note (2026-11-02)

Opened one page with plain `curl -sSL -m 60 <url>.md` (default options, no header changes). A first plain request to the HTML URL returned 200 but was a 2 MB page; it was discarded unread and the `.md` form of the same page was read instead.

## Official URL opened
- https://platform.claude.com/docs/en/build-with-claude/batch-processing

## Facts confirmed (all from that page)
- Message Batches API: async processing of many Messages requests; "most batches finishing in less than 1 hour"; 50 percent cost reduction.
- Limits: a batch holds up to 100,000 requests or 256 MB, whichever comes first (too large -> 413 `request_too_large`). Batches expire if not finished within 24 hours. Results available 29 days after creation; after that the batch is viewable but results can't be downloaded. Batches are scoped to a Workspace. May slightly exceed the Workspace spend limit. `max_tokens` must be at least 1 (`max_tokens: 0` cache pre-warming unsupported).
- Not supported inside a batch (validation error): `stream: true`, `speed` (fast mode), `fallbacks`, `max_tokens: 0`.
- Can be batched: vision, tool use incl. server tools, system messages, multi-turn, extended thinking, most beta features. Requests in one batch may be mixed types.
- Request shape: `custom_id` (1-64 chars, `^[a-zA-Z0-9_-]{1,64}$`, unique) + `params` (standard Messages params). Endpoint `POST /v1/messages/batches`, header `anthropic-version: 2023-06-01`. Python: `client.messages.batches.create(requests=[Request(custom_id=..., params=MessageCreateParamsNonStreaming(...))])`. CLI form `ant messages:batches create`.
- Params are validated asynchronously; errors come back when the batch ends. Page suggests testing the request shape with the Messages API first.
- Create response: `processing_status: in_progress`, `request_counts` {processing, succeeded, errored, canceled, expired}, `expires_at`, `results_url: null`.
- Polling: `client.messages.batches.retrieve(id)`; `processing_status` goes `in_progress` -> `ended` (cancel: `canceling` -> `ended`). The page's Python sample sleeps 60 s per poll.
- Results: `.jsonl`, one line per request; types `succeeded`, `errored`, `canceled`, `expired`. errored/canceled/expired are not billed. Results may be in ANY order; match with `custom_id`. Python `client.messages.batches.results(id)` streams. `invalid_request_error` must be fixed before resending; other errors can be retried directly. Results use the API version of the creating request. List endpoint is paginated (`has_more`, `after_id`).
- Cancel: `POST .../cancel`; partial results possible. A submitted batch can't be modified. A failed request does not affect others.
- Delete: `DELETE /v1/messages/batches/{batch_id}` after processing; cancel first if in progress.
- Pricing on that page (batch = 50% of standard, applies to input, output and special tokens), per MTok, input/output: Fable 5.1 $5/$25; Opus 5.5 $2/$10; Sonnet 5.5 $1/$5; Haiku 5.5 (prompts up to 100,000 tokens) $0.05/$0.25, (over 100,000) $0.25/$1.25. Matches half of the standard prices already used in dev/02. Page tells readers to check claude.com/pricing for prices.
- Prompt caching works with batches; discounts can stack; cache hits are best-effort ("typically 30 percent to 98 percent" per page); tips: identical `cache_control`, steady requests, share content; consider the 1-hour cache duration.
- Server tools work in batches; `pause_turn` results may need a follow-up request. Extended output beta header `output-300k-2026-03-24` raises `max_tokens` to 300,000 in batches only for listed models (not covered in tutorial beyond a mention).
- Availability: every model; Claude API, Claude Platform on AWS, Claude Models on Google Cloud (Anthropic managed). Managed Agents: not available. Zero data retention: not eligible; HIPAA: not eligible; 29-day retention. Console result download can be disabled per org/workspace.
- Example model ID `claude-opus-5-5` appears in the page's own examples.

## Not confirmed
- Batch rate-limit numbers (linked page api/rate-limits not opened).
- claude.com/pricing and the platform pricing page were not opened; only the batch page's own price table was used.
- Console UI steps for viewing batches (only the link is mentioned).
- Real API behavior: no API key and no `anthropic` package here; no real batch was created.

## Code check
- `python3 -I -m py_compile` passed for the tutorial script.
- Ran the script's logic against a local stub of `anthropic` that returns results in reversed order: labels were matched by custom_id correctly. This does not test the real API.
