<template>
  <div class="page-title-wrap">
    <h2 class="cdf-h1">Tooltip</h2>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="cdf-h3">기본</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container justify-around">
              <button type="button" class="cdf-btn size-s text cdf-tooltip" data-tooltip="툴팁의 기본 설정입니다">
                <span class="txt">tooltip-horizontal</span> 
                <i class="material-symbols-rounded">chevron_right</i>
              </button>
              <button type="button" class="cdf-btn size-s btn-rounded cdf-tooltip" data-tooltip="아이콘 버튼에 제공되는 툴팁">
                <i class="material-symbols-rounded">help</i>
              </button>
              <button type="button" class="cdf-btn size-s cdf-tooltip" data-tooltip="버튼에 제공되는 툴팁">
                <span class="txt">도움말</span>
              </button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value01" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value01')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">vertical</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container justify-around pt-7">
              <button type="button" class="cdf-btn size-s text cdf-tooltip cdf-tooltip-vertical"
                data-tooltip="tooltip-vertical 옵션입니다">
                <span class="txt">tooltip-vertical</span> 
                <i class="material-symbols-rounded">chevron_right</i>
              </button>
              <button type="button" class="cdf-btn size-s btn-rounded cdf-tooltip cdf-tooltip-vertical "
                data-tooltip="아이콘 버튼에 제공되는 툴팁">
                <span class="sr-only">도움말</span>
                <i class="material-symbols-rounded">help</i>
              </button>
              <button type="button" class="cdf-btn size-s cdf-tooltip cdf-tooltip-vertical" data-tooltip="버튼에 제공되는 툴팁">
                <span class="txt">도움말</span>
              </button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value02" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value02')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">tooltip box</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container justify-around pt-7">
              <button type="button" class="cdf-btn size-s text cdf-tooltip cdf-tooltip-box"
                data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
                <span class="txt">tooltip-box</span><i class="material-symbols-rounded">chevron_right</i>
              </button>
              <button type="button" class="cdf-btn size-s btn-rounded cdf-tooltip cdf-tooltip-box"
                data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
                <span class="sr-only">도움말</span>
                <i class="material-symbols-rounded">help</i>
              </button>
              <button type="button" class="cdf-btn size-s cdf-tooltip cdf-tooltip-box"
                data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
                <span class="txt">도움말</span>
              </button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value03" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value03')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import CodeMirror from "vue-codemirror6";






const value01 = ref(`<button type="button" class="cdf-btn size-s text cdf-tooltip" data-tooltip="툴팁의 기본 설정입니다">
  <span class="txt">tooltip-horizontal</span> 
  <i class="material-symbols-rounded">chevron_right</i>
</button>
<button type="button" class="cdf-btn size-s btn-rounded cdf-tooltip" data-tooltip="아이콘 버튼에 제공되는 툴팁">
  <i class="material-symbols-rounded">help</i>
</button>
<button type="button" class="cdf-btn size-s cdf-tooltip" data-tooltip="버튼에 제공되는 툴팁">
  <span class="txt">도움말</span>
</button>`);
const value02 = ref(`<button type="button" class="cdf-btn size-s text cdf-tooltip cdf-tooltip-vertical"
  data-tooltip="tooltip-vertical 옵션입니다">
  <span class="txt">tooltip-vertical</span> 
  <i class="material-symbols-rounded">chevron_right</i>
</button>
<button type="button" class="cdf-btn size-s btn-rounded cdf-tooltip cdf-tooltip-vertical "
  data-tooltip="아이콘 버튼에 제공되는 툴팁">
  <span class="sr-only">도움말</span>
  <i class="material-symbols-rounded">help</i>
</button>
<button type="button" class="cdf-btn size-s cdf-tooltip cdf-tooltip-vertical" data-tooltip="버튼에 제공되는 툴팁">
  <span class="txt">도움말</span>
</button>`);
const value03 = ref(`<button type="button" class="cdf-btn size-s text cdf-tooltip cdf-tooltip-box"
  data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="txt">tooltip-box</span>
  <i class="material-symbols-rounded">chevron_right</i>
</button>
<button type="button" class="cdf-btn size-s btn-rounded cdf-tooltip cdf-tooltip-box"
  data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="sr-only">도움말</span>
  <i class="material-symbols-rounded">help</i>
</button>
<button type="button" class="cdf-btn size-s cdf-tooltip cdf-tooltip-box"
  data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="txt">도움말</span>
</button>`);


// copyCode를 클릭하면 코드 복사
function copyCode(value) {
  const code = eval(value);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code.value)
      .then(() => {
        alert('코드가 클립보드에 복사되었습니다.');
      })
      .catch(err => {
        console.error('코드 복사 실패:', err);
      });
  } else {
    alert('이 브라우저는 클립보드 API를 지원하지 않습니다.');
  }
}

onMounted(() => {
  tabContents()
  cdf_tooltip.init();
});

// tootip 기능을 위한 스크립트
const cdf_tooltip = {
  tooltip: null,
  isMobile: null,
  init() {
    this.tooltip = document.querySelectorAll(".cdf-tooltip");
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
      const uniqueIdx = `cdf-tooltip-popover-${index}${Math.random().toString(36).substring(2, 9)}`;
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
    tooltipPopover.classList.add("cdf-tooltip-popover");
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
    if (item.classList.contains("cdf-tooltip-box")) {
      tooltipPopover.classList.add("cdf-tooltip-box");
    }
    // tooltip-vertical
    if (item.classList.contains("cdf-tooltip-vertical")) {
      tooltipPopover.classList.add("cdf-tooltip-vertical");
    }

    tooltipPopover.classList.add("active");

    const { top, left } = this.calculateTooltipPosition(item, tooltipPopover);
    const mobileSmall = window.innerWidth <= 420;
    tooltipPopover.style.top = `${top}px`;
    tooltipPopover.style.left = mobileSmall ? "50%" : `${left}px`;
  },
  closeAllTooltips() {
    const otherPopovers = document.querySelectorAll(".cdf-tooltip-popover");
    otherPopovers.forEach((popover) => {
      if (!popover.classList.contains("active")) return;
      popover.style = "";
      popover.className = "cdf-tooltip-popover";
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

    const isVertical = this.isMobile || item.classList.contains("cdf-tooltip-box") || item.classList.contains("cdf-tooltip-vertical");

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

function tabContents() {
  //tab menu
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    var tabList = tabs.querySelectorAll('.tab-list-item'),
      tabPanels = tabs.querySelectorAll('.tab-panel');

    tabList.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        tabList.forEach(function (item) {
          item.classList.remove('on');
          item.setAttribute('aria-selected', 'false');
          item.setAttribute('tabindex', '-1');
        });
        tabPanels.forEach(function (panel) {
          panel.classList.remove('on');
        });
        tab.classList.add('on');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
        tabPanels[index].classList.add('on');
        tabPanels[1].querySelector('.CodeMirror')?.CodeMirror?.refresh();
      });

      tab.addEventListener('keyup', function (e) {
        var keycode = e.keyCode || e.which;
        if (keycode === 39 || keycode === 40) { // Right or Down arrow
          var nextTab = tabList[(index + 1) % tabList.length];
          nextTab.focus();
          nextTab.click();
        } else if (keycode === 37 || keycode === 38) { // Left or Up arrow
          var prevTab = tabList[(index - 1 + tabList.length) % tabList.length];
          prevTab.focus();
          prevTab.click();
        }
      });
    });
  });

  // Trigger click on the first tab to initialize	
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    tabs.querySelectorAll('.tab-list-item')[0].click();
  });

  //btn-icon-wrap 안의 passview 버튼을 클릭하면 btn-icon-wrap 안의 input type="password"의 type이 text로 변경되어 비밀번호가 보이게 됩니다.
  document.querySelectorAll('.btn-icon-wrap .passview').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.btn-icon-wrap').querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
        btn.querySelector('i').textContent = 'visibility';
      } else {
        input.type = 'password';
        btn.querySelector('i').textContent = 'visibility_off';
      }
    });
  });

  //btn-icon-wrap 안의 delete 버튼을 클릭하면 btn-icon-wrap 안의 input 내용이 삭제되는 코드
  document.querySelectorAll('.btn-icon-wrap .delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.btn-icon-wrap').querySelector('input');
      input.value = '';
      input.focus();
    });
  });
}
</script>