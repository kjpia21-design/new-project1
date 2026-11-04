# dev/20 errors, rate limits and retries research note (2026-11-04)

Pages opened one at a time with plain `curl -sL <url>.md` (default options, `-L` only). All three returned HTTP 200 full markdown.

## Official URLs opened
- https://platform.claude.com/docs/en/api/errors
- https://platform.claude.com/docs/en/api/rate-limits
- https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python

## Facts confirmed
- Codes: 400 invalid_request_error (also other 4XX; also spend limit you set), 401 authentication_error (incl. CORS-with-Origin case), 402 billing_error, 403 permission_error, 404 not_found_error, 409 conflict_error ("resolve, then retry"), 413 request_too_large, 429 rate_limit_error (rate limit, tier spend cap, Claude Code workspace limit), 500 api_error (retry with exponential backoff), 504 timeout_error (also with other codes), 529 overloaded_error (acceleration limits can cause 429).
- SDK: retries connection errors, rate limits, 5xx with exponential backoff, twice by default, honors retry-after; `max_retries`. Python page: 408, 409, 429, >=500 and connection errors retried, short backoff; default timeout 10 minutes, APITimeoutError, timeouts retried twice; error class table (400..>=500, APIConnectionError); `_request_id`; `with_raw_response`.
- Error body shape with `request_id`; `request-id` header; value sets may expand (versioning).
- Request size limits: Messages 128 MB, Token Counting 128 MB, Batch 256 MB, Files 500 MB; 413 from Cloudflare on first-party API.
- Streaming: errors can occur after a 200 and do not follow standard mechanisms (Error events in streaming docs, page not opened).
- Long requests: use streaming or batches, especially over 10 minutes; SDK validates non-streaming requests not expected to exceed 10 minutes and sets TCP keep-alive.
- Rate limits: RPM, ITPM, OTPM per model class; token bucket; 429 says which limit; wait retry-after; limits are maximums not guarantees; short-interval enforcement.
- Spend caps: Start $500, Build $1,000, Scale $200,000, Custom none; at cap, pause until 00:00 UTC first of next month; 429 without retry-after, `error.details.error_code` = `enforced_spend_limit_reached`; user-set limits return 400; Claude Code workspace limits can return 429 with retry-after.
- Cache-aware ITPM: input_tokens and cache_creation_input_tokens count, cache_read_input_tokens do not (most models; Haiku 3.5 exception).
- Headers: retry-after, anthropic-ratelimit-{requests,tokens,input-tokens,output-tokens}-{limit,remaining,reset}, anthropic-priority-*; tokens-* shows most restrictive limit; remaining rounded to nearest thousand; reset in RFC 3339.
- Request tier increase in Console; per-workspace lower limits; Rate Limits API exists.
- Docs examples use claude-opus-5-5 (Python SDK page), claude-sonnet-5 (errors page).

## Not confirmed
- Real API behavior: no API key, no `anthropic` package; no request sent; no real 429/529 provoked. Retry loop in safe_call.py is untested against the API.
- Exact SDK accessors beyond `e.status_code` and `e.response` (the lesson uses `e.response.json()` and `e.response.headers`; `.body` not used).
- Per-tier RPM/ITPM/OTPM numbers: rate-limits tier tables not transcribed; lesson points to the Console.
- Exact SDK backoff durations (docs say "short"); whether SDK retries 408 in all languages (errors page lists only connection errors, rate limits, 5xx; Python page lists 408 and 409 too).
- Streaming Error events page, Rate Limits API page, and other-language SDK pages not opened.
- Whether 409 is safe to auto-retry beyond the docs' "resolve, then retry".

## Code check
- `python3 -I -m py_compile safe_call.py` passed.
- `decide()` run with a stub `anthropic` module: spend-cap 429 -> stop; 429 with retry-after -> wait; 429 without -> stop; 529 -> wait; 400 -> fix; 413 with empty body -> fix.
- The example disables SDK retries (`max_retries=0`) so only the script loop retries (max 3 attempts). The "3 x 5 = 15" figure in the page is our arithmetic for what stacking both layers would give, shown as what to avoid.
- "Jitter" and "idempotency" advice are labeled in the lesson as general practice, not from the docs.
