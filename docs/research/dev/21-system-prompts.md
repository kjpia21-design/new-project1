# dev/21 system prompts research note (2026-11-04)

Pages opened one at a time with plain `curl -sL <url>.md` (default options, `-L` only). Both returned HTTP 200.

## Official URLs opened
- https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/system-prompts.md (tried first; curl -L ended on the Prompting best practices page, so there is no separate system-prompts page now)
- https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices (the page reached)
- https://platform.claude.com/docs/en/api/messages (system parameter only; grepped, very large page)

## Facts confirmed
- `system`: optional string or array of TextBlockParam (`type: "text"`, `text`, optional `cache_control`); described as context and instructions such as a goal or role; links to the "Give Claude a role" section.
- Role: setting a role in the system prompt focuses behavior and tone; even a single sentence helps; docs example uses `claude-opus-5-5`, Python SDK `system=` form.
- Be clear and direct; "brilliant but new employee"; colleague test; specific format/constraints; sequential steps; ask explicitly for "above and beyond".
- Add context/motivation (text-to-speech ellipses example).
- Examples: relevant, diverse, structured (`<example>`, `<examples>`); 3-5 recommended; can ask Claude to evaluate or generate examples.
- XML tags: consistent descriptive names, nesting; `<instructions>`, `<context>`, `<input>` named.
- Format control: say what to do; XML indicators; match prompt style to output; detailed sample block for minimizing markdown.
- Long context: data at top (20k+ tokens), query at end can improve quality up to 30 percent in tests; `<document>` structure.
- Prefill on last assistant turn unsupported from Claude 4.6 models (400); migrate to structured outputs / system prompt instruction "Respond directly without preamble".
- Opus 4.5/4.6 more responsive to system prompt; soften "CRITICAL: You MUST".
- Opus 5 default responses longer; effort does not reliably change visible length.
- Models overview on the page lists Claude Opus 5.5 among current models; example model ID `claude-opus-5-5` from the page's code samples.

## Not confirmed
- Real API behavior: no API key, no `anthropic` package; no request sent; sample output unknown.
- Any hard system prompt length limit: not read.
- Per-model prompting pages (Opus 5.5, Sonnet 5.5, etc.): not opened.
- Whether the Opus 4.5/4.6 overtriggering advice holds for newer models: not confirmed.
- Whether system prompts can be extracted by users: general advice only, not from docs.
- Structured outputs page and caching page not reopened (covered by dev/13 and dev/19 notes).

## Code check
- `python3 -I -m py_compile` passed on the sample script. Not run against the API.
