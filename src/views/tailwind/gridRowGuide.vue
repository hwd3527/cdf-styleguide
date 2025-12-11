<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="cdf-h1">grid-row</h2>
    <a class="cdf-btn size-xs outline" href="https://tailwindcss.com/docs/grid-row" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="cdf-h3">행 스패닝</h3>
      <p class="cdf-information-text mt-5">'row-span-&lt;number&gt;'를 사용하여 아이템을 n개의 행에 걸쳐 배치합니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal">
              <div class="grid grid-flow-col grid-rows-3 gap-2 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border row-span-3">Item 1</div>
                <div class="box-border col-span-2">Item 2</div>
                <div class="box-border row-span-2 col-span-2">Item 3</div>
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
      <h3 class="cdf-h3">시작선과 종료선</h3>
      <p class="cdf-information-text mt-5">'row-start-&lt;number&gt;', 'row-end-&lt;number&gt;'를 사용하여 n번째 격자선에서 시작하거나
        끝나도록 할 수 있습니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal">
              <div class="grid grid-flow-col grid-rows-3 gap-2 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border row-span-2 row-start-2">Item 1</div>
                <div class="box-border row-span-2 row-end-3">Item 2</div>
                <div class="box-border row-start-1 row-end-4">Item 3</div>
              </div>
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
      <h3 class="cdf-h3">반응형 디자인</h3>
      <p class="cdf-information-text mt-5">중단점으로 원하는 화면 크기에서 아이템의 그리드 스패닝을 설정합니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal">
              <div class="grid grid-flow-col grid-rows-3 gap-2 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border row-span-3 md:row-span-2">Item 1</div>
                <div class="box-border row-span-3 md:row-span-2 md:row-start-2">Item 2</div>
                <div class="box-border row-span-3 md:row-span-2">Item 3</div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value03" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value03')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">사용할 수 있는 클래스</h3>
      <div class="cdf-table-wrap cdf-scrollbar horizontal">
        <table class="cdf-table-type03">
          <caption>class, style 항목별 순서대로 안내하는 표입니다</caption>
          <colgroup>
            <col style="width: 30%;">
            <col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-header="class">row-span-&lt;number&gt;</td>
              <td data-header="style">grid-row: span &lt;number&gt; / span &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-span-full</td>
              <td data-header="style">grid-row: 1 / -1;</td>
            </tr>
            <tr>
              <td data-header="class">row-span-(&lt;custom-property&gt;)</td>
              <td data-header="style">grid-row: span var(&lt;custom-property&gt;) / span
                var(&lt;custom-property&gt;);
              </td>
            </tr>
            <tr>
              <td data-header="class">row-span-[&lt;value&gt;]</td>
              <td data-header="style">grid-row: span &lt;value&gt; / span &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-start: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-row-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-start: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">row-start-auto
              </td>
              <td data-header="style">grid-row-start: auto;</td>
            </tr>
            <tr>
              <td data-header="class">row-start-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-row-start: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">row-start-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-row-start: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-end: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-row-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-end: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">row-end-auto
              </td>
              <td data-header="style">grid-row-end: auto;</td>
            </tr>
            <tr>
              <td data-header="class">row-end-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-row-end: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">row-end-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-row-end: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-auto
              </td>
              <td data-header="style">grid-row: auto;</td>
            </tr>
            <tr>
              <td data-header="class">row-&lt;number&gt;
              </td>
              <td data-header="style">grid-row: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-row-&lt;number&gt;
              </td>
              <td data-header="style">grid-row: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">row-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-row: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">row-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-row: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import CodeMirror from "vue-codemirror6";

const value01 = ref(`<div class="grid grid-flow-col grid-rows-3 gap-2">
  <div class="row-span-3">Item 1</div>
  <div class="col-span-2">Item 2</div>
  <div class="row-span-2 col-span-2">Item 3</div>
</div>`);
const value02 = ref(`<div class="grid grid-flow-col grid-rows-3 gap-2">
  <div class="row-span-2 row-start-2">Item 1</div>
  <div class="row-span-2 row-end-3">Item 2</div>
  <div class="row-start-1 row-end-4">Item 3</div>
</div>`);
const value03 = ref(`<div class="grid grid-flow-col grid-rows-3 gap-2">
  <div class="row-span-3 md:row-span-2">Item 1</div>
  <div class="row-span-3 md:row-span-2 md:row-start-2">Item 2</div>
  <div class="row-span-3 md:row-span-2">Item 3</div>
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