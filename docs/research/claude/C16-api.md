# Claude API 시작하기 (키 발급, 첫 호출, SDK, 가격)

## 핵심 사실
- 준비물: Claude Console 계정(platform.claude.com)과 API 키. (출처: https://platform.claude.com/docs/en/get-started)
- API 키는 Console의 Settings -> API keys(https://platform.claude.com/settings/keys)에서 만든다. Create key -> 이름, 만료, Linked account(본인 또는 서비스 계정), 필요 시 워크스페이스 지정. 키는 `sk-ant-`로 시작하며 생성 시 한 번만 전체가 보인다. 잃어버리면 새로 만들어야 한다. (출처: https://platform.claude.com/docs/en/get-api-key)
- 키 종류: 개인(personal) 키(본인 계정 기준, 조직을 떠나면 무효), 서비스 계정 키(CI·프로덕션·에이전트용, 공유 용도 권장), 워크스페이스 키(레거시). (출처: 동일)
- 환경변수 `ANTHROPIC_API_KEY`를 SDK가 자동으로 읽는다. 직접 HTTP 호출 시 `x-api-key` 헤더를 사용, `anthropic-version: 2023-06-01` 헤더 필요. (출처: https://platform.claude.com/docs/en/get-api-key , get-started)
- Claude Pro/Max 구독에는 Console API 사용이 포함되지 않으며 별도 청구된다(Pro 플랜 문서). (출처: https://support.claude.com/en/articles/8325606-what-is-the-pro-plan)
- 공식 SDK: Python(`pip install anthropic`), TypeScript(`npm install @anthropic-ai/sdk`), C#(`dotnet add package Anthropic`), Go(`go get github.com/anthropics/anthropic-sdk-go`), Java, PHP(`composer require anthropic-ai/sdk`), Ruby(`bundle add anthropic`). 그리고 CLI `ant`(`brew install anthropics/tap/ant`, `ant auth login`). (출처: https://platform.claude.com/docs/en/get-started)
- 가격(100만 토큰당 입력/출력): Fable 5.1 $10/$50, Opus 5.5 $4/$20, Sonnet 5.5 $2/$10, Haiku 5.5 $0.10부터/$0.50부터. Batch API 50% 할인, 프롬프트 캐시 읽기는 기본 입력가의 10%(Fable 5.1은 2.5%, Opus 5.5·Sonnet 5.5는 5%). 상세는 https://platform.claude.com/docs/en/about-claude/pricing . (출처: https://platform.claude.com/docs/en/about-claude/models/overview)
- 모델 ID는 `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`, `claude-fable-5-1`. (출처: 동일)

## 따라하기에 쓸 수 있는 절차
1. https://platform.claude.com 에서 가입/로그인 -> Settings -> API keys -> Create key -> 키를 안전하게 저장. (출처: https://platform.claude.com/docs/en/get-api-key)
2. 환경변수 설정:
   ```bash
   export ANTHROPIC_API_KEY="your-api-key-here"
   ```
   (출처: https://platform.claude.com/docs/en/get-started)
3. curl 첫 호출 (공식 예시 그대로):
   ```bash
   curl https://api.anthropic.com/v1/messages \
     -H "content-type: application/json" \
     -H "x-api-key: $ANTHROPIC_API_KEY" \
     -H "anthropic-version: 2023-06-01" \
     -d '{
       "model": "claude-opus-5-5",
       "max_tokens": 1000,
       "messages": [
         {"role": "user", "content": "What should I search for to find the latest developments in renewable energy?"}
       ]
     }'
   ```
   (출처: 동일)
4. Python 첫 호출 (공식 예시 그대로):
   ```bash
   mkdir claude-quickstart && cd claude-quickstart
   python3 -m venv .venv && source .venv/bin/activate
   pip install anthropic
   ```
   `quickstart.py`:
   ```python
   import anthropic

   client = anthropic.Anthropic()

   message = client.messages.create(
       model="claude-opus-5-5",
       max_tokens=1000,
       messages=[
           {
               "role": "user",
               "content": "What should I search for to find the latest developments in renewable energy?",
           }
       ],
   )

   for block in message.content:
       if block.type == "text":
           print(block.text)
   ```
   `python quickstart.py`로 실행. (출처: 동일)
5. 응답 JSON은 `content` 배열(type text), `stop_reason`, `usage`(input_tokens/output_tokens)를 포함. (출처: 동일)
6. 시스템 프롬프트는 최상위 `"system"` 필드로 전달. (출처: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

## 확인 못 함 / 주의
- 최초 결제 수단·크레딧 충전(Console billing) 절차는 직접 확인하지 못함.
- 요금(pricing) 페이지 본문, 속도 제한(rate limit) 티어 수치는 읽지 않음.
- 공식 예시의 모델은 `claude-opus-5-5`. 비용을 줄이려면 `claude-sonnet-5-5` 또는 `claude-haiku-5-5`로 교체 가능(ID는 모델 개요 문서 기준).

## 출처 목록
- [Get started with Claude (API)](https://platform.claude.com/docs/en/get-started) — 확인일 2026-10-10
- [Get your Claude API key](https://platform.claude.com/docs/en/get-api-key) — 확인일 2026-10-10
- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview) — 확인일 2026-10-10
- [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan) — 확인일 2026-10-10


## 6단계 재점검 (2026-10-10)
- Rate limits 문서: 티어 Start/Build/Scale/Custom, 월 지출 상한 $500/$1,000/$200,000, Start 티어 Sonnet 5.5 RPM 1,000·ITPM 2,000,000·OTPM 400,000. 결제 수단 등록·충전 화면 절차는 여전히 미확인.

## 2026-10-11 업데이트 반영
Platform 릴리스 노트를 직접 열어 확인한 항목(https://platform.claude.com/docs/en/release-notes/overview):
- Opus 5.5(09-22): thinking 끄기/enabled 400, `tool_choice` any/tool 400.
- Fable 5.1·Mythos 5.1(09-01): `tool_choice` any/tool 400, Fable 5처럼 30일 보관 필요, ZDR 불가(Anthropic 명시 허용 시 예외).
- Haiku 5.5(10-07): `budget_tokens`, temperature/top_p/top_k, prefill이 400 가능. 적응형 사고 기본.
- Workbench → Playground(08-18). Python SDK v1.0(08-20): Python 3.10+, httpx2, Text Completions·Messages의 샘플링 파라미터 제거.
- Files API·Agent Skills GA(08-19), 베타 헤더 불필요. 컴퓨터 툴셋 GA·브라우저 툴셋(08-19), SDK 클래스(10-07, 베타). 온디맨드 compaction(09-14, 베타). Managed Agents 동적 워크플로(10-09, 베타). Models API capabilities(10-01~06).
- 출처 추가: 릴리스 노트, Model deprecations.
- 미확인: Fable 5.1의 thinking 제약(릴리스 노트에 언급 없어 본문에 쓰지 않음). 각 기능의 상세 문서 본문은 열지 않음.
