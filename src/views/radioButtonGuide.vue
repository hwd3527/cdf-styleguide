<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Radio Button</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="기본 radio 버튼 스타일입니다." 
      :code="radioCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="radio" name="rao_01" id="rdo_01">
              <label for="rdo_01">라디오버튼</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="radio" name="rao_01" id="rdo_02">
              <label for="rdo_02">라디오버튼</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="radio" name="rao_01" id="rdo_03">
              <label for="rdo_03">라디오버튼</label>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="세로형" 
      description="세로형 radio 버튼 스타일입니다." 
      :code="radioCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check c-check--vertical">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="radio" name="rao_0201" id="rdo_0201">
              <label for="rdo_0201">라디오버튼</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="radio" name="rao_0201" id="rdo_0202">
              <label for="rdo_0202">라디오버튼</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="radio" name="rao_0201" id="rdo_0203">
              <label for="rdo_0203">라디오버튼</label>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="비활성화" 
      description="disabled된 radio 버튼 스타일입니다." 
      :code="radioCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check c-check--vertical">
          <div class="c-check">
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="radio" name="rao_0301" id="rdo_0301" disabled>
                <label for="rdo_0301">비활성화</label>
                <i></i>
              </div>
            </div>
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="radio" name="rao_0301" id="rdo_0302" checked disabled>
                <label for="rdo_0302">선택된 비활성화</label>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="사이즈" 
      description="radio 버튼 사이즈 종류입니다. small, medium, large 세가지 사이즈가 있습니다." 
      :code="radioCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check">
          <div class="c-check__conts c-check__conts--small">
            <div class="c-check__inner">
              <input type="radio" name="rao_0401" id="rdo_0401">
              <label for="rdo_0401">small</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts c-check__conts--medium">
            <div class="c-check__inner">
              <input type="radio" name="rao_0401" id="rdo_0402">
              <label for="rdo_0402">medium</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts c-check__conts--large">
            <div class="c-check__inner">
              <input type="radio" name="rao_0401" id="rdo_0403">
              <label for="rdo_0403">large</label>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>
    
  </div>
</template>

<script setup>
import ComponentPreview from '../components/ComponentPreview.vue';


const radioCode1 = `<div class="c-check">
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_01" id="rdo_01">
      <label for="rdo_01">라디오버튼</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_01" id="rdo_02">
      <label for="rdo_02">라디오버튼</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_01" id="rdo_03">
      <label for="rdo_03">라디오버튼</label>
      <i></i>
    </div>
  </div>
</div>`

const radioCode2 = `<div class="c-check c-check--vertical">
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_0201" id="rdo_0201">
      <label for="rdo_0201">라디오버튼</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_0201" id="rdo_0202">
      <label for="rdo_0202">라디오버튼</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_0201" id="rdo_0203">
      <label for="rdo_0203">라디오버튼</label>
      <i></i>
    </div>
  </div>
</div>`

const radioCode3 = `<div class="c-check">
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_0301" id="rdo_0301" disabled>
      <label for="rdo_0301">비활성화</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="radio" name="rao_0301" id="rdo_0302" checked disabled>
      <label for="rdo_0302">선택된 비활성화</label>
      <i></i>
    </div>
  </div>
</div>`

const radioCode4 = `<div class="c-check">
  <div class="c-check__conts c-check__conts--small">
    <div class="c-check__inner">
      <input type="radio" name="rao_0401" id="rdo_0401">
      <label for="rdo_0401">small</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts c-check__conts--medium">
    <div class="c-check__inner">
      <input type="radio" name="rao_0401" id="rdo_0402">
      <label for="rdo_0402">medium</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts c-check__conts--large">
    <div class="c-check__inner">
      <input type="radio" name="rao_0401" id="rdo_0403">
      <label for="rdo_0403">large</label>
      <i></i>
    </div>
  </div>
</div>`;


</script>