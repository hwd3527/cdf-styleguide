<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Checkbox</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="기본 checkbox 스타일입니다." 
      :code="checkboxCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_01" id="rdo_01">
              <label for="rdo_01">체크박스</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rdo_02" id="rdo_02">
              <label for="rdo_02">체크박스</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rdo_03" id="rdo_03">
              <label for="rdo_03">체크박스</label>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="세로형" 
      description="세로형 checkbox 스타일입니다." 
      :code="checkboxCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check c-check--vertical">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_0201" id="rdo_0201">
              <label for="rdo_0201">체크박스</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_0201" id="rdo_0202">
              <label for="rdo_0202">체크박스</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_0201" id="rdo_0203">
              <label for="rdo_0203">체크박스</label>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="비활성화" 
      description="disabled된 checkbox 스타일입니다." 
      :code="checkboxCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_0301" id="rdo_0301" disabled>
              <label for="rdo_0301">비활성화</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_0301" id="rdo_0302" checked disabled>
              <label for="rdo_0302">선택된 비활성화</label>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="사이즈" 
      description="checkbox 사이즈 종류입니다. small, medium, large 세가지 사이즈가 있습니다." 
      :code="checkboxCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check">
          <div class="c-check__conts c-check__conts--small">
            <div class="c-check__inner">
              <input type="checkbox" name="chk_0401" id="chk_0401">
              <label for="chk_0401">small</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts c-check__conts--medium">
            <div class="c-check__inner">
              <input type="checkbox" name="chk_0402" id="chk_0402">
              <label for="chk_0402">medium</label>
              <i></i>
            </div>
          </div>
          <div class="c-check__conts c-check__conts--large">
            <div class="c-check__inner">
              <input type="checkbox" name="chk_0403" id="chk_0403">
              <label for="chk_0403">large</label>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Chip Checkbox" 
      description="chip 형태의 checkbox 스타일입니다."
      :code="checkboxCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-check c-check--chip">
          <div class="c-check__chip">
            <input type="checkbox" class="checkbox" id="chk_chip_0101">
            <label for="chk_chip_0101">최저가</label>
          </div>
          <div class="c-check__chip">
            <input type="checkbox" class="checkbox" id="chk_chip_0102">
            <label for="chk_chip_0102">현장인접</label>
          </div>
          <div class="c-check__chip">
            <input type="checkbox" class="checkbox" id="chk_chip_0103">
            <label for="chk_chip_0103">평균가</label>
          </div>
          <div class="c-check__chip">
            <input type="checkbox" class="checkbox" id="chk_chip_0104">
            <label for="chk_chip_0104">신용평가 최고점</label>
          </div>
          <div class="c-check__chip">
            <input type="checkbox" class="checkbox" id="chk_chip_0105">
            <label for="chk_chip_0105">최다거래 실적</label>
          </div>
        </div>
      </div>
    </ComponentPreview>
        
  </div>
</template>

<script setup>
import ComponentPreview from '../components/ComponentPreview.vue';

const checkboxCode1 = `<div class="c-check">
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="checkbox" name="rao_01" id="rdo_01">
      <label for="rdo_01">체크박스</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="checkbox" name="rdo_02" id="rdo_02">
      <label for="rdo_02">체크박스</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts">
    <div class="c-check__inner">
      <input type="checkbox" name="rdo_03" id="rdo_03">
      <label for="rdo_03">체크박스</label>
      <i></i>
    </div>
  </div>
</div>`;

const checkboxCode2 = `<div class="c-check c-check--vertical">
<div class="c-check__conts">
  <div class="c-check__inner">
    <input type="checkbox" name="rao_0201" id="rdo_0201">
    <label for="rdo_0201">체크박스</label>
    <i></i>
  </div>
</div>
<div class="c-check__conts">
  <div class="c-check__inner">
    <input type="checkbox" name="rao_0201" id="rdo_0202">
    <label for="rdo_0202">체크박스</label>
    <i></i>
  </div>
</div>
<div class="c-check__conts">
  <div class="c-check__inner">
    <input type="checkbox" name="rao_0201" id="rdo_0203">
    <label for="rdo_0203">체크박스</label>
    <i></i>
  </div>
</div>
</div>`;

const checkboxCode3 = `<div class="c-check">
<div class="c-check__conts">
  <div class="c-check__inner">
    <input type="checkbox" name="rao_0301" id="rdo_0301" disabled>
    <label for="rdo_0301">비활성화</label>
    <i></i>
  </div>
</div>
<div class="c-check__conts">
  <div class="c-check__inner">
    <input type="checkbox" name="rao_0301" id="rdo_0302" checked disabled>
    <label for="rdo_0302">선택된 비활성화</label>
    <i></i>
  </div>
</div>
</div>`;

const checkboxCode4 = `<div class="c-check">
  <div class="c-check__conts c-check__conts--small">
    <div class="c-check__inner">
      <input type="checkbox" name="chk_0401" id="chk_0401">
      <label for="chk_0401">small</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts c-check__conts--medium">
    <div class="c-check__inner">
      <input type="checkbox" name="chk_0402" id="chk_0402">
      <label for="chk_0402">medium</label>
      <i></i>
    </div>
  </div>
  <div class="c-check__conts c-check__conts--large">
    <div class="c-check__inner">
      <input type="checkbox" name="chk_0403" id="chk_0403">
      <label for="chk_0403">large</label>
      <i></i>
    </div>
  </div>
</div>`;

const checkboxCode5 = `<div class="c-check c-check--chip">
  <div class="c-check__chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0101">
    <label for="chk_chip_0101">최저가</label>
  </div>
  <div class="c-check__chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0102">
    <label for="chk_chip_0102">현장인접</label>
  </div>
  <div class="c-check__chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0103">
    <label for="chk_chip_0103">평균가</label>
  </div>
  <div class="c-check__chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0104">
    <label for="chk_chip_0104">신용평가 최고점</label>
  </div>
  <div class="c-check__chip">
    <input type="checkbox" class="checkbox" id="chk_chip_0105">
    <label for="chk_chip_0105">최다거래 실적</label>
  </div>
</div>`;



</script>