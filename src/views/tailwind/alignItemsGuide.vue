<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="cdf-h1">align-items</h2>
    <a class="cdf-btn size-xs outline" href="https://tailwindcss.com/docs/align-items" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="cdf-h3">Stretch</h3>
      <p class="cdf-information-text mt-5">'items-stretch'는 컨테이너에 가로축을 기준으로 늘어나서 채웁니다.</p>
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
              <div class="flex items-stretch gap-2 p-3 h-56 bg-gray-200 w-full md:w-3xl">
                <div class="box-border py-4 flex-1">Item 1</div>
                <div class="box-border py-12 flex-1">Item 2</div>
                <div class="box-border py-8 flex-1">Item 3</div>
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
      <h3 class="cdf-h3">Start</h3>
      <p class="cdf-information-text mt-5">'items-start'는 컨테이너에 가로축을 기준으로 시작 부분에 정렬합니다.</p>
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
              <div class="flex items-start gap-2 p-3 h-56 bg-gray-200 w-full md:w-3xl">
                <div class="box-border !py-4 flex-1">Item 1</div>
                <div class="box-border !py-12 flex-1">Item 2</div>
                <div class="box-border !py-8 flex-1">Item 3</div>
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
      <h3 class="cdf-h3">Center</h3>
      <p class="cdf-information-text mt-5">'items-center'는 컨테이너에 가로축을 기준으로 중앙 부분에 정렬합니다.</p>
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
              <div class="flex items-center gap-2 h-56 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border !py-4 flex-1">Item 1</div>
                <div class="box-border !py-12 flex-1">Item 2</div>
                <div class="box-border !py-8 flex-1">Item 3</div>
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
      <h3 class="cdf-h3">End</h3>
      <p class="cdf-information-text mt-5">'items-end'는 컨테이너 내 아이템들을 가로축의 끝 부분에 정렬합니다.</p>
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
              <div class="flex items-end gap-2 h-56 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border !py-4 flex-1">Item 1</div>
                <div class="box-border !py-12 flex-1">Item 2</div>
                <div class="box-border !py-8 flex-1">Item 3</div>
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
      <h3 class="cdf-h3">baseline</h3>
      <p class="cdf-information-text mt-5">'items-baseline'는 컨테이너 가로축을 따라 아이템들의 기준선을 정렬합니다.</p>
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
              <div class="flex items-baseline gap-2 h-56 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border !pt-2 !pb-6 flex-1">Item 1</div>
                <div class="box-border !pt-8 !pb-12 flex-1">Item 2</div>
                <div class="box-border !pt-12 !pb-4 flex-1">Item 3</div>
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
      <h3 class="cdf-h3">last baseline</h3>
      <p class="cdf-information-text mt-5">'items-baseline-last'는 컨테이너의 가로축을 따라 항목을 정렬하여 모든 항목의 마지막 기준선을 맞춥니다.</p>
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
              <div class="grid grid-cols-[1fr_auto] items-baseline-last gap-2 h-56 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="grid grid-cols-[auto_1fr] gap-x-4 max-sm:grid-cols-1">
                  <img class="size-[3.2rem] rounded-full"
                    alt=""
                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&amp;w=128&amp;q=80">
                  <div class="font-semibold text-gray-900 sm:col-start-2 dark:text-white">
                    <span>스펜서 샤프</span>
                  </div>
                  <p class="sm:col-start-2">Space Recruit에서 우주인 채용의 미래에 대해 연구합니다.</p>
                </div>
                <a class="font-mono text-xs font-medium text-gray-400 underline hover:text-blue-500 dark:text-gray-500"
                  href="#">
                  <font dir="auto" style="vertical-align: inherit;">
                    <font dir="auto" style="vertical-align: inherit;">스페이스리크루트닷컴</font>
                  </font>
                </a>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value06" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value06')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Stretch</h3>
      <p class="cdf-information-text mt-5">'content-stretch'는 컨테이너 내 각 행 주위에 동일한 간격으로 공간을 채웁니다.</p>
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
              <div class="grid grid-cols-3 content-stretch gap-2 h-56 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border">Item 1</div>
                <div class="box-border">Item 2</div>
                <div class="box-border">Item 3</div>
                <div class="box-border">Item 4</div>
                <div class="box-border">Item 5</div>
                <div class="box-border">Item 6</div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value07" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value07')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Normal</h3>
      <p class="cdf-information-text mt-5">'content-normal'는 기본 위치에 배치합니다.</p>
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
              <div class="grid grid-cols-3 content-normal gap-2 h-56 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border">Item 1</div>
                <div class="box-border">Item 2</div>
                <div class="box-border">Item 3</div>
                <div class="box-border">Item 4</div>
                <div class="box-border">Item 5</div>
                <div class="box-border">Item 6</div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value08" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value08')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">반응형</h3>
      <p class="cdf-information-text mt-5">중단점을 기준으로 레이아웃이 변경됩니다.</p>
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
              <div class="grid grid-cols-3 content-start md:content-around gap-2 h-56 p-3 bg-gray-200 w-full md:w-3xl">
                <div class="box-border">Item 1</div>
                <div class="box-border">Item 2</div>
                <div class="box-border">Item 3</div>
                <div class="box-border">Item 4</div>
                <div class="box-border">Item 5</div>
                <div class="box-border">Item 6</div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value09" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value09')">코드 복사</button>
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
              <td data-header="class">content-normal</td>
              <td data-header="style">align-content: normal;</td>
            </tr>
            <tr>
              <td data-header="class">content-center</td>
              <td data-header="style">align-content: center;</td>
            </tr>
            <tr>
              <td data-header="class">content-start</td>
              <td data-header="style">align-content: flex-start;</td>
            </tr>
            <tr>
              <td data-header="class">content-end</td>
              <td data-header="style">align-content: flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">content-between</td>
              <td data-header="style">align-content: space-between;</td>
            </tr>
            <tr>
              <td data-header="class">content-around</td>
              <td data-header="style">align-content: space-around;</td>
            </tr>
            <tr>
              <td data-header="class">content-evenly</td>
              <td data-header="style">align-content: space-evenly;</td>
            </tr>
            <tr>
              <td data-header="class">content-baseline</td>
              <td data-header="style">align-content: baseline;</td>
            </tr>
            <tr>
              <td data-header="class">content-stretch</td>
              <td data-header="style">align-content: stretch;</td>
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

const value01 = ref(`<div class="flex items-stretch gap-2 h-56">
  <div class="py-4 flex-1">Item 1</div>
  <div class="py-12 flex-1">Item 2</div>
  <div class="py-8 flex-1">Item 3</div>
</div>`);
const value02 = ref(`<div class="flex items-start gap-2 h-56">
  <div class="!py-4 flex-1">Item 1</div>
  <div class="!py-12 flex-1">Item 2</div>
  <div class="!py-8 flex-1">Item 3</div>
</div>`);
const value03 = ref(`<div class="flex items-center gap-2 h-56">
  <div class="!py-4 flex-1">Item 1</div>
  <div class="!py-12 flex-1">Item 2</div>
  <div class="!py-8 flex-1">Item 3</div>
</div>`);
const value04 = ref(`<div class="flex items-end gap-2 h-56">
  <div class="!py-4 flex-1">Item 1</div>
  <div class="!py-12 flex-1">Item 2</div>
  <div class="!py-8 flex-1">Item 3</div>
</div>`);
const value05 = ref(`<div class="flex items-baseline gap-2 h-5">
  <div class="!pt-2 !pb-6 flex-1">Item 1</div>
  <div class="!pt-8 !pb-12 flex-1">Item 2</div>
  <div class="!pt-12 !pb-4 flex-1">Item 3</div>
</div>`);
const value06 = ref(`<div class="grid grid-cols-3 content-evenly gap-2 h-56">
  <div class="box-border">Item 1</div>
  <div class="box-border">Item 2</div>
  <div class="box-border">Item 3</div>
  <div class="box-border">Item 4</div>
  <div class="box-border">Item 5</div>
  <div class="box-border">Item 6</div>
</div>`);
const value07 = ref(`<div class="grid grid-cols-3 content-stretch gap-2 h-56">
  <div class="box-border">Item 1</div>
  <div class="box-border">Item 2</div>
  <div class="box-border">Item 3</div>
  <div class="box-border">Item 4</div>
  <div class="box-border">Item 5</div>
  <div class="box-border">Item 6</div>
</div>`);
const value08 = ref(`<div class="grid grid-cols-3 content-normal gap-2 h-56">
  <div class="box-border">Item 1</div>
  <div class="box-border">Item 2</div>
  <div class="box-border">Item 3</div>
  <div class="box-border">Item 4</div>
  <div class="box-border">Item 5</div>
  <div class="box-border">Item 6</div>
</div>`);
const value09 = ref(`<div class="grid grid-cols-3 content-start md:content-around gap-2 h-56">
  <div class="box-border">Item 1</div>
  <div class="box-border">Item 2</div>
  <div class="box-border">Item 3</div>
  <div class="box-border">Item 4</div>
  <div class="box-border">Item 5</div>
  <div class="box-border">Item 6</div>
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