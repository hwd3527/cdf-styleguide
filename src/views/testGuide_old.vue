<template>
  <div class="mentoring-guide-container">
    <!-- 1. Sidebar (Left, Fixed) -->
    <aside class="sidebar">
      <div class="logo-area">
        <img :src="imgGroup" class="full-img" alt="logo" />
      </div>

      <nav class="menu-items">
        <div class="menu-item">
          <div class="icon-box"><img :src="imgIcon3" /></div>
          <span>홈</span>
        </div>
        <div class="menu-item">
          <div class="icon-box"><img :src="imgIcon" /></div>
          <span>시간표</span>
        </div>
        <div class="menu-item active">
          <div class="icon-box apps-icon">
            <img :src="img2" />
          </div>
          <span>APPs</span>
        </div>
        <div class="menu-item">
          <div class="icon-box"><img :src="imgIcon1" /></div>
          <span>전공탐색</span>
        </div>
        <div class="menu-item">
          <div class="icon-box"><img :src="imgIcon2" /></div>
          <span>Link +</span>
        </div>
      </nav>
    </aside>

    <!-- 2. Header (Top) -->
    <header class="top-bar">
      <div class="top-decoration">
        <img :src="imgSubtract" class="full-img" />
      </div>
      <div class="blue-header">
        <div class="lang-switch-container">
          <div class="lang-switch-track"></div>
          <div class="lang-thumb">한</div>
          <div class="lang-text">EN</div>
        </div>
        <div class="header-tools">
          <div class="tool-icon search"><img :src="imgIcon300Search" class="full-img" /></div>
          <div class="tool-icon profile">
            <img :src="imgBerwinCoroza340444Unsplash" class="avatar-img full-img" />
            <div class="status-indicator"><img :src="imgEllipse87" /></div>
          </div>
        </div>
      </div>
    </header>

    <!-- 3. Right Aside (Today Panel) -->
    <aside class="right-aside">
      <div class="today-panel">
        <p class="today-label">Today</p>
        <div class="date-section">
          <div class="date-ym">
            <span class="ym-num">2024. 09</span>
            <span class="ym-text">월</span>
          </div>
          <p class="date-day">16</p>
          <p class="date-week">. 월요일</p>
        </div>
        <div class="char-img-box">
          <img :src="imgCharacter" class="full-img" />
        </div>
      </div>

      <div class="quick-tabs">
        <div class="q-tab menu-tab">
          <div class="tab-bg"><img :src="img1" class="full-img" /></div>
          <span class="t-text">이번주<br/>식당메뉴</span>
        </div>
        <div class="q-tab info-tab">
          <span class="i-label">오늘 일정</span>
          <span class="i-val">2</span>
        </div>
        <div class="q-tab info-tab">
          <span class="i-label">오늘 할 일</span>
          <span class="i-val">5</span>
          </div>
        </div>
      </div>

      <!-- Cafeteria Widget -->
      <div class="cafeteria-widget">
        <div class="cafe-selector">
          <span class="sel-text">교직원식당(복지관 1층)</span>
          <img :src="imgGroup1102" class="sel-arrow" />
        </div>
        
        <div class="date-nav">
          <button class="nav-btn prev"><img :src="imgChevronBackward" /></button>
          <span class="nav-date">2025.07.05(수)</span>
          <button class="nav-btn next"><img :src="imgChevronForward" /></button>
        </div>

        <div class="menu-list-viewport">
          <div class="menu-item-row">
            <span class="tag-badge">키친1</span>
            <span class="price-badge">₩7,700</span>
            <p class="menu-desc">양푼이삼겹김치찌개 흑향미밥 순살햄구이 건파래자반 콩나물무침 깍두기</p>
          </div>
          <div class="menu-item-row">
            <span class="tag-badge">오늘의 - 샐러드</span>
            <p class="menu-desc">양상추샐러드&amp;삼색야채샐러드 샐러드토핑 2종&amp;드레실2종 실곤약냉채샐러드 현미밥&amp;숭늉</p>
          </div>
          <div class="menu-item-row">
            <span class="tag-badge">1코너 - snack1</span>
            <p class="menu-desc">[중식] 나시고랭(볶음밥) ₩4900 [중석식] 참치김치덮밥 ₩4200</p>
          </div>
        </div>
      </div>

      <!-- Banner -->
      <div class="ad-banner">
        <div class="banner-content">
          <div class="bn-head">
            <img :src="imgExplore" class="bn-icon" />
            <span class="bn-title">학업계획</span>
          </div>
          <p class="bn-desc">목표에 도달하기까지의<br/>학업계획을 설계해 보세요.</p>
          <button class="bn- innovative-btn">나만의 학업계획 시작하기</button>
        </div>
        <div class="banner-char"><img :src="img" class="full-img" /></div>
      </div>

      <!-- Banner Controls -->
      <div class="banner-controls">
        <div class="dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="play-pause">
          <img :src="imgPlayArrow" />
          <img :src="imgPause" />
        </div>
      </div>
    </aside>

    <!-- 4. Page Title Section (z-10) -->
    <div class="main-title-container">
      <div class="title-icon">
        <div class="icon-gradient"></div>
        <img :src="imgSupervisorAccount" class="icon-symbol" />
      </div>
      <div class="text-group">
        <p class="sub">탐색, 추천, 비교를 통해 자신만의 학업 계획을 설계하세요.</p>
        <h1 class="main">멘토링</h1>
      </div>
    </div>

    <!-- 5. Main Card (z-5) -->
    <main class="content-card">
      <div class="card-background"></div>

      <!-- Card Header -->
      <div class="card-top-header">
        <div class="header-left item-box"><img :src="img6" /></div>

        <div class="header-menu">
          <span class="menu-title">멘토링 소개</span>
          <img :src="img5" class="menu-arrow" />
        </div>

        <div class="header-right item-box"><img :src="img4" /></div>
      </div>

      <!-- Gradient Visual Banner -->
      <div class="visual-gradient-bg">
        <div class="gradient-layer"></div>
        <div class="solid-layer"></div>
      </div>

      <!-- Visual Text -->
      <div class="visual-text-group">
        <h2 class="hero-text">전공, 멘토링으로 답을 찾다!</h2>
        <div class="sub-hero">
          <p>아직 전공이 확실하지 않아 고민이세요?</p>
          <p>선배들과 교수님께 직접 물어보세요.</p>
        </div>
      </div>

      <!-- Info Cards (3 Columns) -->
      <div class="info-cards-row">
        <!-- Card 1 -->
        <div class="info-card-item">
          <div class="card-image">
            <img :src="imgRectangle6" class="full-img object-cover" />
            <div class="label-overlay"><span>그룹 멘토링</span></div>
          </div>
          <h3 class="card-tit">전공탐색 멘토링</h3>
          <div class="card-txt">
            멘토 선배, 동기와 함께하는 그룹 멘토링을 통해 전공의 특징, 교육과정 구성, 학습 방식 및 주요 진출 분야, 비교과활동 등 탐색전공을 체계적으로 이해·탐구할 수 있습니다.
          </div>
        </div>
        <!-- Card 2 -->
        <div class="info-card-item center-card"> <!-- Slightly shorter in Figma ? -->
          <div class="card-image">
            <img :src="imgRectangle7" class="full-img object-cover" />
            <div class="label-overlay"><span>개인 멘토링</span></div>
          </div>
          <h3 class="card-tit">개인 맞춤형 1:1대 멘토링</h3>
          <div class="card-txt">
            전공 선택에 대한 고민을 심층적으로 나누고, 전공 수업 노하우, 비교과 활동, 교환학생·인턴 경험 등을 바탕으로 전공 탐색 로드맵을 구체화할 수 있습니다.
          </div>
        </div>
        <!-- Card 3 -->
        <div class="info-card-item">
          <div class="card-image">
            <img :src="imgRectangle8" class="full-img object-cover" />
            <div class="label-overlay"><span>전공선택지도교수 멘토링</span></div>
          </div>
          <h3 class="card-tit">전공선택지도교수 멘토링</h3>
          <div class="card-txt">
            전공의 학문적 특성 및 교육 방향을 이해하고, 연구실 탐방, 전공 기반 진로 사례 공유 등 을 통해 전공 선택과 중·장기 진로 설계에 대한 전문적인 조언을 받을 수 있습니다.
          </div>
        </div>
      </div>

      <!-- Process Steps -->
      <div class="process-flow-section">
        <div class="pf-title">
          <img :src="imgLine" class="line-under" />
          <h3>프로그램 진행 과정</h3>
        </div>

        <div class="flow-grid">
          <!-- Background Line -->
          <img :src="imgBgSteps" class="flow-bg-line" />

          <!-- Step 1 -->
          <div class="step-card s1">
            <p class="s-step t-green">step 1</p>
            <p class="s-tit">멘토추천</p>
            <p class="s-sub">전공선택지도교수님의 추천</p>
            <div class="s-ico"><img :src="imgGroup1" /></div>
          </div>

          <!-- Step 2 -->
          <div class="step-card s2">
            <p class="s-step t-teal">step 2</p>
            <p class="s-tit">멘토-멘티 그룹 결성</p>
            <ul class="s-list">
              <li>탐색전공별 소규모 멘토링 그룹 구성</li>
              <li>멘토 1인당 멘티 8명 이내</li>
            </ul>
            <div class="s-ico"><img :src="imgGroup2" /></div>
          </div>

          <!-- Step 3 -->
          <div class="step-card s3">
            <p class="s-step t-blue">step 3</p>
            <p class="s-tit">멘토 OT</p>
            <ul class="s-list">
              <li>멘토링 및 전공탐색 방법 안내</li>
              <li>우수 멘토링 사례 공유 및 활동 가이드 제공</li>
            </ul>
            <div class="s-ico"><img :src="imgGroup3" /></div>
          </div>

          <!-- Step 4 (Right side, Row 2) -->
          <div class="step-card s4">
            <p class="s-step t-indigo">step 4</p>
            <p class="s-tit">전공선택지도교수 멘토링</p>
            <ul class="s-list">
              <li>전공 이해 심화</li>
              <li>학문 분야 및 진로 방향성 조언</li>
            </ul>
            <div class="s-ico"><img :src="imgGroup4" /></div>
          </div>

          <!-- Step 5 -->
          <div class="step-card s5">
            <p class="s-step t-purple">step 5</p>
            <p class="s-tit">전공탐색 멘토링 활동</p>
            <ul class="s-list">
              <li>전공 정보 탐색</li>
              <li>전공 체험 및 선·후배 네트워크 형성</li>
            </ul>
            <div class="s-ico"><img :src="imgGroup5" /></div>
          </div>

          <!-- Step 6 (Left side, Row 2) -->
          <div class="step-card s6">
            <p class="s-step t-pink">step 6</p>
            <p class="s-tit">멘토링 결과 보고</p>
            <ul class="s-list">
              <li>전공 탐색 과정 및 결과 정리</li>
              <li>전공 선택 및 진로 계획 도출</li>
            </ul>
            <div class="s-ico"><img :src="imgGroup6" /></div>
          </div>
        </div>
      </div>

      <!-- Close Button Area -->
      <div class="close-btn-zone">
        <div class="line-long"><img :src="imgLine300" class="full-img" /></div>
        <button class="shadow-btn">
          <span>멘토링 소개 닫기</span>
          <img :src="imgArrowWarmUp" />
        </button>
      </div>

      <!-- Bottom Widgets -->
      <div class="bottom-widgets">
        <!-- My Status -->
        <div class="widget w-status">
          <div class="w-head">
            <span class="blue-tit">나의 멘토링 진행현황</span>
          </div>
          <div class="w-body status-body">
            <div class="status-bg-img"><img :src="imgRectangle3453" class="full-img object-cover" /></div>
            
            <div class="status-metrics">
              <!-- Background Blur -->
              <div class="metrics-bg"></div>
              <div class="metric-item">
                <span class="m-lbl">진행횟수</span>
                <span class="m-val">6차</span>
              </div>
              <div class="sep-line"></div>
              <div class="metric-item">
                <span class="m-val">3</span>
                <span class="m-lbl">참여횟수</span>
              </div>
              <div class="sep-line"></div>
              <div class="metric-item">
                <span class="m-val">50%</span>
                <span class="m-lbl">참여율</span>
              </div>
            </div>

            <div class="text-overlays">
              <div class="term-txt">2026-1학기</div>
              <h4 class="dept-txt">국어국문학과 멘토링</h4>
            </div>

            <div class="kanban-badges">
              <div class="kb-badge"><img :src="imgViewKanban" /> 2</div>
              <div class="kb-badge"><img :src="imgViewAgenda" /> 6</div>
            </div>
          </div>
          <div class="w-footer">
            <div class="paging-row">
              <button class="pg-btn prev"><img :src="imgArrowBack" /></button>
              <div class="pg-txt">1 / 2</div>
              <button class="pg-btn next"><img :src="imgArrowForward" /></button>
            </div>
          </div>
        </div>

        <!-- Report -->
        <div class="widget w-report">
          <div class="w-head dark-head">
            <img :src="imgGroup7" />
            <span>우수활동보고서</span>
          </div>
          <div class="w-body report-body">
            <img :src="imgThumbnailImg" class="report-thumb" />
            <div class="report-info">
              <p class="r-dept">소프트웨어융합대학<br/>소프트웨어학부</p>
              <p class="r-tit">2026-1기 소프트웨어전공 멘토링</p>
            </div>
            <button class="btn-sm-blue">보고서보기</button>
          </div>
          <div class="w-footer">
            <div class="paging-row">
              <button class="pg-btn prev"><img :src="imgArrowBack" /></button>
              <div class="pg-txt">1 / 8</div>
              <button class="pg-btn next"><img :src="imgArrowForward" /></button>
            </div>
          </div>
        </div>

        <!-- Notices -->
        <div class="widget w-notice">
          <div class="w-head">
            <span class="blue-tit">멘토링 공지사항</span>
            <button class="icon-more"><img :src="img3" /></button>
          </div>
          <div class="notice-list-box">
            <div class="notice-row" v-for="n in 5" :key="n">
              <div class="date-row">
                <img :src="imgCalendarToday1" />
                <span>2025. 12. 30</span>
              </div>
              <p class="subj">2026년 멘토링 프로그램 멘토 모집(~1/30)</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
// Assets
import imgBerwinCoroza340444Unsplash from '@/assets/images/mentoring/imgBerwinCoroza340444Unsplash.png';
import img from '@/assets/images/mentoring/img.png';
import imgRectangle6 from '@/assets/images/mentoring/imgRectangle6.png';
import imgRectangle7 from '@/assets/images/mentoring/imgRectangle7.png';
import imgRectangle8 from '@/assets/images/mentoring/imgRectangle8.png';
import imgThumbnailImg from '@/assets/images/mentoring/imgThumbnailImg.png';
import imgRectangle3453 from '@/assets/images/mentoring/imgRectangle3453.png';
import imgEllipse87 from '@/assets/images/mentoring/imgEllipse87.svg';
import imgIcon300Search from '@/assets/images/mentoring/imgIcon300Search.svg';
import imgExplore from '@/assets/images/mentoring/imgExplore.svg';
import imgPlayArrow from '@/assets/images/mentoring/imgPlayArrow.svg';
import imgPause from '@/assets/images/mentoring/imgPause.svg';
import imgChevronBackward from '@/assets/images/mentoring/imgChevronBackward.svg';
import imgChevronForward from '@/assets/images/mentoring/imgChevronForward.svg';
import imgGroup1102 from '@/assets/images/mentoring/imgGroup1102.svg';
import img1 from '@/assets/images/mentoring/img1.svg';
import imgCharacter from '@/assets/images/mentoring/imgCharacter.svg';
import imgIcon from '@/assets/images/mentoring/imgIcon.svg';
import imgIcon1 from '@/assets/images/mentoring/imgIcon1.svg';
import imgIcon2 from '@/assets/images/mentoring/imgIcon2.svg';
import imgIcon3 from '@/assets/images/mentoring/imgIcon3.svg';
import imgGroup from '@/assets/images/mentoring/imgGroup.svg';
import img2 from '@/assets/images/mentoring/img2.svg';
import imgLine300 from '@/assets/images/mentoring/imgLine300.svg';
import imgArrowWarmUp from '@/assets/images/mentoring/imgArrowWarmUp.svg';
import imgBgSteps from '@/assets/images/mentoring/imgBgSteps.svg';
import imgGroup1 from '@/assets/images/mentoring/imgGroup1.svg';
import imgGroup2 from '@/assets/images/mentoring/imgGroup2.svg';
import imgGroup3 from '@/assets/images/mentoring/imgGroup3.svg';
import imgGroup4 from '@/assets/images/mentoring/imgGroup4.svg';
import imgGroup5 from '@/assets/images/mentoring/imgGroup5.svg';
import imgGroup6 from '@/assets/images/mentoring/imgGroup6.svg';
import imgLine from '@/assets/images/mentoring/imgLine.svg';
import imgSupervisorAccount from '@/assets/images/mentoring/imgSupervisorAccount.svg';
import img3 from '@/assets/images/mentoring/img3.svg';
import imgCalendarToday1 from '@/assets/images/mentoring/imgCalendarToday1.svg';
import imgArrowBack from '@/assets/images/mentoring/imgArrowBack.svg';
import imgArrowBack1 from '@/assets/images/mentoring/imgArrowBack1.svg'; // Overlay arrow
import imgArrowForward from '@/assets/images/mentoring/imgArrowForward.svg';
import imgGroup7 from '@/assets/images/mentoring/imgGroup7.svg';
import imgViewKanban from '@/assets/images/mentoring/imgViewKanban.svg';
import imgViewAgenda from '@/assets/images/mentoring/imgViewAgenda.svg';
import img4 from '@/assets/images/mentoring/img4.svg';
import img5 from '@/assets/images/mentoring/img5.svg';
import img6 from '@/assets/images/mentoring/img6.svg';
import imgSubtract from '@/assets/images/mentoring/imgSubtract.svg';
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap'); */
/* Using standard CSS imports for Google fonts if possible or relying on system fallback */

* {
  box-sizing: border-box;
  margin: 0; padding: 0;
}

body, html {
  margin: 0; padding: 0;
}

.full-img { width: 100%; height: 100%; display: block; }
.object-cover { object-fit: cover; }

.mentoring-guide-container {
  width: 1920px;
  height: 2166px;
  background-color: #f0f3fa;
  position: relative;
  margin: 0 auto;
  font-family: 'Pretendard', sans-serif;
  overflow: hidden;
}

/* ----------------------------------
   1. Sidebar
   ---------------------------------- */
.sidebar {
  position: absolute;
  top: 0; left: 0;
  width: 88px; height: 2166px;
  background: #004f9e;
  padding-top: 26px;
  display: flex; flex-direction: column; align-items: center; gap: 274px;
  z-index: 50;
}
.logo-area { width: 48px; height: 48px; }
.menu-items { display: flex; flex-direction: column; gap: 30px; width: 100%; }
.menu-item {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  color: rgba(255,255,255,0.6); cursor: pointer;
}
.menu-item.active { color: #fff; }
.menu-item span { font-size: 14px; font-weight: 500; }
.icon-box { width: 32px; height: 32px; }
.icon-box img { width: 100%; height: 100%; }

/* ----------------------------------
   2. Header (Top Bar)
   ---------------------------------- */
.top-bar {
  position: absolute;
  left: 88px; top: 0; width: 1832px;
  height: 108px;
  z-index: 40;
}
.top-decoration {
  position: absolute; top: 60px; left: 0; width: 48px; height: 48px; z-index: 1;
}
.blue-header {
  height: 60px; width: 100%; background: #004f9e;
  display: flex; justify-content: flex-end; align-items: center; padding-right: 40px; gap: 30px;
}
.lang-switch-container {
  width: 64px; height: 24px; position: relative;
}
.lang-switch-track {
  width: 100%; height: 100%; background: #00488f; border-radius: 12px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
}
.lang-thumb {
  position: absolute; left: 0; top: 0; width: 32px; height: 24px; background: #fff;
  border-radius: 13px; display: flex; align-items: center; justify-content: center;
  color: #004f9e; font-size: 13px; font-weight: 600;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.25);
}
.lang-text {
  position: absolute; right: 0; top: 0; width: 32px; height: 24px;
  display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 13px;
}
.header-tools { display: flex; gap: 48px; align-items: center; }
.tool-icon { width: 32px; height: 32px; position: relative; }
.avatar-img { border-radius: 50%; }
.status-indicator {
  position: absolute; right: 2px; bottom: 2px; width: 6px; height: 6px; 
  /* red dot logic in generated code imgEllipse87 */
}
.status-indicator img { width: 100%; height: 100%; }

/* ----------------------------------
   3. Right Aside
   ---------------------------------- */
.right-aside {
  position: absolute;
  top: 60px; right: 0;
  width: 400px; height: 1140px;
  background: #fff; /* Figma AsideNew has bg-white */
  z-index: 30;
  padding-left: 28px; padding-top: 23px; /* Based on items position */
}

/* Date & Character */
.date-char-section {
  position: relative; height: 180px; width: 100%;
}
.char-img-box {
  width: 160px; height: 175px; position: absolute; right: 20px; top: 0;
}
.today-label {
  font-family: 'Product Sans', sans-serif; font-weight: 700; font-size: 28px; color: #0abf82;
  margin-top: 17px;
}
.date-info {
  margin-top: 30px; position: relative;
}
.date-big {
  font-family: 'Product Sans', sans-serif; font-weight: 300; font-size: 68px; color: #00488f; letter-spacing: -2px;
  line-height: 1;
}
.date-week-row {
  position: absolute; left: 65px; top: 0;
  font-family: 'Product Sans', sans-serif; font-size: 16px; color: #9596a9;
  display: flex; gap: 4px;
}
.w-text { font-family: 'Pretendard', sans-serif; font-weight: 700; font-size: 13px; }
.day-text {
  position: absolute; left: 65px; top: 25px;
  font-size: 20px; font-weight: 700; color: #9596a9;
}

/* Quick Tabs */
.quick-tabs {
  margin-top: 40px; display: flex; gap: 16px;
}
.q-tab {
  width: 104px; height: 74px; border-radius: 20px; 
  position: relative; overflow: hidden;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
}
.menu-tab { height: 86px; background: #0066cc; margin-top: -12px; } /* taller visually? generated code: h-[86px] top-[222px] vs others h[74] top[222] implies alignment? */
/* Actually generated code: Menu tab H86, Others H74. All top 222. So menu tab sticks down? */
/* Wait, visual check: Menu tab sticks up or align top? Code says top 222 for all. So menu tab is taller. */
.menu-tab { height: 86px; margin-top: 0; }
.info-tab { background: #b6b6c3; height: 74px; margin-top: 12px; } /* Align bottoms */

.tab-bg { position: absolute; inset: 0; }
.tab-content, .info-content {
  position: relative; z-index: 2; height: 100%;
  display: flex; flex-direction: column; justify-content: center; align-items: center; color: #fff;
}
.t-text { font-weight: 700; font-size: 15px; text-align: center; }
.i-label { font-size: 14px; font-weight: 700; }
.i-val { font-size: 30px; font-family: 'Product Sans', sans-serif; margin-top: 4px; }

/* Cafeteria */
.cafeteria-widget {
  width: 344px; height: 386px; background: #cce5ff; border-radius: 20px;
  margin-top: 30px;
  box-shadow: 4px 4px 12px rgba(0,0,0,0.16);
  padding: 20px; position: relative;
}
.cafe-selector {
  height: 46px; background: #f7f7f8; border: 2px solid #99ccff; border-radius: 10px;
  display: flex; align-items: center; justify-content: space-between; padding: 0 16px;
  color: #004f9e; font-weight: 600; font-size: 14px;
}
.sel-arrow { width: 20px; }

.date-nav {
  display: flex; justify-content: space-between; align-items: center;
  margin-top: 10px; margin-bottom: 20px; padding: 0 4px;
}
.nav-btn {
  width: 30px; height: 30px; border-radius: 50%; background: #66b2ff;
  display: flex; align-items: center; justify-content: center;
}
.nav-date { font-weight: 700; font-size: 17px; color: #393842; }

.menu-list-viewport {
  height: 236px; background: #f7f7f8; border-radius: 10px; padding: 12px;
  overflow-y: auto;
}
.menu-item-row { border-bottom: 1px solid #eeedf1; padding-bottom: 12px; margin-bottom: 12px; }
.menu-item-row:last-child { border: none; }
.tag-badge {
  background: #d7f4ff; color: #0a85ed; font-size: 14px; font-weight: 600;
  padding: 2px 6px; border-radius: 4px; margin-right: 6px;
}
.price-badge {
  background: #dcf9ea; color: #00a470; font-size: 12px; font-weight: 600;
  padding: 2px 4px; border-radius: 4px;
}
.menu-desc {
  font-size: 14px; color: #555466; margin-top: 6px; line-height: 1.4;
}

/* Ad Banner */
.ad-banner {
  width: 351px; height: 192px; background: #fe4646; border-radius: 20px;
  margin-top: 24px; overflow: hidden; position: relative;
  box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
}
.banner-content { position: relative; z-index: 2; padding: 24px; color: #fff; }
.bn-head { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.bn-icon { width: 40px; }
.bn-title { font-size: 20px; font-weight: 700; }
.bn-desc { font-size: 14px; margin-bottom: 24px; font-weight: 500; line-height: 1.3;}
.bn-btn {
  border: 2px solid #fff; border-radius: 38px; padding: 10px 24px; 
  color: #fff; font-weight: 600; font-size: 17px;
}
.banner-char {
  position: absolute; right: 0px; bottom: 0; width: 140px; z-index: 1;
}

.banner-controls {
  display: flex; justify-content: center; gap: 12px; margin-top: 16px; width: 351px;
}
.dots { display: flex; gap: 6px; align-items: center; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: #b6b6c3; }
.dot.active { width: 24px; background: #004f9e; border-radius: 4px; }
.play-pause { display: flex; align-items: center; gap: 4px; }

/* ----------------------------------
   4. Page Title (Body)
   ---------------------------------- */
.main-title-container {
  position: absolute;
  left: 164px; top: 100px;
  display: flex; align-items: center; gap: 24px;
}
.title-icon { width: 68px; height: 68px; position: relative; }
.icon-gradient {
  width: 100%; height: 100%; border-radius: 16px;
  background: linear-gradient(135deg, #dceb00 0%, #00b7c4 100%);
}
.icon-symbol { position: absolute; top: 16px; left: 16px; width: 36px; }
.text-group .sub { font-size: 15px; color: #77788f; letter-spacing: -0.15px; }
.text-group .main { font-size: 30px; font-weight: 700; color: #111; margin-top: 4px; }

/* ----------------------------------
   5. Content Card
   ---------------------------------- */
.content-card {
  position: absolute;
  left: 164px; top: 188px;
  width: 1280px; height: 1878px;
  z-index: 5;
}
.card-background {
  position: absolute; inset: 0; background: #fff; border-radius: 20px;
  box-shadow: 4px 4px 12px rgba(0,0,0,0.16);
}

/* Card Header */
.card-top-header {
  position: absolute; top: 0; left: 0; width: 100%; height: 72px;
  border-bottom: 1px solid #eeedf1;
  display: block;
  z-index: 20;
}
.item-box {
  width: 72px; height: 71px; display: flex; align-items: center; justify-content: center;
  border-right: 1px solid #eeedf1; /* Left item: right border */
}
.header-left {
  position: absolute; left: 0; top: 0;
  width: 73px;
  border-right: 1px solid #eeedf1;
  border-top-left-radius: 20px;
}
.header-right {
  position: absolute; right: 0; top: 0;
  border-right: none;
  border-left: 1px solid #eeedf1;
  border-top-right-radius: 20px;
}
.header-menu {
  position: absolute;
  left: 73px; top: 0;
  width: 299px; height: 71px;
  display: flex; align-items: center;
  background: #fff;
  border-right: 1px solid #eeedf1;
}
.menu-title {
  margin-left: 18px;
  font-size: 18px; font-weight: 700; color: #393842;
  letter-spacing: -0.18px;
  line-height: 1.4;
}
.menu-arrow {
  position: absolute;
  right: 18px; top: 24px;
  width: 24px; height: 24px;
}

/* Content Inside Card */
.visual-gradient-bg {
  position: absolute; left: 40px; top: 96px; width: 1200px; height: 1742px;
  border-radius: 12px; overflow: hidden;
  z-index: 0;
}
.gradient-layer {
  height: 1778px; width: 100%;
  background: linear-gradient(180deg, #11aeea 0%, #cef0c0 30.99%, #cef0c0 100%);
}
.solid-layer {
  height: 300px; width: 100%; background: #cef0c0;
}

.visual-text-group {
  position: absolute; top: 164px; width: 100%; text-align: center; z-index: 10;
}
.hero-text {
  font-size: 42px; font-weight: 800; color: #fff;
  text-shadow: 4px 4px 16px rgba(0,0,0,0.16);
  margin-bottom: 20px;
}
.sub-hero { color: #fff; font-size: 14px; font-weight: 600; line-height: 1.4; }

/* Info Cards */
.info-cards-row {
  position: absolute; top: 296px; left: 120px;
  display: flex; gap: 28px;
  z-index: 10;
}
.info-card-item {
  width: 328px; height: 373px;
}
/* Center card is shorter in generated code H355 but usually aligned top */
.center-card { height: 355px; }

.card-image {
  width: 100%; height: 252px; border-radius: 24px; overflow: hidden; position: relative;
  box-shadow: 0 4px 16px rgba(0,0,0,0.16);
}
.label-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 62px;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
}
.label-overlay span {
  color: #fff; font-size: 20px; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
}
.card-tit { text-align: center; font-size: 18px; font-weight: 700; color: #26252c; margin: 18px 0 8px 0; }
.card-txt { text-align: center; font-size: 14px; color: #393842; line-height: 1.35; word-break: keep-all; }

/* Process Steps */
.process-flow-section {
  position: absolute; top: 719px; left: 120px;
  width: 1040px;
  z-index: 10;
}
.pf-title { position: relative; height: 30px; margin-bottom: 45px; }
.line-under {
  position: absolute;
  left: 164px;
  top: 11px;
  width: 856px;
  height: 0;
  z-index: 0;
}
.pf-title h3 {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 18px;
  font-weight: 800;
  color: #00488f;
  letter-spacing: -0.18px;
}

.flow-grid { position: relative; height: 410px; }
.flow-bg-line {
  position: absolute;
  left: 186px;
  top: 79px;
  width: 894px;
  height: 252px;
  z-index: 0;
  display: block;
  object-fit: contain;
}

.step-card {
  position: absolute;
  width: 304px; height: 180px; background: #fff; border-radius: 46px;
  box-shadow: 4px 4px 16px rgba(0,0,0,0.16);
  padding: 0;
  z-index: 1;
}
/* Positions */
/* Row 1: Left to Right */
.s1 { top: 0; left: 0; }
.s2 { top: 0; left: 368px; }
.s3 { top: 0; left: 736px; }
/* Row 2: Right to Left (Snake) */
.s4 { top: 230px; left: 736px; text-align: left; }
.s5 { top: 230px; left: 368px; }
.s6 { top: 230px; left: 0; }

.s-step {
  position: absolute;
  left: 32px;
  top: 36px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
}
.t-green { color: #02b263; }
.t-teal { color: #24b9cd; }
.t-blue { color: #218adf; }
.t-indigo { color: #2b58e2; }
.t-purple { color: #7d41e3; }
.t-pink { color: #e23dc3; }

.s-tit {
  position: absolute;
  left: 32px;
  top: 82px;
  font-size: 17px;
  font-weight: 700;
  color: #393842;
  letter-spacing: -0.17px;
  line-height: 1;
}
.s-sub {
  position: absolute;
  left: 32px;
  top: 111px;
  font-size: 14px;
  color: #77788f;
  font-weight: 600;
  letter-spacing: -0.14px;
  line-height: 1.4;
}
.s-list {
  position: absolute;
  left: 41px;
  top: 111px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.s-list li {
  position: relative;
  font-size: 14px;
  color: #77788f;
  font-weight: 600;
  letter-spacing: -0.14px;
  line-height: 1.4;
}
.s-list li::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 8px;
  width: 4px;
  height: 4px;
  background: #77788f;
  border-radius: 50%;
}
.s-ico {
  position: absolute;
  left: 226px;
  top: 22px;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.s-ico img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

/* Close Button */
.close-btn-zone {
  position: absolute; top: 1224px; left: 140px; width: 1000px;
  text-align: center; z-index: 10;
}
.line-long { position: absolute; width: 100%; top: 22px; }
.shadow-btn {
  position: relative; z-index: 2;
  background: #004f9e; color: #fff; font-size: 16px; font-weight: 700;
  padding: 12px 20px 12px 30px;
  border-radius: 38px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  box-shadow: 4px 4px 16px rgba(0,0,0,0.16);
}

/* Bottom Widgets */
.bottom-widgets {
  position: absolute; top: 1318px; left: 120px; display: flex; gap: 16px; z-index: 10;
}
.widget {
  width: 336px; height: 420px; background: #fff; border-radius: 16px; overflow: hidden;
  box-shadow: 4px 4px 16px rgba(0,0,0,0.16);
  position: relative;
}
/* W-Status */
.w-head {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.blue-tit { color: #00488f; font-size: 16px; font-weight: 800; }
.dark-head { background: #002d5c; color: #fff; justify-content: center; gap: 8px; font-weight: 800; font-size: 16px; }
.dark-head img {
  width: 20px;
  height: 24px;
  display: block;
  flex: 0 0 auto;
}

.status-body {
  height: 300px; position: relative; padding: 12px;
}
.status-bg-img {
  width: 100%; height: 100%; border-radius: 10px; overflow: hidden;
}
.status-metrics {
  position: absolute; bottom: 12px; left: 12px; width: 312px; height: 100px;
  color: #fff; display: flex; align-items: center; justify-content: space-around;
  z-index: 2;
}
.metrics-bg {
  position: absolute; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
  border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; z-index: -1;
}
.metric-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.m-val { font-size: 20px; font-weight: 700; }
.m-lbl { font-size: 14px; opacity: 0.8; }
.sep-line { width: 1px; height: 40px; background: rgba(255,255,255,0.3); }

.kanban-badges {
  position: absolute; top: 20px; left: 24px; display: flex; gap: 8px;
}
.kb-badge {
  background: #fff; color: #26252c; font-weight: 700; font-size: 14px;
  padding: 4px 10px; border-radius: 20px; display: flex; align-items: center; gap: 4px;
}
.kb-badge img {
  width: 20px;
  height: 20px;
  display: block;
  flex: 0 0 auto;
}
.text-overlays {
  position: absolute; top: 60px; left: 24px; 
}
.term-txt { font-size: 15px; font-weight: 700; color: #26252c; margin-bottom: 2px; opacity: 0.8; }
.dept-txt { font-size: 18px; font-weight: 700; color: #26252c; text-shadow: 0 1px 2px rgba(255,255,255,0.8); }

/* W-Report */
.report-body {
  height: 300px; background: #002d5c; display: flex; flex-direction: column; align-items: center; padding-top: 12px;
}
.report-thumb { width: 120px; height: 120px; border-radius: 20px; object-fit: cover; box-shadow: 4px 4px 12px rgba(0,0,0,0.16); }
.report-info { text-align: center; color: #fff; margin-top: 16px; margin-bottom: 20px; }
.r-dept { font-size: 14px; opacity: 0.8; margin-bottom: 4px; }
.r-tit { font-size: 18px; font-weight: 700; }
.btn-sm-blue {
  background: #0066cc; color: #fff; font-size: 15px; font-weight: 600; padding: 6px 24px; border-radius: 20px;
}

/* W-Notice */
.notice-list-box { padding: 0 20px; }
.notice-row { border-bottom: 1px solid #eeedf1; padding: 12px 0; }
.date-row { display: flex; gap: 6px; align-items: center; font-size: 13px; color: #9596a9; margin-bottom: 4px; }
.date-row img { width: 20px; height: 20px; display: block; }
.subj { font-size: 15px; font-weight: 700; color: #26252c; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.icon-more {
  width: 32px;
  height: 32px;
  border: 1px solid #d8d8df;
  border-radius: 18px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.icon-more img {
  width: 18px;
  height: 18px;
  display: block;
}

/* Widget Footer */
.w-footer {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 60px;
  background: #fff; border-top: 1px solid #eeedf1;
  display: flex; justify-content: center; align-items: center;
}
.paging-row { display: flex; align-items: center; gap: 12px; font-weight: 700; color: #393842; font-size: 14px; }
.pg-btn {
  width: 32px; height: 32px; border: 1px solid #d8d8df; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.pg-btn img {
  width: 20px;
  height: 20px;
  display: block;
}
</style>
