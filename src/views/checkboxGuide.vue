<template>
  <div class="page-title-wrap">
    <h2 class="cdf-h1">Checkbox</h2>
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
            <div class="container">
              <div class="cdf-form-check-area">
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rao_01" id="rdo_01">
                    <label for="rdo_01">체크박스</label>
                    <i></i>
                  </div>
                </div>
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rdo_02" id="rdo_02">
                    <label for="rdo_02">체크박스</label>
                    <i></i>
                  </div>
                </div>
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rdo_03" id="rdo_03">
                    <label for="rdo_03">체크박스</label>
                    <i></i>
                  </div>
                </div>
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
      <h3 class="cdf-h3">세로형</h3>
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
              <div class="cdf-form-check-area horizontal">
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rao_0201" id="rdo_0201">
                    <label for="rdo_0201">체크박스</label>
                    <i></i>
                  </div>
                </div>
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rao_0201" id="rdo_0202">
                    <label for="rdo_0202">체크박스</label>
                    <i></i>
                  </div>
                </div>
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rao_0201" id="rdo_0203">
                    <label for="rdo_0203">체크박스</label>
                    <i></i>
                  </div>
                </div>
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
      <h3 class="cdf-h3">비활성화</h3>
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
              <div class="cdf-form-check-area">
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rao_0301" id="rdo_0301" disabled>
                    <label for="rdo_0301">비활성화</label>
                    <i></i>
                  </div>
                </div>
                <div class="cdf-form-check">
                  <div class="cdf-form-check-inner">
                    <input type="checkbox" name="rao_0301" id="rdo_0302" checked disabled>
                    <label for="rdo_0302">선택된 비활성화</label>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value03" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value03')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Chip Checkbox</h3>
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
              <div class="cdf-form-check-area chip">
                <div class="cdf-form-chip">
                  <input type="checkbox" class="checkbox" id="chk_chip_0101">
                  <label class="cdf-form-chip-outline" for="chk_chip_0101">최저가</label>
                </div>
                <div class="cdf-form-chip">
                  <input type="checkbox" class="checkbox" id="chk_chip_0102">
                  <label class="cdf-form-chip-outline" for="chk_chip_0102">현장인접</label>
                </div>
                <div class="cdf-form-chip">
                  <input type="checkbox" class="checkbox" id="chk_chip_0103">
                  <label class="cdf-form-chip-outline" for="chk_chip_0103">평균가</label>
                </div>
                <div class="cdf-form-chip">
                  <input type="checkbox" class="checkbox" id="chk_chip_0104">
                  <label class="cdf-form-chip-outline" for="chk_chip_0104">신용평가 최고점</label>
                </div>
                <div class="cdf-form-chip">
                  <input type="checkbox" class="checkbox" id="chk_chip_0105">
                  <label class="cdf-form-chip-outline" for="chk_chip_0105">최다거래 실적</label>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value04" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value04')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

import CodeMirror from "vue-codemirror6";



const value01 = ref(`<div class="cdf-form-check-area">
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rao_01" id="rdo_01">
      <label for="rdo_01">체크박스</label>
      <i></i>
    </div>
  </div>
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rdo_02" id="rdo_02">
      <label for="rdo_02">체크박스</label>
      <i></i>
    </div>
  </div>
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rdo_03" id="rdo_03">
      <label for="rdo_03">체크박스</label>
      <i></i>
    </div>
  </div>
</div>`);
const value02 = ref(`<div class="cdf-form-check-area horizontal">
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rao_0201" id="rdo_0201">
      <label for="rdo_0201">체크박스</label>
      <i></i>
    </div>
  </div>
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rao_0201" id="rdo_0202">
      <label for="rdo_0202">체크박스</label>
      <i></i>
    </div>
  </div>
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rao_0201" id="rdo_0203">
      <label for="rdo_0203">체크박스</label>
      <i></i>
    </div>
  </div>
</div>`);
const value03 = ref(`<div class="cdf-form-check-area">
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rao_0301" id="rdo_0301" disabled>
      <label for="rdo_0301">비활성화</label>
      <i></i>
    </div>
  </div>
  <div class="cdf-form-check">
    <div class="cdf-form-check-inner">
      <input type="checkbox" name="rao_0301" id="rdo_0302" checked disabled>
      <label for="rdo_0302">선택된 비활성화</label>
      <i></i>
    </div>
  </div>
</div>`);
const value04 = ref(`<div class="cdf-form-check-area chip">
  <div class="cdf-form-chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0101">
    <label class="cdf-form-chip-outline" for="chk_chip_0101">최저가</label>
  </div>
  <div class="cdf-form-chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0102">
    <label class="cdf-form-chip-outline" for="chk_chip_0102">현장인접</label>
  </div>
  <div class="cdf-form-chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0103">
    <label class="cdf-form-chip-outline" for="chk_chip_0103">평균가</label>
  </div>
  <div class="cdf-form-chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0104">
    <label class="cdf-form-chip-outline" for="chk_chip_0104">신용평가 최고점</label>
  </div>
  <div class="cdf-form-chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0105">
    <label class="cdf-form-chip-outline" for="chk_chip_0105">최다거래 실적</label>
  </div>
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