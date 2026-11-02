# dev/15 streaming research note (2026-11-02)

Opened one page with `curl -sL -m 60 <url>.md` (the first request also fetched the HTML version by mistake; it was discarded unread).

## Official URL opened
- https://platform.claude.com/docs/en/build-with-claude/streaming

## Facts confirmed
- `"stream": true` streams a Message via server-sent events. SDKs: Python `client.messages.stream(...)` with `stream.text_stream`; TypeScript `.stream(...).on("text")`; also C#, Go, Java, PHP (`createStream()`), Ruby, and `ant messages create --stream`.
- `stream.get_final_message()` (TS `finalMessage()`, Ruby `accumulated_message`, etc.) returns the full Message; useful for large `max_tokens`, where the SDK requires streaming to avoid HTTP timeouts.
- Event flow: message_start; per block content_block_start, content_block_delta(s), content_block_stop (index matches final content array); message_delta(s); message_stop. `ping` anywhere. `message_delta.usage` is cumulative. Fallback `fallback` content block and `input_transformations` (beta header) are mentioned; not covered in the tutorial.
- Errors can arrive in-stream (`event: error`, e.g. overloaded_error, normally HTTP 529 when not streaming). Unknown new event types must be handled gracefully.
- Delta types: text_delta, input_json_delta (partial JSON; parse after content_block_stop or use SDK helpers; Python/TS helpers expose parsed input incrementally), thinking_delta, signature_delta (just before content_block_stop). `display: "omitted"` -> empty thinking_delta + one signature_delta; `display: "updates"` is beta.
- Current models emit one complete key/value of tool input at a time, so delays are possible. Fine-grained tool streaming via `eager_input_streaming` (separate page, not opened).
- Error recovery: Claude 4.5 and earlier: partial response as assistant message; 4.6 and later: user message with partial response + continue instruction (sample prompt quoted). Tool use and thinking blocks cannot be partially recovered.
- Availability: every model; Claude API and listed cloud platforms; older Bedrock InvokeModel integration does not stream plain SSE.

## Not confirmed
- Proxy/web-server buffering behavior (not in docs; tutorial says to test).
- Fine-grained tool streaming details, Thinking page details, refusals/fallback behavior (linked pages not opened).
- Real API behavior: no API key and no `anthropic` package here.

## Code check
- `python3 -I -m py_compile` passed for the SSE assemble parser and the basic SDK example.
- The parser was run on a shortened copy of the docs' tool-use sample: stop_reason `tool_use`, input {"location": "San Francisco, CA"}. No live stream and no server_tool_use blocks.
