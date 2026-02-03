<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">grid-template-columns</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="grid 열 지정"
      description="'grid-cols-&amp;lt;number&amp;gt;'를 사용하여 grid 컨테이너의 열 수를 지정합니다." 
      :code="gridTempColCode1"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-4 gap-2 w-full">
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
      title="서브 그리드 구현" 
      description="'grid-cols-subgrid'를 사용하여 부모에 의해 정의될 열 트랙을 채택합니다."
      :code="gridTempColCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-4 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="col-span-3 grid grid-cols-subgrid gap-2">
            <div class="box-border col-start-2">Item 6</div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 아이템의 그리드 수를 설정합니다."
      :code="gridTempColCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
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
              <td data-header="class">grid-cols-&lt;number&gt;</td>
              <td data-header="style">grid-template-columns: repeat(&lt;number&gt;, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td data-header="class">grid-cols-none</td>
              <td data-header="style">grid-template-columns: none;</td>
            </tr>
            <tr>
              <td data-header="class">grid-cols-subgrid</td>
              <td data-header="style">grid-template-columns: subgrid;</td>
            </tr>
            <tr>
              <td data-header="class">grid-cols-[&lt;value&gt;]</td>
              <td data-header="style">grid-template-columns: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">grid-cols-(&lt;custom-property&gt;)</td>
              <td data-header="style">grid-template-columns: var(&lt;custom-property&gt;);</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const gridTempColCode1 = `<div class="grid grid-cols-4 gap-2 w-full">
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

const gridTempColCode2 = `<div class="grid grid-cols-4 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div class="col-span-3 grid grid-cols-subgrid gap-2">
    <div class="col-start-2">Item 6</div>
  </div>
</div>`;

const gridTempColCode3 = `<div class="grid grid-cols-1 md:grid-cols-6 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

</script>