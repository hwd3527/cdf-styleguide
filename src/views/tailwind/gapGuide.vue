<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">gap</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/order" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="'gap-&amp;lt;number&amp;gt;'를 사용하여 flex 및 grid 아이템 사이의 간격을 설정합니다."
      :code="gapCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-2 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview
       title="행과 열 간격을 독립적으로 설정" 
       description="'gap-x-&amp;lt;number&amp;gt;' 'gap-y-&amp;lt;number&amp;gt;'를 사용하여 flex 및 grid 아이템 사이의 간격을 독립적으로 설정합니다."
      :code="gapCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-x-8 gap-y-4 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인"
      description="중단점으로 원하는 화면 크기에서 아이템의 간격을 설정합니다."
      :code="gapCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid gap-4 md:gap-6 grid-cols-2 w-full">
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
              <td data-header="class">gap-&lt;number&gt;</td>
              <td data-header="style">gap: calc(var(--spacing) * &lt;value&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">gap-(&lt;custom-property&gt;)</td>
              <td data-header="style">gap: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">gap-[&lt;value&gt;]</td>
              <td data-header="style">gap: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">gap-x-&lt;number&gt;</td>
              <td data-header="style">column-gap: calc(var(--spacing) * &lt;value&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">gap-x-(&lt;custom-property&gt;)</td>
              <td data-header="style">column-gap: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">gap-x-[&lt;value&gt;]</td>
              <td data-header="style">column-gap: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">gap-y-&lt;number&gt;</td>
              <td data-header="style">row-gap: calc(var(--spacing) * &lt;value&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">gap-y-(&lt;custom-property&gt;)</td>
              <td data-header="style">row-gap: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">gap-y-[&lt;value&gt;]</td>
              <td data-header="style">row-gap: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const gapCode1 = `<div class="grid grid-cols-2 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`

const gapCode2 = `<div class="grid grid-cols-3 gap-x-8 gap-y-4 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const gapCode3 = `<div class="grid gap-4 md:gap-6 grid-cols-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

</script>