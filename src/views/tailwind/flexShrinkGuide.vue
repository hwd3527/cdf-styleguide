<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">flex-shrink</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/flex-shrink" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="아이템 축소 허용" 
      description="'shrink' 필요한 경우 플렉스 아이템을 축소하도록 허용합니다."
      :code="flexShrinkCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 flex-none">Item 1</div>
          <div class="box-border w-64 shrink">Item 2</div>
          <div class="box-border w-16 flex-none">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="아이템 축소 방지" 
      description="'shrink-0' 플렉스 아이템이 줄어드는 것을 방지합니다." 
      :code="flexShrinkCode2"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border w-120 shrink-0">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 아이템의 축소를 설정합니다." 
      :code="flexShrinkCode3"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-48 shrink md:shrink-0">Item 1</div>
          <div class="box-border w-48 shrink md:shrink-0">Item 2</div>
          <div class="box-border w-48 shrink md:shrink-0">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

        

    <div class="conts-area">
      <h3 class="c-h3">사용할 수 있는 클래스</h3>
      <div class="c-table-wrap c-scrollbar horizontal">
        <table class="c-table-type03 !min-w-[1000px]">
          <caption>class, style 항목별 순서대로 안내하는 표입니다</caption>
          <colgroup>
            <col style="width: 30%;">
            <col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-header="class">shrink
              </td>
              <td data-header="style">flex-shrink: 1;</td>
            </tr>
            <tr>
              <td data-header="class">shrink-&lt;number&gt;
              </td>
              <td data-header="style">flex-shrink: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">shrink-[&lt;value&gt;]</td>
              <td data-header="style">flex-shrink: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">shrink-(&lt;custom-property&gt;)</td>
              <td data-header="style">flex-shrink: var(&lt;custom-property&gt;);</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const flexShrinkCode1 = `<div class="flex gap-2 w-full">
  <div class="w-16 flex-none">Item 1</div>
  <div class="w-64 shrink">Item 2</div>
  <div class="w-16 flex-none">Item 3</div>
</div>`;

const flexShrinkCode2 = `<div class="flex gap-2 w-full">
  <div class="flex-1">Item 1</div>
  <div class="w-120 shrink-0">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

const flexShrinkCode3 = `<div class="flex gap-2 w-full">
  <div class="w-48 shrink md:shrink-0">Item 1</div>
  <div class="w-48 shrink md:shrink-0">Item 2</div>
  <div class="w-48 shrink md:shrink-0">Item 3</div>
</div>`



</script>