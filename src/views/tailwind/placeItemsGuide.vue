<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">place-items</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/place-items" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Start" 
      description="'place-items-start'는 격자 항목을 두 축 모두에서 해당 격자 영역의 시작점에 배치하는 데 사용합니다."
      :code="placeItemsCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 place-items-start gap-2 h-56 w-full">
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
      description="'place-items-end'는 격자 항목을 두 축 모두에서 격자 영역의 끝에 배치하는 데 사용합니다."
      :code="placeItemsCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 place-items-end gap-2 h-56  w-full">
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
      description="'place-items-center'는 격자 항목을 두 축 모두에서 격자 영역의 중앙에 배치하는 데 사용합니다."
      :code="placeItemsCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 place-items-center gap-2 h-56  w-full">
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
      title="Stretch" 
      description="'place-items-stretch'는 격자 영역을 따라 두 축 모두에서 항목을 늘릴 수 있습니다."
      :code="placeItemsCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 place-items-stretch gap-2 h-56 w-full">
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
      title="반응형" 
      description="중단점을 기준으로 레이아웃이 변경됩니다."
      :code="placeItemsCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 place-items-start md:place-items-center gap-2 h-56 w-full">
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
              <td data-header="class">place-items-start</td>
              <td data-header="style">place-items: start;</td>
            </tr>
            <tr>
              <td data-header="class">place-items-end</td>
              <td data-header="style">place-items: end;</td>
            </tr>
            <tr>
              <td data-header="class">place-items-end-safe</td>
              <td data-header="style">place-items: safe end;</td>
            </tr>
            <tr>
              <td data-header="class">place-items-center</td>
              <td data-header="style">place-items: center;</td>
            </tr>
            <tr>
              <td data-header="class">place-items-center-safe</td>
              <td data-header="style">place-items: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">place-items-baseline</td>
              <td data-header="style">place-items: baseline;</td>
            </tr>
            <tr>
              <td data-header="class">place-items-stretch</td>
              <td data-header="style">place-items: stretch;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const placeItemsCode1 = `<div class="grid grid-cols-3 place-items-start gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeItemsCode2 = `<div class="grid grid-cols-3 place-items-end gap-2 h-56  w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeItemsCode3 = `<div class="grid grid-cols-3 place-items-center gap-2 h-56  w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeItemsCode4 = `<div class="grid grid-cols-3 place-items-stretch gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeItemsCode5 = `<div class="grid grid-cols-3 place-items-start md:place-items-center gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

</script>