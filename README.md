# ui-snapshot

시니어 프론트엔드 개발자의 관점에서 설계된 UI 상태 자동 기록 프로젝트입니다.

## 핵심 목표

- UI 상태(디자인 토큰, 컴포넌트 메타 정보)를 daily 스냅샷으로 기록하여 변경 이력 관리.
- GitHub Actions를 통한 100% 자동화.

## 실행 방법

```bash
# 의존성 설치
npm install

# 스냅샷 수동 생성
npm run snapshot
```

## 구조 설명

- `src/extractors`: 실제 코드에서 정보를 추출하는 로직이 위치합니다.
- `snapshots/`: 날짜별 JSON 데이터가 저장되는 곳입니다.
- `.github/workflows`: 자동 실행 스케줄이 정의되어 있습니다.
