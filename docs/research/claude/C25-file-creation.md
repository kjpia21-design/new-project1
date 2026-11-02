# C25. 파일 만들고 고치기 (조사 노트, 2026-11-02)

## 확인한 출처 (curl 기본 옵션, 한 페이지)
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude (dateModified 2026-10-30, 페이지에 "Updated this week" 표시)

## 확인한 사실
- 코드 실행·파일 생성: 비공개 컴퓨팅 환경에서 Python/JavaScript 실행. Excel(.xlsx), PowerPoint(.pptx), Word(.docx), PDF 생성, 다운로드 또는 Google Drive 저장. PNG 차트, CSV/TSV 분석.
- 제공: Free, Pro, Max, Ultra, Team, Enterprise 모두, 웹·Claude Desktop·Claude Mobile.
- 개인 플랜: 기본 켜짐, 네트워크 켜짐(승인된 출처에서 패키지 설치). 켜는 곳 Settings > Capabilities > Code execution and file creation(새 설정 화면 이름 "Create and edit files"). 모바일: 이니셜/이름 > Settings > Capabilities.
- Team/Enterprise: 기본 켜짐(Enterprise는 새 조직), Owner가 Organization settings > Capabilities에서 끌 수 있음. 네트워크 4단계(끔 / 패키지 관리자만 / +지정 도메인 / 모든 도메인-법적 차단 목록 제외, 가장 위험). MCP 연동이 켜져 있으면 이그레스 설정과 무관하게 통신 가능.
- 파일 크기 파일당 30MB(업로드·다운로드). 30MB 넘는 PDF는 컨텍스트에 올리지 않고 컴퓨팅 환경에서 처리 가능.
- 사용량: 플랜 한도 공유, 일반 대화보다 더 소모. 한 대화에서 여러 파일 가능. 모바일 Download는 시스템 미리보기/별도 앱. 아티팩트 계속 사용 가능(컴퓨팅 환경으로 생성). 파일 결과물이 있는 대화의 공개 공유는 Free/Pro/Max/Ultra에서 비활성화.
- 보안: 프롬프트 인젝션으로 데이터 유출 가능성 경고, 작업 모니터링 권장, 샌드박스 사용자 간 비공유, 프롬프트 인젝션 분류기.

## 불일치/확인하지 못한 것
- Team 네트워크 기본값: Availability 절은 "기본 꺼짐", How to get started 절은 "패키지 관리자만 켜짐". 본문에 불일치로 명시.
- 업로드한 Office 파일을 제자리에서 "편집"하는 절차, 기존 서식·수식 보존 범위: 확인하지 못함.
- 언어별 지원 목록, 한국어 파일 생성 품질, 대화 하나당 파일 수·작업 시간 한도: 확인하지 못함.
- 직접 실행해 보지 않음(공식 문서 기반).
- 링크한 C6·C21·C23·C24·basics/05는 사이트 내 기존 글, 재조사하지 않음.
