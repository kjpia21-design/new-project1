# agents/08 조사 노트 (딥 리서치 에이전트 비교)

확인일 2026-11-02. 한 페이지씩 기본 curl(-L)로 열람. 차단 우회 없음.

## 열람한 공식 페이지
- https://support.claude.com/en/articles/11088861-use-research-on-claude (200)
- https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research (200, 2026-06-02 표기)
- https://support.google.com/gemini/answer/15719111 (200)
- https://learn.chatgpt.com/docs/web-search.md (200), https://learn.chatgpt.com/docs/browser.md (200, 참고), https://learn.chatgpt.com/docs/llms.txt (200, 색인)
- 사이트 내: claude/c10-research, chat/22-ai-search (중복 회피용 링크)

## 확인한 사실
- Claude Research: 유료 플랜(Pro/Max/Ultra/Team/Enterprise), 웹·Desktop·Mobile. 웹 검색 켜야 함. + 버튼 > Research, 파란 표시. 커넥터(Google Workspace 등) 자동 사용; Mobile에서 시작하면 커넥터 없이 웹만(오류 없음); 로컬 MCP 불가. 일반 대화와 같은 한도지만 더 빨리 소진 가능. Opus 5.5 사용, 필요시 Opus 4.8, 선택 모델 무관. Team/Enterprise에서 두 모델 모두 꺼지면 작동 안 함.
- Claude 안내: Research는 5회 이상 도구 호출, 1~3분, 인용 포함 긴 보고서. 웹 검색은 단순 사실 질문.
- Gemini Deep Research: 18세 이상, 로그인. Google 검색 기본 출처, Gmail/Drive(Workspace 연결 필요), 파일, NotebookLM. 계획 생성 > Edit plan > Start research. 보통 5~10분. 일일/동시 요청 한도 존재, Pro/Ultra는 더 높음(숫자 없음). Ultra는 시각 자료(Workspace 출처 포함 시 불가). Keep Activity 켜야 지난 보고서 열람. 공유/Docs 내보내기/복사.
- ChatGPT(learn.chatgpt.com web-search): Work에서 deep research(웹: + 메뉴, 데스크톱: Deep research 플러그인). 계정·워크스페이스에 따라 가능 여부 다름. 보고서·출처 검토, 후속 질문. 웹 결과는 신뢰하지 않는 입력.

## 확인하지 못한 것
- ChatGPT deep research의 플랜별 제공·사용 한도·소요 시간, 계획 편집 단계 유무: help.openai.com/en/articles/10500283-deep-research 와 openai.com/index/introducing-deep-research/ 가 403(JavaScript/쿠키 요구 차단 페이지)이라 열람 못함. learn.chatgpt.com/docs/deep-research는 404.
- Gemini 일일 한도 숫자(별도 한도 페이지 미열람).
- Claude 보고서 실제 소요 시간 외 세부, Claude/ChatGPT의 계획 편집 단계(열람 페이지에 서술 없음).
- 직접 실행한 시험 없음(본문에 명시).
