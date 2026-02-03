<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">width</h2>
    <a class="c-btn size-xs btn-outline" href="https://tailwindcss.com/docs/width" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">  
    <ComponentPreview 
      title="기본"
      description="'w-&amp;lt;number&amp;gt;' 유틸리티를 사용하여 요소의 너비를 고정할 수 있습니다."
      :code="widthCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !flex-col !items-start !gap-2">
        <div class="!bg-cyan-500 w-96 p-2 text-white">w-96</div>
        <div class="!bg-cyan-500 w-80 p-2 text-white">w-80</div>
        <div class="!bg-cyan-500 w-64 p-2 text-white">w-64</div>
        <div class="!bg-cyan-500 w-48 p-2 text-white">w-48</div>
        <div class="!bg-cyan-500 w-40 p-2 text-white">w-40</div>
        <div class="!bg-cyan-500 w-32 p-2 text-white">w-32</div>
        <div class="!bg-cyan-500 w-24 p-2 text-white">w-24</div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="백분율" 
      description="'w-full', 'w-1/2', 'w-2/5' 요소에 백분율 기반 너비를 설정할 수 있습니다."
      :code="widthCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !flex-col !items-start !gap-2">
        <div class="flex gap-2 w-96">
          <div class="w-1/2 !bg-cyan-500 p-2 text-white">w-1/2</div>
          <div class="w-1/2 !bg-cyan-500 p-2 text-white">w-1/2</div>
        </div>
        <div class="flex gap-2 w-96">
          <div class="w-2/5 !bg-cyan-500 p-2 text-white">w-2/5</div>
          <div class="w-3/5 !bg-cyan-500 p-2 text-white">w-3/5</div>
        </div>
        <div class="flex gap-2 w-96">
          <div class="w-1/3 !bg-cyan-500 p-2 text-white">w-1/3</div>
          <div class="w-2/3 !bg-cyan-500 p-2 text-white">w-2/3</div>
        </div>
        <div class="flex gap-2 w-96">
          <div class="w-1/4 !bg-cyan-500 p-2 text-white">w-1/4</div>
          <div class="w-3/4 !bg-cyan-500 p-2 text-white">w-3/4</div>
        </div>
        <div class="flex gap-2 w-96">
          <div class="w-1/5 !bg-cyan-500 p-2 text-white">w-1/5</div>
          <div class="w-4/5 !bg-cyan-500 p-2 text-white">w-4/5</div>
        </div>
        <div class="flex gap-2 w-96">
          <div class="w-1/6 !bg-cyan-500 p-2 text-white">w-1/6</div>
          <div class="w-5/6 !bg-cyan-500 p-2 text-white">w-5/6</div>
        </div>
        <div class="flex gap-2 w-96">
          <div class="w-full !bg-cyan-500 p-2 text-white">w-full</div>
        </div>
      </div>
    </ComponentPreview>   
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const widthCode1 = `<div class="!bg-cyan-500 w-96 p-2 text-white">w-96</div>
<div class="!bg-cyan-500 w-80 p-2 text-white">w-80</div>
<div class="!bg-cyan-500 w-64 p-2 text-white">w-64</div>
<div class="!bg-cyan-500 w-48 p-2 text-white">w-48</div>
<div class="!bg-cyan-500 w-40 p-2 text-white">w-40</div>
<div class="!bg-cyan-500 w-32 p-2 text-white">w-32</div>
<div class="!bg-cyan-500 w-24 p-2 text-white">w-24</div>`;

const widthCode2 = `<div class="flex gap-2 w-96">
  <div class="w-1/2 !bg-cyan-500 p-2 text-white">w-1/2</div>
  <div class="w-1/2 !bg-cyan-500 p-2 text-white">w-1/2</div>
</div>
<div class="flex gap-2 w-96">
  <div class="w-2/5 !bg-cyan-500 p-2 text-white">w-2/5</div>
  <div class="w-3/5 !bg-cyan-500 p-2 text-white">w-3/5</div>
</div>
<div class="flex gap-2 w-96">
  <div class="w-1/3 !bg-cyan-500 p-2 text-white">w-1/3</div>
  <div class="w-2/3 !bg-cyan-500 p-2 text-white">w-2/3</div>
</div>
<div class="flex gap-2 w-96">
  <div class="w-1/4 !bg-cyan-500 p-2 text-white">w-1/4</div>
  <div class="w-3/4 !bg-cyan-500 p-2 text-white">w-3/4</div>
</div>
<div class="flex gap-2 w-96">
  <div class="w-1/5 !bg-cyan-500 p-2 text-white">w-1/5</div>
  <div class="w-4/5 !bg-cyan-500 p-2 text-white">w-4/5</div>
</div>
<div class="flex gap-2 w-96">
  <div class="w-1/6 !bg-cyan-500 p-2 text-white">w-1/6</div>
  <div class="w-5/6 !bg-cyan-500 p-2 text-white">w-5/6</div>
</div>
<div class="flex gap-2 w-96">
  <div class="w-full !bg-cyan-500 p-2 text-white">w-full</div>
</div>`;

</script>