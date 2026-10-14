# 21. NotebookLM으로 내 자료 기반 공부·정리하기

조사일 2026-10-14. 한 페이지씩 curl로 열어 확인. 스펙의 출처 경로 support.google.com/notebooklm은 support.google.com/gemininotebook으로 이동(redirect)했다.

## 가장 중요한 발견: 이름
- 공식 도움말 센터 제목과 본문이 모두 "Gemini Notebook"으로 표기된다. 주소의 /notebooklm/은 /gemininotebook/으로 넘어간다. 도움말 안에서 "NotebookLM"이라는 단어는 쓰이지 않는다.
- 챗 설정 안내에 접속 주소 notebook.google.com이 나온다(확인함).
- 이름이 바뀐 시점, 이전 이름과의 공식 관계 설명은 열어 본 페이지에서 확인하지 못했다. 본문에는 "공식 도움말은 지금 Gemini Notebook으로 표기, 이 사이트는 알려진 이름 NotebookLM을 같이 적는다"로 처리.

## 확인한 사실
- 정의/가능한 일: AI 연구 보조. PDF·웹사이트·YouTube·오디오·Google Docs/Slides 업로드, 출처 기반 답변과 인라인 인용, 스터디 가이드·브리핑·오디오 개요·마인드맵 등으로 변환. (출처 16164461)
- 80+ 언어. 웹 브라우저에서 지원 국가·지역의 동의 연령 이상 사용자에게 제공. 지원 국가 목록에 South Korea 포함. 개인 Google 계정 또는 업무·학교 계정(업무·학교 계정은 관리자가 켜야 함). (출처 16164461)
- 데이터: 피드백을 제공하지 않는 한 모델 학습에 쓰이지 않는다고 안내. Workspace 사용자의 업로드·질의·응답은 사람이 검토하지 않고 학습에 쓰지 않는다고 안내. 답변 못 하는 이유(안전 플래그, 불명확한 질문, 소스에 없는 정보). (출처 16164461)
- 노트북 만들기: Create new notebook > Upload a source. Chat 패널(소스 요약 자동 생성)과 Studio 패널(노트, 오디오 개요, 비디오 개요, 마인드맵, 보고서, 데이터 표, 플래시카드/퀴즈, 슬라이드, 인포그래픽). 노트북은 서로 독립이며 여러 노트북을 한꺼번에 볼 수 없음. 5개 이상 소스면 자동 라벨. 보고서는 Docs로, 표는 Sheets로 내보내기. 내보낸 파일은 원본과 동기화되지 않음. 공유: Viewer/Editor, 개인 Gmail은 최대 50명. 복사본 만들기 시 소스와 Studio 콘텐츠는 복사, 채팅 기록·노트는 복사 안 됨. (출처 16206563)
- 소스 종류/제한: 오디오, 붙여넣은 텍스트, Docs, Slides(100장까지), Sheets(100k 토큰 제한), 이미지, docx/txt/md/pdf/csv/pptx, 노트, Play Books, 웹 URL, ePub, 공개 YouTube URL. 소스 하나당 500,000단어 또는 업로드 파일 200MB. Free 사용자 최대 50개 소스(노트북당인지는 문구상 불명확). Drive 소스는 몇 분마다 자동 동기화. 웹 URL은 텍스트만, 유료 구독 벽 페이지 미지원. YouTube는 자막 있는 공개 영상만(자막 텍스트만 가져옴), 업로드 72시간 이내 영상은 불가할 수 있음. 오디오 파일은 가져올 때 받아쓰기됨. 질문을 구체적으로, 소스 이름을 언급하면 좋음. (출처 16215270)
- 채팅: 소스에서 직접 인용, 인용에 마우스를 올리면 전체 인용문, 누르면 원문 위치. 채팅 답은 소스의 데이터만 사용(창작 과제는 "답할 수 없음"이 나올 수 있음). Configure Chat에서 대화 스타일 Default / Learning Guide / Custom, 응답 길이 선택. Save to note. 채팅 기록은 본인에게만 비공개. 에이전트 기능(웹 검색, 코드 실행, 파일 생성)은 실험적이며 검수 필요. (출처 16179559)
- 사용량: 연산량 기반 한도, 5시간마다 갱신, 주간 한도. 무료는 표준 한도, AI Plus 2배, AI Pro 4배, AI Ultra는 AI Pro의 5배 또는 20배. Settings > Usage에서 확인. 한도 소진 시 Generate later(웹 전용). 한도는 바뀔 수 있음. (출처 17670842)
- 오디오 개요: Studio > Audio Overview. 형식 Deep Dive(기본)/Brief/Critique/Debate, 언어 선택, 길이(Shorter/Default/Longer는 영어만), 프롬프트 지정. 생성에 몇 분. AI 생성이라 부정확하거나 음성 결함이 있을 수 있음. 다운로드 가능. 대화형 모드는 영어만. 생성·삭제에는 편집 권한 필요. (출처 16212820)
- 플래시카드/퀴즈: Studio에서 선택, 연필 아이콘으로 난이도(easy/medium/hard)와 프롬프트 지정, Explain 버튼, Got it!/Missed it! 진행 기록, Only cards you missed로 재연습, CSV 다운로드. (출처 16958963)

## 확인하지 못한 것
- NotebookLM 이름과 Gemini Notebook의 공식 관계, 변경 시점.
- 한국어 UI 제공 여부는 따로 확인하지 못함(80+ 언어 지원 문구와 한국 포함 국가 목록만 확인). 도움말 언어 선택에는 한국어가 있음.
- 가격: 이 도움말에는 금액이 없음(Google AI 플랜 배율만). 원화 가격 미확인.
- 모바일 앱의 한국 제공 여부(모바일 앱은 국가 목록이 다를 수 있다고만 안내, 해당 페이지 미열람).
- 소스 개수 상한의 유료 플랜 값(Free 50개만 확인).

## 열어 본 출처 (모두 2026-10-14 확인)
- https://support.google.com/gemininotebook/answer/16164461 (Learn about Gemini Notebook; 요청은 /notebooklm/ 경로로 했고 redirect됨)
- https://support.google.com/gemininotebook/answer/16206563 (Create a notebook)
- https://support.google.com/gemininotebook/answer/16215270 (Add or discover new sources)
- https://support.google.com/gemininotebook/answer/16179559 (Use chat)
- https://support.google.com/gemininotebook/answer/17670842 (Usage limits)
- https://support.google.com/gemininotebook/answer/16212820 (Audio Overview)
- https://support.google.com/gemininotebook/answer/16958963 (Flashcards or Quizzes)
