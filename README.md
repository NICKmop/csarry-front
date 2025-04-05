# FSD pattern
src/
├── app/
│   ├── App.tsx         # 앱의 루트 컴포넌트
│   └── providers/      # 전역 컨텍스트, 라우터, 테마 제공
│       └── AppRouter.tsx
├── pages/
│   ├── HomePage/       # 홈 페이지
│   │   ├── ui/         # UI 컴포넌트
│   │   └── index.tsx   # 페이지 진입점
│   └── ProfilePage/    # 프로필 페이지
├── features/
│   ├── Auth/           # 인증 기능
│   │   ├── ui/         # 로그인 폼 등 UI
│   │   ├── model/      # 상태 관리, API 호출
│   │   └── index.tsx   # 기능 내보내기
│   └── PostCreate/     # 게시물 생성 기능
├── entities/
│   ├── User/           # 사용자 데이터 모델
│   │   ├── model/      # 타입, API 로직
│   │   ├── ui/         # 사용자 관련 UI (프로필 카드 등)
│   │   └── index.ts    # 내보내기
│   └── Post/           # 게시물 데이터 모델
├── shared/
│   ├── ui/             # 재사용 가능한 공통 컴포넌트 (Button, Input 등)
│   ├── lib/            # 유틸리티 함수
│   ├── api/            # API 클라이언트 (axios 등)
│   └── config/         # 설정값
└── index.tsx           # ReactDOM 렌더링


example Structure
src/
├── app/
│   ├── styles/
│   │   └── app.css         # 전역 스타일
│   └── App.tsx
├── features/
│   └── Auth/
│       ├── assets/
│       │   └── lock-icon.svg
│       ├── ui/
│       │   ├── styles/
│       │   │   └── LoginForm.css
│       │   └── LoginForm.tsx
│       └── index.tsx
├── pages/
│   └── HomePage/
│       ├── assets/
│       │   └── banner.jpg
│       ├── ui/
│       │   ├── styles/
│       │   │   └── HomePage.css
│       │   └── HomePage.tsx
│       └── index.tsx
├── shared/
│   ├── assets/
│   │   └── logo.png
│   └── ui/
│       ├── styles/
│       │   └── button.css
│       └── Button.tsx
└── index.tsx
