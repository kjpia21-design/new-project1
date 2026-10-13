# coding/07 코딩을 몰라도 되는 업무용 웹 도구 (견적 계산기)

## 핵심 사실
- 아티팩트: 대화 옆에 열리는 결과물(작은 인터랙티브 도구 포함). "환율 계산기 앱 만들어줘" 같은 요청으로 만든다. 설정에서 코드 실행·파일 생성이 켜져 있어야 한다. 수정은 Claude에게 요청, 오류 시 "Try fixing with Claude"(성공 보장 안 됨). (출처: https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them , C06 연구 파일)
- 공유: 아티팩트는 비공개로 시작. Free/Pro/Max는 링크 공유 또는 이메일 초대(베타), Team/Enterprise는 기본 조직 내부. 권한 Can view/Commenter/Can edit. (출처: 동일, https://support.claude.com/en/articles/9547008-publish-and-share-artifacts)
- 저장소: Pro/Max/Team/Enterprise 웹·데스크톱에서 개인 저장과 공유 저장, 아티팩트당 20MB, 텍스트만. 민감 정보 입력 전 공유 저장 여부 확인. (출처: 17153992)
- Claude나 커넥터를 쓰는 아티팩트는 링크 공유가 불가. (출처: 17153992, 9547008)
- 레거시 Publish: 2026-09-16 이전 아티팩트만. 게시 취소는 영구적. (출처: 17153992, 9547008)
- 아티팩트는 Docs/Slides/Design 템플릿에서 내보내기(HTML 등)가 가능하나, "직접 만든 계산기"를 파일로 내려받는 방법은 확인하지 못했다. Design은 zip/PDF/PowerPoint/HTML 내보내기. (출처: 17153992)
- Claude Code로 만든 정적 웹페이지는 로컬 `index.html`로 열어 볼 수 있고, 배포는 GitHub Pages를 쓸 수 있다(08편 참조). GitHub Pages는 Actions 워크플로 또는 브랜치에서 배포. (출처: https://raw.githubusercontent.com/github/docs/main/content/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site.md)
- Claude Code가 세션 결과를 비공개 URL 아티팩트로 게시할 수 있다는 서술은 검색 요약 수준이라 본문에서 단정하지 않는다. (C06 연구 파일)

## 따라하기 절차
1. (아티팩트) 채팅에서 견적 계산기 요구사항을 문장으로 설명 -> 아티팩트 생성 -> 수정 요청 반복(수량·단가·할인율·부가세).
2. 계산 검증: 손으로 계산한 값 2~3개와 비교하도록 Claude에게 테스트 케이스를 요청.
3. (Claude Code) 같은 계산기를 `quote.html` 단일 파일로 만들도록 요청 -> 브라우저에서 파일을 연다 -> 필요 시 폴더로 CLAUDE.md 작성.
4. 공유: 아티팩트 공유 설정 확인 또는 파일 전달/GitHub Pages 배포(08편).

## 2026-10-12 재확인 변경
- 공유 표(9547008): 링크 공유는 전 플랜, 이메일 초대(베타)는 Pro/Max/Team/Enterprise(Free 제외 - 기존 서술 정정), 조직 공유 Team/Ent, 그룹 공유 Ent. Commenter는 아티팩트가 제공하는 파일 다운로드 가능. 링크 공유엔 Claude 로그인 필요(레거시 Free/Pro/Max 게시본 예외). 이메일 초대 외부인 50명 한도, 초대 30일 만료.
- 설정 경로(17153992): Settings > Capabilities의 "Cloud code execution and file creation"(Team/Ent는 Organization settings > Capabilities).
- 내보내기(17153992): 템플릿(Docs/Slides/Design)은 Export, 레거시는 패널 상단에서 코드 보기·복사·다운로드. 직접 만든 계산기의 단일 HTML 내려받기 위치는 여전히 명시 없음.

## 확인 못 함
- 아티팩트를 단일 HTML 파일로 내려받는 정확한 메뉴는 확인하지 못했다 -> "화면 안내에 따르세요".
- 공유받는 사람이 Claude 로그인이 필요한지는 "대개 필요"까지만 공식 문서에서 확인.

## 출처 목록
- https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them — 확인일 2026-10-10 (C06 연구 파일 경유)
- https://support.claude.com/en/articles/9547008-publish-and-share-artifacts — 동일
- https://code.claude.com/docs/en/overview — 확인일 2026-10-10
- https://raw.githubusercontent.com/github/docs/main/content/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site.md (GitHub 공식 문서 원본 저장소) — 확인일 2026-10-10
