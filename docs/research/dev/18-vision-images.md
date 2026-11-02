# dev/18 vision and PDF research note (2026-11-02)

Each page opened one at a time with plain `curl -s -o <file> <url>.md` (default options, no header changes). Both returned content (HTTP status not printed separately; bodies were the full pages).

## Official URLs opened
- https://platform.claude.com/docs/en/build-with-claude/vision
- https://platform.claude.com/docs/en/build-with-claude/pdf-support

## Facts confirmed
- vision: `image` blocks, three sources (base64, url, Files API `file_id`); Bedrock and Google-managed Google Cloud base64 only. Images before text recommended. Multiple images: label each ("Image 1:"), earlier-turn images stay accessible. Limits: 20 per message on claude.ai; API 100 (200k-context models) / 600 others; 8000x8000 px; >20 images triggers stricter per-image dimension limit (keep <=3,000 px per side or <=20 image/document blocks; counts resent and tool_result images); per image 10 MB base64 (API, Google-managed GCP), 5 MB Bedrock, 10 MB claude.ai; request size 128 MB first-party API. Formats JPEG/PNG/GIF/WebP, GIF first frame only. Tokens: ceil(w/28) x ceil(h/28); tiers: Claude 4.7+ 2,576 px / 4,784 tokens, others 1,568 px / 1,568; size table (1000x1000 = 1,296 both; 1920x1080 = 1,560 std / 2,691 high); price examples (Opus 5.5 $4/M input). Quality guidance, limitations (people, accuracy <200 px, spatial, counting, AI-generated, medical), FAQ (no metadata, ephemeral, not used for training, no generation).
- pdf-support: three sources (url, base64, file_id); 128 MB request, 600 pages (100 if context under 1M tokens), standard PDF without password/encryption; both limits on whole payload; dense PDFs may hit context first; each page = image + extracted text; ~1,500-3,000 text tokens/page, no extra PDF fee, plus image cost; token counting recommended; tips (PDF before text, logical page numbers, caching, batches); binary formats (.xlsx/.docx) not allowed in document blocks; ZDR eligible (excludes Covered Models), HIPAA eligible for inline Messages API, not Files API.
- Examples use model `claude-opus-5-5`.

## Not confirmed
- Whether "MB" means 10^6 or 2^20 bytes (script uses conservative 10,000,000).
- Exact resize rule (vision-coordinates page not opened); `transformations` / `oversized_image` details.
- Whether the token counting endpoint accepts image/document blocks (token counting page not reopened).
- URL-source fetching restrictions (private/login URLs); not stated in the pages read.
- Current prices (pricing page not opened; only the examples on the Vision page, no price table in the tutorial).
- Any real API behavior: no API key and no `anthropic` package here; no real request sent. The docs' PDF examples import an `httpx2` module (odd); the tutorial script reads local files instead.

## Code check
- `python3 -I -m py_compile` passed. Ran build_block/main against a local stub of `anthropic` with a 1x1 PNG and a fake PDF: blocks were text label, image, text label, document, text question; `visual_tokens` gave 1296 / 1521 / 64 for 1000 / 1092 / 200 px squares, matching the docs' table. Does not test the real API.
