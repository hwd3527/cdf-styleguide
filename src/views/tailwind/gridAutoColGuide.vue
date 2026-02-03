<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">grid-auto-columns</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/grid-auto-columns" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview title="auto-cols-max"
      description="'auto-cols-max'를 사용하여 암묵적으로 생성되는 그리드 열의 최대 크기를 제어합니다."
      :code="gridAutoColCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid auto-cols-max grid-flow-col gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="auto-cols-min" 
      description="'auto-cols-min'를 사용하여 암묵적으로 생성되는 그리드 열의 최소 크기를 제어합니다."
      :code="gridAutoColCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid auto-cols-min grid-flow-col gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="auto-cols-auto" 
      description="'auto-cols-auto'를 사용하여 암묵적으로 생성되는 그리드 열의 자동 크기를 제어합니다."
      :code="gridAutoColCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid auto-cols-auto grid-flow-col gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="auto-cols-fr" 
      description="'auto-cols-fr'를 사용하여 암묵적으로 생성되는 그리드 열의 자동 크기를 제어합니다."
      :code="gridAutoColCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid auto-cols-fr grid-flow-col gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 아이템의 그리드 자동 흐름을 설정합니다."
      :code="gridAutoColCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid auto-cols-auto md:auto-cols-max grid-flow-col gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
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
              <td data-header="class">auto-cols-auto</td>
              <td data-header="style">grid-auto-columns: auto;</td>
            </tr>
            <tr>
              <td data-header="class">auto-cols-min</td>
              <td data-header="style">grid-auto-columns: min-content;</td>
            </tr>
            <tr>
              <td data-header="class">auto-cols-max</td>
              <td data-header="style">grid-auto-columns: max-content;</td>
            </tr>
            <tr>
              <td data-header="class">auto-cols-fr</td>
              <td data-header="style">grid-auto-columns: minmax(0, 1fr);</td>
            </tr>
            <tr>
              <td data-header="class">auto-cols-(&lt;custom-property&gt;)</td>
              <td data-header="style">grid-auto-columns: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">auto-cols-[&lt;value&gt;]</td>
              <td data-header="style">grid-auto-columns: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const gridAutoColCode1 = `<div class="grid auto-cols-max grid-flow-col gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const gridAutoColCode2 = `<div class="grid auto-cols-min grid-flow-col gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const gridAutoColCode3 = `<div class="grid auto-cols-auto grid-flow-col gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const gridAutoColCode4 = `<div class="grid auto-cols-fr grid-flow-col gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const gridAutoColCode5 = `<div class="grid auto-cols-auto md:auto-cols-max grid-flow-col gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

</script>