# 38. 메일함 정리 AI — Gmail Gemini·Outlook Copilot·Claude 커넥터 (2026-10-15 조사, L2)

방법: curl로 공식 페이지를 한 번에 한 장씩 열람. WebSearch는 URL 탐색용(요약은 근거로 쓰지 않음).

## 확인한 출처와 사실
### Gmail (Gemini)
- https://support.google.com/mail/answer/16561387 (Catch up on email threads with AI Overview conversation summaries): 스레드 상단 AI Overview, 마감일 있는 업무는 Remind me로 미리 알림. 계정: 업무·학교·개인 Google 계정 모두(전 세계 Gmail 사용자). 지원 언어 제한. Gmail 설정에서 스마트 기능(Smart features in Gmail, Chat, and Meet / in Google Workspace)을 켜야 하고, 끄면 AI 작성·교정 등도 함께 꺼짐. 컴퓨터에서 스레드 상단 "Summarize this email". 부정확 시 Bad suggestion. 의학·법률·금융 조언으로 의존하지 말라는 안내.
- https://support.google.com/mail/answer/14199860 (Collaborate with Gemini in Gmail): 우측 상단 Ask Gemini 사이드 패널. 요약, 초안, 정리(여러 메일 삭제·라벨 추가를 요청), 검색, 일정 제안. 적격 Workspace 또는 Google AI 요금제 필요. 개인 계정용 Google Workspace Experiments 프로그램에서도 제공.
- https://support.google.com/mail/answer/13955415 (Draft emails with Gemini in Gmail): "Help me write". 적격 Workspace/Google AI 요금제는 여러 지원 언어로 전 세계, 개인 Google 계정은 미국만. Compose에서 프롬프트 입력 후 Create; 다듬기 Formalize/Friendly/Shorten; 다른 이메일·Drive 파일에서 정보를 가져와 개인화(Sources로 확인).
- https://support.google.com/mail/answer/14925782 (Supported languages): AI Overview 대화 요약 언어 목록에 Korean, 사이드 패널 Korean(Gems 지원 표시), Help me write 목록(English, French, German, Italian, Japanese, Korean, Portuguese, Spanish)에 Korean. 개인 계정은 Help me write가 미국만.
### Outlook (Copilot)
- https://support.microsoft.com/en-us/outlook/welcome-to-copilot-in-outlook: 새 메일 > Copilot 아이콘 > Draft(새 Outlook)/Draft with Copilot(클래식) > 프롬프트 > Generate; 길이·톤 조절, Retry. 스레드 요약(Summary by Copilot/Summarize), Schedule with Copilot. 적용 대상 Outlook for Microsoft 365, 새 Outlook, Mac, Android, iOS. (스레드 요약·Schedule 세부는 docs/research/automation/24-m365-copilot.md의 2026-10-14 열람 내용과 동일.)
- 한국어: https://support.microsoft.com/en-us/microsoft-365-copilot/supported-languages-for-microsoft-365-copilot (Last updated September 2026) 목록에 Korean 포함. Copilot 라이선스·플랜 구분은 24편 노트(Microsoft Learn 개요) 참조.
### Claude
- https://support.claude.com/en/articles/10166901-use-google-workspace-connectors: Gmail 커넥터 — 자연어 검색·읽기, 초안, 전송·답장·전달(기본적으로 매번 승인), 첨부 파일 메타데이터(첨부 내용은 아님), 라벨·스레드 관리, 초안 목록. Team/Enterprise는 Owner가 먼저 활성화. 모든 사용자(Claude 및 Claude Desktop).
- https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector: Microsoft 365 커넥터로 SharePoint·OneDrive·Outlook·Teams 검색. 쓰기 도구를 켜면 메일 전송·일정·파일·Teams 메시지 가능(관리자 설정). 모든 Claude 플랜(Free, Pro, Max, Team, Enterprise)에서 제공. Microsoft Entra 테넌트(Microsoft Business 플랜)가 필요하고 @outlook.com·@hotmail.com 같은 개인 Microsoft 계정은 연결 불가. Entra 전역 관리자 동의 필요.
- 사이트 내 기존: claude/c07-connectors(Gmail 커넥터 설명 일치).

## 확인하지 못한 것
- Gmail Gemini의 한국어 라벨 자동 분류 정확도, "AI Inbox" 기능(목록 제목만 봄, 원문 미열람이라 본문 미기재), Suggested Replies 원문(미열람).
- Gemini 기능이 포함되는 구체 Google Workspace/Google AI 요금제 이름과 가격.
- Outlook Copilot의 우선순위 메일함/분류 기능, 가격(24편과 동일하게 미확인).
- Claude의 Outlook 단독 사용자용 연결 단계 문서(Connect Claude to Microsoft 365)는 열지 않음.
