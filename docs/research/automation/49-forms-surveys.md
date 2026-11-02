# automation/49 설문 만들고 분석하기 조사 노트 (2026-11-02, Y4)

## (a) 확인됨 (curl 기본 옵션, 한 페이지씩)
- https://support.google.com/docs/answer/6281888?hl=en (200) : How to use Google Forms. 질문 유형 안내 링크 등 개요.
- https://support.google.com/docs/answer/2839588?hl=en (200) : 게시 후 공유(이메일·소셜·삽입), 응답 1회 제한 시 Google 계정 로그인 필요(이메일 수집을 켜지 않으면 사용자 이름 기록 안 됨), 응답 수정 허용, "Show a summary of responses"를 켜면 응답자가 결과 링크를 받고 요약은 응답 가능한 모든 사람에게 보임.
- https://support.google.com/docs/answer/139706?hl=en (200) : Summary 탭(응답 1개 이상일 때만), Individual 보기, Link to Sheets(공동 작업자는 연결 시트도 접근 가능, 각각 제거 필요), CSV 다운로드, 이메일 수집(verified/manual), 차트 복사, 폼당 최대 50만 응답, 5만 초과 시 요약 안 보일 수 있음/10만 초과 시 Sheets 동기화 안 될 수 있음/1만 초과 시 CSV 시간순 정렬 안 될 수 있음.
- https://support.google.com/docs/answer/15877199?hl=en (200) : Sheets의 AI 함수(=AI() 또는 =Gemini()): 텍스트 생성·요약·분류(감정 분석 포함)·Google 검색 실시간 정보. 적격 Google Workspace 또는 Google AI 플랜 필요(정확한 플랜명은 미확인).
- https://support.microsoft.com/en-us/forms/welcome-to-copilot-in-forms (200, 리다이렉트 경로 /en-us/Forms/... -> /en-us/forms/... 를 따라 이동) : Copilot in Forms가 설문 초안 생성, 유도·이중 질문 등 개선 제안, 결과를 인사이트 요약으로 분석, 질문으로 더 파고들기, 초대 문구·알림 도움. Microsoft 365 계정 + Copilot 라이선스 필요. Copilot Chat 경험은 상업용 Copilot 라이선스 사용자 한정, 개인 사용자는 상단 refinement bar. "익명성 같은 목표에 맞게 설정 변경 요청" 가능.

## (b) 확인하지 못함 / 글에서 주장하지 않음
- Google Forms 안의 Gemini(폼 만들기 도움 등) 공식 도움말: 추정 주소 answer/14335327, 16374627 등은 404, Forms 주제 목록(topic/6063584)에도 없음. 다루지 않음.
- Microsoft Copilot in Forms FAQ, Smart Reminders 페이지, 가격·데이터 처리 정책: 읽지 않음. Microsoft Forms의 내보내기(Excel 등) 방법: 읽은 페이지에 없음.
- Sheets AI 함수 대상 플랜 정확한 목록. Gemini 앱에서 Forms 응답 CSV를 직접 분석하는 공식 절차(일반 파일 업로드는 다른 편에서 다룸).
- 실제 계정에서 단계를 실행해 보지 않음.
- 참고: 추정 URL 몇 개(support.microsoft.com/en-us/office/... 등)는 301/404였고 위 확인 URL만 사용.
