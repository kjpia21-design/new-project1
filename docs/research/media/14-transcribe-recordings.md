# 14. 녹음 → 텍스트 정리 — 2026-10-10 기준

> 5단계 원문 대조(2026-10-10): NAVER WORKS, Google 페이지는 curl로 원문 확인. OpenAI는 403. 개인용 clovanote.naver.com은 JS 렌더링 페이지로 본문을 얻지 못했고 help.naver.com 서비스 도움말은 로그인/동적 페이지라 클로바노트 항목을 얻지 못했다.

## 핵심 사실
- 클로바노트(NAVER WORKS 버전 도움말): 회의를 녹음하거나 기존 녹음 파일을 업로드해 노트를 만들 수 있다. 업로드·변환에는 네트워크 필요. AI가 전체 요약, 회의 주제, 다음 단계, 문단별 하이라이트를 자동 추출. 인식 언어: 한국어, 영어, 일본어, 중국어 간체·번체, 한국어+영어, 한국어+일본어. (검색 요약) https://help.worksmobile.com/en/use-guides/clovanote/overview/ , https://help.worksmobile.com/en/use-guides/clovanote/settings/language/
- 업로드 제한(검색 요약): 녹음·업로드 길이 180분, PC 웹 m4a/mp3/aac/wav 최대 300MB, iOS는 m4a/mp3/aac계/amr/wav. 한 번에 여러 파일 가능하나 100개 초과 비권장. 화면 표기가 다르므로 공식 확인 필요. https://help.worksmobile.com/en/use-guides/clovanote/create/note/
- 변환 시간(쿼터)은 월 단위, 이월되지 않고 변환 시작 시 차감. 소진 시 녹음은 저장되나 변환 안 됨. (검색 요약) 위 동일
- 노트의 텍스트·오디오·메모 다운로드 가능, 관리자가 다운로드를 제한할 수 있다. (검색 요약) https://help.worksmobile.com/en/use-guides/clovanote/view/file-download/
- 개별 소비자용 클로바노트(clovanote.naver.com)의 한국어 공식 도움말은 도메인 접근 제한으로 확인 못 함. 일본어 자료에 서비스 단계적 종료 언급이 있다는 요약이 있으나 비공식/미확인 → 본문에서 "현재 제공 상태를 공식 페이지에서 확인"으로 처리.
- ChatGPT Record: Plus·Pro·Business·Enterprise·Edu, macOS 데스크톱 앱 전용, 세션 최대 4시간(240분). 관리자가 끌 수 있고 Enterprise/Edu는 기본 비활성. 최신 통합 앱에서 사라졌다는 커뮤니티 보고가 있고 Meetings 플러그인(macOS Pro/Business 베타)이 있다. 공식 문서만으로는 현재 상태 불명확. (검색 요약) https://help.openai.com/en/articles/11487532-chatgpt-record , https://help.openai.com/en/articles/20001546-the-meetings-plugin-in-chatgpt
- Gemini 앱 파일 업로드: 모바일 도움말은 오디오 총 길이 10분(AI Pro/Ultra는 3시간), 데스크톱 도움말은 오디오·영상 불가로 상충. 현재 규칙은 공식 페이지 확인. (검색 요약) https://support.google.com/gemini/answer/14903178
- Pixel 녹음기(Recorder): 재변환 언어에 한국어(대한민국) 포함, 온디바이스 변환은 오디오가 기기를 떠나지 않으나 재변환은 Google 서버에서 처리될 수 있음. 화자 라벨은 미국 영어만. (검색 요약) https://support.google.com/pixelphone/answer/16267698
- 녹음 동의·개인정보: 공식 근거 자료로는 클로바노트/ChatGPT 도움말의 관리자 설정 정도만 확인. 한국 법(통신비밀보호법 등)은 공식 도구 문서 범위 밖이므로 "참석자 동의를 받고, 법적 쟁점은 전문가 확인"으로 일반 안내만 한다.

## 따라하기 절차
녹음(스마트폰 녹음기) → 클로바노트에 파일 업로드 → 변환 결과 화자·용어 교정 → 요약/액션 아이템 추출 → 텍스트를 Claude/ChatGPT/Gemini에 붙여넣어 회의록 양식으로 정리(정리 프롬프트).

## 확인 못 함
- 클로바노트 무료 변환 시간·요금, 개인용 한국어 도움말 원문, 서비스 상태, 개인정보 처리·학습 활용 조항.

## 출처 목록
위 URL 전부 (확인일 2026-10-10, 검색 요약).

## 5단계 원문 대조 결과 (2026-10-10)
원문 확인(NAVER WORKS ClovaNote 도움말, 영문): 신청 후 사용 가능한 기능, 녹음·업로드 180분 한도(초과 업로드 불가), PC 웹 m4a/mp3/aac/wav 300MB, iOS 앱 별도 확장자 목록(원문 오탈자 포함), 여러 파일 동시 업로드(100개 초과 비권장), 변환 시간 월 단위·이월 없음·시작 시 차감·소진 시 녹음만 저장, 인식 언어 7종(한국어, 영어, 일본어, 중국어 간·번체, 한국어+영어, 한국어+일본어), 업로드한 노트의 인식 언어 변경 불가, 영상 회의 봇(NAVER WORKS, Zoom, Teams, Webex, Google Meet), 텍스트·오디오·메모 다운로드와 관리자 제한. 한국어 UI 메뉴 이름은 영문 도움말이라 확인하지 못함.
원문 확인(Google): Gemini 파일 업로드(14903178): 오디오 총 10분(Pro/Ultra 3시간), 영상 총 5분(Pro/Ultra 1시간), 파일 최대 10개, 영상 외 100MB, zip에 영상·오디오 불가. 이전 "데스크톱 오디오 불가" 상충은 이번 원문에 없음 → 상충 서술 삭제. Pixel 녹음기(16267698): 재변환 언어 목록에 Korean(South Korea), 재변환은 Google 서버 처리 가능, 실시간 변환 언어에는 한국어 없음. 화자 라벨 미국 영어만은 별도 페이지(16269004)에서 확인("on-device 변환은 오디오가 기기를 떠나지 않는다"는 문장은 이번 원문들에서 찾지 못해 본문에서 삭제).
미확인: 개인용 클로바노트 한국어 도움말·요금·무료 시간·서비스 상태, ChatGPT Record, Meetings 플러그인(OpenAI 403).
Aside: 남김. 문구를 "개인용 클로바노트와 ChatGPT 녹음 기능은 공식 원문을 확인하지 못했어요"로 구체화하고, 클로바노트 설명이 NAVER WORKS(회사 계정) 기준임을 명시.
