<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="cdf-h1">padding</h2>
    <a class="cdf-btn size-xs outline" href="https://tailwindcss.com/docs/padding" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="cdf-h3">기본</h3>
      <p class="cdf-information-text mt-5">'p-&lt;number&gt;' 유틸리티를 사용하여 요소의 안쪽 여백을 설정할 수 있습니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex">
              <div class="p-8 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
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
      <h3 class="cdf-h3">한쪽에 패딩 추가하기</h3>
      <p class="cdf-information-text mt-5">'pt-&lt;number&gt;', 'pr-&lt;number&gt;', 'pb-&lt;number&gt;', 'pl-&lt;number&gt;' 유틸리티를 사용하여 요소의 특정 한쪽에 안쪽 여백을 설정할 수 있습니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex !gap-8">
              <div class="pt-6 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
              <div class="pr-4 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
              <div class="pb-4 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
              <div class="pl-2 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
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
      <h3 class="cdf-h3">가로 패딩 추가</h3>
      <p class="cdf-information-text mt-5">'px-&lt;number&gt;'는 요소의 가로 패딩을 제어합니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex !gap-8">
              <div class="px-6 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
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
      <h3 class="cdf-h3">세로 패딩 추가</h3>
      <p class="cdf-information-text mt-5">'py-&lt;number&gt;'는 요소의 세로 패딩을 제어합니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex !gap-8">
              <div class="py-6 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value04" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value04')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">반응형</h3>
      <p class="cdf-information-text mt-5">중단점을 기준으로 패딩값이 변경됩니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex !gap-8">
              <div class="py-6 md:py-10 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value05" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value05')">코드 복사</button>
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
              <td data-header="class">p-&lt;number&gt;</td>
              <td data-header="style">padding: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">p-px</td>
              <td data-header="style">padding: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">p-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">p-[&lt;value&gt;]</td>
              <td data-header="style">padding: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">px-&lt;number&gt;</td>
              <td data-header="style">padding-inline: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">px-px</td>
              <td data-header="style">padding-inline: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">px-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-inline: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">px-[&lt;value&gt;]</td>
              <td data-header="style">padding-inline: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">py-&lt;number&gt;</td>
              <td data-header="style">padding-block: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">py-px</td>
              <td data-header="style">padding-block: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">py-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-block: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">py-[&lt;value&gt;]</td>
              <td data-header="style">padding-block: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">ps-&lt;number&gt;</td>
              <td data-header="style">padding-inline-start: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ps-px</td>
              <td data-header="style">padding-inline-start: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">ps-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-inline-start: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ps-[&lt;value&gt;]</td>
              <td data-header="style">padding-inline-start: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pe-&lt;number&gt;</td>
              <td data-header="style">padding-inline-end: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pe-px</td>
              <td data-header="style">padding-inline-end: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pe-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-inline-end: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pe-[&lt;value&gt;]</td>
              <td data-header="style">padding-inline-end: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pt-&lt;number&gt;</td>
              <td data-header="style">padding-top: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pt-px</td>
              <td data-header="style">padding-top: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pt-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-top: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pt-[&lt;value&gt;]</td>
              <td data-header="style">padding-top: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pr-&lt;number&gt;</td>
              <td data-header="style">padding-right: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pr-px</td>
              <td data-header="style">padding-right: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pr-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-right: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pr-[&lt;value&gt;]</td>
              <td data-header="style">padding-right: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pb-&lt;number&gt;</td>
              <td data-header="style">padding-bottom: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pb-px</td>
              <td data-header="style">padding-bottom: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pb-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-bottom: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pb-[&lt;value&gt;]</td>
              <td data-header="style">padding-bottom: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pl-&lt;number&gt;</td>
              <td data-header="style">padding-left: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pl-px</td>
              <td data-header="style">padding-left: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pl-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-left: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pl-[&lt;value&gt;]</td>
              <td data-header="style">padding-left: &lt;value&gt;;</td>
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

const value01 = ref(`<div class="p-8"></div>`);
const value02 = ref(`<div class="pt-6"></div>
<div class="pr-4"></div>
<div class="pb-4"></div>
<div class="pl-2"></div>`);
const value03 = ref(`<div class="px-6"></div>`);
const value04 = ref(`<div class="py-6"></div>`);
const value05 = ref(`<div class="py-6 md:py-10"></div>`);




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