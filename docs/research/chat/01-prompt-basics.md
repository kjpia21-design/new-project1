# 01. 실무 프롬프트 작성법 (도구 공통)

## 핵심 사실
- 프롬프트 원칙(명확·직접적으로, 이유 덧붙이기, 예시 3~5개, XML 태그 구조화, 긴 자료는 위/질문은 아래, "하지 말라" 대신 "하라", 역할 한 문장)은 Claude 공식 가이드 기준. 상세는 docs/research/claude/C04-prompting.md 재사용. (출처: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- 앱 사용자용 팁: 간단한 질문으로 시작, 구체적으로 요청, 후속 질문으로 다듬기. (출처: https://support.claude.com/en/articles/8114491-get-started-with-claude)
- 민감 정보 주의: 금융 정보, 건강 기록, 비밀번호, 기밀 문서는 입력 시 주의하라고 안내. (출처: https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations)
- 시크릿(incognito) 채팅은 Claude 개선에 쓰이지 않음. (출처: https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations)

## 따라하기 절차
역할·목적·맥락·형식·제약·예시 6칸 틀로 업무 프롬프트 템플릿을 만든다(틀 자체는 C04 원칙을 정리한 필자 구성).

## 확인 못 함
- ChatGPT(help.openai.com, platform.openai.com), Gemini(support.google.com, ai.google.dev) 공식 프롬프트 가이드: 이 세션의 네트워크 정책(egress 403)으로 열람 불가. "도구 공통"이라는 표현은 단정하지 않고 각 도구 공식 가이드 확인을 안내.
- 업무별 템플릿 문구는 원칙을 적용해 만든 예시.

## 출처 목록
- Prompting best practices — 확인일 2026-10-10 (C04 노트 재사용)
- Get started with Claude — 확인일 2026-10-10
- https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations — 확인일 2026-10-10

## 재점검 (2026-10-12)
- 출처 페이지를 다시 읽었고 본문과 어긋나는 내용 없음(변경 없음).

## 재점검 (2026-10-19)
- 출처 페이지를 다시 읽었고 본문과 어긋나는 내용 없음(변경 없음). 본문의 Claude 메뉴·한도·플랜 설명은 Claude 지원센터/가이드 최신 내용과 일치.

## 재점검 (2026-10-26)
- Prompting best practices(긴 문서 20k+ 토큰은 위에 배치, 예시 3~5개), Get started, 민감정보 도움말을 다시 읽음. 변경 없음.
