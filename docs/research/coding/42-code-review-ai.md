# 조사 노트 — coding 42: 병합 전에 AI로 코드 리뷰하기

조사일: 2026-11-02 / 조사: W4. 공식 페이지를 기본 옵션 `curl -sS -L`로 한 페이지씩 받아(헤더·UA 변경 없음) 텍스트로 변환해 읽음. 모두 HTTP 200.

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/code-review (관리형 Code Review)
- Team·Enterprise 플랜, GitHub 저장소(GitHub Enterprise Server·ghe.com 포함). Zero Data Retention·HIPAA 구성 조직은 불가, Anthropic BAA 대상 아님, CMEK 조직은 아직 불가.
- "AI로 리뷰하며 버그·취약점을 놓칠 수 있고, 지적이 없다고 오류 없음·안전함을 뜻하지 않음". 리뷰는 PR을 승인하거나 막지 않음.
- 4단계 Find/Verify/Rank/Post. 인라인 댓글(심각도 순) + 요약 + "Claude Code Review" 체크 실행(실패로 끝나지 않음).
- 레벨 Quick/Standard(기본)/Deep. 저장소별 실행 시점: PR 열 때 한 번, 푸시마다, 요청 시에만. 쓰기 권한자는 `@claude review` 댓글로 시작.
- Anthropic 인프라에서 실행, 저장소 접근은 읽기 전용, 커밋 푸시 없음, 코드를 빌드·실행하지 않음. `REVIEW.md`는 기준/기본 브랜치에서만 읽음. 초안·포크 PR 제외.
- 방법 비교 표(Code Review, /code-review, Ultrareview, 내 CI, 직접 만든 리뷰어).
### https://code.claude.com/docs/en/code-review-local (/code-review)
- 모든 플랜, 내 세션에서 실행(사용량·API 요금에 포함). `/review`는 별칭(v2.1.223 이전은 별개 명령).
- 대상 지정 표(PR 번호, 브랜치 비교, 커밋 범위, 경로). 기본 대상: 업스트림 앞선 커밋 + 커밋 안 한 변경, 업스트림 없으면 main 또는 이전 커밋.
- `--fix`(권한 모드를 거쳐 작업 폴더에 적용), `--comment`(GitHub PR 인라인 댓글 / GitLab MR 노트 하나). 백그라운드 리뷰의 --fix 수정은 체크포인트 밖이라 /rewind가 일부만 복원 -> git 사용. `CLAUDE.md`는 따르고 `REVIEW.md`는 읽지 않음.
- `--max-findings`(v2.1.288 이상), `--post`(v2.1.227 이상)는 본문에서 다루지 않음. 페이지의 effort 수준 설명도 일부만 읽음.
### https://code.claude.com/docs/en/github-actions (GitHub Actions)
- `/install-github-app`(github.com만, 저장소 관리자 권한, gh CLI 필요), 수동 설정(앱 설치, ANTHROPIC_API_KEY 또는 CLAUDE_CODE_OAUTH_TOKEN, examples/claude.yml).
- 리뷰 워크플로 예제: `anthropics/claude-code-action@v1`, `code-review@claude-plugins-official` 플러그인, 프롬프트 `/code-review:code-review --comment ...`, `claude_args`의 `--allowedTools "mcp__github_inline_comment__create_inline_comment"` 유지. `--comment` 없으면 로그에만 남음. 공개 저장소의 포크 PR에는 비밀 값 미제공.
- 자격 증명은 GitHub Secrets, 필요한 권한만, 병합 전 변경 검토. 비용은 GitHub Actions 분 + API 토큰.
### https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review (Copilot 코드 리뷰)
- PR의 Reviewers에서 Copilot 옆 Request. 보통 30초 이내. 심각도 High/Medium/Low. 기본은 "Comment" 리뷰(필수 승인에 불포함), 승인은 기본 꺼짐이며 기업·조직·저장소 수준에서 설정.
- 수정 제안 적용, Fix with Copilot(Copilot 코드 리뷰 + 클라우드 에이전트 필요). 자동 리뷰 시 "Review new pushes"를 켜지 않으면 새 푸시 재리뷰 안 함, 해결한 댓글을 반복할 수 있음. Copilot 댓글에 단 내 댓글은 Copilot이 보지 못함.
- 노력 수준 Lite/Balanced/Max와 리뷰당 대략 평균 비용(약 $0.25 / $1.50 / $10, 페이지 기준 대략치라 본문에는 숫자를 쓰지 않음).
- 지침: `.github/copilot-instructions.md`, `AGENTS.md`, `.github/instructions/**/*.instructions.md`, CLAUDE.md·GEMINI.md·REVIEW.md도 읽음. head 브랜치의 지침 사용. 에이전트 스킬·MCP 사용 가능, 환경은 `copilot-setup-steps.yml`/`copilot-code-review.yml`.
- VS Code: 선택 영역 리뷰, 커밋 안 한 변경 리뷰.

## 로컬 시험
- 실행하지 않음. `/code-review`, 워크플로 설정, Copilot 리뷰 요청 모두 하지 않았고 본문에 명시.

## 확인하지 못한 것
- Copilot 코드 리뷰가 어떤 Copilot 플랜(Free/Pro/Business 등)에 포함되는지(이 페이지 본문에서 확인되지 않음), Copilot의 데이터 보관·전송 상세.
- Code Review 비용·월 지출 한도(code-review-costs 페이지), 설정(code-review-setup), REVIEW.md 작성 상세(code-review-customize)는 읽지 않음. REVIEW.md 예시는 학습용 예시이며 공식 예시가 아님.
- Ultrareview, GitLab CI/CD, 클라우드 제공업체(Bedrock 등) 경로는 다루지 않음.
- 명령의 실제 출력 모양, 문서와 최신 Claude Code 버전의 일치.
