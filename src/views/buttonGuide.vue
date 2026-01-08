<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Button</h2>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="c-h3">기본</h3>
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
              <button type="button" class="c-btn">
                <span class="c-btn__txt">button</span>
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
      <h3 class="c-h3">White(배경이 어두울때)</h3>
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
              <div class="btn-wrap">
                <button type="button" class="c-btn c-btn--white">
                  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                  <span class="c-btn__text">button</span>
                </button>
                <button type="button" class="c-btn c-btn--white c-btn--outline">
                  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                  <span class="c-btn__text">outline</span>
                </button>
                <button type="button" class="c-btn c-btn--white c-btn--text">
                  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                  <span class="c-btn__text">text</span>
                </button>
                <button type="button" class="c-btn c-btn--white" disabled>
                  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                  <span class="c-btn__text">disabled</span>
                </button>
                <button type="button" class="c-btn c-btn--white c-btn--outline" disabled>
                  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                  <span class="c-btn__text">outline disabled</span>
                </button>
                <button type="button" class="c-btn c-btn--white c-btn--text" disabled>
                  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                  <span class="c-btn__text">text disabled</span>
                </button>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value09" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value09')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">크기</h3>
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
              <button type="button" class="c-btn c-btn--xs"><span class="c-btn__text">button</span></button>
              <button type="button" class="c-btn c-btn--sm"><span class="c-btn__text">button</span></button>
              <button type="button" class="c-btn c-btn--md"><span class="c-btn__text">button</span></button>
              <button type="button" class="c-btn c-btn--lg"><span class="c-btn__text">button</span></button>
              <button type="button" class="c-btn c-btn--xl"><span class="c-btn__text">button</span></button>
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
      <h3 class="c-h3">스타일</h3>
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
              <button type="button" class="c-btn c-btn--outline"><span class="c-btn__text">button</span></button>
              <button type="button" class="c-btn c-btn--text"><span class="c-btn__text">button</span></button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value04" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value04')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">아이콘</h3>
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
              <button type="button" class="c-btn">
                <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                <span class="c-btn__text">button</span>
              </button>
              <button type="button" class="c-btn">
                <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
              </button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value05" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value05')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">라운드</h3>
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
              <button type="button" class="c-btn c-btn--rounded">
                <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                <span class="c-btn__text">button</span>
              </button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value06" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value06')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">disabled</h3>
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
              <button type="button" class="c-btn" disabled>
                <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                <span class="c-btn__text">button</span>
              </button>
              <button type="button" class="c-btn c-btn--outline" disabled>
                <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                <span class="c-btn__text">button</span>
              </button>
              <button type="button" class="c-btn c-btn--text" disabled>
                <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
                <span class="c-btn__text">button</span>
              </button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value07" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value07')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">버튼 정렬</h3>
      <p class="c-information-text">가운데 정렬</p>
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
              <div class="l-btn l-btn--center">
                <button type="button" class="c-btn">button</button>
                <button type="button" class="c-btn c-btn--outline">button</button>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value0801" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value0801')">코드 복사</button>
          </div>
        </div>
      </div>

      <p class="c-information-text">왼쪽 정렬</p>
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
              <div class="l-btn l-btn--left">
                <button type="button" class="c-btn">button</button>
                <button type="button" class="c-btn c-btn--outline">button</button>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value0802" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value0802')">코드 복사</button>
          </div>
        </div>
      </div>

      <p class="c-information-text">오른쪽 정렬</p>
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
              <div class="l-btn l-btn--right">
                <button type="button" class="c-btn">button</button>
                <button type="button" class="c-btn c-btn--outline">button</button>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value0803" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value0803')">코드 복사</button>
          </div>
        </div>
      </div>

      <p class="c-information-text">양쪽 사이드 정렬</p>
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
              <div class="l-btn l-btn--between">
                <button type="button" class="c-btn">button</button>
                <button type="button" class="c-btn c-btn--outline">button</button>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value0804" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value0804')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CodeMirror from "vue-codemirror6";

const value01 = ref(`<button type="button" class="c-btn">
  <span class="c-btn__txt">button</span>
</button>`);
const value03 = ref(`<button type="button" class="c-btn c-btn--xs"><span class="c-btn__text">button</span></button>
<button type="button" class="c-btn c-btn--sm"><span class="c-btn__text">button</span></button>
<button type="button" class="c-btn c-btn--md"><span class="c-btn__text">button</span></button>
<button type="button" class="c-btn c-btn--lg"><span class="c-btn__text">button</span></button>
<button type="button" class="c-btn c-btn--xl"><span class="c-btn__text">button</span></button>`);
const value04 = ref(`<button type="button" class="c-btn c-btn--outline"><span class="c-btn__text">button</span></button>
<button type="button" class="c-btn c-btn--text"><span class="c-btn__text">button</span></button>`);
const value05 = ref(`<button type="button" class="c-btn">
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">button</span>
</button>
<button type="button" class="c-btn">
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
</button>`);
const value06 = ref(`<button type="button" class="c-btn c-btn--rounded">
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">button</span>
</button>`);
const value07 = ref(`<button type="button" class="c-btn" disabled>
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">button</span>
</button>
<button type="button" class="c-btn c-btn--outline" disabled>
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">button</span>
</button>
<button type="button" class="c-btn c-btn--text" disabled>
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">button</span>
</button>`);
const value0801 = ref(`<div class="l-btn l-btn--center">
  <button type="button" class="c-btn">button</button>
  <button type="button" class="c-btn c-btn--outline">button</button>
</div>`);
const value0802 = ref(`<div class="l-btn l-btn--left">
  <button type="button" class="c-btn">button</button>
  <button type="button" class="c-btn c-btn--outline">button</button>
</div>`);
const value0803 = ref(`<div class="l-btn l-btn--right">
  <button type="button" class="c-btn">button</button>
  <button type="button" class="c-btn c-btn--outline">button</button>
</div>`);
const value0804 = ref(`<div class="l-btn l-btn--between">
  <button type="button" class="c-btn">button</button>
  <button type="button" class="c-btn c-btn--outline">button</button>
</div>`);
const value09 = ref(`<button type="button" class="c-btn c-btn--white">
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">button</span>
</button>
<button type="button" class="c-btn c-btn--white c-btn--outline">
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">outline</span>
</button>
<button type="button" class="c-btn c-btn--white c-btn--text">
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">text</span>
</button>
<button type="button" class="c-btn c-btn--white" disabled>
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">disabled</span>
</button>
<button type="button" class="c-btn c-btn--white c-btn--outline" disabled>
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">outline disabled</span>
</button>
<button type="button" class="c-btn c-btn--white c-btn--text" disabled>
  <i class="c-btn__icon material-symbols-rounded">arrow_back</i>
  <span class="c-btn__text">text disabled</span>
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

<style lang="scss" scoped>

</style>