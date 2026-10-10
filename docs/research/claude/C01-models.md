# Claude 모델 라인업 (2026-10-10 기준)

## 핵심 사실
- 현재 모델은 4종: Claude Fable 5.1, Claude Opus 5.5, Claude Sonnet 5.5, Claude Haiku 5.5. 공식 문서는 "잘 모르겠다면 대부분의 워크로드에는 Claude Opus 5.5로 시작하라"고 안내한다. (출처: https://platform.claude.com/docs/en/about-claude/models/overview)
- Fable 5.1은 "까다로운 추론과 장기(long-horizon) 에이전트 작업", 또는 Opus 5.5를 높은 effort로 써도 평가 결과가 부족할 때 쓰라고 안내된다. (출처: 동일)
- 한 줄 설명: Fable 5.1 = 까다로운 추론·장기 에이전트 작업 / Opus 5.5 = 장시간 에이전트형 코딩·지식 업무 / Sonnet 5.5 = 속도와 지능의 최고 조합 / Haiku 5.5 = 분류·추출·라우팅처럼 대량·저지연 작업. (출처: 동일)
- 상대 지연시간: Fable 5.1 느림, Opus 5.5 보통, Sonnet 5.5 빠름, Haiku 5.5 가장 빠름. (출처: 동일)
- API 모델 ID (날짜 없는 고정 스냅샷): `claude-fable-5-1`, `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`. Bedrock ID는 `anthropic.` 접두사(예: `anthropic.claude-opus-5-5`). (출처: 동일)
- API 가격(100만 토큰당 입력/출력): Fable 5.1 $10/$50, Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 5.5 $0.10부터/$0.50부터. Batch API는 50% 할인. (출처: 동일)
- 컨텍스트 윈도우는 네 모델 모두 1M 토큰, 최대 출력 128K 토큰(동기 Messages API). 신뢰할 수 있는 지식 컷오프는 모두 2026년 6월. (출처: 동일)
- 사고(Thinking): Fable 5.1·Opus 5.5는 Adaptive(항상 켜짐), Sonnet 5.5·Haiku 5.5는 Adaptive. 기본 effort: Fable 5.1 `high`, Opus 5.5 `medium`, Sonnet 5.5 `high`, Haiku 5.5 `medium`. (출처: 동일)
- 퇴역(retirement) 약속: Fable 5.1은 2027-09-01 이전 아님, Opus 5.5는 2027-09-22, Sonnet 5.5는 2027-09-28, Haiku 5.5는 2027-10-07 이전 아님. (출처: 동일)
- 레거시(아직 사용 가능): Fable 5, Opus 5, Opus 4.8/4.7/4.6/4.5, Sonnet 5, Sonnet 4.6, Haiku 4.5. 본문에 Claude Mythos 5.1도 언급되나 현재 모델 표에는 없음. (출처: 동일)
- Claude Code에서 별칭: `default`, `best`, `fable`, `sonnet`, `opus`, `haiku`, `sonnet[1m]`, `opus[1m]`, `opusplan`. `opus/sonnet/haiku`는 Anthropic API에서는 최신 버전으로 풀린다. (출처: https://code.claude.com/docs/en/model-config)
- Claude Code의 `default`는 Pro/Max/Team/Enterprise/Anthropic API에서 Opus 5.5. "Fable 모델은 어떤 플랜·제공자에서도 기본값이 아니며 명시적으로 선택해야 한다." (출처: https://code.claude.com/docs/en/model-config)
- Claude Code effort 단계: Fable·Opus 5.5·Sonnet 5.5·Haiku 5.5는 low/medium/high/xhigh/max. `max`는 수확 체감과 과잉 사고 우려가 있어 사전 테스트 권장. (출처: https://code.claude.com/docs/en/model-config)
- Claude Code 모델 변경: 세션 중 `/model`, 시작 시 `claude --model`, 환경변수 `ANTHROPIC_MODEL`, 설정 파일의 `model` 필드. (출처: 동일)

## 따라하기에 쓸 수 있는 절차
1. 모델 고르기 기본 규칙: 먼저 Opus 5.5로 시작 → 대량·저지연 작업은 Haiku 5.5 → 속도/균형은 Sonnet 5.5 → 어려운 장기 추론은 Fable 5.1. (출처: https://platform.claude.com/docs/en/about-claude/models/overview)
2. Claude Code에서 `/model` 입력 → 선택기에서 Enter(기본값으로 저장) 또는 `s`(이번 세션만). (출처: https://code.claude.com/docs/en/model-config)
3. 시작 시 지정: `claude --model opus` (출처: 동일)

## 확인 못 함 / 주의
- Claude.ai 앱(모델 선택기)에서 각 플랜별로 어떤 모델이 보이는지는 이 파일에서 확인하지 못함(C02/C03 참고).
- Mythos 5.1이 무엇인지(공개 여부 등)는 확인 못 함. 모델 개요 본문에 이름만 등장.
- Haiku 5.5 "Pricing From $0.10"의 "부터" 의미(긴 프롬프트 시 상승 등)는 model-config 문서에서 "100K 토큰 초과 프롬프트는 더 비싸다"고만 확인.

## 출처 목록
- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview) — 확인일 2026-10-10
- [Claude Code Model configuration](https://code.claude.com/docs/en/model-config) — 확인일 2026-10-10
