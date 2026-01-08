<template>
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
  </div>
</template>

<script setup>
import { getModalState, resolveModal } from '../../utils/ModalUtils'

const modalState = getModalState('modal_alert')

const handleConfirm = () => {
  resolveModal('modal_alert', true)
}

const handleCancel = () => {
  resolveModal('modal_alert', false)
}
</script>
