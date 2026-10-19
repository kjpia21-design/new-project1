# 29. 한국 AI 서비스 둘러보기

조사일 2026-10-14. 한 페이지씩 curl로 확인. 접근이 거부된 곳은 우회하지 않음.

## 열어서 확인한 것
- https://www.navercorp.com/service/search : 네이버 검색 / AI 브리핑(검색 의도에 맞는 핵심 정보 요약, 창작자·원문 출처 연결) / AI탭(대화로 복합 질문 이해, 정보 종합, 예약·구매 실행까지). 
- https://www.navercorp.com/tech/hyperclovax : HyperCLOVA X 모델(THINK, SEED 오픈소스, DASH), CLOVA Studio, "CLOVA X는 HyperCLOVA X 기반 대화형 에이전트"로 소개(링크 clova-x.naver.com/welcome).
- https://clova.ai/hyperclova : 한국 데이터·토크나이저 특화 설명, 자체 벤치마크 점수(옮기지 않음).
- https://mkt.naver.com/aitab : AI탭 소개, "AI탭 시작하기", 예시 질문. 요금 정보 없음.
- https://kanana.kakao.com/ : Kanana in KakaoTalk. 친구 목록에서 이용, 안 보이면 카카오톡 검색 "카나나". On-Device AI 지원 단말 사용자는 회원 가입 후 이용. 지원 단말 목록(iPhone 14 Pro 이상, Galaxy S22 이상 등). 대화 원문은 온디바이스 AI로 기기 안에서만 처리, 외부로 나가거나 별도 저장 안 됨(공식 문구).
- https://kanana.kakao.com/chat/policy : 약관 공고 2025-12-11, 시행 2026-01-12. 선톡에 광고 포함 가능, 응답은 부정확할 수 있음, 민감정보 입력 주의, 콘텐츠 권리·책임은 이용자에게. 약관에 "베타" 표기 없음(검색 결과 없음).
- https://wrtn.ai/ : 홈에 채팅, AI 탐지방어, 유튜브 요약, 실시간 녹음 도구. 로그인 필요 기능 있음.
- https://help.wrtn.ai/notice_somend : 2026-03-09 종료 — 서포터 채팅 검색, 도구의 인터넷 검색 활용, 도구 이미지 생성, 실시간 검색어, 서포터 선톡. 서포터 채팅은 유지. 이력·데이터는 유지, 사용 불가.
- https://help.wrtn.ai/wrtn_purchase : 결제 제공 서비스는 밈 크레딧, 뤼튼스피킹 프리미엄 구독, 사주 열쇠.
- https://login.wrtn.ai/policy/service : 공고 2026-08-25, 시행 2026-09-01. 만 14세 미만은 법정대리인 동의. 금지행위에 서비스로 얻은 정보의 무단 복제·유통·상업적 이용 포함(문맥은 약관 원문 확인 필요).
- https://help.wrtn.ai/ai_change : 서포터 설정(자동 인터넷 검색 토글 등) — 본문에는 쓰지 않음(3월 종료 안내와의 관계가 불분명).
- https://www.sktelecom.com/ : "에이닷 나만의 AI 개인비서" 소개.
- https://play.google.com/store/apps/details?id=com.skt.prod.dialer : 에이닷 전화. 통화 녹음·요약, 비즈연락처, AI 스팸 차단, 에이전트콜, 통역콜(SKT 고객 한정, 국내에서만). 에이닷 연결 시 AI 기능 이용.
- https://www.lgresearch.ai/exaone/ , https://showroom.exaone.ai/ : EXAONE 4.5, K-EXAONE 2.0, ChatEXAONE 등 솔루션. 외부 고객은 공식 파트너사 통해 도입.
- https://www.upstage.ai/ : Solar Pro 4, Solar Mini 4, Upstage Studio, API. 기업용 중심.

## 확인하지 못한 것 (본문에서 단정하지 않음)
- clova-x.naver.com, cue.search.naver.com : 프록시 연결 거부. CLOVA X 채팅의 현재 제공 여부·이름 변경(종료 포함) 확인 못 함. 네이버 회사 소개 페이지는 서비스로 소개하고 있음(페이지 갱신 여부 불명).
- aidot.tworld.co.kr : 연결 거부. 에이닷 서비스 사이트 직접 확인 못 함. 에이닷 메인 앱 스토어 등록 페이지는 iTunes 검색 API가 403이라 열지 않음(우회 안 함).
- www.kakaocorp.com AI 소개: 자바스크립트 렌더링이라 본문을 읽지 못함. 카카오 Kanana 독립 앱 여부, 요금, 베타 여부 확인 못 함.
- AI탭, Kanana 요금. 뤼튼 채팅의 무료·유료 범위. LG ChatEXAONE 일반 사용자 가입 방법.
- 서비스 간 품질 순위(공식 근거 없음, 쓰지 않음).
- 사이트 내 사실 일치: 해외 서비스 설명은 기존 chat/05, basics/08로 링크만 연결.

## 2026-10-19 재확인
- EXAONE Showroom(showroom.exaone.ai): FAQ가 AI Research 솔루션이 기업(B2B) 대상이라 개인이 현재 쉽게 가입해 쓰기 어렵다고 안내. 본문의 "일반 사용자 가입 방법 미확인"을 이 내용으로 교체. 모델 표기는 EXAONE 4.5, EXAONE Path, K-EXAONE 2.0, "ChatEXAONE Beta는 더 이상 제공 안 함"이라는 문구도 있음(본문은 ChatEXAONE을 솔루션으로만 소개해 변경 없음).
- 뤼튼 종료 공지(2026-03-09), 뤼튼 결제 안내, Kanana 약관(시행 2026-01-12)·소개, 네이버 AI탭/AI 브리핑, 에이닷 전화(Google Play), SKT 사이트 에이닷 배너: 본문과 일치. 변경 없음.
- 여전히 미확인: CLOVA X 서비스 사이트(이번엔 미시도), clova.ai/hyperclova는 모델 소개만 있고 서비스 상태 언급 없음.
- 열어 본 출처(2026-10-19): navercorp.com/service/search, mkt.naver.com/aitab(curl), kanana.kakao.com(+/chat/policy), help.wrtn.ai(notice_somend, wrtn_purchase), lgresearch.ai/exaone, showroom.exaone.ai, upstage.ai, clova.ai/hyperclova, sktelecom.com, Google Play 에이닷 전화.
