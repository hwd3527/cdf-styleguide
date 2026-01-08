<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Toggle Switch</h2>
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
              <span class="c-label c-label--hard c-label--gray">LABEL</span>
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
      <h3 class="c-h3">스타일</h3>
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
              <span class="c-label c-label--hard c-label--gray">LABEL</span>
              <span class="c-label c-label--soft c-label--gray">LABEL</span>
              <span class="c-label c-label--border c-label--gray">LABEL</span>
              <span class="c-label c-label--rounded c-label--gray">LABEL</span>
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
      <h3 class="c-h3">사이즈</h3>
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
              <span class="c-label c-label--hard c-label--gray c-label--sm">LABEL</span>
              <span class="c-label c-label--hard c-label--gray c-label--md">LABEL</span>
              <span class="c-label c-label--hard c-label--gray c-label--lg">LABEL</span>
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
      <h3 class="c-h3">색상</h3>
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
              <span class="c-label c-label--hard c-label--gray">LABEL</span>
              <span class="c-label c-label--hard c-label--green">LABEL</span>
              <span class="c-label c-label--hard c-label--turquoise">LABEL</span>
              <span class="c-label c-label--hard c-label--cyan">LABEL</span>
              <span class="c-label c-label--hard c-label--blue">LABEL</span>
              <span class="c-label c-label--hard c-label--purple">LABEL</span>
              <span class="c-label c-label--hard c-label--rose">LABEL</span>
              <span class="c-label c-label--hard c-label--red">LABEL</span>
              <span class="c-label c-label--hard c-label--orange">LABEL</span>
              <span class="c-label c-label--hard c-label--yellow">LABEL</span>
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
      <h3 class="c-h3">색상(파스텔)</h3>
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
              <span class="c-label c-label--soft c-label--gray">LABEL</span>
              <span class="c-label c-label--soft c-label--green">LABEL</span>
              <span class="c-label c-label--soft c-label--turquoise">LABEL</span>
              <span class="c-label c-label--soft c-label--cyan">LABEL</span>
              <span class="c-label c-label--soft c-label--blue">LABEL</span>
              <span class="c-label c-label--soft c-label--purple">LABEL</span>
              <span class="c-label c-label--soft c-label--rose">LABEL</span>
              <span class="c-label c-label--soft c-label--red">LABEL</span>
              <span class="c-label c-label--soft c-label--orange">LABEL</span>
              <span class="c-label c-label--soft c-label--yellow">LABEL</span>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value05" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value05')">코드 복사</button>
          </div>

        </div>
      </div>
    </div>











  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import CodeMirror from "vue-codemirror6";

const value01 = ref(`<span class="c-label c-label--hard c-label--gray">LABEL</span>`);
const value02 = ref(`<span class="c-label c-label--hard c-label--gray">LABEL</span>
<span class="c-label c-label--soft c-label--gray">LABEL</span>
<span class="c-label c-label--border c-label--gray">LABEL</span>
<span class="c-label c-label--rounded c-label--gray">LABEL</span>`);
const value03 = ref(`<span class="c-label c-label--hard c-label--gray c-label--sm">LABEL</span>
<span class="c-label c-label--hard c-label--gray c-label--md">LABEL</span>
<span class="c-label c-label--hard c-label--gray c-label--lg">LABEL</span>`);
const value04 = ref(`<span class="c-label c-label--hard c-label--gray">LABEL</span>
<span class="c-label c-label--hard c-label--green">LABEL</span>
<span class="c-label c-label--hard c-label--turquoise">LABEL</span>
<span class="c-label c-label--hard c-label--cyan">LABEL</span>
<span class="c-label c-label--hard c-label--blue">LABEL</span>
<span class="c-label c-label--hard c-label--purple">LABEL</span>
<span class="c-label c-label--hard c-label--rose">LABEL</span>
<span class="c-label c-label--hard c-label--red">LABEL</span>
<span class="c-label c-label--hard c-label--orange">LABEL</span>
<span class="c-label c-label--hard c-label--yellow">LABEL</span>`);
const value05 = ref(`<span class="c-label c-label--soft c-label--gray">LABEL</span>
<span class="c-label c-label--soft c-label--green">LABEL</span>
<span class="c-label c-label--soft c-label--turquoise">LABEL</span>
<span class="c-label c-label--soft c-label--cyan">LABEL</span>
<span class="c-label c-label--soft c-label--blue">LABEL</span>
<span class="c-label c-label--soft c-label--purple">LABEL</span>
<span class="c-label c-label--soft c-label--rose">LABEL</span>
<span class="c-label c-label--soft c-label--red">LABEL</span>
<span class="c-label c-label--soft c-label--orange">LABEL</span>
<span class="c-label c-label--soft c-label--yellow">LABEL</span>`);

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