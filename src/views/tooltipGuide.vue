<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Tooltip</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="기본 tooltip 입니다." 
      :code="tooltipCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !justify-around">
        <button type="button" class="c-btn c-btn--sm c-btn--text c-tooltip" data-tooltip="툴팁의 기본 설정입니다">
          <span class="c-btn__text">tooltip-horizontal</span>
          <i class="c-btn__icon material-symbols-rounded">chevron_right</i>
        </button>
        <button type="button" class="c-btn c-btn--sm c-btn--rounded c-tooltip" data-tooltip="아이콘 버튼에 제공되는 툴팁">
          <i class="c-btn__icon material-symbols-rounded">help</i>
        </button>
        <button type="button" class="c-btn c-btn--sm c-tooltip" data-tooltip="버튼에 제공되는 툴팁">
          <span class="c-btn__text">도움말</span>
        </button>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="vertical" 
      description="tooltip이 상단에 뜨는 형태입니다." 
      :code="tooltipCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !justify-around">
        <button type="button" class="c-btn c-btn--sm c-btn--text c-tooltip c-tooltip-vertical"
          data-tooltip="tooltip-vertical 옵션입니다">
          <span class="c-btn__text">tooltip-vertical</span>
          <i class="material-symbols-rounded">chevron_right</i>
        </button>
        <button type="button" class="c-btn c-btn--sm c-btn--rounded c-tooltip c-tooltip-vertical "
          data-tooltip="아이콘 버튼에 제공되는 툴팁">
          <span class="sr-only">도움말</span>
          <i class="c-btn__icon material-symbols-rounded">help</i>
        </button>
        <button type="button" class="c-btn c-btn--sm c-tooltip c-tooltip-vertical" data-tooltip="버튼에 제공되는 툴팁">
          <span class="c-btn__text">도움말</span>
        </button>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="tooltip box" 
      description="tooltip이 box 형태로 나타나는 형태입니다." 
      :code="tooltipCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !justify-around">
        <button type="button" class="c-btn c-btn--sm c-btn--text c-tooltip c-tooltip-box"
          data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
          <span class="c-btn__text">tooltip-box</span><i class="material-symbols-rounded">chevron_right</i>
        </button>
        <button type="button" class="c-btn c-btn--sm c-btn--rounded c-tooltip c-tooltip-box"
          data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
          <span class="sr-only">도움말</span>
          <i class="c-btn__icon material-symbols-rounded">help</i>
        </button>
        <button type="button" class="c-btn c-btn--sm c-tooltip c-tooltip-box"
          data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
          <span class="c-btn__text">도움말</span>
        </button>
      </div>
    </ComponentPreview>

        
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';



import ComponentPreview from '../components/ComponentPreview.vue';

const tooltipCode1 = `<button type="button" class="c-btn c-btn--sm c-btn--text c-tooltip" data-tooltip="툴팁의 기본 설정입니다">
  <span class="c-btn__text">tooltip-horizontal</span>
  <i class="c-btn__icon material-symbols-rounded">chevron_right</i>
</button>
<button type="button" class="c-btn c-btn--sm c-btn--rounded c-tooltip" data-tooltip="아이콘 버튼에 제공되는 툴팁">
  <i class="c-btn__icon material-symbols-rounded">help</i>
</button>
<button type="button" class="c-btn c-btn--sm c-tooltip" data-tooltip="버튼에 제공되는 툴팁">
  <span class="c-btn__text">도움말</span>
</button>`;

const tooltipCode2 = `<button type="button" class="c-btn c-btn--sm c-btn--text c-tooltip c-tooltip-vertical"
  data-tooltip="tooltip-vertical 옵션입니다">
  <span class="txt">tooltip-vertical</span>
  <i class="material-symbols-rounded">chevron_right</i>
</button>
<button type="button" class="c-btn c-btn--sm c-btn--rounded c-tooltip c-tooltip-vertical "
  data-tooltip="아이콘 버튼에 제공되는 툴팁">
  <span class="sr-only">도움말</span>
  <i class="c-btn__icon material-symbols-rounded">help</i>
</button>
<button type="button" class="c-btn c-btn--sm c-tooltip c-tooltip-vertical" data-tooltip="버튼에 제공되는 툴팁">
  <span class="txt">도움말</span>
</button>`;

const tooltipCode3 = `<button type="button" class="c-btn c-btn--sm c-btn--text c-tooltip c-tooltip-box"
  data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 
  대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="txt">tooltip-box</span><i class="material-symbols-rounded">chevron_right</i>
</button>
<button type="button" class="c-btn c-btn--sm c-btn--rounded c-tooltip c-tooltip-box"
  data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 
  대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="sr-only">도움말</span>
  <i class="c-btn__icon material-symbols-rounded">help</i>
</button>
<button type="button" class="c-btn c-btn--sm c-tooltip c-tooltip-box"
  data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 
  대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="txt">도움말</span>
</button>`;






onMounted(() => {
  cdf_tooltip.init();
});

// tootip 기능을 위한 스크립트
const cdf_tooltip = {
  tooltip: null,
  isMobile: null,
  init() {
    this.tooltip = document.querySelectorAll(".c-tooltip");
    this.isMobile = windowSize.getWinSize() === "mob";

    if (!this.tooltip.length) return;

    this.setupTooltips();
    this.setupGlobalEvents();
  },
  setupTooltips() {
    this.tooltip.forEach((item, index) => {
      //  tooltipText
      const tooltipText = item.getAttribute("data-tooltip");
      const disabled = item.hasAttribute("disabled");

      if (!tooltipText || disabled) return;

      // ID 부여
      const uniqueIdx = `c-tooltip-popover-${index}${Math.random().toString(36).substring(2, 9)}`;
      item.setAttribute("aria-labelledby", uniqueIdx);

      // TooltipPopover 생성
      const tooltipBtnText = item.innerText;
      const tooltipPopover = this.createTooltipPopover(uniqueIdx, tooltipBtnText, tooltipText);
      item.parentNode.insertBefore(tooltipPopover, item.nextSibling);

      // Show/Hide 함수 정의
      const showTooltip = () => this.showTooltip(item, tooltipPopover);

      // 이벤트 등록
      this.registerEvents(item, showTooltip);

      // ESC 닫기
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" || event.key === "Esc") {
          this.closeAllTooltips();
        }
      });
    });
  },
  createTooltipPopover(uniqueIdx, tooltipBtnText, tooltipText) {
    const tooltipPopover = document.createElement("div");
    tooltipPopover.classList.add("c-tooltip-popover");
    tooltipPopover.setAttribute("id", uniqueIdx);
    tooltipPopover.setAttribute("aria-hidden", "true");
    tooltipPopover.innerHTML = "";
    tooltipPopover.innerHTML = `
      <span class="sr-only">${tooltipBtnText}</span>
      ${tooltipText}
    `;

    return tooltipPopover;
  },
  registerEvents(item, showTooltip) {
    item.addEventListener("mouseover", showTooltip);
    item.addEventListener("mouseout", this.closeAllTooltips);
    item.addEventListener("focus", showTooltip);
    item.addEventListener("focusout", this.closeAllTooltips);
  },
  showTooltip(item, tooltipPopover) {
    // tooltip-box
    if (item.classList.contains("c-tooltip-box")) {
      tooltipPopover.classList.add("c-tooltip-box");
    }
    // tooltip-vertical
    if (item.classList.contains("c-tooltip-vertical")) {
      tooltipPopover.classList.add("c-tooltip-vertical");
    }

    tooltipPopover.classList.add("active");

    const { top, left } = this.calculateTooltipPosition(item, tooltipPopover);
    const mobileSmall = window.innerWidth <= 420;
    tooltipPopover.style.top = `${top}px`;
    tooltipPopover.style.left = mobileSmall ? "50%" : `${left}px`;
  },
  closeAllTooltips() {
    const otherPopovers = document.querySelectorAll(".c-tooltip-popover");
    otherPopovers.forEach((popover) => {
      if (!popover.classList.contains("active")) return;
      popover.style = "";
      popover.className = "c-tooltip-popover";
    });
  },
  calculateTooltipPosition(item, tooltipPopover) {
    // 툴팁과 기준 요소 간격
    const tooltipGap = 12;
    const { clientHeight: tooltipHeight, clientWidth: tooltipWidth } = tooltipPopover;
    const { top: itemTop, left: itemLeft, right: itemRight, height: itemHeight, width: itemWidth } = item.getBoundingClientRect();
    const halfWindowWidth = window.innerWidth / 2;
    const halfWindowHeight = window.innerHeight / 2;

    let tooltipTop;
    let tooltipLeft;

    const isVertical = this.isMobile || item.classList.contains("c-tooltip-box") || item.classList.contains("c-tooltip-vertical");

    if (isVertical) {
      if (itemTop + itemHeight > halfWindowHeight) {
        tooltipTop = itemTop - tooltipHeight - tooltipGap; // 위쪽
        tooltipPopover.classList.add("top");
      } else {
        tooltipTop = itemTop + itemHeight + tooltipGap; // 아래쪽
        tooltipPopover.classList.add("bottom");
      }
      // 좌우 위치
      if (itemLeft + itemWidth > halfWindowWidth) {
        tooltipLeft = itemRight - tooltipWidth; // 오른쪽 정렬
        tooltipPopover.classList.add("right");
        // 화면 오른쪽 여유 공간이 충분할 때 가운데 정렬
        if (window.innerWidth - (itemLeft + itemWidth) > tooltipWidth / 2) {
          tooltipLeft = itemLeft + (itemWidth - tooltipWidth) / 2;
          tooltipPopover.classList.remove("right");
        }
      } else {
        // 화면 왼쪽 여유 공간이 충분할 때 가운데 정렬
        tooltipLeft = itemLeft + (itemWidth - tooltipWidth) / 2;
        // 왼쪽 공간 부족 시 보정
        if (tooltipLeft < 0) {
          tooltipLeft = itemLeft;
          tooltipPopover.classList.add("left");
        } else {
          tooltipPopover.classList.remove("left");
        }
      }
    } else {
      // 가로형 툴팁
      tooltipTop = itemTop + (itemHeight - tooltipHeight) / 2;
      if (itemLeft + itemWidth > halfWindowWidth) {
        tooltipLeft = itemLeft - tooltipWidth - tooltipGap; // 왼쪽
        tooltipPopover.classList.add("right");
      } else {
        tooltipLeft = itemRight + tooltipGap; // 오른쪽
        tooltipPopover.classList.remove("right");
      }
    }
    return { top: tooltipTop, left: tooltipLeft };
  },
  setupGlobalEvents() {
    window.addEventListener("scroll", () => {
      this.closeAllTooltips();
    });
    window.addEventListener("resize", () => {
      this.isMobile = windowSize.getWinSize() === "mob";
      this.closeAllTooltips();
    });
  },
};
// 윈도우 사이즈 체크
const windowSize = {
  winSize: null,
  breakPoint: 1024,

  setWinSize() {
    this.winSize = window.innerWidth >= this.breakPoint ? "pc" : "mob";
  },

  getWinSize() {
    return this.winSize;
  },
};



</script>