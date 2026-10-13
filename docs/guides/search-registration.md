# 검색 등록 및 공유 미리보기 확인 가이드 (사이트 소유자용)

사이트 주소: https://ai-trend-catchup.com/
사이트맵 주소: https://ai-trend-catchup.com/sitemap-index.xml

사이트맵(sitemap-index.xml)과 robots.txt는 빌드 때 자동으로 만들어집니다. 아래 등록은 소유자 본인 계정으로 한 번만 하면 됩니다.

## 1. Google Search Console

1. https://search.google.com/search-console/about 에서 시작하고, Google 계정으로 로그인합니다.
2. 속성 유형은 "URL 접두어"를 고르고 `https://ai-trend-catchup.com/` 를 입력합니다. (Cloudflare DNS에 TXT 레코드를 넣을 수 있다면 "도메인" 속성도 쓸 수 있어요. 그때는 4번 대신 Search Console이 알려 주는 TXT 값을 Cloudflare DNS에 추가합니다.)
3. 소유권 확인에서 "HTML 태그"를 고르면 `<meta name="google-site-verification" content="발급된코드" />` 가 나옵니다. `content` 값만 복사합니다.
4. `src/components/Head.astro` 에서 주석 처리된 `google-site-verification` 줄의 주석을 풀고 "여기에-구글-코드"를 복사한 값으로 바꿉니다.
5. 변경을 배포한 뒤(사이트에 반영된 뒤) Search Console에서 "확인"을 누릅니다.
6. 왼쪽 메뉴 "Sitemaps"에서 `sitemap-index.xml` 을 입력하고 제출합니다. 상태가 "성공"이 되면 완료입니다.

## 2. 네이버 서치어드바이저

1. https://searchadvisor.naver.com/ 에서 네이버 계정으로 로그인합니다.
2. "웹마스터 도구"에서 사이트 주소 `https://ai-trend-catchup.com` 을 추가합니다.
3. 소유확인에서 "HTML 태그"를 고르고 `<meta name="naver-site-verification" content="발급된코드" />` 의 `content` 값을 복사합니다.
4. `src/components/Head.astro` 의 `naver-site-verification` 주석을 풀고 값을 붙여 넣은 뒤 배포하고, 소유확인 버튼을 누릅니다.
5. "요청 > 사이트맵 제출"에서 `https://ai-trend-catchup.com/sitemap-index.xml` 을 제출합니다.
6. robots.txt(`https://ai-trend-catchup.com/robots.txt`)는 "검증" 메뉴에서 확인할 수 있습니다.

주의: 확인용 코드는 본인 계정에서 발급한 값만 쓰세요. 코드가 틀리면 소유확인이 실패합니다. 검색에 노출되기까지는 며칠에서 몇 주가 걸릴 수 있습니다.

## 3. 공유 미리보기 확인

링크를 공유했을 때 제목, 설명, 이미지가 어떻게 보이는지 확인하는 방법입니다. 각 페이지의 이미지는 `public/og/` 의 PNG(1200x630)입니다. 이미지를 바꾸고 싶으면 `scripts/og-images.mjs` 를 고친 뒤 `node scripts/og-images.mjs` 를 실행하세요.

- Facebook 공유 디버거: https://developers.facebook.com/tools/debug/ (Facebook 로그인 필요). 확인할 페이지 주소를 넣고 "디버그"를 누르고, 이전 모습이 남아 있으면 "새 스크레이프 정보 가져오기"를 누릅니다. Facebook 계열(Instagram 등) 미리보기와 거의 같습니다.
- 카카오톡 공유 디버거: https://developers.kakao.com/tool/debugger/sharing (카카오 계정 로그인 필요, 카카오 개발자 앱이 있어야 쓸 수 있습니다.) 주소를 입력하고 "디버그"를 누르면 카카오톡에 보일 미리보기를 보여 주며, 캐시가 남아 있으면 갱신할 수도 있습니다. 로그인 없이 가장 확실한 방법은 "나와의 채팅"에 링크를 붙여 넣어 보는 것입니다.
- Slack, X(트위터)는 공식 디버거가 없거나 로그인이 필요하므로, 링크를 비공개 채팅/게시 작성창에 붙여 넣어 미리보기가 뜨는지 확인합니다.

공유 미리보기는 각 서비스가 한 번 읽어 간 내용을 캐시합니다. 이미지나 설명을 바꾼 뒤에도 예전 모습이 보이면 위 디버거에서 다시 가져오기를 하세요.

## 참고: robots.txt와 사이트맵 제출

이제 사이트가 도메인 맨 위(`ai-trend-catchup.com/`)에서 열리므로 검색엔진이 `robots.txt`를 자동으로 읽고, 그 안의 사이트맵 주소도 찾아가요. 그래도 사이트맵을 직접 제출하면 처음 수집이 더 빨라요.

예전 주소(`kjpia21-design.github.io/new-project1/`)는 GitHub이 새 도메인으로 자동 연결해 줘요. 이미 예전 주소로 Search Console에 등록했다면, 새 도메인으로 속성을 하나 더 만들어 사이트맵을 다시 제출하세요.
