# agents/13 조사 노트 (Claude 에이전트 한눈에 보기)

확인일 2026-11-22. 한 페이지씩 기본 curl(-L)로 열람(모두 HTTP 200), HTML에서 텍스트만 추출해 읽음. 차단 우회 없음.

## 열람한 공식 페이지
- https://support.claude.com/en/articles/18325154-use-claude-meetings
- https://support.claude.com/en/articles/18483812-set-up-computer-use-for-team-and-enterprise-plans
- https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork
- https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
- https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome
- https://support.claude.com/en/articles/15594475-what-is-claude-tag
- https://support.claude.com/en/articles/12138966-release-notes
- https://platform.claude.com/docs/en/managed-agents/overview
- https://platform.claude.com/docs/en/managed-agents/self-hosted
- https://platform.claude.com/docs/en/release-notes/overview
- 사이트 내 조사 노트: claude/c19-cowork.md, claude/C11-chrome-computer-use.md, claude/C28-claude-tag.md, dev/04-managed-agents.md

## 확인한 사실 (2026-11-22)
- Cowork: 유료 플랜(Pro, Max, Ultra, Team, Enterprise). Desktop macOS·Windows·Linux(베타) 모든 유료 플랜. 웹·모바일은 Pro/Max/Ultra/Team(Team은 베타), Enterprise는 오너가 켠 경우. Chrome 사이드 패널은 모든 유료 플랜(Enterprise는 오너가 Claude in Chrome과 클라우드 Cowork를 켜야 함). Team·Enterprise 새 Claude 경험은 Chat and Cowork unified가 켜진 곳.
- Claude in Chrome: 유료 플랜, 사이드 패널은 Cowork 세션으로 실행. 도움말은 Claude in Chrome 자체를 베타로 표기하지 않음. Claude Desktop 내장 브라우저도 안내(Settings > Cowork > Preferred browser).
- 컴퓨터 사용: Pro/Max/Ultra는 Cowork·Claude Code(Desktop, macOS·Windows). Team·Enterprise는 베타, 오너가 켜기 전 꺼짐, 점진적 제공, 새 Claude 경험(Chat and Cowork unified 선행)에서만(별도 Cowork 작업·Claude Code에서는 불가). Desktop macOS 14 이상 또는 Windows. 웹·모바일은 Computer access가 켜지고 Desktop이 열린 컴퓨터가 있을 때. 켤 수 없는 조직: HIPAA 대응 구성, Claude Code ZDR, CMEK, FERPA/K-12. 샌드박스 없음, 스크린샷은 대화와 함께 저장. 릴리스 노트 2026-11-20 항목(Team·Enterprise 베타), 2026-03-23 항목(Pro·Max 연구 미리보기).
- Meetings: Team·Enterprise 베타(Claude, Claude Desktop). Team 기본 켜짐, Enterprise 오너가 켬. Google Calendar 연결 후 Add Claude. 트랜스크립트·요약·화면 설명 저장, 오디오 아님. ZDR·HIPAA 대응·CMEK 조직은 베타 중 불가. 최대 8시간. 노트·트랜스크립트·AI 답변은 Team·Enterprise에 포함, 문서·화이트보드는 2027-02-10까지 무료. 릴리스 노트 2026-11-12.
- Claude Tag: Team·Enterprise 베타, Slack. (Claude in Slack은 2026-08-03에 Tag로 전환됐다는 문구 확인.) 개인 플랜 제외는 기존 C28 노트의 문서 기준이며 이번 Tag 도움말 페이지에서는 Team·Enterprise 제공만 확인.
- Managed Agents: 개요 페이지 상단 Beta 표시, 베타 헤더 managed-agents-2026-04-01, ZDR·HIPAA 대상 아님, 모든 API 계정에서 기본 활성화.
- self-hosted Managed Agents: 플랫폼 릴리스 노트 2026-11-12 출시. 접근은 Anthropic 담당 팀에 요청. 서비스와 샌드박스를 내가 호스팅, 모델은 Anthropic 또는 내가 고른 제공자.

## 확인하지 못함
- Cowork 자체의 베타 여부(Cowork 도움말은 Desktop Linux·Team 웹/모바일만 베타로 표기, Cowork 전체를 베타로 적지 않음).
- 각 기능의 플랜별 사용량 수치·요금(Meetings 연결 도구 사용 요금 포함).
- Claude Tag 개인 플랜 제외 여부를 이번에 다시 확인하지 못함(Tag 도움말은 Team·Enterprise만 언급).
- C30·C31·dev/23 본문은 다른 에이전트가 작성 중이라 내용 대조 못 함(링크만).
- 직접 실행 안 함.

## 파일
- src/content/docs/agents/13-claude-agent-lineup.mdx, src/content/docs/ko/agents/13-claude-agent-lineup.mdx
