<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Paging</h2>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="c-h3">Type01</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <div class="c-paginate">
                <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
                  <i class="material-symbols-outlined">first_page</i>
                </a>
                <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
                  <i class="material-symbols-outlined">chevron_left</i>
                </a>
                <div class="c-paginate__page">
                  <a href="#" class="is-active" title="1페이지'">1</a>
                  <a href="#" title="2페이지'">2</a>
                  <a href="#" title="3페이지'">3</a>
                  <a href="#" title="4페이지'">4</a>
                  <a href="#" title="5페이지'">5</a>
                  <a href="#" title="6페이지'">6</a>
                  <a href="#" title="7페이지'">7</a>
                  <a href="#" title="8페이지'">8</a>
                  <a href="#" title="9페이지'">9</a>
                  <a href="#" title="10페이지'">10</a>
                </div>
                <a href="#" class="c-paginate__next" title="다음페이지">
                  <i class="material-symbols-outlined">chevron_right</i>
                </a>
                <a href="#" class="c-paginate__last" title="마지막페이지">
                  <i class="material-symbols-outlined">last_page</i>
                </a>
              </div>
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
      <h3 class="c-h3">Type02</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container">
              <div class="c-paginate c-paginate--type02">
                <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
                  <i class="material-symbols-outlined">first_page</i>
                </a>
                <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
                  <i class="material-symbols-outlined">arrow_back</i>
                </a>
                <div class="c-paginate__page">
                  <a href="#" class="is-active" title="1페이지'">1</a>
                  <a href="#" title="2페이지'">2</a>
                  <a href="#" title="3페이지'">3</a>
                  <a href="#" title="4페이지'">4</a>
                  <a href="#" title="5페이지'">5</a>
                  <a href="#" title="6페이지'">6</a>
                  <a href="#" title="7페이지'">7</a>
                  <a href="#" title="8페이지'">8</a>
                  <a href="#" title="9페이지'">9</a>
                  <a href="#" title="10페이지'">10</a>
                </div>
                <a href="#" class="c-paginate__next" title="다음페이지">
                  <i class="material-symbols-outlined">arrow_forward</i>
                </a>
                <a href="#" class="c-paginate__last" title="마지막페이지">
                  <i class="material-symbols-outlined">last_page</i>
                </a>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value02" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value02')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">Mobile</h3>
      <p class="c-information-text mt-5">mobile paging은 모바일 화면에서 자동으로 전환됩니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container">
              <div class="c-paginate c-paginate--mobile">
                <a href="#" class="c-paginate__first" title="처음 페이지">
                  <i class="material-symbols-outlined">first_page</i>
                </a>
                <a href="#" class="c-paginate__prev" title="이전 페이지">
                  <i class="material-symbols-outlined">chevron_left</i>
                </a>
                <div class="c-paginate__page">
                  <span class="current">1</span>
                  /
                  <span class="total">10</span>
                </div>
                <a href="#" class="c-paginate__next" title="다음페이지">
                  <i class="material-symbols-outlined">chevron_right</i>
                </a>
                <a href="#" class="c-paginate__last" title="마지막페이지">
                  <i class="material-symbols-outlined">last_page</i>
                </a>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value03" :dark="true" basic />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

import CodeMirror from "vue-codemirror6";

const value01 = ref(`<div class="c-paginate">
  <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
    <i class="material-symbols-outlined">first_page</i>
  </a>
  <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
    <i class="material-symbols-outlined">chevron_left</i>
  </a>
  <div class="c-paginate__page">
    <a href="#" class="is-active" title="1페이지'">1</a>
    <a href="#" title="2페이지'">2</a>
    <a href="#" title="3페이지'">3</a>
    <a href="#" title="4페이지'">4</a>
    <a href="#" title="5페이지'">5</a>
    <a href="#" title="6페이지'">6</a>
    <a href="#" title="7페이지'">7</a>
    <a href="#" title="8페이지'">8</a>
    <a href="#" title="9페이지'">9</a>
    <a href="#" title="10페이지'">10</a>
  </div>
  <a href="#" class="c-paginate__next" title="다음페이지">
    <i class="material-symbols-outlined">chevron_right</i>
  </a>
  <a href="#" class="c-paginate__last" title="마지막페이지">
    <i class="material-symbols-outlined">last_page</i>
  </a>
</div>`);
const value02 = ref(`<div class="c-paginate c-paginate--type02">
  <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
    <i class="material-symbols-outlined">first_page</i>
  </a>
  <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
    <i class="material-symbols-outlined">arrow_back</i>
  </a>
  <div class="c-paginate__page">
    <a href="#" class="is-active" title="1페이지'">1</a>
    <a href="#" title="2페이지'">2</a>
    <a href="#" title="3페이지'">3</a>
    <a href="#" title="4페이지'">4</a>
    <a href="#" title="5페이지'">5</a>
    <a href="#" title="6페이지'">6</a>
    <a href="#" title="7페이지'">7</a>
    <a href="#" title="8페이지'">8</a>
    <a href="#" title="9페이지'">9</a>
    <a href="#" title="10페이지'">10</a>
  </div>
  <a href="#" class="c-paginate__next" title="다음페이지">
    <i class="material-symbols-outlined">arrow_forward</i>
  </a>
  <a href="#" class="c-paginate__last" title="마지막페이지">
    <i class="material-symbols-outlined">last_page</i>
  </a>
</div>`);
const value03 = ref(`<div class="c-paginate c-paginate--mobile">
  <a href="#" class="c-paginate__first" title="처음 페이지">
    <i class="material-symbols-outlined">first_page</i>
  </a>
  <a href="#" class="c-paginate__prev" title="이전 페이지">
    <i class="material-symbols-outlined">chevron_left</i>
  </a>
  <div class="c-paginate__page">
    <span class="current">1</span>
    /
    <span class="total">10</span>
  </div>
  <a href="#" class="c-paginate__next" title="다음페이지">
    <i class="material-symbols-outlined">chevron_right</i>
  </a>
  <a href="#" class="c-paginate__last" title="마지막페이지">
    <i class="material-symbols-outlined">last_page</i>
  </a>
</div>`);

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
});

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
}
</script>