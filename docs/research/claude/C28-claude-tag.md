# C28. 팀 Slack에서 Claude Tag 쓰기 (조사 노트, 2026-11-04)

## 확인한 출처 (curl 기본 옵션 -L, 한 페이지씩, 모두 200)
- https://support.claude.com/en/articles/15594475-what-is-claude-tag (갱신일 표기 2026-09-24)
- https://claude.com/docs/claude-tag/overview
- https://claude.com/docs/llms.txt (문서 색인)
- https://claude.com/docs/claude-tag/users/getting-started.md
- https://claude.com/docs/claude-tag/users/good-habits.md
- https://claude.com/docs/claude-tag/users/commands.md
- https://claude.com/docs/claude-tag/users/when-claude-responds.md
- https://claude.com/docs/claude-tag/users/memory.md
- https://claude.com/docs/claude-tag/users/troubleshooting.md (일부 절만 읽음: 무응답, 틀린 답, 지침 망각, 한도)
- https://claude.com/docs/claude-tag/concepts/security-and-data.md (앞부분)

## 확인한 사실
- 공개 베타, Team·Enterprise 전용, 개인 플랜(Free/Pro/Max/Ultra)·서드파티 배포 불가. Slack 사용자마다 Claude 좌석 불필요.
- 채널 작업은 조직 사용량 잔액에서 청구, 일대일 DM은 연결한 내 claude.ai 계정·좌석 기준. 그룹 DM은 조직 청구.
- 채널은 `/invite @Claude`(스레드 안에서는 거부), 확인 질문 "what can you access from this channel?". Stop 버튼은 채널 스레드에만.
- 읽기 범위: 스레드, 공개 채널 키워드 검색, 비공개 채널은 내부에서만, 캔버스 불가, 첨부 한도(이미지 ~3.75MB, PDF 5MB, 기타 100MB, 메시지당 5개).
- 명령어: !help !configure !restart !status !mute !unmute !fast !feedback !fork !scheduled (본문은 앞의 일부만 소개).
- 응답 설정 How Claude participates 4가지, 기본 Respond automatically. 👎 버튼은 스레드 음소거, 이모지 반응은 아님.
- 메모리: 채널별, 워크스페이스 노트(공개 채널에서 저장), 누구나 읽고 고칠 수 있음, "remember for this channel:".
- 보안: 샌드박스 임시, 자격 증명은 샌드박스에 없음, 채널 연결은 구성원이 공유, ZDR·CMEK 조직 사용 불가, 건강 정보 BAA 대상 아님(admins/healthcare 페이지 설명은 색인 요약만 확인).
- 제약 지시는 강제가 아니며 저장소 권한·브랜치 보호로 강제하라고 안내.

## 확인하지 못한 것
- 직접 실행하지 않음. 사용량 요금 금액은 읽은 페이지에 없음.
- 읽지 않은 페이지: group-dms, models, proactivity(루틴), prompt-library, use-cases 상세, admins/*, 세션·메모리 보관 기간(data-lifecycle).
- 한국어 대화 품질·한국어 Slack 메뉴명 공식 확인 못 함.
- 기존 automation/41은 2026-10-31 기준이며 그 글의 Claude Tag 항목(DM 청구 등)은 이번에 갱신 확인 안 함. 이번 글은 링크로 중복 회피.
