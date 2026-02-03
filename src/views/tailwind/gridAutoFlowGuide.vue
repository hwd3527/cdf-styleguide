<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">grid-auto-flow</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/grid-auto-flow" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview title="기본" 
      description="그리드 레이아웃에서 자동 배치되도록 제어하려면 'grid-flow-col'과 같은 'grid-flow-row-dense'를 사용하세요."
      :code="gridAutoFlowCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 w-full">
          <div class="box-border col-span-2">Item 1</div>
          <div class="box-border col-span-2">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="반응형 디자인"
      description="중단점으로 원하는 화면 크기에서 아이템의 그리드 자동 흐름을 설정합니다."
      :code="gridAutoFlowCode2" bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-col md:grid-flow-row grid-cols-3 grid-rows-3 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border col-span-2">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border col-span-2">Item 4</div>
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
              <td data-header="class">grid-flow-row</td>
              <td data-header="style">grid-auto-flow: row;</td>
            </tr>
            <tr>
              <td data-header="class">grid-flow-col</td>
              <td data-header="style">grid-auto-flow: column;</td>
            </tr>
            <tr>
              <td data-header="class">grid-flow-dense</td>
              <td data-header="style">grid-auto-flow: dense;
              </td>
            </tr>
            <tr>
              <td data-header="class">grid-flow-row-dense</td>
              <td data-header="style">grid-auto-flow: row dense;</td>
            </tr>
            <tr>
              <td data-header="class">grid-flow-col-dense
              </td>
              <td data-header="style">grid-auto-flow: column dense;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const gridAutoFlowCode1 = `<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 w-full">
  <div class="col-span-2">Item 1</div>
  <div class="col-span-2">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>`;

const gridAutoFlowCode2 = `<div class="grid grid-flow-col md:grid-flow-row grid-cols-3 grid-rows-3 gap-2 w-full">
  <div>Item 1</div>
  <div class="col-span-2">Item 2</div>
  <div>Item 3</div>
  <div class="col-span-2">Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

</script>