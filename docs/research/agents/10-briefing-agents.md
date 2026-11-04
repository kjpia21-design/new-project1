# Agents 10 — Briefing agents (research note, 2026-11-04)

Pages fetched one at a time with plain curl -L (all HTTP 200), text extracted locally:
- https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
- https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
- https://learn.chatgpt.com/docs/dots/tasks-and-memory
- https://learn.chatgpt.com/docs/dots/controls
- https://support.google.com/gemini/answer/16596215

## Confirmed
- Cowork: "describe the task you want Claude to complete", then "Review Claude's approach, then let it run"; steering mid-task; global instructions (tone, output format, role) and folder instructions; safety guide: watch for unexpected files/sites and scope creep, dedicated working folder, backups, Manually approve for hard-to-undo actions, scheduled tasks start simple / avoid sensitive and consequential actions / review each run; Claude always asks before permanent deletion.
- Dots: "Describe the result you need and the sources it should use"; can add more specific instructions; tell it which results deserve an update and which decisions need input; recurring tasks need what/when (time zone, end date)/notification/delivery, and ask it to confirm what was saved; completed run does not confirm result; stopping does not undo completed actions.
- Gemini: "Tell Gemini your specific goals and when you want tasks completed"; add instructions mid-task; avoid sensitive tasks/schedules; offline schedule may not be stoppable; some tasks require confirmation.

## Unconfirmed
- No official page found that prescribes a brief template; the five-part template is this site's recommendation.
- Claude in Chrome tips page was not fetched in this pass (not needed; Cowork pages cover the point).
- Exact UI labels may differ by plan/rollout; the Cowork pages mention a "new Claude experience" merging Chat and Cowork, so steps may look different.
- Did not link to agents/09 (written in parallel by C1).
