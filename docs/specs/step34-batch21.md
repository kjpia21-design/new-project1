# 작업 명세 — 34단계: 21차 (Claude 새 에이전트 기능 집중 편성, 4편)

작성: 기획 담당 · 구현: 코딩 에이전트 4명 (F1~F4)

배경: 2026-11 중순 Claude에 에이전트 성격의 기능이 잇달아 나왔다.
- 11-12 **Claude Meetings**(베타, Team·Enterprise): Google Meet에 보이는 참가자로 들어가 회의록·질의응답·아티팩트 생성. https://support.claude.com/en/articles/18325154-use-claude-meetings
- 11-20 **컴퓨터 사용(베타) Team·Enterprise 확대**: Claude Desktop에서 화면을 보고 허용한 앱을 조작. https://support.claude.com/en/articles/18483812-set-up-computer-use-for-team-and-enterprise-plans (Pro·Max용 연구 미리보기는 2026-03-23부터)
- 11-12 **self-hosted Claude Managed Agents**(접근 요청제): https://platform.claude.com/docs/en/managed-agents/self-hosted
- 참고: 앱 릴리스 노트 https://support.claude.com/en/articles/12138966-release-notes, 플랫폼 릴리스 노트 https://platform.claude.com/docs/en/release-notes/overview

규칙은 `docs/specs/step23-batch10.md`의 서두와 "공통" 절, `docs/specs/step25-batch12.md`의 curl 규칙(기본 옵션만, `-L` 허용, 우회 금지)을 따른다. 날짜 `2026-11-22`, `lastVerified: 2026-11-22`, `status: published`. PromptBox 안에는 중괄호를 쓰지 않는다. `claude-news.mdx`는 루틴이 관리하므로 건드리지 않는다. 사용자가 "자세한 설명"을 원했으므로 공식 문서가 말하는 범위 안에서 **설정 단계·권한·데이터 처리·한계**를 빠짐없이 다룬다.

| 담당 | 파일 (두 언어) | 번호 | 제목(안, 영어 / 한국어) | level |
| --- | --- | --- | --- | --- |
| F1 | `claude/c30-claude-meetings.mdx` | C30 | Bring Claude into your meetings with Claude Meetings / Claude Meetings로 회의에 Claude 참여시키기 | practical |
| F2 | `claude/c31-computer-use-team.mdx` | C31 | Computer use for Team and Enterprise: setup and safe use / Team·Enterprise용 컴퓨터 사용: 설정과 안전한 사용 | practical |
| F3 | `dev/23-self-hosted-managed-agents.mdx` | 23 | Run Claude Managed Agents on your own infrastructure / Claude Managed Agents를 자체 인프라에서 운영하기 | advanced |
| F4 | `agents/13-claude-agent-lineup.mdx` | 13 | Claude's agents at a glance: Cowork, computer use, Meetings, Claude Tag and Managed Agents / Claude 에이전트 한눈에 보기 | beginner |

## 편별 지침
- F1: 켜는 법(관리자 기본값: Team 켜짐·Enterprise 꺼짐), Google Calendar 연결·"Add Claude", 회의 중 할 수 있는 일, 참가자 고지·동의(녹음·기록 법규는 지역마다 다름 — 법률 조언 아님), 저장되는 것/안 되는 것, 최대 시간, 제외 조직, 비용·무료 기간은 공식 문서 그대로. automation/37(회의 AI)·C29(관리자)·C28과 연결. PLAN.md에 C30 줄.
- F2: 관리자 켜기 단계(Chat and Cowork unified 선행), 사용자 단계(Desktop 설정·OS 권한), 웹·모바일에서 쓰는 조건, 앱 허용/차단 목록과 그 한계, MDM 키, "샌드박스 없음"·화면 내용에 의한 오동작 경고, 스크린샷 데이터 처리, 제외 조직. C11(Chrome·컴퓨터 사용)·agents/05·C29와 연결. C11 두 언어 본문 끝 "다음에 읽을 글"(또는 그에 해당하는 목록)에 C31 링크 한 줄만 추가(다른 내용은 건드리지 않음). PLAN.md에 C31 줄.
- F3: dev/04(Managed Agents)와 겹치지 않게 self-hosted 차이(무엇을 내 인프라에 두는지, 모델 제공자 선택, 요구 사항, 접근 요청)를 중심으로. 실행하지 않았음을 명시, 키는 자리표시자.
- F4: 위 기능과 기존 Cowork(C19)·Claude in Chrome(C11)·Claude Tag(C28)·Managed Agents(dev/04)를 한 표로: 무엇을 하나 / 어디서 / 누가(플랜) / 상태(베타 등) / 언제 쓰면 좋은가. 사실은 각 공식 페이지(또는 해당 편의 조사 노트)로 확인한 것만. 새 편 C30·C31·dev/23으로 링크(파일 이름 그대로).

## 공통
- 자기 파일(두 언어)·조사 노트만 수정(F1·F2는 PLAN.md 한 줄, F2는 C11 링크 한 줄 추가). PLAN.md는 두 에이전트가 동시에 고치므로 자기 줄만 추가하고 다른 줄은 건드리지 않는다.
- 빌드 `npx astro build --outDir /tmp/build-<담당>`(공유 캐시 충돌·다른 에이전트 작성 중 파일 오류 시 잠시 후 재시도; 아직 없는 다른 새 편 링크로 실패하면 기다렸다 재시도). git 커밋·푸시 금지.
- 보고: 만든/고친 파일, 확인한 공식 URL, 확인하지 못한 항목, 빌드 결과.
