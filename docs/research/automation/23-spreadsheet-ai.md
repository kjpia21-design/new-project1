# 23. 엑셀·구글 시트 AI (2026-10-14 조사, H2)

방법: curl로 공식 페이지를 한 번에 한 장씩 열람. URL 탐색에 WebSearch 사용(본문 사실은 열람한 원문 기준).

## 확인한 출처와 사실
- https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel — 오른쪽 아래 Copilot 아이콘; 편집/계획/채팅 모드(기본 편집); 플랫폼별 모드 표(Windows·Mac·웹 전부, iPad 채팅·계획, iPhone 채팅, Android 채팅; iPad/iPhone 편집은 순차 제공 중); 기능 목록(웹 검색, 다른 통합 문서 가져오기, 스킬 등).
- https://support.microsoft.com/en-us/office/identify-insights-with-copilot-in-excel-52d97339-86c0-431c-b46c-e7b07b2898dd (-> /excel/copilot/data-insights-with-copilot-in-excel 로 이동) — 인사이트, 텍스트 분석(위 첨자로 원본 확인), 수식 열/행, 단일 셀 수식, 조회, 수식 설명 예시 프롬프트.
- https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel — 지원 언어에 Korean 포함, 영어 중심 학습으로 타 언어 성능 저하 가능; 라벨 M365 Copilot (Premium)/(Basic); 제한(계산 옵션 Automatic, SharePoint 체크아웃 파일 불가, 금융·법률·의료 민감 판단 사용 지양, 저장 시 공동 편집자에게 변경 노출).
- https://support.microsoft.com/en-us/excel/functions/copilot-function — 2026-09-14부터 COPILOT 함수 종료, 기존 값은 캐시, 재계산 시 #NAME?, Copilot 창으로 대체.
- https://support.microsoft.com/en-us/microsoft-365-copilot/frequently-asked-questions-about-copilot-in-microsoft-365-subscriptions — 개인 구독 AI 크레딧; Family/Premium AI 기능은 소유자만; Copilot in Excel은 AutoSave(OneDrive 저장) 필요.
- https://support.google.com/docs/answer/14356410?hl=en — Sheets의 Gemini: 오른쪽 위 Ask Gemini, 가능한 작업 목록, 자격 있는 Workspace/Google AI 요금제 필요(Workspace Experiments로도 제공), .xlsx는 Sheets로 저장해야 가장 잘 동작.
- https://support.google.com/docs/answer/15877199?hl=en — AI 함수(=AI()/=Gemini()), 문법, Generate and Insert, 제한(텍스트만, 전체 시트 접근 불가, 실행 취소 불가, 중첩 불가, 선택 셀 350개까지 생성). 같은 페이지에 "자격 있는 요금제 필요"와 "Workspace Experiments·베타 사용자만" 두 문구가 공존 -> 본문에서 둘 다 소개하고 단정 안 함.
- https://support.google.com/docs/answer/14925782?hl=en — Sheets 사이드 패널(Korean*)과 AI function(Korean ko-KR) 지원 언어에 한국어 포함.
- https://support.claude.com/en/articles/12650343-use-claude-for-excel (-> https://claude.com/docs/office-agents/excel 로 리다이렉트) — Claude for Excel: Pro/Max/Team/Enterprise 대상 GA, AppSource 설치, 지원 빌드, 미지원(2016/2019, iPad, Android, 데이터 테이블, 매크로/VBA), 프롬프트 주입 경고, 셀 단위 인용, 덮어쓰기 경고, 관리자 배포 경로.
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude (August 6, 2026 표기) — 모든 플랜에서 xlsx/pptx/docx/pdf 생성, Settings > Capabilities의 Code execution and file creation, 30MB, Drive 저장.

## 확인하지 못한 것
- Microsoft 365 Copilot / Google Workspace 가격(원화 포함): microsoft.com 요금제 페이지 403(우회하지 않음), techcommunity 블로그는 스크립트 렌더링으로 숫자 미판독. 본문에서 가격 미기재.
- Claude Google Sheets 애드온: 검색에는 support.claude.com/en/articles/13162029-google-sheets-add-on 이 나왔으나 열람 시 404. 본문에서 미확인으로 처리.
- Claude for Excel의 한국어 지원 명시 여부(해당 페이지에 언어 항목 없음).
- Drive의 .xlsx를 Sheets로 여는 절차(Claude 문서에 없음, 본문은 "확인하지 못함"으로 표기).
- 한국어 UI에서의 버튼 이름.
