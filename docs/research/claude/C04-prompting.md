# 프롬프트 작성 모범 사례 (공식 가이드)

## 핵심 사실
- 공식 "Prompting best practices" 문서는 최신 모델(Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5 등) 전반의 프롬프트 엔지니어링 레퍼런스로, 모델별 지침, 모든 모델 공통 기법(원칙, 출력·서식, 도구 사용, 사고, 에이전트), 마이그레이션 순서로 구성. (출처: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- 명확하고 직접적으로: Claude를 "뛰어나지만 우리 규범을 모르는 신입 직원"처럼 대하라. 황금률: "맥락이 거의 없는 동료에게 프롬프트를 보여주고 따라 하게 했을 때 헷갈려 하면 Claude도 헷갈린다." 출력 형식·제약을 구체적으로, 순서가 중요하면 번호 목록으로. (출처: 동일)
  - 약함: `Create an analytics dashboard` / 강함: `Create an analytics dashboard. Include as many relevant features and interactions as possible. Go beyond the basics to create a fully-featured implementation.` ("그 이상"을 원하면 명시적으로 요청)
- 맥락·동기를 제공: 이유를 설명하면 Claude가 일반화한다. 약함 `NEVER use ellipses` / 강함 `Your response will be read aloud by a text-to-speech engine, so never use ellipses since the text-to-speech engine will not know how to pronounce them.` (출처: 동일)
- 예시 활용(few-shot): 관련성·다양성·구조화(`<example>`, 여러 개는 `<examples>`)가 중요하고, 최상의 결과를 위해 3~5개 예시 권장. (출처: 동일)
- XML 태그로 구조화: 지시·맥락·예시·입력이 섞일 때 `<instructions>`, `<context>`, `<input>`처럼 태그로 구분하면 오해가 줄어든다. 일관되고 설명적인 태그명 사용, 계층이 있으면 중첩. (출처: 동일)
- 역할 부여: 시스템 프롬프트에 한 문장만 써도 효과. 예: `"system": "You are a helpful coding assistant specializing in Python."` (출처: 동일)
- 긴 컨텍스트(20k+ 토큰): 긴 문서는 프롬프트 맨 위, 질문·지시는 아래에 둔다. 질문을 끝에 두면 복잡한 다문서 입력에서 응답 품질이 최대 30% 향상(테스트 기준). 여러 문서는 `<documents><document index="1"><source>…</source><document_content>…</document_content></document>` 구조. (출처: 동일)
- 서식 제어: "하지 말라" 대신 "무엇을 하라"로 말하기. 예: "Do not use markdown" 대신 "Your response should be composed of smoothly flowing prose paragraphs." XML 형식 지시자도 유용. (출처: 동일)
- 과도한 사고/과잉 구현 억제: 일괄 지시("Default to using [tool]")를 "문제 이해에 도움이 될 때 [tool] 사용"처럼 구체화하고, 부족하면 effort를 낮춘다. 불필요한 파일·추상화를 막으려면 "Avoid over-engineering. Only make changes that are directly requested or clearly necessary." 같은 지시를 추가. (출처: 동일)
- 모델 선택·effort는 프롬프트 못지않은 레버. (출처: https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)
- 앱 사용자용 팁(공식 시작 가이드): 간단한 질문으로 시작, 구체적으로 요청, 후속 질문으로 다듬기, 여러 작업 유형 시도. (출처: https://support.claude.com/en/articles/8114491-get-started-with-claude)

## 따라하기에 쓸 수 있는 절차 (짧은 예시 프롬프트)
1. 목적·독자·형식을 명시:
   `다음 회의록을 팀장에게 보고할 5줄 요약으로 정리해줘. 결정사항, 담당자, 기한을 각각 한 줄씩 포함해.` (패턴 출처: 위 "명확하고 직접적으로")
2. 이유를 덧붙이기: `이 글은 음성으로 읽힐 거라서 목록·기호 없이 이어지는 문장으로 써줘.` (출처: 맥락 제공 원칙)
3. 예시 주기: `<examples><example>입력: ... 출력: ...</example>…</examples> 같은 형식으로 아래 항목을 분류해줘.` (출처: 예시 원칙)
4. 긴 자료는 위, 질문은 아래: `<documents>…</documents>` 다음 줄에 질문. (출처: 긴 컨텍스트 원칙)
5. 코딩 요청에서 과잉 방지: `요청한 변경만 해. 불필요한 추상화나 새 파일은 만들지 마.` (출처: 과잉 구현 억제 원칙; 한국어 문장은 취지를 옮긴 예시)

## 확인 못 함 / 주의
- 한국어 예시 프롬프트는 공식 원칙을 적용해 만든 예시이며 공식 문서에 한국어 예문은 없다.
- 문서는 약 1,100줄이라 모델별 섹션, 도구 사용, 에이전트 섹션의 세부는 일부만 확인했다.
- 일부 문장은 Opus 4.5/4.6을 기준으로 쓰여 있어 5.5 세대에 그대로 적용되는지는 문서가 모델별 섹션으로 분리해 안내(확인 못 함).

## 출처 목록
- [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) — 확인일 2026-10-10
- [Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model) — 확인일 2026-10-10
- [Get started with Claude](https://support.claude.com/en/articles/8114491-get-started-with-claude) — 확인일 2026-10-10

## 2026-10-19 점검 반영
- 프롬프트 모범 사례, 모델 선택 문서를 다시 읽음. 변동 없음(Opus 5.5 시작 권장, Haiku 5.5 효율 우선 옵션).
