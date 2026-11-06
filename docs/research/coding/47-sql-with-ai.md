# 조사 노트 — coding 47: AI로 SQL 쿼리 작성·검토하기

조사일: 2026-11-05 / 조사: D2. 공식 페이지를 기본 옵션 `curl -sSL`로 한 페이지씩 받아(헤더·UA 변경 없음) 텍스트로 변환해 읽음. 모두 HTTP 200.

## 확인한 공식 URL과 사실
### https://code.claude.com/docs/en/mcp
- "Example: Query your PostgreSQL database": DBHub(`@bytebase/dbhub`)는 `--dsn`으로 받은 연결 문자열로 관계형 DB에 Claude를 연결하는 MCP 서버. "Use a read-only database user in the connection string so the queries Claude runs can't modify data". 예시 명령 `claude mcp add --transport stdio db -- npx -y @bytebase/dbhub --dsn "postgresql://readonly:pass@prod.db.com:5432/analytics"`. `/mcp`에서 `db` 행에 체크 표시로 시작 확인. 예시 질문: "What's our total revenue this month?" 등.
- "Verify you trust each server before connecting it. Servers that fetch external content can expose you to prompt injection risk."
### https://code.claude.com/docs/en/common-workflows
- 이미지 활용 예시 프롬프트 중 "This is our current database schema. How should we modify it for the new feature?" (본문에서는 스키마를 글로 설명하는 방식을 권하며 이 문장은 인용하지 않음). SQL 전용 워크플로 절은 이 페이지에서 찾지 못함.
### https://www.postgresql.org/docs/current/sql-set-transaction.html
- 읽기 전용 트랜잭션에서는 임시 테이블이 아닌 테이블에 대한 INSERT/UPDATE/DELETE/MERGE/COPY FROM, 모든 CREATE/ALTER/DROP, COMMENT, GRANT, REVOKE, TRUNCATE, EXPLAIN ANALYZE·EXECUTE(위 명령을 실행하는 경우)가 허용되지 않음. "a high-level notion of read-only that does not prevent all writes to disk". (읽은 시점 문서 버전 표시: PostgreSQL 18 계열 페이지, 사이트 상단에 PostgreSQL 19 RC 1 공지.)
### https://www.sqlite.org/lang_select.html
- 받아서 읽음(집계 쿼리의 bare column 동작 등). 본문 함정 예시는 이 페이지가 아니라 직접 실행한 결과에 근거하며, 이 페이지를 근거로 주장하지 않음.

## 로컬 시험 (실행함)
- `python3 -I`의 `sqlite3` 모듈, 메모리 DB. 테이블 customers/orders/order_items와 가짜 행(본문과 동일)으로 실행:
  - 정답 쿼리(LEFT JOIN ... ON에 status 조건): `[('Sample A', 2), ('Sample B', 0), ('Sample C', 0)]`
  - WHERE로 옮긴 버전: `[('Sample A', 2)]`
  - `NOT IN (SELECT customer_id ...)` (NULL 포함): `[]` / `NOT EXISTS`: `[('Sample C',)]`
  - 주문-상품 조인 시 주문 1의 행 수 2 (`COUNT(*)` 함정)
  - `EXPLAIN QUERY PLAN SELECT * FROM orders WHERE customer_id=1` → `SCAN orders`
  - `PRAGMA query_only=ON` 후 DELETE → "attempt to write a readonly database" (본문에는 쓰지 않음)
- 실행하지 않음: Claude Code, MCP 서버(DBHub), PostgreSQL/MySQL 서버, 프롬프트 효과.

## 확인하지 못한 것
- DBHub 자체 문서(보안 옵션, 읽기 전용 강제 모드 여부)는 읽지 않음. 읽기 전용 *사용자*를 쓰라는 MCP 페이지 문구만 인용.
- PostgreSQL 외 DB(MySQL 등)의 읽기 전용 계정·EXPLAIN 형식은 확인하지 않음.
- 함정 세 가지가 다른 DB 엔진에서 동일하게 동작하는지는 SQLite 외 실행하지 못함(본문에 "내 환경에서 테스트"로 명시). NOT IN과 NULL 동작은 일반 SQL 지식.
- "한계 행수 LIMIT", "한 행이 무엇을 뜻하나요 질문", 비밀번호 보관 조언은 우리 조언이며 공식 문구가 아님.
