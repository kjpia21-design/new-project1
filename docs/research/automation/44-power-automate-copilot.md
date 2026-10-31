# 44. Power Automate와 Copilot으로 M365 업무 자동화 (2026-10-31 조사, P2)

방법: curl로 learn.microsoft.com 페이지를 한 번에 한 장씩 열람. 실제 테넌트가 없어 직접 실행하지 않음(본문에 명시). 일부 Learn 페이지는 "Access to this page requires authorization" 문구가 있었으나 본문은 읽힘.

## 확인한 출처와 사실
- https://learn.microsoft.com/en-us/power-automate/get-started-with-copilot (create-cloud-flow-using-copilot에서 연결, Last updated 2026-09-18) — 클라우드 흐름 Copilot 기능(의도 이해해 생성, 연결 자동 설정, 파라미터 적용, 수정 요청, 흐름·제품 질문 답변, 설명 제안); Azure OpenAI Service 기반; 영어에 최적화·타 언어 제한적; 단계: Power Automate 로그인 > Home > Create with Copilot > "What will your flow do?" > 전송 > 트리거·작업 제안 > Keep it and continue(또는 "Add more details for Copilot to work with") > 연결 확인(초록 체크/빨간 느낌표) > Create flow > 디자이너+Copilot 창 > Save > 테스트 권장; 좋은 프롬프트: "When X happens, do Y", 구체적으로, 커넥터 언급; 예시 프롬프트(이메일→Teams, SharePoint 항목→모바일 알림 등); 기존 흐름 수정: My flows > ⋮ > Edit, 새 디자이너에서만 가능(클래식 불가); Troubleshoot in Copilot 안내.
- https://learn.microsoft.com/en-us/power-automate/faqs-copilot (Last updated 2026-01-16) — 기능: 새 흐름 생성, 기존 흐름 수정, 질문 답변, 설명 생성; 한계: 커넥터 일부만 지원, "흐름 오류 수정은 현재 지원하지 않음"; 조직에서 끄려면 관리자가 지원팀에 문의; 새 디자이너에서만; Copilot 변경은 디자이너에서 검토·되돌리기 가능.
- https://learn.microsoft.com/en-us/power-automate/fix-flow-failures (Last updated 2026-10-31) — Troubleshoot in Copilot: 새 디자이너에서, 테스트 중이나 실행 기록 확인 시 오류 해결 지원, 사람이 읽을 수 있는 요약과 가능한 경우 해결책 제안, 모든 시나리오에서 동작하지 않을 수 있음. (FAQ와 상충 → 최신 페이지 기준, 본문 Aside에 명시.)
- https://learn.microsoft.com/en-us/power-automate/regions-overview (Last updated 2026-08-19) — Copilot 지역 가용성: 미국·호주·영국·인도 GPU 지역 기본 활성(관리자가 끌 수 있음), 유럽 및 기타 지역(프랑스·캐나다 포함)은 cross-geo 데이터 공유 설정에 따라 기본 활성(수동 opt-out 가능), 개인 MSA 사용자는 Copilot 기능 접근 불가(조직 ID·비주권 클라우드 필요), GCC는 기본 활성; 미국·호주·영국 밖 일부 지역은 관리자가 cross-geo 호출을 켜야 함. 한국 지역 별도 기재는 확인하지 못함.
- https://learn.microsoft.com/en-us/power-platform/faqs-copilot-data-security-privacy (Last updated 2025-05-29) — 프롬프트·응답은 제3자 모델(OpenAI 등) 학습·개선에 쓰이지 않고, 테넌트 관리자가 opt-in하지 않으면 Microsoft AI 모델 학습에도 쓰이지 않음; 기능 표에서 Power Automate "Copilot in cloud flows on the Home page and in the designer": Managed Environments required? No.
- https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/types (Last updated 2026-09-22) — Free(Entra 회사·학교 계정, 표준 커넥터만, 클라우드 흐름 공유 없이), Premium(프리미엄 커넥터 포함 전체 기능, 유료), Trial 90일(AI Builder 크레딧·저장 제외 Premium과 유사), 가격은 Power Automate pricing 페이지 참조.

## 확인하지 못한 것
- Copilot in cloud flows 자체에 필요한 라이선스(Free로 되는지 등)를 명시한 페이지: 읽은 범위에서 없음. 본문에 "찾지 못함"으로 표기.
- 가격(Power Automate Premium 등): 요금제 페이지 미열람, 미기재.
- 한국어 프롬프트 처리 품질·한국어 UI 이름: 확인 못 함(Language availability 외부 링크 미열람). 본문에서 영어 프롬프트 권장은 "가장 안전한 선택"이라는 실용 조언으로 표현.
- 설문(Forms) 시나리오 및 SharePoint 항목→이메일 프롬프트는 이 사이트 변형이며 공식 예시가 아님(본문에 구분 표기).
- 실제 실행: 테넌트 없음 → 직접 실행하지 않음. 한국 계정/지역에서의 실제 노출 여부 미확인.
- `troubleshoot-in-copilot` URL은 404였음(fix-flow-failures#troubleshoot-in-copilot 사용).
- M365 Copilot 라이선스와의 관계: 확인 못 함(본문은 별개 제품으로 소개, 관리자에게 문의하라고 안내).
