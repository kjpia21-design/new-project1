# D4-08 조사 노트: 평가(evals)로 LLM 결과 품질 관리 (2026-10-11)

## 출처 (직접 읽음)
- https://platform.claude.com/docs/en/test-and-evaluate/develop-tests (WebFetch; 페이지 앞 100,000자까지 읽음, 뒤 약 37,600자는 못 읽음)
- `claude-api` 스킬의 shared/evals/eval-audit.md (평가 건강 점검 체크리스트; 번들 문서)
- C16/C1(사이트 내 페이지) 모델 ID·요청 제한 표

## 확인한 사실
- 성공 기준은 구체적(Specific)·측정 가능(Measurable)·달성 가능(Achievable)·관련성(Relevant). 나쁜 예 "감정 분류를 잘해야 함" → 좋은 예 "다양한 트윗 10,000개 보류 테스트 세트에서 F1 0.85 이상, 기준선 대비 5% 개선".
- 흔한 기준: 과업 충실도, 일관성, 관련성·일관성(coherence), 어조·스타일, 개인정보 보호, 컨텍스트 활용, 지연, 가격.
- 설계 원칙 3개: (1) 과업 특화(실제 분포 + 엣지 케이스: 무관/없는 입력, 너무 긴 입력, 모호한 케이스), (2) 가능하면 자동화, (3) 소수의 고품질 수작업 채점보다 다수의 약간 낮은 신호를 자동 채점하는 쪽이 낫다.
- 채점 방식: 코드 기반(정확 일치, 임베딩 코사인 유사도, ROUGE-L), LLM 기반(Likert 1-5, 이진 yes/no, 순서형), 사람 채점(규모가 필요하면 자동 채점 우선).
- 팁: "채점은 생성에 쓴 모델과 다른 모델로 하는 것이 보통 모범 사례"(문서 예제 주석), 보류(held-out) 테스트 세트, 용어를 정의, 정량+정성 지표 병행.
- 공식 예제의 LLM 채점은 `client.messages.create(model=..., max_tokens=50, messages=[...])`로 숫자/yes-no만 출력하게 함 → 본문도 같은 패턴. 응답에서 `type == "text"` 블록을 골라 읽는 방식 사용(적응형 thinking 모델은 thinking 블록이 앞에 올 수 있음, C16 표).
- 평가 건강 점검(eval-audit.md): 정답 라벨이 맞는지 표본 재검증, 기준 답안이 채점기를 통과하는지, 모호한 기준 금지, 먼저 소수 케이스로 끝까지 실행해 보기, 케이스 중복·편중을 스크립트로 점검, 변화 감지에 충분한 표본 수.
- 모델 제약(C16과 일관): Sonnet 5.5는 `tool_choice` any/tool이면 400(릴리스 노트 2026-09-28). 샘플링 파라미터 400 제약은 Sonnet 5.5가 아니라 Sonnet 5와 Haiku 5.5의 것(릴리스 노트 2026-06-30, 2026-10-07)으로 2026-10-11 정정. 본문 코드는 temperature 등을 쓰지 않고 `output_config={"effort": ...}`만 사용. 기본 적응형 thinking이므로 max_tokens를 넉넉히(thinking 토큰도 출력 한도에 포함) 설정하고 effort를 low로 낮춤.

## 확인 못 함 / 주의
- Console의 평가 도구(Evaluation Tool) 페이지(eval-tool)는 위 URL에서 해당 내용이 확인되지 않아(요약 결과가 develop-tests 내용만 돌려줌) 본문에서 다루지 않음.
- 통계적 유의성 기준(표본 수 등)은 공식 문서에서 숫자로 확인하지 못함. 본문에서는 "작은 세트의 점수 변화는 잡음일 수 있다"는 일반 원칙으로만 서술하고 임계값은 제시하지 않음.
- 예제 파이썬 스크립트는 `py_compile` 문법 검사만. API 키가 없어 실제 호출 불가.

## 2026-10-26 재검증
- models/overview(ID·가격·Opus 5.5 적응형 thinking 상시·기본 effort), develop-tests(채점 모델은 생성 모델과 다른 것 권장 주석), get-started, rate-limits 재확인: 본문과 일치. 변경 없음.
- 참고: 2026-10-21부터 API 버전 2026-10-21은 `temperature`/`top_p`/`top_k`를 모든 모델에서 400으로 거부(release notes, migration 가이드). 본문 스크립트는 이 파라미터를 쓰지 않아 영향 없음.
- 통계적 유의성 기준(표본 수)은 여전히 문서에 숫자로 없음.
