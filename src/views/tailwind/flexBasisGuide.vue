<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="cdf-h1">flex-basis</h2>
    <a class="cdf-btn size-xs outline" href="https://tailwindcss.com/docs/flex-basis" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="cdf-h3">간격 규칙 사용</h3>
      <p class="cdf-information-text mt-5">basis-&lt;number&gt;를 사용하여 flex 항목의 초기 크기를 설정합니다.</p>
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
              <div class="flex flex-row gap-2">
                <div class="basis-64 box-border">basis-64</div>
                <div class="basis-64 box-border">basis-64</div>
                <div class="basis-128 box-border">basis-128</div>
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
      <h3 class="cdf-h3">컨테이너 크기 사용</h3>
      <p class="cdf-information-text mt-5">컨테이너 크기에 따라 플렉스 항목의 초기 크기를 설정합니다. 'basis-xs'</p>
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
              <div class="flex flex-row gap-2">
                <div class="basis-3xs box-border">basis-3xs</div>
                <div class="basis-2xs box-border">basis-2xs</div>
                <div class="basis-xs box-border">basis-xs</div>
                <div class="basis-sm box-border">basis-sm</div>
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
      <h3 class="cdf-h3">백분율 사용</h3>
      <p class="cdf-information-text mt-5">백분율을 사용하여 플렉스 항목의 초기 크기를 설정합니다. 'basis-&lt;fraction&gt;', 'basis-1/2',
        'basis-2/3'</p>
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
              <div class="flex flex-row gap-2">
                <div class="basis-1/3 box-border">basis-1/3</div>
                <div class="basis-2/3 box-border">basis-2/3</div>
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
      <h3 class="cdf-h3">사용자 정의 값 사용</h3>
      <p class="cdf-information-text mt-5">사용자가 정의한 값을 사용하여 플렉스 항목의 초기 크기를 설정합니다. 'basis-[value]'</p>
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
              <div class="flex flex-row gap-2">
                <div class="basis-[10vw] box-border">basis-[10vw]</div>
                <div class="basis-[20vw] box-border">basis-[20vw]</div>
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
      <h3 class="cdf-h3">반응형 디자인</h3>
      <p class="cdf-information-text mt-5">중단점 접두사를 사용하여 각각의 화면 크기에서 플렉스 항목의 초기 크기를 설정합니다. 'md:', 'lg:' 등</p>
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
              <div class="flex flex-row gap-2">
                <div class="basis-1/4 md:basis-1/3 box-border">basis-1/4 md:basis-1/3</div>
                <div class="basis-1/4 md:basis-1/3 box-border">basis-1/4 md:basis-1/3</div>
                <div class="basis-1/2 md:basis-1/3 box-border">basis-1/2 md:basis-1/3</div>
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
              <td data-header="class">basis-&lt;number&gt;</td>
              <td data-header="style">flex-basis: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">basis-&lt;fraction&gt;</td>
              <td data-header="style">flex-basis: calc(&lt;fraction&gt; * 100%);</td>
            </tr>
            <tr>
              <td data-header="class">basis-full</td>
              <td data-header="style">flex-basis: 100%;</td>
            </tr>
            <tr>
              <td data-header="class">basis-auto</td>
              <td data-header="style">flex-basis: auto;</td>
            </tr>
            <tr>
              <td data-header="class">basis-3xs</td>
              <td data-header="style">flex-basis: var(--container-3xs); /* 16rem (256px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-2xs</td>
              <td data-header="style">flex-basis: var(--container-2xs); /* 18rem (288px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-xs</td>
              <td data-header="style">flex-basis: var(--container-xs); /* 20rem (320px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-sm</td>
              <td data-header="style">flex-basis: var(--container-sm); /* 24rem (384px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-md</td>
              <td data-header="style">flex-basis: var(--container-md); /* 28rem (448px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-lg</td>
              <td data-header="style">flex-basis: var(--container-lg); /* 32rem (512px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-xl</td>
              <td data-header="style">flex-basis: var(--container-xl); /* 36rem (576px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-2xl</td>
              <td data-header="style">flex-basis: var(--container-2xl); /* 42rem (672px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-3xl</td>
              <td data-header="style">flex-basis: var(--container-3xl); /* 48rem (768px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-4xl</td>
              <td data-header="style">flex-basis: var(--container-4xl); /* 56rem (896px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-5xl</td>
              <td data-header="style">flex-basis: var(--container-5xl); /* 64rem (1024px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-6xl</td>
              <td data-header="style">flex-basis: var(--container-6xl); /* 72rem (1152px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-7xl</td>
              <td data-header="style">flex-basis: var(--container-7xl); /* 80rem (1280px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-(&lt;custom-property&gt;)</td>
              <td data-header="style">flex-basis: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">basis-[&lt;value&gt;]</td>
              <td data-header="style">flex-basis: &lt;value&gt;;</td>
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

const value01 = ref(`<div class="flex flex-row gap-2">
  <div class="basis-64">basis-64</div>
  <div class="basis-64">basis-64</div>
  <div class="basis-128">basis-128</div>
</div>`);
const value02 = ref(`<div class="flex flex-row gap-2">
  <div class="basis-3xs">basis-3xs</div>
  <div class="basis-2xs">basis-2xs</div>
  <div class="basis-xs">basis-xs</div>
  <div class="basis-sm">basis-sm</div>
</div>`);
const value03 = ref(`<div class="flex flex-row gap-2">
  <div class="basis-1/3">basis-1/3</div>
  <div class="basis-2/3">basis-2/3</div>
</div>`);
const value04 = ref(`<div class="flex flex-row gap-2">
  <div class="basis-[10vw]">basis-[10vw]</div>
  <div class="basis-[20vw]">basis-[20vw]</div>
</div>`);
const value05 = ref(`<div class="flex flex-row gap-2">
  <div class="basis-1/4 md:basis-1/3">basis-1/4 md:basis-1/3</div>
  <div class="basis-1/4 md:basis-1/3">basis-1/4 md:basis-1/3</div>
  <div class="basis-1/2 md:basis-1/3">basis-1/2 md:basis-1/3</div>
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