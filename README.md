# React JSX 단일 페이지 적용을 위한 기본 예제
## Init
- 작업버전 
    - node : v20.11.0
    - npm : v10.2.4
    - react : v18.2.0

## 실행코드
```bash
$ cd .bundle

// node_modeuls 설치
$ npm ci
or
$ npm install

// 빌드실행
$ npm run build

// 추적 후 빌드
$ npm run watch
```

## 기본 폴더 구조
    - .bundle : javascript 및 scss 빌드를 위한 빌더 
        - node_modules : nodejs 패키지 모듈 폴더 ( npm ci or npm i 를 통해 설치하여야함)
        - src : 소스파일
            - app : 메인이 되는 스크립트 위치
            - componentes : 컴포넌트별 모음 폴더
            - scss : scss 저장 ( 컴포넌트별로 쪼갤시 같이 저장 가능 )
            - services : 데이터 services용 스크립트 ( 미사용 )
    - js : 빌드후 결과 저장소
    - data.json : 예제 데이터 json
