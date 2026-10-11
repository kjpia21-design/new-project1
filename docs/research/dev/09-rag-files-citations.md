# 조사 노트 — dev 09: 사내 문서 Q&A (Files API · 인용 · 긴 컨텍스트 vs RAG)

조사일: 2026-10-11 / 조사: D5
근거: `claude-api` 스킬(모델 ID·SDK 형태), platform.claude.com 공식 문서를 WebFetch로 직접 확인.

## 확인한 사실과 출처

### Files API (https://platform.claude.com/docs/en/build-with-claude/files)
- GA. 베타 헤더 `files-api-2025-04-14` 불필요. SDK는 `client.files.*` (Python 1.2.0 이상은 `client.beta.files`도 같은 형태). 이 조사에서 설치한 `anthropic` 1.13.0에 `client.files.upload` 존재 확인.
- 업로드: `client.files.upload(file=("document.pdf", open(...,"rb"), "application/pdf"))` -> `.id`가 file_id.
- 응답 필드: id, type, filename, mime_type, size_bytes, created_at, downloadable(업로드 파일은 false), expires_at(만료 설정 없으면 null).
- 메시지에서 참조: `{"type":"document","source":{"type":"file","file_id":...},"title":...,"context":...,"citations":{"enabled":true}}`.
- 파일 종류 -> 블록: PDF·text/plain -> `document`, 이미지 -> `image`, 데이터셋 등 -> `container_upload`(코드 실행). docx·xlsx는 document 블록 미지원이라 텍스트로 변환해서 넣어야 함. .csv/.md는 `text/plain` 명시 업로드 가능. docx에 이미지가 있으면 PDF로 변환 후 사용(인용 가능).
- 한도: 파일당 500 MB, 조직당 저장 1 TB(스킬 문서는 100 GB라고 적혀 있으나 공식 문서가 1 TB). 파일명 1~255자, 금기 문자 있음. 목록 기본 20개/최대 1,000개, `page`/`next_page` 커서. 호출 한도 약 분당 500회.
- 요금: 업로드·목록·삭제·메타데이터는 무료, 메시지에 쓰인 내용은 입력 토큰으로 과금.
- 수명: 삭제 전까지 보관, `expires_in_seconds`(3,600초~7,776,000초=90일) 폼 필드로 만료 지정, 업로드 때만 설정 가능. 수정·이름 변경 불가(새로 올리고 삭제). 삭제 직후에도 진행 중인 API 호출에 잠시 남을 수 있음. 만료 후 메타데이터는 최대 30일 조회 가능. 만료는 "삭제 보장 통제"가 아님.
- **워크스페이스 범위**: 업로드 파일은 워크스페이스 전체가 접근. 최종 사용자·대화 단위로 분리되지 않음. 사용자가 보낸 file_id를 받으면 안 됨. 멀티테넌트면 테넌트마다 워크스페이스(조직당 최대 100개).
- **ZDR 불가**: Files API는 ZDR 대상 아님(featureMetadata zdr: not-eligible; 데이터 보존 페이지 표에서도 ZDR·HIPAA 모두 No). HIPAA는 PDF를 Files API가 아닌 메시지에 인라인으로 보낼 때만 해당.
- Compliance API가 켜져 있으면 업로드/다운로드/삭제가 Activity Feed에 기록(목록·메타데이터 조회는 미기록).
- 플랫폼: Claude API·Claude Platform on AWS GA, Foundry는 Anthropic 호스팅 배포에서만. Bedrock·Vertex는 미지원(스킬의 platform-availability 표 기준 No).
- 에러: 404(없는 id), 400(타입 불일치/컨텍스트 초과/저장 한도), 413(500MB 초과).

### 인용 (https://platform.claude.com/docs/en/build-with-claude/citations)
- GA, 모든 활성 모델 지원, 베타 헤더 없음. ZDR 가능(Covered Models 제외).
- `citations: {"enabled": true}`를 요청 안 모든 문서에 켜거나 모두 끔(혼합 불가). 텍스트 인용만, 이미지 인용 불가(스캔 PDF는 인용 불가).
- 문서 종류별 청킹/위치: 일반 텍스트(문장 단위, `char_location`, 0-index, 끝 exclusive), PDF(문장 단위, `page_location`, 쪽 번호 1-index 끝 exclusive), 커스텀 콘텐츠(청킹 없음, `content_block_location`, 블록 인덱스 0-index).
- 응답: 텍스트 블록이 여러 개로 쪼개지고, 근거가 있는 블록에 `citations` 배열(`cited_text`, `document_index`, `document_title`, 위치 필드). `document_index`는 요청 전체의 document 블록 순서(0-index).
- `cited_text`는 출력 토큰에 미포함, 다음 턴에 되돌려 보낼 때 입력 토큰에도 미포함. 인용을 켜면 시스템 프롬프트 추가·청킹 때문에 입력 토큰이 약간 증가.
- 프롬프트 캐싱·토큰 세기·배치와 호환. 캐시는 문서 블록(최상위)에 `cache_control`. 인용 블록 자체는 캐시 못 함.
- **구조화 출력(`output_config.format`)과 비호환**: document 또는 search_result에 citations를 켜고 `output_config.format`(또는 옛 `output_format`)을 같이 보내면 400.
- 스트리밍: `citations_delta`가 `content_block_delta`로 도착.
- RAG 청크를 문장 단위로 인용시키려면 청크마다 일반 텍스트 document 하나로, 청킹을 직접 통제하려면 커스텀 콘텐츠 문서로.

### 검색 결과 블록 (https://platform.claude.com/docs/en/build-with-claude/search-results)
- `{"type":"search_result","source":...,"title":...,"content":[{"type":"text","text":...}],"citations":{"enabled":true}}`. 도구 결과로 돌려주거나 사용자 메시지 최상위에 직접 넣음. 헤더 불필요. Haiku 3 제외 활성 모델 지원.
- 인용 유형 `search_result_location`: source, title, cited_text, search_result_index, start_block_index, end_block_index(끝 exclusive). 텍스트 블록이 최소 인용 단위(블록 안의 일부 문자열은 인용 못 함).
- ZDR 가능(데이터 보존 표 Yes/Yes).

### PDF (https://platform.claude.com/docs/en/build-with-claude/pdf-support)
- 요청 32 MB, 요청당 600쪽(컨텍스트 윈도우가 1M 미만이면 100쪽), 암호화 PDF 불가. 큰 PDF는 Files API로 올려 file_id 참조 권장. 빽빽한 PDF는 쪽 한도 전에 컨텍스트가 찰 수 있음.
- 3쪽 기준 텍스트 추출만 약 1,000 토큰, 이미지 포함 처리 약 7,000 토큰(문서의 방식 설명 일부).

### 모델·가격 (https://platform.claude.com/docs/en/models/overview, 스킬 모델 표)
- Opus 5.5 `claude-opus-5-5` $4/$20, 1M 컨텍스트, 128K 출력, 기본 effort medium. Sonnet 5.5 $2/$10. Haiku 5.5 $0.10부터/$0.50부터(100K 초과 프롬프트는 $0.50/$2.50, 스킬 표). 캐시 읽기: Opus 5.5·Sonnet 5.5는 기본 입력가의 5%, Fable 5.1은 2.5%, 나머지 10%. Batch 50% 할인. 캐시 쓰기 배율(5분 1.25배)은 스킬 문서 기준 — 공식 pricing 페이지를 직접 열지는 않음(본문에서 "대략"으로 표기).
- Opus 5.5 제한(C16과 일치): thinking 끄기·`budget_tokens` 400, `tool_choice` any/tool 400. 인용 예제에는 영향 없음. 인용+구조화 출력만 별도로 400.

### 긴 컨텍스트 팁 (https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices, "Long context prompting")
- 20k 토큰 이상일 때: 긴 문서를 프롬프트 위쪽(질문보다 앞)에, 여러 문서는 XML 태그로 구조화, 먼저 관련 인용을 뽑게 한 뒤 답하게 하면 도움. 이 글의 예제는 문서를 앞, 질문을 뒤에 둠.

### 데이터 보존 (https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)
- 대화 내용은 기본적으로 보존하지 않음. 단 Covered Models(Fable 5.1, Mythos 5.1, Fable 5, Mythos 5)는 30일 보존이 필요하고 Anthropic이 명시 허용하지 않는 한 ZDR 불가(C16과 일치). Opus 5.5·Sonnet 5.5는 Covered Models 목록에 없음.
- 기능 표: Citations Yes/Yes, Search results Yes/Yes, PDF Yes/Yes(Files API 경유 HIPAA 제외), Files API No/No, Batch는 저장형이라 ZDR 불가("Batch API stores your jobs").

## 코드 검증 메모
- venv에 `anthropic` 1.13.0 설치, `client.files.upload`, `client.messages.count_tokens` 존재 확인.
- Python 예제는 py_compile로 문법 확인. 인용 출력 함수는 가짜 응답 객체로 로컬 실행해 분기 확인.
- 실제 API 호출은 키가 없어 하지 못함.

## 확인 못 한 것 / 주의
- `expires_in_seconds`를 SDK 인자로 받는지 확인 못 함(공식 문서는 폼 필드로만 설명) -> 본문에서 curl 예시로만 안내.
- Files API 문서에서 `count_tokens`가 file_id 문서를 세는지는 확인 못 함 -> 단정하지 않음(`usage`로 사후 확인).
- 캐시 쓰기 가격 배율, 인용 사용 시 정확한 추가 토큰 수는 공식 수치를 못 찾음.
- 한도 숫자(1 TB 등)는 스킬 문서와 공식 문서가 다름 -> 공식 문서 따름.
- Cowork/Claude 앱 프로젝트(지식 기능)는 이 편 범위 밖.
