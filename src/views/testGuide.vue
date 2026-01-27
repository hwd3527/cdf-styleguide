<template>
  <div class="mentoring-guide-page">
    <!-- 1. Sidebar (고정) -->
    <aside class="sidebar">
      <div class="logo">
        <img :src="imgGroup" alt="logo" />
      </div>
      <nav class="sidebar-menu">
        <div class="menu-item">
          <img :src="imgIcon3" />
          <span>홈</span>
        </div>
        <div class="menu-item">
          <img :src="imgIcon" />
          <span>시간표</span>
        </div>
        <div class="menu-item active">
          <img :src="img2" />
          <span>APPs</span>
        </div>
        <div class="menu-item">
          <img :src="imgIcon1" />
          <span>전공탐색</span>
        </div>
        <div class="menu-item">
          <img :src="imgIcon2" />
          <span>Link +</span>
        </div>
      </nav>
    </aside>

    <!-- 2. Top Bar -->
    <header class="top-bar">
      <div class="top-decoration">
        <img :src="imgSubtract" />
      </div>
      <div class="top-content">
        <div class="lang-switch">
          <div class="switch-track"></div>
          <div class="switch-items">
            <div class="switch-thumb active">한</div>
            <div class="switch-label">EN</div>
          </div>
        </div>
        <div class="top-tools">
          <img :src="imgIcon300Search" class="search-icon" />
          <div class="avatar">
            <img :src="imgBerwinCoroza340444Unsplash" />
            <div class="status-dot"><img :src="imgEllipse87" /></div>
          </div>
        </div>
      </div>
    </header>

    <!-- 3. Right Aside (Today Panel) -->
    <aside class="right-aside">
      <div class="today-section">
        <p class="today-label">Today</p>
        <div class="date-box">
          <div class="date-ym">
            <span>2024. 09</span>
            <span class="month-kr">월</span>
          </div>
          <p class="date-day">16</p>
          <p class="date-weekday">. 월요일</p>
        </div>
        <div class="character">
          <img :src="imgCharacter" />
        </div>
      </div>

      <div class="quick-cards">
        <div class="quick-card menu-card">
          <img :src="img1" class="card-bg" />
          <p class="card-text">이번주<br/>식당메뉴</p>
        </div>
        <div class="quick-card info-card">
          <p class="card-label">오늘 일정</p>
          <p class="card-value">2</p>
        </div>
        <div class="quick-card info-card">
          <p class="card-label">오늘 할 일</p>
          <p class="card-value">5</p>
        </div>
      </div>

      <div class="restaurant-menu">
        <div class="menu-header">
          <select class="restaurant-select">
            <option>교직원식당(복지관 1층)</option>
          </select>
        </div>
        <div class="date-selector">
          <button class="date-btn"><img :src="imgChevronBackward" /></button>
          <p class="selected-date">2025.07.05(수)</p>
          <button class="date-btn"><img :src="imgChevronForward" /></button>
        </div>
        <div class="menu-list">
          <div class="menu-item">
            <span class="menu-tag">키친1</span>
            <p class="menu-desc">양푼이삼겹김치찌개 흑향미밥 순살햄구이 건파래자반 콩나물무침 깍두기</p>
            <span class="menu-price">₩7,700</span>
          </div>
          <div class="menu-item">
            <span class="menu-tag">오늘의 - 샐러드</span>
            <p class="menu-desc">양상추샐러드&삼색야채샐러드 샐러드토핑 2종&드레실2종 실곤약냉채샐러드 현미밥&숭늉</p>
          </div>
          <div class="menu-item">
            <span class="menu-tag">1코너 - snack1</span>
            <p class="menu-desc">[중식] 나시고랭(볶음밥) ₩4900 [중석식] 참치김치덮밥 ₩4200</p>
          </div>
        </div>
      </div>

      <div class="banner-section">
        <div class="banner-card">
          <div class="banner-content">
            <p class="banner-title">학업계획</p>
            <p class="banner-desc">목표에 도달하기까지의<br/>학업계획을 설계해 보세요.</p>
            <button class="banner-btn">나만의 학업계획 시작하기</button>
          </div>
          <img :src="img" class="banner-illust" />
        </div>
      </div>
    </aside>

    <!-- 4. Main Content -->
    <main class="main-content">
      <!-- Header Card -->
      <div class="content-header">
        <button class="back-btn"><img :src="img6" /></button>
        <div class="header-divider"></div>
        <div class="header-menu">
          <p>멘토링 소개</p>
          <img :src="img5" class="dropdown-arrow" />
        </div>
        <div class="header-divider"></div>
        <button class="menu-btn"><img :src="img4" /></button>
      </div>

      <!-- App Title -->
      <div class="app-title-section">
        <div class="app-icon">
          <img :src="imgSupervisorAccount" />
        </div>
        <div class="app-info">
          <h1>멘토링</h1>
          <p>탐색, 추천, 비교를 통해 자신만의 학업 계획을 설계하세요.</p>
        </div>
      </div>

      <!-- Content Card -->
      <div class="content-card">
        <!-- Hero Section -->
        <div class="hero-section">
          <h2>전공, 멘토링으로 답을 찾다!</h2>
          <p>아직 전공이 확실하지 않아 고민이세요?<br/>선배들과 교수님께 직접 물어보세요.</p>
        </div>

        <!-- 3 Cards Grid -->
        <div class="mentoring-cards">
          <div class="mentoring-card">
            <div class="card-image">
              <img :src="imgRectangle6" />
              <div class="card-overlay">
                <p>그룹 멘토링</p>
              </div>
            </div>
            <h3>전공탐색 멘토링</h3>
            <p class="card-desc">멘토 선배, 동기와 함께하는 그룹 멘토링을 통해 전공의 특징, 교육과정 구성, 학습 방식 및 주요 진출 분야, 비교과활동 등 탐색전공을 체계적으로 이해·탐구할 수 있습니다.</p>
          </div>

          <div class="mentoring-card">
            <div class="card-image">
              <img :src="imgRectangle7" />
              <div class="card-overlay">
                <p>개인 멘토링</p>
              </div>
            </div>
            <h3>개인 맞춤형 1:1대 멘토링</h3>
            <p class="card-desc">전공 선택에 대한 고민을 심층적으로 나누고, 전공 수업 노하우, 비교과 활동, 교환학생·인턴 경험 등을 바탕으로 전공 탐색 로드맵을 구체화할 수 있습니다.</p>
          </div>

          <div class="mentoring-card">
            <div class="card-image">
              <img :src="imgRectangle8" />
              <div class="card-overlay">
                <p>전공선택지도교수 멘토링</p>
              </div>
            </div>
            <h3>탐색전공 교수님과 함께하는 멘토링</h3>
            <p class="card-desc">전공의 학문적 특성 및 교육 방향을 이해하고, 연구실 탐방, 전공 기반 진로 사례 공유 등 을 통해 전공 선택과 중·장기 진로 설계에 대한 전문적인 조언을 받을 수 있습니다.</p>
          </div>
        </div>

        <!-- Process Section -->
        <div class="process-section">
          <div class="section-title">
            <h3>프로그램 진행 과정</h3>
          </div>

          <div class="process-flow">
            <img :src="imgBgSteps" class="flow-bg" />

            <div class="steps-grid">
              <!-- Row 1 -->
              <div class="step-card">
                <p class="step-number">step 1</p>
                <h4>멘토추천</h4>
                <p class="step-desc">전공선택지도교수님의 추천</p>
                <img :src="imgGroup1" class="step-icon" />
              </div>

              <div class="step-card">
                <p class="step-number">step 2</p>
                <h4>멘토-멘티 그룹 결성</h4>
                <ul class="step-list">
                  <li>탐색전공별 소규모 멘토링 그룹 구성</li>
                  <li>멘토 1인당 멘티 8명 이내</li>
                </ul>
                <img :src="imgGroup2" class="step-icon" />
              </div>

              <div class="step-card">
                <p class="step-number">step 3</p>
                <h4>멘토 OT</h4>
                <ul class="step-list">
                  <li>멘토링 및 전공탐색 방법 안내</li>
                  <li>우수 멘토링 사례 공유 및 활동 가이드 제공</li>
                </ul>
                <img :src="imgGroup3" class="step-icon" />
              </div>

              <!-- Row 2 (reversed) -->
              <div class="step-card">
                <p class="step-number">step 6</p>
                <h4>멘토링 결과 보고</h4>
                <ul class="step-list">
                  <li>전공 탐색 과정 및 결과 정리</li>
                  <li>전공 선택 및 진로 계획 도출</li>
                </ul>
                <img :src="imgGroup6" class="step-icon" />
              </div>

              <div class="step-card">
                <p class="step-number">step 5</p>
                <h4>전공탐색 멘토링 활동</h4>
                <ul class="step-list">
                  <li>전공 정보 탐색</li>
                  <li>전공 체험 및 선·후배 네트워크 형성</li>
                </ul>
                <img :src="imgGroup5" class="step-icon" />
              </div>

              <div class="step-card">
                <p class="step-number">step 4</p>
                <h4>전공선택지도교수 멘토링</h4>
                <ul class="step-list">
                  <li>전공 이해 심화</li>
                  <li>학문 분야 및 진로 방향성 조언</li>
                </ul>
                <img :src="imgGroup4" class="step-icon" />
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Widgets -->
        <div class="bottom-widgets">
          <div class="widget-card status-widget">
            <h3>나의 멘토링 진행현황</h3>
            <div class="status-content">
              <div class="status-image">
                <img :src="imgRectangle3453" />
                <div class="status-tags">
                  <div class="tag-item">
                    <img :src="imgViewKanban" />
                    <span>2</span>
                  </div>
                  <div class="tag-item">
                    <img :src="imgViewAgenda" />
                    <span>6</span>
                  </div>
                </div>
              </div>
              <div class="status-info">
                <p class="status-period">2026-1학기</p>
                <p class="status-dept">국어국문학과 멘토링</p>
                <div class="status-metrics">
                  <div class="metric">
                    <span class="metric-label">진행횟수</span>
                    <span class="metric-value">6차</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">참여횟수</span>
                    <span class="metric-value">3</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">참여율</span>
                    <span class="metric-value">50%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget-nav">
              <button><img :src="imgArrowBack" /></button>
              <span>1 / 2</span>
              <button><img :src="imgArrowForward" /></button>
            </div>
          </div>

          <div class="widget-card report-widget">
            <h3>우수활동보고서</h3>
            <img :src="imgGroup7" class="widget-icon" />
            <div class="report-content">
              <img :src="imgThumbnailImg" class="report-thumb" />
              <div class="report-info">
                <p class="report-dept">소프트웨어융합대학<br/>소프트웨어학부</p>
                <p class="report-title">2026-1기 소프트웨어전공 멘토링</p>
              </div>
              <button class="report-btn">보고서보기</button>
            </div>
            <div class="widget-nav">
              <button><img :src="imgArrowBack" /></button>
              <span>1 / 8</span>
              <button><img :src="imgArrowForward" /></button>
            </div>
          </div>

          <div class="widget-card notice-widget">
            <div class="widget-header">
              <h3>멘토링 공지사항</h3>
              <button><img :src="img3" /></button>
            </div>
            <ul class="notice-list">
              <li>
                <h4>2026년 멘토링 프로그램 멘토 모집(~1/30)</h4>
                <div class="notice-date">
                  <img :src="imgCalendarToday1" />
                  <span>2025. 12. 30</span>
                </div>
              </li>
              <li>
                <h4>2025-2학기 글말교실 소감문 공모전 및 문헌...</h4>
                <div class="notice-date">
                  <img :src="imgCalendarToday1" />
                  <span>2025. 12. 30</span>
                </div>
              </li>
              <li>
                <h4>멘토링 12기 교직원 멘토 초빈</h4>
                <div class="notice-date">
                  <img :src="imgCalendarToday1" />
                  <span>2025. 12. 30</span>
                </div>
              </li>
              <li>
                <h4>멘토링 드림캐처 2기 모집</h4>
                <div class="notice-date">
                  <img :src="imgCalendarToday1" />
                  <span>2025. 12. 30</span>
                </div>
              </li>
              <li>
                <h4>전공 멘토링 프로그램 참여 학생 모집 안내</h4>
                <div class="notice-date">
                  <img :src="imgCalendarToday1" />
                  <span>2025. 12. 30</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Close Button -->
        <div class="close-section">
          <button class="close-btn">
            <span>멘토링 소개 닫기</span>
            <img :src="imgArrowWarmUp" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import all images
import imgGroup from '@/assets/images/mentoring/imgGroup.svg'
import imgIcon from '@/assets/images/mentoring/imgIcon.svg'
import imgIcon1 from '@/assets/images/mentoring/imgIcon1.svg'
import imgIcon2 from '@/assets/images/mentoring/imgIcon2.svg'
import imgIcon3 from '@/assets/images/mentoring/imgIcon3.svg'
import img2 from '@/assets/images/mentoring/img2.svg'
import imgSubtract from '@/assets/images/mentoring/imgSubtract.svg'
import imgIcon300Search from '@/assets/images/mentoring/imgIcon300Search.svg'
import imgBerwinCoroza340444Unsplash from '@/assets/images/mentoring/imgBerwinCoroza340444Unsplash.png'
import imgEllipse87 from '@/assets/images/mentoring/imgEllipse87.svg'
import imgCharacter from '@/assets/images/mentoring/imgCharacter.svg'
import img1 from '@/assets/images/mentoring/img1.svg'
import imgChevronBackward from '@/assets/images/mentoring/imgChevronBackward.svg'
import imgChevronForward from '@/assets/images/mentoring/imgChevronForward.svg'
import img from '@/assets/images/mentoring/img.png'
import img6 from '@/assets/images/mentoring/img6.svg'
import img5 from '@/assets/images/mentoring/img5.svg'
import img4 from '@/assets/images/mentoring/img4.svg'
import imgSupervisorAccount from '@/assets/images/mentoring/imgSupervisorAccount.svg'
import imgRectangle6 from '@/assets/images/mentoring/imgRectangle6.png'
import imgRectangle7 from '@/assets/images/mentoring/imgRectangle7.png'
import imgRectangle8 from '@/assets/images/mentoring/imgRectangle8.png'
import imgBgSteps from '@/assets/images/mentoring/imgBgSteps.svg'
import imgGroup1 from '@/assets/images/mentoring/imgGroup1.svg'
import imgGroup2 from '@/assets/images/mentoring/imgGroup2.svg'
import imgGroup3 from '@/assets/images/mentoring/imgGroup3.svg'
import imgGroup4 from '@/assets/images/mentoring/imgGroup4.svg'
import imgGroup5 from '@/assets/images/mentoring/imgGroup5.svg'
import imgGroup6 from '@/assets/images/mentoring/imgGroup6.svg'
import imgRectangle3453 from '@/assets/images/mentoring/imgRectangle3453.png'
import imgViewKanban from '@/assets/images/mentoring/imgViewKanban.svg'
import imgViewAgenda from '@/assets/images/mentoring/imgViewAgenda.svg'
import imgArrowBack from '@/assets/images/mentoring/imgArrowBack.svg'
import imgArrowForward from '@/assets/images/mentoring/imgArrowForward.svg'
import imgGroup7 from '@/assets/images/mentoring/imgGroup7.svg'
import imgThumbnailImg from '@/assets/images/mentoring/imgThumbnailImg.png'
import img3 from '@/assets/images/mentoring/img3.svg'
import imgCalendarToday1 from '@/assets/images/mentoring/imgCalendarToday1.svg'
import imgArrowWarmUp from '@/assets/images/mentoring/imgArrowWarmUp.svg'
</script>

<style scoped>
/* ========== Global Layout ========== */
.mentoring-guide-page {
  display: grid;
  grid-template-columns: 88px 1fr 400px;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header aside"
    "sidebar main aside";
  min-height: 100vh;
  background: #f0f3fa;
  font-family: 'Pretendard', sans-serif;
}

/* ========== Sidebar ========== */
.sidebar {
  grid-area: sidebar;
  background: var(--primary-700, #004f9e);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 274px;
  padding: 26px 25px;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 50;
}

.logo {
  width: 48px;
  height: 48px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 3px 0;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 500;
}

.menu-item img {
  width: 32px;
  height: 32px;
}

.menu-item.active {
  color: white;
}

/* ========== Top Bar ========== */
.top-bar {
  grid-area: header;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 40;
  height: 60px;
}

.top-decoration {
  width: 48px;
  height: 48px;
  margin-top: 60px;
}

.top-decoration img {
  width: 100%;
  height: 100%;
}

.top-content {
  flex: 1;
  background: var(--primary-700, #004f9e);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  padding: 18px 40px;
}

.lang-switch {
  position: relative;
  width: 64px;
  height: 24px;
}

.switch-track {
  position: absolute;
  inset: 0;
  background: var(--primary-800, #00488f);
  border-radius: 12px;
  box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
}

.switch-items {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

.switch-thumb {
  width: 32px;
  height: 24px;
  background: white;
  border-radius: 13px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-700, #004f9e);
}

.switch-label {
  flex: 1;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  padding-left: 5px;
}

.top-tools {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-icon {
  width: 32px;
  height: 32px;
}

.avatar {
  position: relative;
  width: 32px;
  height: 32px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.status-dot {
  position: absolute;
  top: 2px;
  right: -2px;
  width: 6px;
  height: 6px;
}

.status-dot img {
  width: 100%;
  height: 100%;
}

/* ========== Right Aside ========== */
.right-aside {
  grid-area: aside;
  background: white;
  overflow-y: auto;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 30;
  padding: 23px 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.today-section {
  display: flex;
  flex-direction: column;
}

.today-label {
  font-family: 'Product Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--secondary-500, #0abf82);
  margin: 0 0 8px 0;
}

.date-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date-ym {
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-size: 16px;
  color: var(--grey-400, #9596a9);
}

.month-kr {
  font-size: 13px;
  font-weight: 700;
}

.date-day {
  font-family: 'Product Sans', sans-serif;
  font-size: 68px;
  font-weight: 300;
  color: var(--primary-800, #00488f);
  margin: 0;
  line-height: 1;
}

.date-weekday {
  font-size: 20px;
  font-weight: 700;
  color: var(--grey-400, #9596a9);
  margin: 0;
}

.character {
  position: absolute;
  top: 23px;
  right: 28px;
  width: 160px;
  height: 175px;
}

.character img {
  width: 100%;
  height: 100%;
}

.quick-cards {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}

.quick-card {
  flex: 1;
  height: 74px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-card {
  background: var(--primary-600, #0066cc);
  position: relative;
  overflow: hidden;
}

.menu-card .card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-card .card-text {
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 1.4;
  margin: 0;
}

.info-card {
  background: var(--grey-300, #b6b6c3);
}

.card-label {
  font-size: 14px;
  font-weight: 700;
  color: white;
  margin: 0 0 4px 0;
}

.card-value {
  font-family: 'Product Sans', sans-serif;
  font-size: 30px;
  color: white;
  margin: 0;
  line-height: 1;
}

.restaurant-menu {
  background: var(--primary-100, #cce5ff);
  border-radius: 20px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.16);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.menu-header select {
  width: 100%;
  height: 46px;
  border: 2px solid var(--primary-200, #99ccff);
  border-radius: 10px;
  background: #f7f7f8;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-700, #004f9e);
}

.date-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--primary-300, #66b2ff);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.date-btn img {
  width: 20px;
  height: 20px;
}

.selected-date {
  font-size: 17px;
  font-weight: 700;
  color: var(--grey-900, #393842);
  margin: 0;
}

.menu-list {
  background: #f7f7f8;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 250px;
  overflow-y: auto;
}

.menu-item {
  border-bottom: 1px solid var(--grey-100, #eeedf1);
  padding: 12px 8px;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-tag {
  display: inline-block;
  background: var(--tertiary-100, #d7f4ff);
  color: var(--tertiary-700, #0a85ed);
  font-size: 14px;
  font-weight: 600;
  padding: 2px 4px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.menu-desc {
  font-size: 14px;
  color: var(--grey-700, #555466);
  line-height: 1.4;
  margin: 0;
}

.menu-price {
  display: inline-block;
  background: var(--secondary-100, #dcf9ea);
  color: var(--secondary-600, #00a470);
  font-size: 12px;
  font-weight: 600;
  padding: 2px 4px;
  border-radius: 4px;
  margin-top: 4px;
}

.banner-section {
  margin-top: 16px;
}

.banner-card {
  background: #fe4646;
  border-radius: 20px;
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
  padding: 28px;
  position: relative;
  overflow: hidden;
  min-height: 192px;
}

.banner-content {
  position: relative;
  z-index: 1;
}

.banner-title {
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
}

.banner-desc {
  font-size: 14px;
  font-weight: 500;
  color: white;
  line-height: 1.4;
  margin: 0 0 20px 0;
}

.banner-btn {
  background: transparent;
  border: 2px solid white;
  border-radius: 38px;
  color: white;
  font-size: 17px;
  font-weight: 600;
  padding: 12px 30px;
  cursor: pointer;
}

.banner-illust {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 135px;
  height: 120px;
  object-fit: contain;
}

/* ========== Main Content ========== */
.main-content {
  grid-area: main;
  padding: 88px 0 0 76px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.content-header {
  background: white;
  border: 1px solid var(--grey-100, #eeedf1);
  border-radius: 20px 20px 0 0;
  height: 72px;
  display: flex;
  align-items: center;
}

.back-btn,
.menu-btn {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
}

.back-btn img,
.menu-btn img {
  width: 24px;
  height: 24px;
}

.header-divider {
  width: 1px;
  height: 72px;
  background: var(--grey-100, #eeedf1);
}

.header-menu {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
}

.header-menu p {
  font-size: 18px;
  font-weight: 700;
  color: var(--grey-900, #393842);
  margin: 0;
}

.dropdown-arrow {
  width: 24px;
  height: 24px;
}

.app-title-section {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 0 20px;
}

.app-icon {
  width: 68px;
  height: 68px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgb(220, 235, 0) 0%, rgb(0, 183, 196) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-icon img {
  width: 36px;
  height: 36px;
}

.app-info h1 {
  font-size: 30px;
  font-weight: 700;
  color: #111;
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.app-info p {
  font-size: 15px;
  color: #77788f;
  margin: 0;
}

.content-card {
  background: white;
  border-radius: 20px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.16);
  padding: 96px 80px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(to bottom, #11aeea 0%, #cef0c0 31%);
  border-radius: 12px;
  padding: 68px 0;
  text-align: center;
  color: white;
  margin-bottom: 48px;
}

.hero-section h2 {
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 12px 0;
  text-shadow: 4px 4px 16px rgba(0, 0, 0, 0.16);
}

.hero-section p {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
}

/* Mentoring Cards */
.mentoring-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  margin-bottom: 72px;
}

.mentoring-card {
  display: flex;
  flex-direction: column;
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 328 / 252;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 18px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 62px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px 24px 0 0;
}

.card-overlay p {
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
}

.mentoring-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--grey-950, #26252c);
  margin: 0 0 10px 0;
  text-align: center;
}

.card-desc {
  font-size: 14px;
  font-weight: 500;
  color: var(--grey-900, #393842);
  line-height: 1.3;
  text-align: center;
  margin: 0;
}

/* Process Section */
.process-section {
  margin-bottom: 48px;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
  position: relative;
}

.section-title::before,
.section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #ddd;
}

.section-title::before {
  margin-right: 16px;
}

.section-title::after {
  margin-left: 16px;
}

.section-title h3 {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary-800, #00488f);
  margin: 0;
  padding: 0 16px;
}

.process-flow {
  position: relative;
}

.flow-bg {
  position: absolute;
  width: 894px;
  height: 252px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: contain;
  pointer-events: none;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px 20px;
  position: relative;
  z-index: 1;
}

.steps-grid .step-card:nth-child(n+4) {
  order: calc(7 - var(--order));
}

.steps-grid .step-card:nth-child(4) { --order: 4; }
.steps-grid .step-card:nth-child(5) { --order: 5; }
.steps-grid .step-card:nth-child(6) { --order: 6; }

.step-card {
  background: white;
  border-radius: 46px;
  box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.16);
  padding: 36px 32px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.step-number {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.step-card:nth-child(1) .step-number { color: #02b263; }
.step-card:nth-child(2) .step-number { color: #24b9cd; }
.step-card:nth-child(3) .step-number { color: #218adf; }
.step-card:nth-child(4) .step-number { color: #e23dc3; }
.step-card:nth-child(5) .step-number { color: #7d41e3; }
.step-card:nth-child(6) .step-number { color: #2b58e2; }

.step-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: var(--grey-900, #393842);
  margin: 0 0 18px 0;
  line-height: 1;
}

.step-desc {
  font-size: 14px;
  font-weight: 600;
  color: var(--grey-500, #77788f);
  line-height: 1.4;
  margin: 0;
}

.step-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step-list li {
  font-size: 14px;
  font-weight: 600;
  color: var(--grey-500, #77788f);
  line-height: 1.4;
  padding-left: 16px;
  position: relative;
}

.step-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--grey-500, #77788f);
}

.step-icon {
  position: absolute;
  right: 32px;
  top: 22px;
  width: 46px;
  height: 46px;
  object-fit: contain;
}

/* Bottom Widgets */
.bottom-widgets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
  margin-bottom: 48px;
}

.widget-card {
  background: white;
  border-radius: 16px;
  box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.16);
  padding: 22px;
  display: flex;
  flex-direction: column;
}

.widget-card h3 {
  font-size: 16px;
  font-weight: 800;
  color: var(--primary-800, #00488f);
  margin: 0 0 24px 0;
}

.report-widget {
  background: var(--primary-900, #002d5c);
  position: relative;
}

.report-widget h3 {
  color: white;
  text-align: center;
}

.widget-icon {
  position: absolute;
  top: 17px;
  left: 92px;
  width: 30px;
  height: 30px;
}

.status-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.status-image {
  position: relative;
  width: 100%;
  aspect-ratio: 312 / 199;
  border-radius: 10px;
  overflow: hidden;
}

.status-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-tags {
  position: absolute;
  top: 92px;
  left: 26px;
  display: flex;
  gap: 16px;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  border-radius: 99px;
  padding: 4px 8px;
}

.tag-item img {
  width: 20px;
  height: 20px;
}

.tag-item span {
  font-size: 14px;
  font-weight: 700;
  color: var(--grey-950, #26252c);
}

.status-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.status-period {
  font-size: 15px;
  font-weight: 700;
  color: rgba(38, 37, 44, 0.8);
  margin: 0;
}

.status-dept {
  font-size: 18px;
  font-weight: 700;
  color: var(--grey-950, #26252c);
  margin: 0;
}

.status-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  padding: 12px;
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.metric-label {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
}

.metric-value {
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.report-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.report-thumb {
  width: 120px;
  height: 120px;
  border-radius: 20px;
  box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, 0.16);
  object-fit: cover;
}

.report-info {
  text-align: center;
}

.report-dept {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.3;
  margin: 0 0 8px 0;
}

.report-title {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin: 0;
}

.report-btn {
  background: var(--primary-600, #0066cc);
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 24px;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  margin-top: auto;
}

.widget-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--grey-100, #eeedf1);
  margin-top: auto;
}

.report-widget .widget-nav {
  background: white;
  border-radius: 0 0 16px 16px;
  border-top: none;
  padding: 15px;
}

.widget-nav button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--grey-200, #d8d8df);
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.widget-nav button img {
  width: 20px;
  height: 20px;
}

.widget-nav span {
  font-size: 14px;
  font-weight: 700;
  color: var(--grey-900, #393842);
}

.notice-widget .widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.widget-header button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--grey-200, #d8d8df);
  border-radius: 18px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.widget-header button img {
  width: 18px;
  height: 18px;
}

.notice-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.notice-list li {
  padding: 13px 0;
  border-bottom: 1px solid var(--grey-100, #eeedf1);
}

.notice-list li:last-child {
  border-bottom: none;
}

.notice-list h4 {
  font-size: 15px;
  font-weight: 700;
  color: var(--grey-950, #26252c);
  margin: 0 0 6px 0;
}

.notice-date {
  display: flex;
  align-items: center;
  gap: 8px;
}

.notice-date img {
  width: 20px;
  height: 20px;
}

.notice-date span {
  font-size: 13px;
  font-weight: 500;
  color: var(--grey-400, #9596a9);
}

/* Close Section */
.close-section {
  display: flex;
  justify-content: center;
  padding-top: 48px;
  border-top: 1px solid #ddd;
}

.close-btn {
  background: var(--primary-700, #004f9e);
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 30px 12px 30px;
  border: none;
  border-radius: 38px;
  box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.close-btn img {
  width: 20px;
  height: 20px;
}

/* ========== Responsive ========== */
@media (max-width: 1600px) {
  .mentoring-guide-page {
    grid-template-columns: 88px 1fr 350px;
  }
  
  .right-aside {
    padding: 20px;
  }
}

@media (max-width: 1280px) {
  .mentoring-guide-page {
    grid-template-columns: 88px 1fr;
    grid-template-areas:
      "sidebar header"
      "sidebar main";
  }
  
  .right-aside {
    display: none;
  }
  
  .main-content {
    padding-right: 40px;
  }
}

@media (max-width: 768px) {
  .mentoring-guide-page {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header"
      "main";
  }
  
  .sidebar {
    display: none;
  }
  
  .top-bar {
    grid-column: 1;
  }
  
  .main-content {
    padding: 40px 20px;
  }
  
  .content-card {
    padding: 40px 24px;
  }
  
  .mentoring-cards {
    grid-template-columns: 1fr;
  }
  
  .steps-grid {
    grid-template-columns: 1fr;
  }
  
  .bottom-widgets {
    grid-template-columns: 1fr;
  }
}
</style>
