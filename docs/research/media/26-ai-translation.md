# 26. AI 번역 실전: DeepL·파파고·Claude — 2026-10-14 기준 (H3)

`curl -sL -m 20 -A "Mozilla/5.0"`로 한 번에 한 페이지씩 확인.

## 접근 결과
- https://support.deepl.com/hc/en-us : HTTP 403(5KB 응답). 우회하지 않았고 대신 DeepL 공식 사이트(www.deepl.com, developers.deepl.com)의 다른 공식 페이지를 사용.
- Papago 도움말 글 본문 URL은 목록에서 찾지 못함(도움말 센터 목록 페이지에는 "문서 번역 사용방법" 등 제목만 있고 글 링크는 노출되지 않음). 추측 URL은 쓰지 않음.

## DeepL
- https://www.deepl.com/en/pro (요금제 비교 표, 독일 EUR 표시 화면): 무료 버전 월 50,000자, 파일 번역 월 1건, 최대 5MB, 용어집 1개(항목 5개). Individual 월 300,000자, 파일 3건, 30MB. Team 월 1,000,000자(사용자당), 파일 20건, 30MB. Business 무제한 문자·월 100건·100MB. "No data training" 행에서 Free version은 회색(비활성) 표시, Individual 이상은 활성 표시(HTML 클래스로 확인; 체크 모양 자체는 텍스트 추출로 안 보임). Individual 가격은 EUR 7.49/월(연 결제) 표시이나 지역별로 다르므로 본문에 가격은 쓰지 않음.
- https://www.deepl.com/en/pro-data-security : "Texts are never stored or used for model training without your consent"(기업 보안 안내 페이지), SOC 2 Type II, GDPR 정렬. 무료 버전에 대한 설명은 이 페이지에 없음.
- https://developers.deepl.com/docs/getting-started/supported-languages : API 지원 언어에 Korean(KO) 있음. 번역·용어집·태그 처리·텍스트 개선(translationMemory, styleRules) 항목이 true로 표시. 앱/웹 제품의 지원 범위와 같다고 단정하지 않음.
- https://www.deepl.com/en/features/document-translation : PDF, Word, PowerPoint 등 주요 파일 형식 번역, 서식·레이아웃 유지 설명, 용어집·번역 메모리·스타일 규칙 사용 가능(요금제별).

## 파파고 (papago.naver.com)
- https://papago.naver.com/ : 탭 Text / Image / Document / Voice / Website, PAPAGO PLUS(일부 기능 Plus 전용 표시), 이용약관·개인정보처리방침 링크, 푸터 "품질 개선 동의(Consent to improving quality)". 한 달 번역 횟수 소진 알림 문구 있음. 용어집(Glossary) 기능.
- 품질 개선 동의 문구(페이지 내 텍스트): 동의하면 번역 요청 데이터(텍스트, 음성, 이미지, 문서, 필기 입력 등)가 저장되어 Papago와 NAVER·NAVER Cloud 서비스의 기술·품질 개선과 연구·개발에 쓰일 수 있고 처리 위탁도 가능. 언제든 동의 여부를 바꿀 수 있고(푸터 > 품질 개선 동의), 변경 시점부터 적용. 기본 동의 상태는 확인하지 못함.
- https://papago.naver.com/docs : 문서 번역은 PDF, DOCX, XLSX, PPTX, HWPX, 파일당 20MB까지. "원본의 표와 이미지 유지" 안내, 번역 후 바로 수정 가능. 용어집 토글. 
- https://help.naver.com/service/16448/category/bookmark?lang=ko : Papago 고객센터 목록(텍스트/문서/이미지/음성/웹사이트/오프라인 번역 사용방법 제목 확인). 글 본문은 열지 못함.

## Claude
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude : 파일 업·다운로드 30MB, docx/pptx/xlsx/pdf 생성. (발표 편과 동일 글)
- https://support.claude.com/en/articles/8325621-i-would-like-to-input-sensitive-data-into-my-chats-with-claude-who-can-view-my-conversations : 소비자 제품(Free/Pro/Max) 기준. 허용한 경우에만 개선에 사용, 시크릿 채팅은 모델 개선에 쓰이지 않음, 안전 분류기에 걸린 대화는 예외 가능. 기밀 비즈니스 문서 등 민감 정보는 신중히 공유하라는 권고. 설정은 언제든 변경 가능.
- 사이트 내 기존 편: /basics/05-privacy-safety/ 와 일치시킴.

## 확인하지 못한 것
- DeepL: support.deepl.com 도움말 전부(403), 무료 버전 데이터 처리 정책 원문, 한국어 문서 번역 세부, 한국 가격.
- 파파고: 무료/Plus 월 한도 숫자, Plus 가격, 품질 개선 동의 기본값, 서비스 개인정보 처리 세부.
- Claude: 번역 품질 비교 수치(공식 근거 없음), 팀/Enterprise 데이터 정책 원문(이 글은 소비자 제품 기준).

## 재점검 (2026-10-19)
- DeepL pro·pro-data-security·document-translation·API 언어 페이지, 파파고 화면(papago.naver.com, 문서 번역 메뉴와 '품질 개선 동의' 링크 확인), Claude 파일 생성·민감 데이터 도움말을 다시 열었다. DeepL 요금제 표(Individual 300,000자·3파일·1용어집, Team 1,000,000자·20파일·5용어집, Business 무제한·100파일)는 동일. 파파고 도움말 글 본문과 DeepL 무료 한도·파일 크기는 이번에도 페이지 구조상 확인하지 못함. 변경 없음, lastVerified만 갱신.
