# coding/08 클라우드 세션으로 GitHub 작업 (README 개선 -> PR -> 병합 -> Pages 배포)

## 핵심 사실
### Claude 쪽 (C13 연구 파일 + web-quickstart 원문 재확인)
- 클라우드 세션 시작: claude.ai/code 접속 -> GitHub 로그인/승인 -> 저장소 선택기(입력창 아래)에서 저장소·브랜치 선택 -> 권한 모드 선택(Auto, Accept edits, Plan; Manual·Bypass 없음) -> 작업 입력 후 Enter. 작업마다 별도 세션과 브랜치. (출처: https://code.claude.com/docs/en/web-quickstart)
- 연결: 브라우저 연결로 공개 저장소는 클론 가능하지만 비공개 저장소는 Claude GitHub App이 설치된 곳만. 새 프로젝트는 GitHub에서 빈 저장소를 먼저 만든다. 건너뛰고 나중에 설치도 가능(Skip). (출처: 동일)
- Pro/Max는 온보딩이 Default 환경을 만든다. Default는 Trusted 네트워크. (출처: 동일)
- 끝나면 브랜치를 push. diff 표시기(예: +42 -18)를 눌러 diff 뷰, 줄 선택해 인라인 코멘트(다음 메시지와 묶여 전송), 상단 Create PR -> 전체 PR, 초안(draft), GitHub 작성 페이지 중 선택. PR 후에도 세션 유지. (출처: 동일)
- 루틴/브랜치: 루틴은 claude/ 접두사 브랜치에 push. 세션 브랜치 접두사에 대한 문서 기술은 루틴 기준이며 일반 세션은 확인하지 않았다. (출처: https://code.claude.com/docs/en/routines)
- 탭을 닫아도 세션은 계속 실행된다. (출처: web-quickstart)
- `/web-setup` 대안, 문제 해결: "No repositories appear" -> 비공개 저장소는 Claude GitHub App 설치 필요. (출처: web-quickstart)
- 요금: 별도 VM 요금 없이 플랜 사용량에 합산. (출처: 동일)
### GitHub 쪽 (GitHub 공식 문서 원본 저장소 raw 파일)
- Pages 게시 소스: Settings > Pages > Build and deployment > Source에서 "Deploy from a branch" 또는 "GitHub Actions" 선택. (출처: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- 워크플로 템플릿은 `github-pages` 환경을 쓰며, 환경이 없으면 자동 생성된다. 기본 브랜치만 이 환경에 배포하도록 보호 규칙을 추가하길 권장. (출처: 동일)
- 기본 브랜치 변경: 저장소 admin 권한 필요, 브랜치가 둘 이상이어야 함. (출처: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch) 메뉴 경로는 docs.github.com 렌더링 페이지에서 확인: Settings > "Default branch" 항목 옆 전환 아이콘 > 브랜치 선택 > Update > "I understand, update the default branch" (2026-10-10).
- 환경 배포 브랜치 규칙: 저장소 Settings의 Environments에서 환경 선택 -> "Deployment branches" 드롭다운 -> "Selected branches and tags" 선택 시 "Add deployment branch or tag rule" -> Ref type(Branch/Tag) -> 이름 패턴 -> Add rule. (출처: https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments)
- 환경 암묵 생성 시 소스 브랜치가 보호 규칙으로 추가된다는 서술이 있다(브랜치/폴더 소스의 암묵 빌드). (출처: 동일)
- 실패한 실행 재실행: 실행 페이지에서 Re-run jobs 드롭다운 > Re-run all jobs(실패한 작업이 있을 때), 없으면 Re-run all jobs 버튼. (출처: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs)
- Astro 사이트의 GitHub Pages 배포: `.github/workflows/deploy.yml`(withastro/action + actions/deploy-pages), astro.config의 `site`·`base` 설정, Settings > Pages > Source를 GitHub Actions로. (출처: https://raw.githubusercontent.com/withastro/docs/main/src/content/docs/en/guides/deploy/github.mdx)
- Pages 게시에 최대 20분 걸릴 수 있다는 reusable(twenty-minutes-to-publish)이 있으나 본문 문구는 읽지 못함.
### 실제 겪은 문제 (명세 제공 사실관계, 이 사이트 제작 중 발생)
- 빈 저장소에 처음 올린 브랜치가 default branch가 되어 나중에 만든 main에서 시작된 Pages 배포가 거부됨. 에러: `Branch "main" is not allowed to deploy to github-pages due to environment protection rules.` 해결 3가지(Default branch 변경 / Environments > github-pages > Deployment branches and tags에 main 규칙 추가 / 실패 실행 Re-run). 위 GitHub 문서의 환경 보호 규칙·재실행 설명과 일치한다.

## 따라하기 절차
1. GitHub 저장소 준비(없으면 새로 만들고 README 포함).
2. claude.ai/code에서 저장소 선택, Plan 모드로 README 개선안 먼저 받기 -> 승인 -> Accept edits로 실행.
3. diff 검토, 인라인 코멘트, Create PR.
4. GitHub에서 PR을 Merge.
5. Pages 배포: 워크플로 추가 요청(이 역시 Claude에게 PR로), Settings > Pages > Source: GitHub Actions, Actions 탭에서 실행 확인, 실패 시 위 3가지.

## 확인 못 함
- Settings > Pages와 Environments 화면의 최신 한국어 표기, 병합 버튼 문구: GitHub 화면은 언어 설정에 따라 다름 -> 영어 표기 병기, "화면 안내에 따르세요".
- 일반 클라우드 세션이 push하는 브랜치 이름 규칙(루틴 외)은 확인 못 함.
- Pages 무료 사용 조건(비공개 저장소 가능 여부 등)은 확인 못 함 -> GitHub 공식 문서에서 확인하세요.

## 출처 목록
- https://code.claude.com/docs/en/web-quickstart — 확인일 2026-10-10
- https://code.claude.com/docs/en/claude-code-on-the-web (C13 연구 파일 경유)
- https://code.claude.com/docs/en/routines — 확인일 2026-10-10
- GitHub 공식 문서 원본(github/docs) raw 파일 4종 (위 URL) — 확인일 2026-10-10. docs.github.com 직접 접속은 이 환경에서 차단되어 원본 저장소를 읽었다.
- https://raw.githubusercontent.com/withastro/docs/main/src/content/docs/en/guides/deploy/github.mdx — 확인일 2026-10-10

## 5단계 원문 대조 (2026-10-10, docs.github.com 렌더링 페이지 확인)
- Pages 게시 소스: Settings > 사이드바 "Code, planning, and automation" > Pages > Build and deployment > Source = Deploy from a branch 또는 GitHub Actions. admin/maintainer 권한 필요. Visit site 링크 존재, 반영까지 최대 10분 안내.
- 환경: Settings > Environments > Deployment branches 드롭다운 > Selected branches and tags > Add deployment branch or tag rule > Ref type(Branch/Tag) > 이름 패턴 > Add rule.
- 재실행: Actions > 워크플로 > 실행 > 실패한 작업이 있으면 Re-run jobs 드롭다운 > Re-run all jobs, 없으면 Re-run all jobs 버튼. 재실행은 최초 실행 후 30일 이내, 최대 50회.
- 기본 브랜치 변경: admin 권한, 브랜치 2개 이상 필요.
