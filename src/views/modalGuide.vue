<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Modal</h2>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="c-h3">기본</h3>
      <p class="c-information-text mt-5">모달은 openModal('')과 모달 페이지의 id와 동일해야 불러와 집니다.<br>
        모달 페이지는 code를 참고해서 만들면 되고, 모달창의 가로 사이즈는 modal-box의 style="max-width:64rem"로 조정할 수 있습니다.<br>
        모달 페이지의 위치는 components/modal/ 안에 위치하면 됩니다.
      </p>
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
              <button type="button" class="c-btn" @click.prevent="() => openModal('modal_pass')">modal open</button>
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
      <h3 class="h3">Alert Modal</h3>
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
              <button type="button" class="c-btn" @click.prevent="() => openModal('modal_alert')">modal open</button>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value02" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value02')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PassCheckModal />
  <AlertModal />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { openModal } from '@/utils/ModalUtils.js'
import PassCheckModal from '@/components/modal/PassCheckModal.vue'
import AlertModal from '@/components/modal/AlertModal.vue'

import CodeMirror from "vue-codemirror6";






const value01 = ref(`<button type="button" class="btn" @click.prevent="() => openModal('modal_pass')">modal open</button>
<PassCheckModal />
<!-- PassCheckModal.vue -->
<div class="c-modal" id="modal_pass" role="dialog" aria-labelledby="tit_modal_pass">
  <div class="c-modal__box" style="max-width:64rem">
    <div class="c-modal__header">
      <h3 id="tit_modal_pass" class="modal-title" tabindex="0">게시글 수정</h3>
    </div>
    <div class="c-modal__cont">
      <div class="c-modal__inner">
        <div class="company-find-wrap">
          <div class="c-box-type01">
            <div class="c-form c-form--horizontal">
              <div class="c-form__tit">
                <label for="form-input030206" class="c-form__label">비밀번호</label>
              </div>
              <div class="c-form__conts">
                <div class="c-form__inner">
                  <input
                    type="password"
                    id="form-input030206"
                    class="c-input"
                    placeholder="비밀번호을 입력하세요"
                  />
                </div>
              </div>
            </div>
          </div>
          <p class="c-information-text center mt-3">
            게시물 작성시 입력했던 비밀번호가 있어야 글을 수정할 수 있습니다.
          </p>
          <div class="c-btn-line center mt30">
            <button type="button" class="c-btn size-m outline btn-rounded close-modal"><span class="txt">취소</span></button>
            <button type="button" class="c-btn size-m btn-rounded" @click="validatePassword"><span class="txt">확인</span></button>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="c-btn c-btn--white c-btn--text c-btn--md c-modal__close close-modal">
      <span class="sr-only">닫기</span>
      <i class="material-symbols-rounded">close</i>
    </button>
  </div>
</div>
`);
const value02 = ref(`<div class="c-modal" id="modal_alert" role="dialog" aria-labelledby="tit_modal_alert">
  <div class="c-modal__box alert" style="max-width:128rem; width:32rem">
    <div class="c-modal__cont">
      <div class="c-modal__inner">
        <p class="txt">
          삭제한 내용은 복구할 수 없습니다.
        </p>
        <div class="c-btn-line center mt30">
          <button type="button" class="c-btn size-m" @click="handleConfirm">
            <span class="txt">확인</span>
          </button>
          <button v-if="modalState.showCancelButton" type="button" class="c-btn size-m btn-outline"
            @click="handleCancel">
            <span class="txt">취소</span>
          </button>
        </div>
      </div>
    </div>      
  </div>
</div>`);

async function openBidModal() {
  await showModal('modal_alert', {
    modalMessage: `삭제한 내용은 복구할 수 없습니다.`,
    showCancelButton: true
  })
}

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