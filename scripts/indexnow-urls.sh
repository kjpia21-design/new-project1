#!/usr/bin/env bash
# IndexNow에 알릴 주소 목록을 만든다(.github/workflows/deploy.yml의 indexnow 작업이 쓴다).
# 사용법: scripts/indexnow-urls.sh <이전 커밋> <새 커밋> [사이트 주소]
# 두 커밋 사이에 바뀐 src/content/docs/** 문서를 영어(/...)·한국어(/ko/...) 주소 둘 다로 바꿔 한 줄에 하나씩 출력한다.
# 404, draft: true 문서는 뺀다. 이전 커밋이 없거나(첫 push 등) 찾을 수 없으면 아무것도 출력하지 않는다. 최대 10,000개.
set -euo pipefail

before="${1:-}"
after="${2:-HEAD}"
site="${3:-https://ai-trend-catchup.com}"

if [[ -z "$before" || "$before" =~ ^0+$ ]] || ! git cat-file -e "${before}^{commit}" 2>/dev/null; then
  exit 0
fi

git diff --name-only --diff-filter=ACMR "$before" "$after" -- 'src/content/docs/' |
  while IFS= read -r file; do
    [[ "$file" =~ \.mdx?$ ]] || continue
    # 초안(draft: true)은 배포되지 않으므로 알리지 않는다.
    if git show "${after}:${file}" 2>/dev/null | sed -n '2,/^---$/p' | grep -qE '^draft:[[:space:]]*true'; then
      continue
    fi
    rel="${file#src/content/docs/}"
    rel="${rel%.mdx}"
    rel="${rel%.md}"
    rel="${rel#ko/}"
    [[ "$rel" == "ko" ]] && rel=""
    [[ "$rel" == "404" ]] && continue
    # index는 폴더 주소가 된다: basics/index → basics/, index → (홈)
    rel="${rel%/index}"
    [[ "$rel" == "index" ]] && rel=""
    if [[ -z "$rel" ]]; then
      echo "${site}/"
      echo "${site}/ko/"
    else
      echo "${site}/${rel}/"
      echo "${site}/ko/${rel}/"
    fi
  done | awk '!seen[$0]++' | head -n 10000
