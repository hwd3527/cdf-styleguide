<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="cdf-h1">grid-columns</h2>
    <a class="cdf-btn size-xs outline" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="cdf-h3">열 스패닝</h3>
      <p class="cdf-information-text mt-5">'col-span-&lt;number&gt;'를 사용하여 아이템을 n개의 열에 걸쳐 배치합니다.</p>
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
              <div class="grid grid-cols-3 gap-2 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border">Item 1</div>
                <div class="box-border">Item 2</div>
                <div class="box-border">Item 3</div>
                <div class="box-border col-span-2">Item 4</div>
                <div class="box-border">Item 5</div>
                <div class="box-border">Item 6</div>
                <div class="box-border col-span-2">Item 7</div>
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
      <p class="cdf-information-text mt-5">'col-start-&lt;number&gt;', 'col-end-&lt;number&gt;'를 사용하여 n번째 격자선에서 시작하거나
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
              <div class="grid grid-cols-6 gap-2 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border col-span-4 col-start-2">Item 1</div>
                <div class="box-border col-start-1 col-end-3">Item 2</div>
                <div class="box-border col-span-2 col-end-7">Item 3</div>
                <div class="box-border col-start-1 col-end-7">Item 4</div>
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
              <div class="grid grid-cols-6 gap-2 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border col-span-6 md:col-span-2">Item 1</div>
                <div class="box-border col-span-6 md:col-span-2">Item 2</div>
                <div class="box-border col-span-6 md:col-span-2">Item 3</div>
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
              <td data-header="class">col-span-&lt;number&gt;</td>
              <td data-header="style">grid-column: span &lt;number&gt; / span &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-span-full</td>
              <td data-header="style">grid-column: 1 / -1;</td>
            </tr>
            <tr>
              <td data-header="class">col-span-(&lt;custom-property&gt;)</td>
              <td data-header="style">grid-column: span var(&lt;custom-property&gt;) / span
                var(&lt;custom-property&gt;);
              </td>
            </tr>
            <tr>
              <td data-header="class">col-span-[&lt;value&gt;]</td>
              <td data-header="style">grid-column: span &lt;value&gt; / span &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-start: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-col-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-start: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">col-start-auto
              </td>
              <td data-header="style">grid-column-start: auto;</td>
            </tr>
            <tr>
              <td data-header="class">col-start-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-column-start: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">col-start-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-column-start: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-end: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-col-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-end: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">col-end-auto
              </td>
              <td data-header="style">grid-column-end: auto;</td>
            </tr>
            <tr>
              <td data-header="class">col-end-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-column-end: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">col-end-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-column-end: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-auto
              </td>
              <td data-header="style">grid-column: auto;</td>
            </tr>
            <tr>
              <td data-header="class">col-&lt;number&gt;
              </td>
              <td data-header="style">grid-column: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-col-&lt;number&gt;
              </td>
              <td data-header="style">grid-column: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">col-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-column: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">col-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-column: &lt;value&gt;;</td>
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

const value01 = ref(`<div class="grid grid-cols-3 gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div class="col-span-2">Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div class="col-span-2">Item 7</div>
</div>`);
const value02 = ref(`<div class="grid grid-cols-6 gap-2">
  <div class="col-span-4 col-start-2">Item 1</div>
  <div class="col-start-1 col-end-3">Item 2</div>
  <div class="col-span-2 col-end-7">Item 3</div>
  <div class="col-start-1 col-end-7">Item 4</div>
</div>`);
const value03 = ref(`<div class="grid grid-cols-1 md:grid-cols-6 gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
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