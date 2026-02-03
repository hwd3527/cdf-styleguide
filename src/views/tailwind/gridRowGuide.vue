<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">grid-row</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/grid-row" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="행 스패닝" 
      description="'row-span-&amp;lt;number&amp;gt;'를 사용하여 아이템을 n개의 행에 걸쳐 배치합니다."
      :code="gridRowCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-col grid-rows-3 gap-2 w-full">
          <div class="box-border row-span-3">Item 1</div>
          <div class="box-border col-span-2">Item 2</div>
          <div class="box-border row-span-2 col-span-2">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="시작선과 종료선" 
      description="'row-start-&amp;lt;number&amp;gt;', 'row-end-&amp;lt;number&amp;gt;'를 사용하여 n번째 격자선에서 시작하거나
        끝나도록 할 수 있습니다."
      :code="gridRowCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-col grid-rows-3 gap-2 w-full">
          <div class="box-border row-span-2 row-start-2">Item 1</div>
          <div class="box-border row-span-2 row-end-3">Item 2</div>
          <div class="box-border row-start-1 row-end-4">Item 3</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 아이템의 그리드 스패닝을 설정합니다."
      :code="gridRowCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-flow-col grid-rows-3 gap-2 w-full">
          <div class="box-border row-span-3 md:row-span-2">Item 1</div>
          <div class="box-border row-span-3 md:row-span-2 md:row-start-2">Item 2</div>
          <div class="box-border row-span-3 md:row-span-2">Item 3</div>
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
              <td data-header="class">row-span-&lt;number&gt;</td>
              <td data-header="style">grid-row: span &lt;number&gt; / span &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-span-full</td>
              <td data-header="style">grid-row: 1 / -1;</td>
            </tr>
            <tr>
              <td data-header="class">row-span-(&lt;custom-property&gt;)</td>
              <td data-header="style">grid-row: span var(&lt;custom-property&gt;) / span
                var(&lt;custom-property&gt;);
              </td>
            </tr>
            <tr>
              <td data-header="class">row-span-[&lt;value&gt;]</td>
              <td data-header="style">grid-row: span &lt;value&gt; / span &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-start: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-row-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-start: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">row-start-auto
              </td>
              <td data-header="style">grid-row-start: auto;</td>
            </tr>
            <tr>
              <td data-header="class">row-start-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-row-start: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">row-start-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-row-start: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-end: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-row-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-row-end: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">row-end-auto
              </td>
              <td data-header="style">grid-row-end: auto;</td>
            </tr>
            <tr>
              <td data-header="class">row-end-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-row-end: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">row-end-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-row-end: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">row-auto
              </td>
              <td data-header="style">grid-row: auto;</td>
            </tr>
            <tr>
              <td data-header="class">row-&lt;number&gt;
              </td>
              <td data-header="style">grid-row: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-row-&lt;number&gt;
              </td>
              <td data-header="style">grid-row: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">row-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-row: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">row-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-row: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const gridRowCode1 = `<div class="grid grid-flow-col grid-rows-3 gap-2 w-full">
  <div class="row-span-3">Item 1</div>
  <div class="col-span-2">Item 2</div>
  <div class="row-span-2 col-span-2">Item 3</div>
</div>`;

const gridRowCode2 = `<div class="grid grid-flow-col grid-rows-3 gap-2 w-full">
  <div class="row-span-2 row-start-2">Item 1</div>
  <div class="row-span-2 row-end-3">Item 2</div>
  <div class="row-start-1 row-end-4">Item 3</div>
</div>`;

const gridRowCode3 = `<div class="grid grid-flow-col grid-rows-3 gap-2 w-full">
  <div class="row-span-3 md:row-span-2">Item 1</div>
  <div class="row-span-3 md:row-span-2 md:row-start-2">Item 2</div>
  <div class="row-span-3 md:row-span-2">Item 3</div>
</div>`;

</script>