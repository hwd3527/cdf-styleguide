<template>
  <div class="cdf-modal" id="modal_pass" role="dialog" aria-labelledby="tit_modal_pass">
    <div class="cdf-modal-box" style="max-width:64rem">
      <div class="modal-header">
        <h3 id="tit_modal_pass" class="modal-title" tabindex="0">게시글 수정</h3>
      </div>
      <div class="modal-cont">
        <div class="inner-cont-wrap">
          <div class="company-find-wrap">
            <div class="cdf-box-type01">
              <div class="cdf-form-group horizontal">
                <div class="cdf-form-tit">
                  <label for="form-input030206" class="cdf-form-label">비밀번호</label>
                </div>
                <div class="cdf-form-conts">
                  <div class="cdf-form-conts-inner">
                    <input
                      type="password"
                      id="form-input030206"
                      class="cdf-input"
                      placeholder="비밀번호을 입력하세요"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p class="cdf-information-text center mt-3">
              게시물 작성시 입력했던 비밀번호가 있어야 글을 수정할 수 있습니다.
            </p>
            <div class="cdf-btn-line center mt30">
              <button type="button" class="cdf-btn size-m outline btn-rounded close-modal"><span class="txt">취소</span></button>
              <button type="button" class="cdf-btn size-m btn-rounded" @click="validatePassword"><span class="txt">확인</span></button>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="cdf-btn white text size-m btn-close close-modal">
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
