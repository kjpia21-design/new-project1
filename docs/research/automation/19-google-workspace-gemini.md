# Google Workspace의 Gemini (2026-10-10 조사)

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
