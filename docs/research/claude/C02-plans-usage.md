# 요금제와 사용량 한도 (Free / Pro / Max / Team / Enterprise)

## 핵심 사실
### 요금제 (https://claude.com/pricing 기준; anthropic.com/pricing은 claude.com/pricing으로 301 리디렉션됨)
- Free: $0. 웹/데스크톱/모바일 채팅, 웹 검색, 파일 생성·코드 실행, 메모리, Artifacts, Claude Design/Slides/Docs, 프로젝트 최대 5개. Claude Code 없음. (출처: https://claude.com/pricing)
- Pro: 연간 결제 시 월 $17(선결제 $200), 월 결제 시 월 $20. Free 대비 5시간 세션당 최소 5배 사용량. Claude Code, 무제한 프로젝트, Opus 등 더 많은 모델, Claude in Chrome, Microsoft 365 연동, 작업 인계·스케줄링 포함. usage credits 사용 가능. (출처: 동일)
- Max: 월 $100부터(월 결제). 5시간 세션당 Pro의 5배 또는 20배. Max 5x $100/월, Max 20x $200/월. 더 높은 출력 한도, 신기능 조기 접근, 혼잡 시 우선 접근, 월 $100~$200의 Claude Platform API 크레딧. Max 플랜은 월 단위 결제만. (출처: https://claude.com/pricing , https://support.claude.com/en/articles/11049741-what-is-the-max-plan)
- Team(2~150명): 스탠더드 좌석 연간 월 $20/월 결제 시 $25, 프리미엄 좌석 연간 $100/월 결제 시 $125. 스탠더드는 Pro의 세션당 1.25배, 프리미엄은 6.25배(Pro 대비). 최소 2명. Claude Code, Cowork, Projects, 중앙 청구, SSO, 관리자 커넥터 통제, 기본적으로 콘텐츠로 모델 학습 안 함, 월 풀링 API 크레딧(최대 $500/월). (출처: https://claude.com/pricing , https://support.claude.com/en/articles/9266767-what-is-the-team-plan)
- Enterprise: 좌석당 연 결제 월 $20 + 사용량은 API 요율로 청구(고정 배수 없음). 지출 한도, 역할 기반 접근, SCIM, 감사 로그, Compliance API, 맞춤 데이터 보존, IP 허용 목록, HIPAA 대응. 셀프서비스 또는 영업 경유. (출처: https://claude.com/pricing)
- 사용량 기반 Enterprise(셀프서브 포함)는 좌석별 사용 한도가 없고 API 요율로 과금. 구형 Enterprise는 Chat + Claude Code 좌석과 Premium 좌석이 존재. (출처: https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan)
### 사용량 한도
- 유료 플랜은 5시간마다 리셋되는 "세션 한도"와 주 1회 리셋되는 "주간 한도"가 있다. 주간 한도는 모든 모델에 적용되며 계정마다 정해진 고정 시각에 리셋. 다음 리셋은 Settings > Usage에서 확인. (출처: https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work , https://support.claude.com/en/articles/8325606-what-is-the-pro-plan)
- 사용량은 대화 길이·복잡도, 사용 기능, 모델, 선택한 effort, 플랜에 좌우된다. (출처: 11647753 문서)
- Claude(웹/앱)·Claude Code·Desktop은 같은 한도를 공유한다. VS Code/Cursor/JetBrains 사용도 합산. `/status`·`/usage`로 확인. (출처: https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan)
- Team 한도는 팀 전체가 아니라 구성원별. (출처: Team 플랜 문서)
- 정확한 토큰/메시지 수치(예: 세션당 몇 개)는 공식 문서에 없다. 길이·모델에 따라 달라진다고만 설명. (출처: Pro 플랜 문서)
### 모델별 별도 주간 한도 / Fable (공식 문서 간 서술이 다름)
- Claude Code용 Pro/Max 문서: "Max 플랜은 Fable에 대한 별도의 주간 한도도 있다." (출처: https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan)
- "Claude Fable models on your plan" 문서: Fable 5/5.1은 모든 유료 플랜에서 사용 가능(Free 제외). Max·Team 프리미엄 좌석·Enterprise 프리미엄 좌석은 플랜에 포함되며 "주간 한도의 최대 50%까지 추가 비용 없이" Fable에 쓸 수 있다. 이 50%는 추가 용량이 아니라 같은 주간 한도 안의 상한이고 Fable은 다른 모델보다 한도를 더 빨리 소모한다. Pro·Team 스탠더드·Enterprise 스탠더드 좌석은 Fable이 플랜 한도에 포함되지 않고 usage credits(종량)로만 사용. Claude Code는 Fable 5에 v2.1.170+, Fable 5.1에 v2.1.255+ 필요. (출처: https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan)
- Claude Code에서 "You've hit your Opus limit"/"Sonnet limit" 같은 모델 계열별 메시지 후에는 `/model`로 다른 계열로 바꾸면 계속 작업 가능. 반면 "session limit"/"weekly limit" 메시지는 전 모델 공통이라 모델 전환으로 해결 안 됨. (출처: https://code.claude.com/docs/en/costs)
### 추가 사용량 (Usage credits = extra usage)
- 한도를 다 쓴 뒤 막히는 대신 표준 API 요율의 종량제로 이어서 쓰게 해 준다. 대상: Pro, Max 5x, Max 20x(그리고 Team, 좌석제 Enterprise). Pro는 5시간/주간 한도 후, Max는 5시간·주간·Fable 주간 한도 후에 적용. (출처: https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans , 11145838 문서)
- 켜는 법: Settings > Usage > Usage credits > Enable → 결제수단 → 월 지출 한도(또는 무제한) 설정 → Add funds(선불). 자동 충전(auto-reload), 사용량 알림 가능. 모바일 앱으로 구독한 경우 웹에서만 활성화/구매. (출처: 12429409 문서)
- 구독과 별도 청구. Max/Team에 포함된 월 API 크레딧은 usage credits나 Claude Code/Claude 앱에 쓸 수 없다. 크레딧은 대체로 만료되지 않으나 일본은 구매 후 6개월(2026-09-10부터). (출처: 동일)
- Claude Code: `/usage-credits`로 설정. Research 모드와 프로젝트 콘텐츠도 초과 시 크레딧을 소모. (출처: https://code.claude.com/docs/en/costs , 12429409 문서)
- 한도 도달 시 대안: Pro->Max 5x->Max 20x 업그레이드, Console API 크레딧 구매, 리셋 대기. (출처: 11145838 문서)
### 클라우드 세션
- 클라우드 세션은 Pro/Max/Team(및 Enterprise 프리미엄/Chat+Claude Code 좌석)에서 가능하고, 별도 VM 요금 없이 같은 플랜 사용량에 합산된다. 루틴은 한도 도달 시 usage credits가 켜져 있으면 종량 초과분으로 계속 실행. (출처: https://code.claude.com/docs/en/claude-code-on-the-web , https://code.claude.com/docs/en/routines)

## 따라하기에 쓸 수 있는 절차
1. 내 사용량 확인: claude.ai 설정 > Usage, 또는 Claude Code에서 `/usage` / `/status`. (출처: https://code.claude.com/docs/en/costs)
2. 한도 초과 대비 크레딧 설정: Settings > Usage > Usage credits > Enable → 월 상한 지정 → Add funds. (출처: https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans)
3. 사용량 아끼기: 무관한 작업 사이 `/clear`, 작업에 맞는 작은 모델 사용, effort 낮추기. (출처: https://code.claude.com/docs/en/costs)

## 확인 못 함 / 주의
- Free 플랜의 구체적 한도 수치, Pro/Max의 절대 토큰·메시지 수치는 공식 문서에 없어 확인 못 함.
- Fable 한도 서술이 두 문서에서 다름("별도 주간 한도" vs "주간 한도의 50% 상한"). 두 번째 문서(Fable models on your plan)가 더 구체적이나, 어느 쪽이 최신인지 단정하지 못함. 튜토리얼에서는 "Fable은 주간 한도를 더 빨리 소모하고 상한이 있다" 정도로 서술 권장.
- Max 플랜 도움말(11049741)에는 Fable 주간 한도 언급이 없었음.
- Team 좌석 사용량 배수: Team 문서는 스탠더드 1.25배/프리미엄 6.25배(Pro 대비), 가격 페이지는 "Premium: 5x Standard"로 서술. 6.25 = 5 x 1.25로 일치.
- "클라우드 세션 크레딧"이라는 별도 제도는 확인 못 함.
- 가격은 미국 기준이며 지역별 상이.

## 출처 목록
- [Claude pricing](https://claude.com/pricing) — 확인일 2026-10-10
- [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan) — 확인일 2026-10-10
- [What is the Max plan?](https://support.claude.com/en/articles/11049741-what-is-the-max-plan) — 확인일 2026-10-10
- [What is the Team plan?](https://support.claude.com/en/articles/9266767-what-is-the-team-plan) — 확인일 2026-10-10
- [Use Claude Code with your Pro or Max plan](https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan) — 확인일 2026-10-10
- [Use Claude Code with your Team or Enterprise plan](https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan) — 확인일 2026-10-10
- [How do usage and length limits work?](https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work) — 확인일 2026-10-10
- [Extra usage for paid Claude plans](https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans) — 확인일 2026-10-10
- [Claude Fable models on your plan](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan) — 확인일 2026-10-10
- [Manage costs effectively](https://code.claude.com/docs/en/costs) — 확인일 2026-10-10
