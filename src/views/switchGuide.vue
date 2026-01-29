<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Toggle Switch</h2>
  </div>
  <div class="cont-zone-wrap">

    <ComponentPreview 
      title="기본" 
      description="toggle switch기본 버튼 스타일입니다." 
      :code="switchCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster flex-col justify-start !items-start  w-full max-w-7xl">
        <div class="c-switch">
          <input type="checkbox" id="switch">
          <label for="switch">
            <span class="c-switch__toggle">
              <i></i>
            </span>
            switch : default
          </label>
        </div>
        <div class="c-switch">
          <input type="checkbox" id="switch2" checked>
          <label for="switch2">
            <span class="c-switch__toggle">
              <i></i>
            </span>
            switch : checked
          </label>
        </div>
        <div class="c-switch">
          <input type="checkbox" id="switch3" disabled>
          <label for="switch3">
            <span class="c-switch__toggle">
              <i></i>
            </span>
            switch : disabled
          </label>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="사이즈" 
      description="toggle switch 사이즈 입니다. sm, md, lg 세가지 사이즈가 있습니다." 
      :code="switchCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster flex-col justify-start !items-start  w-full max-w-7xl">
        <div class="c-switch c-switch--sm">
          <input type="checkbox" id="switch11">
          <label for="switch11">
            <span class="c-switch__toggle">
              <i></i>
            </span>
            switch : size-sm
          </label>
        </div>
        <div class="c-switch c-switch--md">
          <input type="checkbox" id="switch12" checked>
          <label for="switch12">
            <span class="c-switch__toggle">
              <i></i>
            </span>
            switch : size-md
          </label>
        </div>
        <div class="c-switch c-switch--lg">
          <input type="checkbox" id="switch13">
          <label for="switch13">
            <span class="c-switch__toggle">
              <i></i>
            </span>
            switch : size-lg
          </label>
        </div>
      </div>
    </ComponentPreview>


    
  </div>
</template>

<script setup>
import ComponentPreview from '../components/ComponentPreview.vue';

const switchCode1 = `<div class="c-switch">
  <input type="checkbox" id="switch">
  <label for="switch">
    <span class="c-switch__toggle">
      <i></i>
    </span>
    switch : default
  </label>
</div>
<div class="c-switch">
  <input type="checkbox" id="switch2" checked>
  <label for="switch2">
    <span class="c-switch__toggle">
      <i></i>
    </span>
    switch : checked
  </label>
</div>
<div class="c-switch">
  <input type="checkbox" id="switch3" disabled>
  <label for="switch3">
    <span class="c-switch__toggle">
      <i></i>
    </span>
    switch : disabled
  </label>
</div>`;

const switchCode2 = `<div class="c-switch c-switch--sm">
  <input type="checkbox" id="switch11">
  <label for="switch11">
    <span class="c-switch__toggle">
      <i></i>
    </span>
    switch : size-sm
  </label>
</div>
<div class="c-switch c-switch--md">
  <input type="checkbox" id="switch12" checked>
  <label for="switch12">
    <span class="c-switch__toggle">
      <i></i>
    </span>
    switch : size-md
  </label>
</div>
<div class="c-switch c-switch--lg">
  <input type="checkbox" id="switch13">
  <label for="switch13">
    <span class="c-switch__toggle">
      <i></i>
    </span>
    switch : size-lg
  </label>
</div>`;




</script>