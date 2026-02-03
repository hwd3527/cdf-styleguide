<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">grid-template-rows</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="그리드 행 지정" 
      description="`grid-rows-2` 및 `grid-rows-4`와 같은 `grid-rows-&amp;lt;number&amp;gt;` 유틸리티를 사용하여 크기가 동일한 n개의 행으로 구성된 그리드를 만드세요."
      :code="gridTempRowCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-col grid-rows-4 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
          <div class="box-border">Item 7</div>
          <div class="box-border">Item 8</div>
          <div class="box-border">Item 9</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="서브 그리드"
      description="'grid-rows-subgrid'를 사용하여 부모가 정의한 행을 자식 요소에도 적용할 수 있습니다."
      :code="gridTempRowCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-col grid-rows-4 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="row-span-3 grid grid-rows-subgrid gap-2">
            <div class="box-border row-start-2">Item 6</div>
          </div>
          <div class="box-border">Item 7</div>
          <div class="box-border">Item 8</div>
          <div class="box-border">Item 9</div>
          <div class="box-border">Item 10</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 아이템의 그리드 행을 설정합니다."
      :code="gridTempRowCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-col grid-rows-2 md:grid-rows-6 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
          <div class="box-border">Item 7</div>
          <div class="box-border">Item 8</div>
          <div class="box-border">Item 9</div>
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
              <td data-header="class">grid-rows-&lt;number&gt;
              </td>
              <td data-header="style">grid-template-rows: repeat(&lt;number&gt;, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td data-header="class">grid-rows-none</td>
              <td data-header="style">grid-template-rows: none;</td>
            </tr>
            <tr>
              <td data-header="class">grid-rows-subgrid</td>
              <td data-header="style">grid-template-rows: subgrid;
              </td>
            </tr>
            <tr>
              <td data-header="class">grid-rows-[&lt;value&gt;]</td>
              <td data-header="style">grid-template-rows: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">grid-rows-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-template-rows: var(&lt;custom-property&gt;);</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const gridTempRowCode1 = `<div class="grid grid-flow-col grid-rows-4 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>
</div>`;

const gridTempRowCode2 = `<div class="grid grid-flow-col grid-rows-4 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div class="row-span-3 grid grid-rows-subgrid gap-2">
    <div class="row-start-2">Item 6</div>
  </div>
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>
  <div>Item 10</div>
</div>`;

const gridTempRowCode3 = `<div class="grid grid-flow-col grid-rows-2 md:grid-rows-6 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>
</div>`;

</script>