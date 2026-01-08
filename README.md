# 📸 UI Snapshot Automation

> "UI의 변화를 기록하는 가장 게으르지만 완벽한 방법"

`ui-snapshot`은 프론트엔드 UI의 **디자인 토큰(Design Tokens)**과 **컴포넌트 메타데이터(Component Metadata)**를 매일 자동으로 기록하는 자동화 프로젝트입니다.

---

## 💡 Motivation (만든 이유)

프론트엔드 개발자로서 프로젝트를 진행하다 보면 다음과 같은 고민에 빠지곤 합니다:

1.  **"디자인 시스템이 언제, 어떻게 바뀌었지?"**: 디자인 가이드라인이나 색상 값이 중간에 변경되었을 때, 그 변경 시점과 이유를 추적하기 위해 수많은 커밋을 뒤져야 했습니다.
2.  **"문서화의 귀찮음"**: 컴포넌트의 Props나 배리에이션이 추가될 때마다 문서를 수동으로 업데이트하는 것은 매우 번거로운 일입니다.
3.  **"꾸준한 성장의 기록"**: 매일매일 프로젝트가 어떻게 변화하고 있는지를 시각적으로(데이터로) 남기고 싶었습니다.

이 프로젝트는 이러한 고민을 해결하기 위해 탄생했습니다. **GitHub Actions**를 활용해 매일 자정, 내가 잠든 사이에도 프로젝트의 상태를 스냅샷으로 남기고 자동으로 커밋을 생성합니다. 이제 UI의 변화를 추적하는 것은 나의 몫이 아닌 로봇의 몫입니다.

---

## 🚀 Key Features

- **Daily Automated Commit**: GitHub Actions를 통한 100% 자동화된 일별 기록 생성.
- **Deep Extraction**: 색상, 간격, 타이포그래피뿐만 아니라 그림자(Shadow), 중단점(Breakpoints)까지 상세 기록.
- **Component Insight**: 컴포넌트의 카테고리, 설명, 상세 Prop 타입 정보까지 포함된 메타데이터 수집.
- **Pure Data**: UI 상태를 JSON 데이터로 관리하여 향후 대시보드나 문서화 도구로 확장 가능.

---

## 🛠 Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Automation**: GitHub Actions
- **Tools**: ts-node

---

## 📂 Project Structure

- `src/extractors`: 실제 소스 코드에서 디자인 시스템 정보를 추출하는 핵심 로직.
- `snapshots/`: 날짜별(`YYYY-MM-DD.json`) 스케샷 데이터 저장소.
- `.github/workflows`: 자동 실행 스케줄(Cron) 및 Git 자동 커밋 설정.

---

## 🏃 Quick Start

```bash
# 의존성 설치
npm install

# 수동으로 스냅샷 생성 테스트
npm run snapshot
```

---

## 📝 Roadmap

- [ ] **Tailwind CSS/Figma API 연동**: 실제 디자인 시스템의 라이브 데이터와 연결.
- [ ] **Diff Viewer**: 어제와 오늘의 UI 상태 변화를 한눈에 보여주는 시각화 도구 추가.
- [ ] **Slack Notification**: 스냅샷 생성 시 변경 사항 요약 알림 전송.

---

Designed by **YSJ0228**
