# media/34 Google video generation (P1, 2026-11-01)
- support.google.com/gemini/answer/16126339: "Gemini Omni" video model; personal account needs Google AI plan; work/school needs qualifying Workspace license; not available under 18; Sidebar > Create video; templates; up to 1 video + 5 images; default landscape, aspect ratio choice; ask for audio; multi-turn edit; share to YouTube/download; video upload for edits not in EEA/CH/UK/some US states; ToS/Prohibited Use Policy, need rights to uploads; videos may be removed.
- gemini.google/overview/video-generation/: Omni replaces Veo in the Gemini app; "Gemini Omni 1.1 Flash"; 10 second videos, native audio, photos (up to 5), scene extensions, video-to-video editing, avatar; AI subscription required, features vary by tier/geography, 18+; all videos embedded with SynthID; verification of files.
- gemini/answer/16275805: limits refresh every 5h until weekly limit; Plus 2x, Pro 4x, Ultra 5x/20x of Pro; video = High usage; age 13+ (18+ EEA/CH/UK). Region lists include South Korea for AI Plus and Pro/Ultra (not used in text).
- support.google.com/flow/answer/16353333: Flow requires age verified 18+, supported region, Plus/Pro/Ultra (Workspace plans get 50 daily credits); Chromium browser recommended; credits deducted at start, returned within an hour if failed/safety filter; SynthID on Veo/Omni/Nano Banana outputs; visible watermark toggle; automatic in India, South Korea, Vietnam unless Ultra 20x; VPN doesn't help.
- flow/answer/16526234: 50 daily credits for all; Plus +200/mo, Pro +1,000, Ultra $100 +10,000, Ultra $200 +25,000; peak hours ~2-5 PM UTC non-subscribers may not generate video.
- gemini/answer/16722517: verify AI content (SynthID, Content Credentials); one file, <=100 MB, video <90 s.
- NOT confirmed: whether Korea is in Flow's supported-region list (list page not opened); exact Flow clip length limits; Gemini mobile video steps; I did not run the tools.
- Note: media/13 still says Veo; new tutorial adds a note that Omni replaced it. Not edited (out of scope).

## Recheck 2026-11-01 (for media/13)
- Re-fetched with curl: gemini.google/overview/video-generation/, support.google.com/gemini/answer/16126339, /16275805, /16722517, gemini.google/subscriptions/. Findings match the notes above: Omni "will replace Veo in the Gemini app"; 10 second videos; SynthID only (no visible-watermark statement on Gemini pages; visible mark is a Flow-only statement); limits 2x/4x/5x-or-20x; video = High usage; plans $4.99 / $19.99 / $99.99 (5x) / $199.99 (20x).
- Subscriptions page is inconsistent: FAQ still says Pro gets limited trial of Veo 3.1 Lite and Ultra gets Veo 3.1; plan cards say Flow credits with Gemini Omni Flash. Per-plan model in the Gemini app not confirmed.
- NOT confirmed: which plans include video generation (feature table is icons only); max total length with scene extensions.
- media/13 (EN/KO) updated accordingly and now links here.
