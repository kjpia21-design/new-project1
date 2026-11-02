# 조사 노트 — coding 44: Claude Code로 커밋·브랜치·PR 다루기

조사일: 2026-11-02 / 조사: A4. 공식 페이지를 기본 옵션 `curl -sL`로 한 페이지씩 받아(헤더·UA 변경 없음) 텍스트로 변환해 읽음. 모두 HTTP 200.

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/common-workflows
- "Create pull requests": "create a pr for my changes"로 직접 요청하거나 3단계(변경 요약 → `create a pr` → "enhance the PR description with more context about the security improvements"). 세션 재발견: `claude --from-pr 1234`(자기 PR 번호) 또는 `/resume` 선택기에 PR URL 붙여 넣기. `gh pr create`/`glab mr create`로 만들 때, 기존 PR 작업 시 세션이 PR에 연결됨. "Review Claude's generated PR before submitting and ask Claude to highlight potential risks".
- "Run parallel sessions with worktrees": `claude --worktree feature-auth`, 브랜치별 별도 체크아웃, 커밋 최소 1개 필요, 커밋 없으면 `Failed to resolve base branch "HEAD": git rev-parse failed`. 정리·.worktreeinclude는 Worktrees 페이지(읽지 않음).
### https://code.claude.com/docs/en/best-practices
- `gh`가 설치·로그인되어 있으면 Claude가 PR을 열고 리뷰 댓글을 설명 없이 읽음.
- permissions 예시: `"ask": ["Bash(git push *)"]`, deny `Read(./.env)` 등. 규칙은 도구 호출에 맞춰짐(의도 아님). 자동 모드는 production deploy, 남의 작업을 덮어쓰는 force push 같은 것을 이미 막는다고 함. "never" 규칙은 deny 규칙·훅에.
- `Esc`, `/rewind`(빈 프롬프트에서 `Esc` 두 번), 체크포인트는 Claude의 파일 편집 도구로 고친 파일만, Bash로만 바뀐 파일은 복원 안 됨, git과 함께 사용. `/code-review`는 새 서브에이전트.
### https://code.claude.com/docs/en/checkpointing
- Bash 명령 변경·외부 변경은 추적 안 됨, git 같은 버전 관리 사용. 체크포인트는 세션 단위 복구용이고 커밋·브랜치·장기 이력은 Git.
### https://code.claude.com/docs/en/github-actions
- 받기만 함(HTTP 200). 본문에서 내용을 인용하지 않음(GitHub Actions 자동화는 다루지 않음).

## 로컬 시험
- 실행하지 않음. Claude Code, git, gh 모두 시험하지 않았고 본문에 명시.

## 확인하지 못한 것 / 우리 조언(공식 문구 아님)
- 커밋 메시지 작성 방법(50자·명령형)은 일반 Git 관례로 공식 문서에 없음. 공식 페이지에 "커밋 메시지 자동 작성" 전용 절은 이번에 읽은 범위에서 찾지 못함.
- `git commit --amend`, `git revert`, `git restore`, `git switch -c`는 일반 Git 사용법(Claude Code 문서 출처 아님).
- PR 생성에 필요한 정확한 사전 조건과 실패 시 오류 메시지, `glab` 세부, Worktrees 정리 방법은 확인하지 못함.
- 푸시 전 `ask` 규칙의 정확한 매칭·한계 전체, 최신 버전 일치 여부.
