<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">justify-items</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/justify-items" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Start" 
      description="'justify-items-start'는 그리드 항목의 인라인 축의 시작점을 기준으로 정렬합니다." 
      :code="justifyItemsCode1"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-start gap-2 w-full">
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
      title="End" 
      description="'justify-items-end'는 그리드 항목의 인라인 축의 끝부분에 정렬합니다. 'justify-items-end-safe'는 컨테이너 넓이가 작아지면 item이 컨테이너의 끝 부분이 아닌 시작 부분을 맞춥니다.'"
      :code="justifyItemsCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid justify-items-end grid-cols-3 gap-2 w-full">
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
      title="Center"
      description="'justify-items-center'는 컨테이너의 중앙 부분에 아이템을 정렬합니다. 'justify-items-center-safe'는 컨테이너 넓이가 작아지면 item이 컨테이너의 중앙 부분이 아닌 시작 부분을 맞춥니다.'"
      :code="justifyItemsCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-center gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Stretch"
      description="'justify-items-stretch'는 그리드 항목의 인라인 축을 따라 늘어납니다."
      :code="justifyItemsCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형" 
      description="중단점을 기준으로 레이아웃이 변경됩니다."
      :code="justifyItemsCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-start md:justify-items-stretch gap-2 w-full">
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
              <td data-header="class">justify-items-start</td>
              <td data-header="style">justify-items: start;</td>
            </tr>
            <tr>
              <td data-header="class">justify-items-end</td>
              <td data-header="style">justify-items: end;</td>
            </tr>
            <tr>
              <td data-header="class">justify-items-end-safe</td>
              <td data-header="style">justify-items: safe end;</td>
            </tr>
            <tr>
              <td data-header="class">justify-items-center</td>
              <td data-header="style">justify-items: center;</td>
            </tr>
            <tr>
              <td data-header="class">justify-items-center-safe</td>
              <td data-header="style">justify-items: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">justify-items-stretch</td>
              <td data-header="style">justify-items: stretch;</td>
            </tr>
            <tr>
              <td data-header="class">justify-items-normal</td>
              <td data-header="style">justify-items: normal;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const justifyItemsCode1 = `<div class="grid grid-cols-3 justify-items-start gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const justifyItemsCode2 = `<div class="grid justify-items-end grid-cols-3 gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const justifyItemsCode3 = `<div class="grid grid-cols-3 justify-items-center gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyItemsCode4 = `<div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyItemsCode5 = `<div class="grid grid-cols-3 justify-items-start md:justify-items-stretch gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

</script>