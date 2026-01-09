<template>
  <div class="c-modal" id="modal_pass" role="dialog" aria-labelledby="tit_modal_pass">
    <div class="c-modal__box" style="max-width:64rem">
      <div class="c-modal__header">
        <h3 id="tit_modal_pass" class="c-modal__title" tabindex="0">게시글 수정</h3>
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
            <div class="l-btn l-btn--center mt30">
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
</template>

<script setup>

</script>

<style scoped>

</style>
