# 33. 영상 요약과 쇼츠 제작 — 2026-10-15 기준 (K3)

`curl -sL -m 20 -A "Mozilla/5.0"`로 한 번에 한 페이지씩 확인. URL 후보 탐색에는 WebSearch를 썼고, 본문 사실은 모두 원문 페이지를 직접 열어 확인했다.

## Gemini (support.google.com/gemini)
- https://support.google.com/gemini/answer/16622858 (Find & ask about YouTube content in Gemini Apps, 컴퓨터판): Gemini가 YouTube 공개 정보를 이용해 주제별 영상·재생목록·채널 찾기, 영상 내용 이해를 돕는다. 조건: Gemini 앱 로그인, Keep Activity 켜기(꺼져 있으면 사용 불가). 아직 Live 대화와 Google Messages의 Gemini에서는 사용 불가. 예시 프롬프트: "Find videos of how to quickly get grape juice out of a wool rug. Summarize the first video." 못 하는 것: 시청 기록·좋아요·저장 재생목록·구독 채널의 전체 목록 보여주기, 재생목록 저장·댓글 같은 YouTube 동작 수행.
- https://support.google.com/gemini/answer/14903178 (Upload & analyze files): 프롬프트당 파일 최대 10개(제공 상황에 따라), 영상 1개 최대 2GB, 그 외 100MB. 영상 총 길이 5분(Google AI Pro/Ultra는 1시간), 오디오 총 10분(Pro/Ultra는 3시간). 파일이 너무 크면 세부 내용을 놓칠 수 있다는 경고, 컨텍스트 창 1M 토큰(Deep Think는 192K). 회사·학교 계정은 관리자 설정 필요.
- 확인하지 못함: YouTube 링크를 프롬프트에 직접 붙여넣는 방식의 공식 설명, 한국어 영상 요약 품질·한국 제공 여부(한국 제공은 media/13 편의 확인 내용을 링크).

## YouTube Help (support.google.com/youtube)
- https://support.google.com/youtube/answer/10059070 (Get started creating YouTube Shorts): Shorts 생성 도구로 최대 3분 길이 숏폼 제작. Shorts로 YPP 가입하려면 구독자 1,000명 + 최근 90일 Shorts 조회수 1,000만(수치 변동 가능, 본문에는 쓰지 않음).
- https://support.google.com/youtube/answer/14328491 (Disclosing use of GenAI content): 사실적으로 보이는 AI 생성·변경 콘텐츠는 업로드 시 공개 필수. 대상: 실존 인물이 하지 않은 말·행동, 실제 사건·장소 영상 변조, 일어나지 않은 사실적 장면, 영상의 주가 되는 AI 음악. 비현실적 콘텐츠·사소한 편집(미용 필터, 색 보정, 스크립트·제목·썸네일 제작 보조, 자막 생성, 화질 개선, 본인 목소리 복제 더빙 등)은 공개 불필요. 설정 이름 'AI use', YouTube Studio. YouTube 자체 생성 AI 도구 사용 시 자동 공개.
- https://support.google.com/youtube/answer/1311392 (YouTube channel monetization policies): 재사용 콘텐츠(reused content) = 의미 있는 원본 해설·실질적 수정·교육/오락 가치 없이 다른 곳 콘텐츠를 재활용. 채널 전체에 적용, 원작자 허락이 있어도 적용, 저작권 집행과 별개(저작권·허락·공정이용과 무관하게 판단). 2025-07-15 "repetitious content"가 "inauthentic content"로 이름 변경(대량 생산·반복 포함), reused content 정책은 변경 없음. 이 문서는 수익화(YPP) 정책이며 업로드 자체의 금지 규정이 아님.
- https://support.google.com/youtube/answer/6013276 (Learn about copyright claims): Content ID 일치 시 자동 저작권 클레임 → 차단/수익화/통계 추적. 1~3분 Shorts는 클레임이 있으면 정책과 무관하게 차단(저작권 경고 strike는 아님). YouTube Studio > Content에서 Claims 필터로 확인.
- https://support.google.com/youtube/answer/15260303 (Create content for Shorts using AI-generated features): YouTube AI 도구는 실험적, 대부분 국가·기기 언어 영어 기준, 일부 지역 제한. AI 결과는 게시 전 직접 검토 권고.

## Vrew (vrew.ai, VoyagerX)
- https://vrew.ai/ko/ : 음성 인식 자동 자막, 텍스트 기반 컷 편집, 무음 구간 삭제, 텍스트로 비디오 만들기, 쇼츠 템플릿, 번역 자막(100개 이상 언어라고 소개), AI 목소리, 무료 이미지·영상·배경음악·효과음 제공(상업 영상에도 쓸 수 있다고 홈페이지가 소개). Mac·Windows·Ubuntu 지원, 최신 버전 4.7.2(2026-10-15 확인). 사용 사례로 "긴 스트리밍 영상·팟캐스트를 짧은 영상으로", "인터뷰 녹취를 스크립트로" 소개. 데이터는 AI 모델 학습에 쓰지 않는다고 소개(홈페이지 문구).
- https://vrew.ai/en/ : 같은 기능을 영문으로 소개(Text-Based Editing, Silence Remover, Speech Editor 등). 요금제는 Free/Light/Standard/Business, 금액은 JavaScript 렌더링이라 확인하지 못함.
- https://vrew.ai/ko/terms-of-service : 업로드 콘텐츠의 권리는 사용자에게 남고, 업로드할 때 필요한 라이선스와 권한을 가지고 있다고 보증한 것으로 간주. 서비스의 AI 기능으로 생성한 이미지·오디오의 소유권은 사용자에게 있고 상업적·비상업적으로 제약 없이 이용 가능(분쟁 시 회사 면책). 영상 생성물, 무료 소스(스톡)의 개별 라이선스 조건은 약관 해당 조항에서 확인하지 못함.
- https://docs.channel.io/vrew-kr/ko/categories/공지사항 (Vrew 공지): 2026-04-22 "통합 크레딧 방식으로 변경" 공지(기능별 사용량 → 통합 크레딧), Vrew 에이전트 정식 출시(4.4.0)와 함께 크레딧 사용, 일부 AI 영상·이미지 생성 모델 지원 종료 일정(2026-10-31 등) 공지. 구체적 크레딧 수량·가격은 확인하지 못함.
- 확인하지 못함: 모바일 앱 제공 여부(App Store 페이지 404, 검색 결과에 종료 공지가 있다는 2차 정보만 있어 본문에 쓰지 않음), 무료 플랜의 월 제공량, 메뉴 경로(도움말 개별 글을 열지 못함).

## 재점검 (2026-10-19)
- Gemini YouTube 도움말(16622858), 파일 업로드(14903178: 영상 2GB·5분/Pro·Ultra 1시간), YouTube 도움말 5건(Shorts 최대 3분, AI use 공개 기준, reused content), Vrew 사이트·약관·공지(2026-04-22 통합 크레딧 공지가 최신)를 다시 열었다. 본문과 충돌 없음(Vrew 홈페이지는 맥·윈도우·우분투 지원 표기). Vrew 요금·모바일 앱은 계속 미확인. 변경 없음, lastVerified만 갱신.
