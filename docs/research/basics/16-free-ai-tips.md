# basics 16 확인 노트 (2026-11-01)

## 확인한 공식 출처 (curl, 한 페이지씩)
- https://claude.com/pricing : Free $0, "Limited usage every 5 hours and every week". Free 포함: web/desktop/mobile 채팅, 웹 검색·파일 생성·코드 실행, 메모리, 커넥터, Artifacts, Claude Design/Slides/Docs. 비교표: Projects Up to 5 (Pro 이상 Yes), Research No, Claude Code No, Opus No, Sonnet/Haiku Yes, Incognito chats Yes, Voice Yes, Model training "Opt-out". Pro $20/월(연 결제 월 $17, $200), Max $100, Ultra $200.
- https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work : 사용량은 대화 길이·복잡도, 기능, 모델, effort에 영향. 모든 Claude 화면 합산. 유료 플랜: 5시간 세션 한도(첫 메시지부터 5시간 후 전체 리셋) + 주간 한도(계정별 고정 시각). Settings > Usage에서 확인. 긴 대화는 자동 컨텍스트 관리로 한도를 더 씀 → 새 대화 권장. 도구·커넥터는 토큰 소모 큼, 불필요하면 끄기, extended thinking 끄기, effort 낮추기, 프로젝트(RAG). 이 문서는 유료 플랜 중심이라 Free의 사용량 화면은 확인 못 함.
- https://support.claude.com/en/articles/9797557-usage-limit-best-practices : 메시지 묶기, 구체적으로, 프로젝트 콘텐츠 캐시(재사용 시 한도 덜 차지, 비활동 후 만료), 사용량에 영향 주는 요소 목록(메시지 길이, 첨부 크기, 대화 길이, Research·웹 검색, 모델, effort, 아티팩트, 여러 단계 작업).
- https://support.claude.com/en/articles/12260368-using-incognito-chats : 모든 플랜(Free 포함), 채팅 기록·메모리에 저장 안 됨, 학습에 사용 안 됨, 기본 30일 보관, 이전 대화 검색에 안 나옴, 기존 메모리 사용 안 함. 새 Claude 경험에서는 이전 채팅 경험으로 열려 파일 생성·코드 실행 불가.
- https://gemini.google/subscriptions/ (미국 표시): Free $0 with Google Account: Flash-Lite 모델, 이미지 생성·편집, Deep Research, Gemini Live, Canvas, Gems, Google Flow(제한적 Nano Banana Pro), Gemini Notebook, 15 GB 저장. AI Plus $4.99(무료의 2배 사용량), Pro $19.99(4배), Ultra $99.99/$199.99.
- https://support.google.com/gemini/answer/16275805 : 연산 기반 한도, 5시간마다 새로 채워지며 주간 한도까지, gemini.google.com 왼쪽 아래 설정 > Usage Limits에서 확인, 한도 근접·도달 시 알림과 리셋 시각. 컨텍스트 창 요금제 없음 32k / Plus 128k / Pro·Ultra 1M. 사용 비용 표(간단한 대화 매우 낮음, 긴 대화·큰 파일 중간, Deep Research·영상 높음), 새 주제는 새 대화 팁. 요금제 없는 사용자는 Deep Research 같은 기능이 수요가 많을 때 불가할 수 있음.
- https://learn.chatgpt.com/docs/pricing(.md) : ChatGPT Work와 Codex 기준 가격. Free $0, Go $8, Plus $20, Pro $100/$200/$500. Free: 데스크톱 앱 GPT-6 Luna(롤아웃). 일반 채팅 메시지 한도 숫자 없음.
- https://learn.chatgpt.com/llms-full.txt : 데스크톱 앱 새 임시 채팅 단축키 Ctrl+Shift+N / Cmd+Shift+N (ChatGPT only).

## 확인 못 함
- 무료 플랜의 구체적 메시지 수(세 서비스 모두 비공개).
- ChatGPT 무료의 일반 채팅 기능·한도, 임시 채팅 보관 기간: help.openai.com 403(우회하지 않음).
- Gemini 임시 채팅 세부는 basics/12 노트(support.google.com/gemini/answer/13594961)를 참고, 이번에 재확인 안 함.
- Claude 무료 사용자의 Settings > Usage 화면 유무.

## 겹침
- 가격표·유료 전환 판단은 basics/08, 도구 선택은 basics/11, 개인정보 설정은 basics/12 → 본문에서는 링크로 연결, 가격은 쓰지 않음(Gemini 구독 표기 최소 언급).
