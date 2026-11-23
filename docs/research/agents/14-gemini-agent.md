# Google Gemini 에이전트 조사 노트 (기준일: 2026-11-23)

대상: Google이 Gemini 앱에서 제공하는 에이전트 기능. 공식 이름은 **"Tasks in Gemini"(Gemini의 태스크)**. 도움말 문서에서는 "tasks in Gemini", "Assign Gemini tasks", "task mode"(한국어 도움말: "작업", "작업 모드")라고 부른다. "Gemini Agent"라는 이름은 이번에 연 공식 페이지 본문에서 찾지 못했다(예전 이름과의 관계는 [미확인]).

## 접근 결과
- support.google.com/gemini/answer/16596215 : 200, 열람 성공 (answer/17094507과 같은 문서, 본문 동일).
- support.google.com/gemini/answer/17094507 (+ `?co=GENIE.Platform=Android`, `?hl=ko`): 열람 성공. 한국어판 도움말("Gemini 앱에서 작업 및 워크플로 관리하기") 존재.
- support.google.com/gemini/answer/17094710 (일정), 17208717 (Mac 앱), 18789153 (원격 컴퓨터): 열람 성공.
- **support.google.com/gemini/answer/13575153 (Gemini 웹 앱 지원 국가·언어): 봇 차단 안내(CAPTCHA, "unusual traffic")로 열람 못 함. 우회하지 않음.** 지원 언어 목록은 확인하지 못함.
- gemini.google/overview/agent/ : 200 (영어 "Tasks in Gemini" 소개 페이지). gemini.google/kr/overview/agent/?hl=ko 는 `/kr/overview/productivity/?hl=ko`로 리다이렉트되어 한국어 소개 페이지("Gemini의 태스크") 열람 성공.
- gemini.google/subscriptions/ : 200 (미국 기준 요금).
- blog.google/products/gemini/gemini-agent/ : 404 (존재하지 않는 주소 추측이었음). 다른 blog.google 글은 찾지 않았다.

## 사실 (공식 문장, 인용은 영어 원문)
### 이름·성격
- "You can now start tasks in the same place you start a chat. Assign Gemini tasks to automate complex workflows and manage schedules for ongoing tasks." (support 16596215)
- 소개 페이지: "Tasks in Gemini ... making it a true AI agent rather than just a conversational tool." / "Tasks in Gemini are now accessible directly from the main Gemini chat. Simply flip the toggle from 'Chat' to 'Tasks'."
- 한국어 소개 페이지는 "Gemini의 태스크"로 표기, 도움말은 "작업"/"작업 모드".
- 베타 표기: 도움말 "Gemini's ability to handle tasks is experimental." ("베타"라는 단어는 못 봄). 구독 페이지: Ultra에 "first access to advanced features like Tasks in Gemini (in select countries)".

### 조건·지역·플랜
- "Be 18 or over. Sign in to the Gemini app with a personal Google Account. For now, this feature isn't available if you sign in with a work or school Google Account. Have History on."
- "Available without a Google AI subscription in Australia, Canada, India, Japan, South Korea, and the US."
- "Available with a Google AI Pro or Ultra subscription everywhere else Gemini Apps are supported, except in the European Economic Area, Nigeria, Switzerland, and the United Kingdom."
- "Only available in the Gemini mobile app, the Gemini app on Mac, and the Gemini web app at gemini.google.com."
- 한국어 도움말: "대한민국, 미국, 오스트레일리아, 인도, 일본, 캐나다에서는 Google AI 구독 없이도 사용할 수 있습니다." → **한국 제공 확인(공식)**.
- 한국어 소개 페이지: "Gemini의 태스크는 대한민국, 미국, 오스트레일리아, 인도, 일본, 캐나다의 만 18세 이상 사용자 및 일부 국가의 Pro/Ultra 사용자에게 무료로 제공됩니다."
- 영어 소개 페이지: "available free of charge for 18+ users in the United States, Canada, Australia, India, Japan, and Korea, and for Pro/Ultra users in select countries."
- 일정(schedule) 차이 (17094710): Pro/Ultra는 시간 기반·Gmail 모니터·주제 모니터 3종. 구독 없음 또는 Google AI Plus는 "up to once a day during a general time window: overnight, daytime, or evening".
- 요금(gemini.google/subscriptions, 미국 페이지): Free $0, Google AI Plus $4.99/월, Google AI Pro $19.99/월 (미국 달러, 한국 가격은 확인 못 함).

### 한국어
- 한국어 도움말·한국어 소개 페이지가 존재하고 태스크 기능을 설명한다. 그러나 **태스크 기능이 한국어 대화/지시를 얼마나 잘 처리하는지**, 공식 지원 언어 목록(13575153)은 확인하지 못함 [미확인]. (기존 06편 조사 노트에는 13575153의 요약 열람에서 Korean이 목록에 있다고 적혀 있음 — 이번에는 차단되어 재확인 못 함.)

### 사용 기기
- 웹(gemini.google.com), Gemini 모바일 앱, Mac용 Gemini 앱. 도움말에 Android/iOS/컴퓨터 버전 있음(Android 버전만 열람). Windows 데스크톱 앱은 언급 없음. "Currently, Chrome auto browse is only available on desktop."

### 시작 방법
- "On your computer, go to gemini.google.com. On a Mac, you can also open the Gemini app. Below the text box, click Task. In the text box, describe the task..." 모바일: "Above the text box, tap Task".
- "You can get help with setting up your first skills and tasks conversationally. Just enter 'set up,' 'get started,' or 'interview me' in a task."
- 작업 모드 켜기/끄기: 설정 > Task settings > "Use task mode to hand off work" (Mac 앱: Gemini > Settings > Tasks).

### 연결 앱·권한
- "Gemini can use some Connected Apps and certain Google services": 연락처, Gemini Notebook, Google Pay·Wallet, Google Photos, Google Workspace(Calendar, Docs, Drive, Gmail, Keep, Sheets, Slides, Tasks), Google Search 서비스(Search, Finance, Flights, Hotels, Maps), YouTube, 여러 서드파티 앱, 맞춤 앱.
- 소개 페이지: "These connections are turned off by default" (설정 또는 맞춤설정 페이지에서 켬), "50+ third-party apps like OpenTable and Instacart".
- 브라우저: "Gemini can connect to the local Chrome browser on your desktop or use a separate remote browser in the cloud." 로컬: "Gemini has access to all the same sites that you do, including sites you're signed into." 처음 연결 시 Chrome이 권한을 물음, 이후 "for every task that involves web browsing, Gemini will ask for confirmation first."
- Mac 앱: 연결한 폴더만 볼 수 있음. 컴퓨터 파일 작업 시 임시 백업 파일을 만들고 "deleted when you start a new query or task, or after 24 hours". "Gemini can be used to permanently delete files ... Gemini is designed to ask your permission before taking these actions."

### 확인·안전
- "Even if you update your permission preferences, very sensitive actions require your permission each time ... Sending communications, deleting your data, sharing sensitive info, making purchases, completing financial transactions, and filling out and submitting web forms. Signing in to websites using Sign in with Google or Google Password Manager."
- "Gemini pauses and asks for your permission before it shares info you may find sensitive, such as your health information, financial details, or government ID numbers."
- "Do not enter sign-in info, payment details, or info you may find sensitive directly into the task thread."
- "If a schedule runs when you are offline, you may not be able to stop Gemini from completing an unintended action."
- 프롬프트 주입 경고, 사이트·행동 제한, "Take control" 모드, 계획·진행 표시.
- "Your active supervision is the most important way to protect against risk."

### 데이터
- 원격 브라우저: 로그인 쿠키 등 브라우저 데이터가 저장되며 "automatically deletes ... after a set period of inactivity or until you manually delete it"; 설정 > Browser > Delete remote browser data. 원격 코드 실행 데이터는 Task settings에서 삭제.
- 작업 모드를 끄면 원격 브라우저·코드 실행 데이터가 삭제되고 일정은 멈춤(작업·스레드·파일은 유지).
- 연결된 앱 정보가 웹사이트와 공유될 수 있음("Gemini can share your info with websites").
- 모델 학습·활동 기록 보관 기간 문장은 이번에 열람한 태스크 페이지에는 없었음 [미확인].

### 한도
- "Gemini Apps have compute-based usage limits ... These usage limits increase with higher Google AI subscriptions."
- "You can have up to 15 tasks running at a given time ... a schedule will not run if there are already 15 tasks running."
- 만들 수 있는 파일: .pdf, .docx, .xlsx, .pptx, .csv 등 + Google 문서·프레젠테이션·스프레드시트.

## 확인하지 못한 것
- 태스크 기능 지원 언어(한국어 처리 수준), 13575153 차단.
- "Gemini Agent"/"Agent Mode"(구독 페이지에 Ultra "Agent Mode" 문구 있음)와 태스크 기능의 정확한 관계.
- 한국 원화 가격, 학습 데이터 사용 여부, 활동 기록 보관 기간(태스크 전용 문장).
- blog.google 출시 글(이번에 못 찾음).
