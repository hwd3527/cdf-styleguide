<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Modal</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="모달은 openModal('')과 모달 페이지의 id와 동일해야 불러와 집니다.<br>
        모달 페이지는 code를 참고해서 만들면 되고, 모달창의 가로 사이즈는 modal-box의 style='max-width:64rem'로 조정할 수 있습니다.<br>
      모달 페이지의 위치는 components/modal/ 안에 위치하면 됩니다." 
      :code="modalCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <button type="button" class="c-btn" @click.prevent="() => openModal('modal_pass')">modal open</button>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Alert Modal" 
      description="" 
      :code="modalCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <button type="button" class="c-btn" @click.prevent="() => openModal('modal_alert')">modal open</button>
      </div>
    </ComponentPreview>
    
    
  </div>
  <PassCheckModal />
  <AlertModal />
</template>

<script setup>
import { openModal } from '@/utils/ModalUtils.js'
import PassCheckModal from '@/components/modal/PassCheckModal.vue'
import AlertModal from '@/components/modal/AlertModal.vue'



import ComponentPreview from '../components/ComponentPreview.vue';

const modalCode1 = `<button type="button" class="btn" @click.prevent="() => openModal('modal_pass')">modal open</button>
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
</div>`;

const modalCode2 = `<button type="button" class="c-btn" @click.prevent="() => openModal('modal_alert')">modal open</button>
<AlertModal />
<!-- AlertModal.vue -->
<div class="c-modal" id="modal_alert" role="dialog" aria-labelledby="tit_modal_alert">
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
</div>`;










</script>