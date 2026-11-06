# Basics 21: Switching AI services (2026-11-05)

Read with plain curl, one page at a time:
- https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude (dateModified 2026-11-02): memory import on Free/Pro/Max/Ultra/Team/Enterprise, web and Claude Desktop; Settings > Your Claude > Start import (older: Settings > Memory; legacy: Settings > Capabilities); recommended migration prompt (single code block, "[date saved, if available] - memory content"); "Add to memory"; can be customized to exclude sensitive info; Claude focuses on work topics and may not keep unrelated personal details; imports experimental; export memory via Manage next to Your memory or ask "Write out your memories of me verbatim".
- https://support.claude.com/en/articles/9450526-how-can-i-export-my-claude-data: Free/Pro/Max/Ultra individual; Settings > Privacy > Export data; web or Desktop only, not iOS/Android; emailed link expires 24 h; Team/Enterprise need owner setting; exported data cannot be imported into another personal Claude account.
- https://support.google.com/gemini/answer/16868299 (via link from 16275805): import memory (gemini.google.com > Settings > Import memory to Gemini > copy prompt > paste > Add memory); import chats via .zip (5 GB, 5 files/day, may take up to a day) exported from ChatGPT (Settings > Data controls > Export data) or Claude (Settings > Privacy > Export); personal Google Account only, 18+; not in EEA, Switzerland, UK; not Gemini in Messages/Chrome/Android XR; imported chats can be deleted singly or per import; re-upload overwrites.
- https://support.google.com/gemini/answer/16920332: Google Takeout for Gemini; email link active 7 days; Takeout does not delete activity.
- https://learn.chatgpt.com/docs/import.md and /llms.txt, /docs/llms-full.txt, /docs/customization/memories.md: import is for Claude Code / Claude Cowork / Cursor setup and recent work into the ChatGPT desktop app or Codex CLI (coding agents); Codex CLI imports up to 50 chats from last 30 days; memories page covers Settings > Personalization.

Unconfirmed:
- help.openai.com (export, memory) returned 403; ChatGPT consumer export/memory-import steps not confirmed from an OpenAI page (only Google's description of the export path).
- Whether Claude can import chats from other services (none found); whether Gemini can export its memory; Gemini import on non-web surfaces; plan limits for Gemini import beyond the stated conditions.
- No import/export was tested with a real account.
