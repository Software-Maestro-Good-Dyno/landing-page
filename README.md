# 랜딩페이지 지표 계산법

측정 도구: Google Analytics 4 (GA4)  
측정 ID: G-7MTLQGRGRW  
대상 URL: https://good-dyno.vercel.app

---

## 지표 1. 체류 시간

**GA4 경로**
```
보고서 → 참여 → 개요 → "평균 참여 시간"
```

- 자동 측정, 별도 설정 없음

---

## 지표 2. 스크롤 깊이

**GA4 경로**
```
보고서 → 참여 → 이벤트 → scroll_depth 클릭
```

- `percent_scrolled` 파라미터에서 25 / 50 / 75 / 90% 각 도달 수 확인
- 커스텀 이벤트로 구현되어 있음 (GA4 기본 scroll은 90%만 발화하므로 직접 구현)

---

## 지표 3. 클릭률 (CTA)

**GA4 경로**
```
보고서 → 참여 → 이벤트 → cta_click 클릭
```

- `location` 파라미터: `hero` (히어로 버튼) / `nav` (네비 버튼) 분리 확인 가능
- 클릭률 = `cta_click 수 ÷ 세션 수 × 100`

---

## 지표 4. 전환율 (사전등록)

**전환 목표 지정 (최초 1회)**
```
관리(⚙️) → 이벤트 → generate_lead → "전환으로 표시" 토글 ON
```

**GA4 경로**
```
보고서 → 참여 → 전환
```

- 전환율 = `generate_lead 수 ÷ 세션 수 × 100`
- 이벤트는 Formspree 제출 후 `?submitted=true` 복귀 시 발화

---

## 한눈에 보기 — 맞춤 탐색 보고서

```
탐색 → 새 탐색 분석 → 빈 양식
```

| 설정 | 값 |
|------|-----|
| 행 | 이벤트 이름 |
| 값 | 이벤트 수, 세션, 사용자당 참여 시간 |
| 필터 | generate_lead / cta_click / scroll_depth |

---

## 이벤트 구조 요약

| 지표 | 이벤트 이름 | 파라미터 | 발화 시점 |
|------|------------|---------|---------|
| 전환율 | `generate_lead` | `method: "email_form"` | ?submitted=true 복귀 시 |
| 클릭률 | `cta_click` | `location: "hero" / "nav"` | CTA 버튼 클릭 시 |
| 스크롤 깊이 | `scroll_depth` | `percent_scrolled: 25/50/75/90` | 각 마일스톤 도달 시 |
| 체류 시간 | (GA4 자동) | `engagement_time_msec` | 자동 |
