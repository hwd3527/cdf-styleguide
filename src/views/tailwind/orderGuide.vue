<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">order</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/order" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="정렬 순서를 설정" 
      description="'order-&amp;lt;number&amp;gt;'를 사용하여 문서에 나타나는 순서를 flex 및 grid 아이템의 정렬 순서를 설정합니다." 
      :code="orderCode1"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 order-3">Item 1</div>
          <div class="box-border w-16 order-1">Item 2</div>
          <div class="box-border w-16 order-2">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="아이템을 처음 또는 마지막으로 정렬"
      description="'order-first' 또는 'order-last'를 사용하여 flex 및 grid 아이템을 처음 또는 마지막으로 정렬합니다." 
      :code="orderCode2"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 order-last">Item 1</div>
          <div class="box-border w-16">Item 2</div>
          <div class="box-border w-16 order-first">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인"
      description="중단점으로 원하는 화면 크기에서 아이템의 순서를 설정합니다." 
      :code="orderCode3"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 order-3 md:order-1">Item 1</div>
          <div class="box-border w-16 order-1 md:order-2">Item 2</div>
          <div class="box-border w-16 order-2 md:order-3">Item 3</div>
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
              <td data-header="class">order-&lt;number&gt;</td>
              <td data-header="style">order: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-order-&lt;number&gt;</td>
              <td data-header="style">order: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">order-first</td>
              <td data-header="style">order: -9999;</td>
            </tr>
            <tr>
              <td data-header="class">order-last</td>
              <td data-header="style">order: 9999;</td>
            </tr>
            <tr>
              <td data-header="class">order-none</td>
              <td data-header="style">order: 0;</td>
            </tr>
            <tr>
              <td data-header="class">order-(&lt;custom-property&gt;)</td>
              <td data-header="style">order: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">order-[&lt;value&gt;]</td>
              <td data-header="style">order: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const orderCode1 = `<div class="flex gap-2 w-full">
  <div class="w-16 order-3">Item 1</div>
  <div class="w-16 order-1">Item 2</div>
  <div class="w-16 order-2">Item 3</div>
</div>`;

const orderCode2 = `<div class="flex gap-2 w-full">
  <div class="w-16 order-last">Item 1</div>
  <div class="w-16">Item 2</div>
  <div class="w-16 order-first">Item 3</div>
</div>`;

const orderCode3 = `<div class="flex gap-2 w-full">
  <div class="w-16 order-3 md:order-1">Item 1</div>
  <div class="w-16 order-1 md:order-2">Item 2</div>
  <div class="w-16 order-2 md:order-3">Item 3</div>
</div>`;


</script>