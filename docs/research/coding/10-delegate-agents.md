# coding/10 반복 업무를 에이전트에게 맡기기 (스킬, 루틴, 서브에이전트)

## 핵심 사실
### 스킬 (C08 연구 파일 재사용)
- Claude Code 스킬: `~/.claude/skills/<name>/SKILL.md`(개인), `.claude/skills/<name>/SKILL.md`(프로젝트). `/skill-name`으로 호출하거나 description에 맞으면 Claude가 자동 로드. frontmatter `name`, `description` 등. 본문에 `` !`git diff HEAD` `` 로 실시간 명령 결과 삽입 가능. 예: `summarize-changes`. 커스텀 명령은 스킬로 통합(`.claude/commands/deploy.md`와 `.claude/skills/deploy/SKILL.md` 둘 다 `/deploy` 생성). (출처: https://code.claude.com/docs/en/skills)
- 스킬은 서드파티 코드를 포함할 수 있으므로 신뢰할 수 있는 출처만, 비밀 하드코딩 금지. (출처: https://support.claude.com/en/articles/12512180-use-skills-in-claude)
- 파일명 표기: 지원센터 `skill.md`, Claude Code 문서 `SKILL.md`. (C08 연구 파일)
### 루틴 (routines 원문 재확인)
- 루틴 = 프롬프트 + 저장소 + 커넥터를 저장해 클라우드에서 자동 실행. 리서치 프리뷰. Pro/Max/Team/Enterprise. 트리거: Schedule, API, GitHub event. (출처: https://code.claude.com/docs/en/routines)
- 생성: claude.ai/code/routines > New routine > 이름·프롬프트 > 저장소 > 환경 > 트리거 > 커넥터 검토 > Create. CLI: `/schedule`(예: `/schedule daily PR review at 9am`). 데스크톱 앱 Code 탭의 Routines > New routine > Cloud. (출처: 동일)
- 프롬프트는 자기완결적이고 성공 기준이 명확해야 함. 자율 실행(권한 모드 선택 없음), 승인 없이 셸 명령·커넥터 호출. 커넥터는 기본 전체 포함 -> 필요한 것만 남길 것. (출처: 동일)
- 스케줄 프리셋: hourly, daily, weekdays, weekly. 최소 간격 1시간. 정각은 늦게 시작할 수 있으니 9:07처럼. 시간은 로컬 시간대 입력. 일회성 스케줄 가능. (출처: 동일)
- 한도: 스케줄 실행 계정당 시간당 100회, Run now/API는 루틴당 시간당 30회 등. 이 시간당 한도에는 초과 과금 없음. 구독 사용량 한도 도달 시 usage credits가 켜져 있으면 종량제로 계속, 아니면 리셋까지 거부. (출처: 동일)
- 실행 상태 초록색은 "인프라 오류 없이 종료"일 뿐 작업 성공이 아님 -> 실행 기록(transcript) 열어 확인. (출처: 동일)
- 개인 계정 소유, 팀원과 공유 안 됨. 커밋·PR은 내 GitHub 사용자로 남음. `claude/` 접두사 브랜치에 push. GitHub 연결이 끊기면 최대 72시간 실행을 건너뛰다 이후 꺼짐. (출처: 동일)
- 예시 용도: 백로그 정리, 알림 분류, PR 검토, 배포 검증, 문서 드리프트(주간 PR 스캔 후 문서 갱신 PR), 라이브러리 포트. (출처: 동일)
- 로컬 대안: Desktop scheduled tasks(내 컴퓨터, 로컬 파일 접근), `/loop`(CLI 세션 안). (출처: 동일, https://code.claude.com/docs/en/overview)
- 클라우드 세션 안에서는 `/schedule`이 안 되고 웹 UI에서 관리. (출처: routines Troubleshooting)
### 서브에이전트 (C14 연구 파일 재사용)
- 서브에이전트 = 자체 컨텍스트·시스템 프롬프트·도구 권한을 가진 보조 에이전트, 요약만 돌려줌. 정의: Markdown + YAML frontmatter, `.claude/agents/`. 필수 필드 `name`, `description`. `model`: sonnet/opus/haiku/fable/전체 ID/inherit. 예시 `code-reviewer`(tools: Read, Glob, Grep; model: sonnet). `/agents`는 현재 안내 문구만 출력(v2.1.197 이하는 마법사). (출처: https://code.claude.com/docs/en/sub-agents)
### 시나리오 구성 (이 사이트의 예시 제안, 공식 사례 아님)
- 주간 상태 보고서 초안: 스킬(보고서 형식) + 스케줄 루틴(매주 금요일 등) + 서브에이전트(자료 수집/검토 분리).
- 문서 최신화: 루틴이 매주 PR을 훑어 문서 수정 PR을 만든다(공식 예시 "Docs drift"를 업무에 맞춤).

## 따라하기 절차
1. 반복 업무 하나를 고르고 입력·출력·성공 기준을 적는다.
2. 로컬에서 먼저 손으로 한 번 실행(채팅/Claude Code).
3. 같은 형식이 반복되면 SKILL.md로 만든다.
4. 독립적인 조사·검토는 서브에이전트에게.
5. 스케줄 루틴 생성(웹 또는 /schedule), Run now로 시험, 실행 기록 확인.
6. 한도·승인·커넥터 최소화 점검.

## 확인 못 함
- 루틴이 플랜별로 몇 번 실행 가능한지(구독 사용량 수치)는 비공개/확인 못 함. 대신 시간당 한도만 확인.
- 루틴 안에서 서브에이전트가 사용 가능한지 별도 설명은 확인하지 못함(세션이므로 가능하다고 단정하지 않음).
- 서브에이전트 문서 마지막 구간 미확인(C14 연구 파일).

## 출처 목록
- https://code.claude.com/docs/en/routines — 확인일 2026-10-10 (원문 재확인)
- https://code.claude.com/docs/en/skills — 확인일 2026-10-10 (C08 연구 파일 경유)
- https://code.claude.com/docs/en/sub-agents — 확인일 2026-10-10 (C14 연구 파일 경유)
- https://code.claude.com/docs/en/overview — 확인일 2026-10-10
- https://support.claude.com/en/articles/12512180-use-skills-in-claude (C08 경유)
