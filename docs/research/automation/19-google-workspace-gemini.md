# Google Workspace의 Gemini (2026-10-10 조사)

## 5단계 원문 대조 (2026-10-10)
- 원문 확인: knowledge.workspace.google.com — 2025-01부터 Business/Enterprise에 AI 기능 포함, Gemini Business-Legacy 등 애드온 판매 종료.
- 원문 확인(workspace.google.com/pricing 비교표): Gemini in Workspace apps — Starter "Limited"; Gmail 전 에디션 포함; Docs·Sheets는 Starter 미지원, Standard/Plus/Enterprise 포함. Starter/Standard/Plus 최대 300명, Enterprise 문의. 연간 16% 할인 표시. **에디션별 금액은 정적 HTML에 없어 확인 불가 -> 본문에서 가격 표 삭제**(검색 요약의 $7/$14/$22는 원문 미확인).
- 원문 확인(Gmail 14199860): 오른쪽 위 Ask Gemini 사이드 패널(Summarize/Draft/Organize/Search/Schedule), "eligible Workspace or Google AI plan" 필요, 개인 계정은 Workspace Experiments. 구판(AI Overview/회신 2개 초과) 내용은 현재 페이지에 없음 -> 본문에서 삭제.
- 원문 확인(학습 센터 14506398): Gmail 요약은 Ask Gemini > "What's this email about?". Docs 요약은 Help me write > Summarize. 14590328: Help me write > Create > Refine/Insert.
- 원문 확인(Sheets 14356410): 오른쪽 위 Ask Gemini, 제안 프롬프트 선택 또는 직접 입력.
- **교정**(언어 목록 14925782): Gmail Help me write = en, fr, de, it, ja, ko, pt, es(8개, 개인 계정은 미국만). Docs Help me write = en, fr, de, it, ja, pt, es (한국어 없음). Docs Help me create와 Docs/Gmail 사이드 패널에는 한국어 있음. Gmail Proofread는 en, es만.
- 원문 확인: Privacy Hub — 도메인 밖 모델 학습에 허가 없이 쓰지 않음, 사람이 검토하지 않음. 개인 계정 Gemini 앱 데이터 학습 사용 문구는 미확인(삭제).
- 관리자: 관리 콘솔 Generative AI > Gemini App > Turn the Gemini App on or off 메뉴 존재 확인. 조직 단위·그룹 세부 내용은 본문 확인 못 함.

(아래는 4단계 당시 기록)

조사 방식 주의: WebFetch가 외부에 접속하지 못해 WebSearch 검색 요약(support.google.com, workspace.google.com, knowledge.workspace.google.com)에 기반한다.

## 핵심 사실
- 2025년 1월부터 Google Workspace Business·Enterprise 에디션에 Gemini AI 기능이 기본 포함(이전에는 별도 애드온). Gmail·Docs의 "Help me write" 포함. (출처: https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/gemini-ai-features-now-included-in-google-workspace-subscriptions)
- 에디션별 Gemini 범위가 다르다(Starter는 Gmail·채팅 중심, Standard 이상은 Docs·Meet 등으로 확대라는 검색 요약). 정확한 비교는 가격 페이지 확인. (출처: https://workspace.google.com/pricing)
- Gmail: Help me write로 초안 생성/문장 다듬기. 스레드 요약은 Gemini 사이드 패널의 Ask Gemini에서 "Summarize this email" 선택(회신 2개 초과 스레드 요약). 도움말마다 버튼명이 다름(What's this email about? 등). 일부 Google AI Pro/Ultra 개인 구독자(미국)는 Ask Gemini 대신 AI Overview가 보인다는 안내가 있음. (출처: https://support.google.com/mail/answer/14199860 , https://support.google.com/a/users/answer/14506398)
- Docs: 왼쪽 Help me write → 프롬프트 입력 → Create → Refine 또는 Insert. (출처: https://support.google.com/a/users/answer/14590328)
- Sheets: "Ask Gemini" 버튼(오른쪽 위)으로 사이드 패널을 열어 프롬프트 입력. (출처: https://support.google.com/docs/answer/14356410)
- Slides도 Gemini 협업 기능 문서 존재. (출처: https://support.google.com/docs/answer/14207419)
- 언어: Gmail 초안 작성은 한국어 포함 8개 언어. Docs 글쓰기는 더 짧은 목록. 그 밖의 Workspace with Gemini 기능은 영어만인 경우가 있다고 안내. 정확한 목록은 https://support.google.com/docs/answer/14925782 에서 확인.
- 프라이버시: Workspace는 고객 데이터를 고객 사전 허가 없이 생성형 AI 모델 학습에 쓰지 않는다. 개인 계정으로 Gemini Apps에 공유한 데이터는 학습에 쓰일 수 있음. (출처: https://support.google.com/a/answer/15706919 , https://support.google.com/meet/answer/14615114)
- 관리자 제어: Admin console > Generative AI > Gemini app에서 서비스 상태 on/off(조직 단위·그룹별). Gemini for Workspace(Gmail·Docs 내 기능)는 별도 설정(Workspace Intelligence). (출처: https://knowledge.workspace.google.com/admin/gemini/turn-the-gemini-app-on-or-off)
- 가격(검색 요약, 미국 USD): Starter $7(연간)/$8.40(유연), Standard $14/$16.80, Plus $22/$26.40(사용자·월). 한국 원화 가격 최신값은 확인 못 함. (출처: https://workspace.google.com/pricing)

## 따라하기 절차
1. 계정 환경 확인(회사 Workspace/개인, 관리자 설정). 2. Gmail에서 긴 스레드 요약 → 답장 초안 Help me write. 3. Docs에서 보고서 초안(Help me write) → Refine. 4. Sheets에서 Ask Gemini로 표 정리/수식 요청. 5. 결과를 사실 확인.

## 확인 못 함
- 한국어 UI에서의 버튼 이름, 개인 Gmail 계정에서의 정확한 제공 범위, 에디션별 상세 비교표, 한국 가격.

## 출처 목록
위 URL 전체.


## 6단계 재점검 (2026-10-10)
- Gemini Apps 도움말(support.google.com/gemini/answer/13594961): 개인 계정 대화 일부를 사람 검토자가 볼 수 있으니 기밀 입력 금지. 한국어 요금제 페이지는 "모든 가격은 $ 기준", 에디션별 금액은 화면 렌더링으로 읽히지 않음.

## 2026-10-12 재확인
- 14925782(언어), 14199860(Gmail), 14506398, 14590328, 14356410(Sheets), knowledge 포함 안내, workspace.google.com/pricing 비교표, Privacy Hub, Gemini Apps Privacy Hub, turn-the-gemini-app-on-or-off 모두 재확인. 본문 내용 변동 없음(언어 목록·에디션 표·버튼 이름·관리 콘솔 경로 동일).
- 변경: Privacy Hub URL이 support.google.com/a/answer/15706919 -> knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub 로 301 이동, sources URL 갱신.
- 참고: 포함 안내 페이지는 애드온 판매 종료 목록(Gemini Business-Legacy 등)과 교육용 Google AI Pro for Education 애드온 유지를 명시. 에디션별 금액은 여전히 정적 HTML에 없음.

## 2026-10-19 재확인
- 요금제 페이지(비교표 Gmail 전 에디션 포함 / Docs·Sheets는 Starter 미포함, 금액은 여전히 원문에서 읽히지 않음), Gmail·Sheets 도움말 버튼명(Ask Gemini), 학습 센터 요약 절차, 언어 목록(Gmail Help me write 한국어 O, Docs Help me write 한국어 X), 관리자 Gemini 앱 경로, 개인정보 허브, 포함 안내 페이지 재확인.
- 변경: 요금제 비교표의 Gemini 어시스턴트 항목(Starter 기본 접근, 그 외 확장 접근) 한 문장 추가.
