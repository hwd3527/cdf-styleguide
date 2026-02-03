<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">grid-columns</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="열 스패닝" 
      description="'col-span-&amp;lt;number&amp;gt;'를 사용하여 아이템을 n개의 열에 걸쳐 배치합니다."
      :code="gridColCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border col-span-2">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
          <div class="box-border col-span-2">Item 7</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="시작선과 종료선" 
      description="'col-start-&amp;lt;number&amp;gt;', 'col-end-&amp;lt;number&amp;gt;'를 사용하여 n번째 격자선에서 시작하거나
        끝나도록 할 수 있습니다."
      :code="gridColCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-6 gap-2 w-full">
          <div class="box-border col-span-4 col-start-2">Item 1</div>
          <div class="box-border col-start-1 col-end-3">Item 2</div>
          <div class="box-border col-span-2 col-end-7">Item 3</div>
          <div class="box-border col-start-1 col-end-7">Item 4</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 아이템의 그리드 스패닝을 설정합니다." 
      :code="gridColCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-6 gap-2 w-full">
          <div class="box-border col-span-6 md:col-span-2">Item 1</div>
          <div class="box-border col-span-6 md:col-span-2">Item 2</div>
          <div class="box-border col-span-6 md:col-span-2">Item 3</div>
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
              <td data-header="class">col-span-&lt;number&gt;</td>
              <td data-header="style">grid-column: span &lt;number&gt; / span &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-span-full</td>
              <td data-header="style">grid-column: 1 / -1;</td>
            </tr>
            <tr>
              <td data-header="class">col-span-(&lt;custom-property&gt;)</td>
              <td data-header="style">grid-column: span var(&lt;custom-property&gt;) / span
                var(&lt;custom-property&gt;);
              </td>
            </tr>
            <tr>
              <td data-header="class">col-span-[&lt;value&gt;]</td>
              <td data-header="style">grid-column: span &lt;value&gt; / span &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-start: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-col-start-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-start: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">col-start-auto
              </td>
              <td data-header="style">grid-column-start: auto;</td>
            </tr>
            <tr>
              <td data-header="class">col-start-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-column-start: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">col-start-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-column-start: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-end: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-col-end-&lt;number&gt;
              </td>
              <td data-header="style">grid-column-end: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">col-end-auto
              </td>
              <td data-header="style">grid-column-end: auto;</td>
            </tr>
            <tr>
              <td data-header="class">col-end-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-column-end: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">col-end-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-column-end: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">col-auto
              </td>
              <td data-header="style">grid-column: auto;</td>
            </tr>
            <tr>
              <td data-header="class">col-&lt;number&gt;
              </td>
              <td data-header="style">grid-column: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">-col-&lt;number&gt;
              </td>
              <td data-header="style">grid-column: calc(&lt;number&gt; * -1);</td>
            </tr>
            <tr>
              <td data-header="class">col-(&lt;custom-property&gt;)
              </td>
              <td data-header="style">grid-column: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">col-[&lt;value&gt;]
              </td>
              <td data-header="style">grid-column: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const gridColCode1 = `<div class="grid grid-cols-3 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div class="col-span-2">Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div class="col-span-2">Item 7</div>
</div>`;

const gridColCode2 = `<div class="grid grid-cols-6 gap-2 w-full">
  <div class="col-span-4 col-start-2">Item 1</div>
  <div class="col-start-1 col-end-3">Item 2</div>
  <div class="col-span-2 col-end-7">Item 3</div>
  <div class="col-start-1 col-end-7">Item 4</div>
</div>`;

const gridColCode3 = `<div class="grid grid-cols-6 gap-2 w-full">
  <div class="col-span-6 md:col-span-2">Item 1</div>
  <div class="col-span-6 md:col-span-2">Item 2</div>
  <div class="col-span-6 md:col-span-2">Item 3</div>
</div>`;


</script>