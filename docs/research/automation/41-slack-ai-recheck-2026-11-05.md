# automation/41 Claude Tag 서술 재확인 (2026-11-05)

대상: `src/content/docs/automation/41-slack-ai.mdx`, `src/content/docs/ko/automation/41-slack-ai.mdx` (두 언어 동일하게 수정, lastVerified 2026-11-05).
확인 방법: curl 기본 옵션 -L, 한 페이지씩 (모두 200).

## 읽은 출처
- https://claude.com/docs/llms.txt
- https://support.claude.com/en/articles/15594475-what-is-claude-tag (2026-09-24 표기)
- https://claude.com/docs/claude-tag/overview.md
- https://claude.com/docs/claude-tag/admins/setup-overview.md
- https://claude.com/docs/claude-tag/admins/set-spend-limit.md
- https://claude.com/docs/claude-tag/admins/restrict-access.md
- https://claude.com/docs/claude-tag/admins/migrate-from-earlier.md
- https://claude.com/docs/claude-tag/admins/audit.md
- https://claude.com/docs/claude-tag/admins/customize.md
- https://claude.com/docs/claude-tag/concepts/data-lifecycle.md

## 고친 곳
1. 설정 권한 (요약 줄 + 표 "Who can configure")
   - 전: "Only Owners can configure it" / "Only the Primary Owner or an Owner. The Admin role can't."
   - 후: Owner가 설정, Admin 불가는 유지 + Enterprise에서는 Owner가 Claude Tag Admin 권한·채널 관리자로 많은 권한을 위임 가능.
   - 근거: https://claude.com/docs/claude-tag/admins/restrict-access.md (Delegate Claude Tag administration, channel managers), https://claude.com/docs/claude-tag/admins/customize.md, https://support.claude.com/en/articles/15594475-what-is-claude-tag (Primary Owner/Owner, Admin 불가)
2. 한도 경고 비율
   - 전: "관리자에게 75%·95%에서 알림"
   - 후: 도움말은 관리자 알림 75%·95%, 지출 한도 문서는 Claude가 Slack 채널에 75%·90% 경고를 올린다고 해서 두 출처가 다름. 확인 못 함으로 표기. "거절"(declined) 표현은 출처 문구에 맞춤.
   - 근거: https://support.claude.com/en/articles/15594475-what-is-claude-tag , https://claude.com/docs/claude-tag/admins/set-spend-limit.md
3. 데이터 보관·삭제 줄
   - 전: "Slack 보관 정책을 따르고, 연동을 끊거나 앱을 지우면 30일 안에 삭제"
   - 후: Slack 안 메시지는 Slack 보관 설정, Claude 쪽은 베타 중 자동 보관 기간 없음(삭제 전까지 보관, 워크스페이스 연결 해제·앱 삭제로 삭제). 30일은 도움말에만 있고 문서에는 시점이 없어 "확인하지 못함"으로 표기.
   - 근거: https://claude.com/docs/claude-tag/concepts/data-lifecycle.md ("How long data is kept", Actions in Claude), https://support.claude.com/en/articles/15594475-what-is-claude-tag
4. 시작 순서 FlowSteps 1단계
   - 전: "Claude 앱 설치 후 @Claude connect 입력 → 페어링 코드"
   - 후: Slack 워크스페이스 관리자가 설치·`@Claude connect` 실행(Claude를 채널에 추가한 뒤), 코드는 1회용·15분 만료.
   - 근거: https://claude.com/docs/claude-tag/admins/setup-overview.md (Pair your Slack workspace)
5. 표 머리글 기준일 2026-10-31 → 2026-11-05 (재확인 반영).

## 맞다고 확인해 그대로 둔 것
- 2026-08-03 Claude in Slack → Claude Tag 전환, Team·Enterprise 베타, 개인 플랜(Free/Pro/Max/Ultra) 불가, 세 접점(채널 태그·DM·AI 어시스턴트 패널), 채널 작업은 조직 청구·좌석 불필요·좌석당 추가 요금 없음, DM·패널은 내 계정 기능 사용 (support 글, overview).
- 외부 시스템 접근 없이 시작(migrate-from-earlier), 임시 샌드박스(overview), Member Access 세 모드(support 글), 3단계 접근 범위, 게스트 채널 기본 Restrict(restrict-access), 메모리 Owner 열람·수정·삭제와 Activity 위치(support 글, audit), Primary Owner/Owner 외 Admin 불가(support 글).

## 확인하지 못한 항목
- 한도 경고 정확한 비율(75/95 vs 75/90).
- Claude 쪽 대화 삭제 "30일" 시점.
- 이 글은 실제로 Claude Tag를 실행해 보지 않았고 공식 페이지 대조만 했다. 읽지 않은 페이지: group-dms, models, proactivity, admins/healthcare 등.
