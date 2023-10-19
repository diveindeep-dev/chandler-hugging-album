<p align="center">
  <a href="https://chfa.diveindeep.space">
    <img src="public/logo512.png" width="80" height="80" alt="logo">
  </a>
</p>
<h1 align="center">Chandler Hugging my Favorite Album</h1>


내가 원하는 앨범을 챈들러가 들고 있는 밈 이미지 생성기

## Requirements

- Chrome Browser를 권장합니다.
- Local에서 작동시 last.fm API key가 필요합니다.

## Installation

### Client

```javascript
git clone https://github.com/diveindeep-dev/chandler-hugging-album.git
cd chandler-hugging-album
yarn install
yarn dev
```

### Server

```javascript
git clone https://github.com/diveindeep-dev/lastfm-api-server.git
cd lastfm-api-server
yarn install
yarn dev
```

#### Environment Variables

- dotenv로 환경변수 관리 [(참조)](https://github.com/motdotla/dotenv)
- Server 루트 디렉토리에 `.env` 파일 생성
- 하단의 변수와 발급받은 값 추가
```
FM_API_KEY=YOUR SECRET KEY
```


## 🔧 Skills or Tools
- Typescript
- React
- ES2015+
- styled-components
- Netlify / cloudtype
- Git


## 🎯 Features
1. Cors 에러 해결을 위한 서버 생성

2. 앨범 검색
   - last.fm 의 Open API 이용
   - 이미지가 중요한 앱이기 때문에, 앨범커버가 없을 경우 결과에서 제외
   - debounce를 사용하여 검색요청 제어

3. 컴포넌트를 이미지로 변환
   - dom-to-image 라이브러리를 사용하여 컴포넌트를 이미지로 변환
   - file-saver 라이브러리를 사용하여 디바이스에 이미지 저장

4. 가수-앨범명 표시 토글 버튼
   - 사용자가 선택할 수 있도록 체크박스로 구성


## 📌 Thinng to Do
- [x] ~~이미지 저장시 폰트 적용 안되는 문제~~


## 💫 Deploy
Netlify 배포

cloudtype 서버 배포


