# 50. AI와 함께 결정 내리기 — 2026-11-04 기준 (C5)

## 확인한 공식 페이지 (curl 기본 옵션, 한 페이지씩; -L만)
- ChatGPT 프롬프트 https://learn.chatgpt.com/docs/prompting.md (200; 색인 https://learn.chatgpt.com/llms.txt 도 200)
  - 목표·맥락·출력·경계 (필요한 부분만 쓰면 됨). Compare options 예시(휴대전화 요금제 둘, 표로 차이, 하나 추천 + 절충 설명). 중요한 작업은 마지막 점검(확인 못 한 정보 표시) 요청 후 직접 검토. 최신 정보가 필요하면 웹 검색, 출처 요청.
- Gemini 창의적 학습 https://support.google.com/gemini/answer/15216790 (200)
  - "Understand different points of view": 반대편 입장에서 논증하게 하는 예. 팁: 항상 응답을 평가·팩트체크(AI는 실수 가능), 질문이 구체적일수록 도움이 됨.
- Claude 기능 선택 https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research (200, 2026-06-02 표기)
  - 웹 검색=단순·최신 사실, extended thinking=최신 웹 정보 불필요한 복잡한 추론, Research=여러 출처 종합 보고서.
- Claude 프롬프트 설계 https://support.claude.com/en/articles/7996853-introduction-to-prompt-design (200, 2026-03-16 표기)
  - Claude를 맥락 없는 새 계약직처럼 대하고 구체적으로 지시. (짧은 글)
- Anthropic 이용 정책 https://www.anthropic.com/legal/aup (200; 페이지에 "Effective Nov 12, 2026" 표시, 즉 작성일 이후 시행)
  - High-risk Use Case Requirements: 건강·법적 권리·재정·생계·주거/교육/필수 서비스 접근에 영향을 주는 High-risk AI Recommendation에 제품을 쓰면 자격 있는 사람의 실질적 검토(변경 권한 포함)와 영향받는 개인에 대한 AI 관여 고지 요구. 타인에게 조언·결정을 내리는 사용자 대상 요구사항으로 읽음. 본인 개인 선택에 대한 규칙인지는 단정하지 않음.
- 보조: https://support.claude.com/sitemap.xml (결정 지원 전용 도움말 없음 확인)

## 확인하지 못한 것
- ChatGPT·Gemini의 고위험(의료·법률·재정) 결정 관련 약관·도움말 문구(읽은 페이지에는 없음, 다른 문서에 있는지는 미확인).
- 선택지 비교·장단점표를 Claude·Gemini 공식 페이지가 직접 다루는지(읽은 페이지에는 없음).
- 서비스별로 이 프롬프트들(기준 가중치, 시나리오, 반대 논증, 사전 부검)을 얼마나 잘 따르는지(실행 시험 안 함).
- 이용 정책이 개인의 자기 결정 고민에 적용되는지(법률 해석은 하지 않음).

## 본문 반영
- 프롬프트 8개와 6단계(기준→선택지→표→시나리오→반대 입장→사전 부검), 사전 부검·악마의 변호인 용어는 필자(사이트) 제안이며 공식 확인 사실이 아님. 실행 시험 없음.
- 연결: basics/03·04·05·13, chat/45·48.
