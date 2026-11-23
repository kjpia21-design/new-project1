# C32 조사 노트: Claude 사용량 한도에 걸렸을 때

조사일: 2026-11-23. curl 기본 옵션(-L)으로 한 페이지씩 읽음. 모두 HTTP 200.

## 읽은 공식 페이지
- https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work
- https://support.claude.com/en/articles/9797557-usage-limit-best-practices
- https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans
- https://support.claude.com/en/articles/12005970-manage-usage-credits-for-team-and-seat-based-enterprise-plans
- https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code

## 확인한 사실
- 사용량 한도 vs 길이 한도(컨텍스트 창)는 다른 한도. 길이 한도는 새 대화·프로젝트로 해결.
- 유료 플랜: 세션 한도(첫 메시지 때 시작, 5시간 뒤 전부 리셋) + 주간 한도(모든 모델, 일부 플랜은 Fable 별도, 계정별 고정 시각 리셋). 인증된 Ultra는 5시간 한도 없음. Settings > Usage에서 현재 세션·리셋 시각 확인.
- claude.ai·Claude Code·Claude Desktop 사용이 같은 한도에 합산.
- Anthropic이 재량으로 한도를 조정할 수 있고 무중단을 보장하지 않음.
- 한도 도달 시: 리셋 대기, 업그레이드(새 플랜 한도 즉시 적용), 사용량 크레딧(표준 API 요금, 구독료와 별도 청구).
- 사용량 크레딧(Pro/Max/Ultra): Settings > Usage 토글, "Adjust limit"로 월 지출 한도, 자동 충전은 웹만, 모바일 인앱 구매 가능한 곳은 앱에서 구매. 임박 알림이 남아 있다가 "Now using credits"로 바뀜. 구매분은 환불 불가(예외: 현지법, 사기; Team 전환 등 특정 경우 환불), 활성 유료 플랜에서만 사용. 2026-12-07 이후 구매분은 보통 12개월 후 만료, 이전 구매분은 만료 없음(나라별 상이). 월 API 크레딧(Max·Ultra)과 별개.
- Team·좌석 기반 Enterprise: Owner/Primary Owner가 Organization settings > Usage에서 켬. 사용량 기반 Enterprise는 해당 없음(첫 토큰부터 API 요금).
- 덜 쓰는 법: 새 주제는 새 대화, 질문 묶기, 프로젝트 캐시(비활성 후 만료), 안 쓰는 프로젝트 파일 정리, 도구·커넥터 끄기, effort 낮추기, thinking 끄기, 가벼운 모델(Haiku/최신 Sonnet). Claude Code: /clear, /compact, 경로 지정, CLAUDE.md 간결, `/model`.
- Claude Code 엔터프라이즈 좌석은 "limit reached, resets at time" 메시지. API 키는 하드 스톱 없음.

## 확인하지 못한 것
- claude.ai 한도 도달 메시지의 정확한 문구(읽은 페이지에 없음).
- 세션당 메시지·토큰 절대 수치(공식 미공개).
- 무료 플랜 리셋 규칙(이 조사에서 무료 플랜 페이지는 읽지 않음; C02 노트 참고).
- 크레딧 구매의 원화 가격 등 지역별 세부.
