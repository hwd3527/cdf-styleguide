<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">place-content</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/place-content" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Center" 
      description="'place-content-center'는 인라인 축과 블록 축 모두에서 컨텐츠를 중앙에 배치합니다."
      :code="placeContentCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[repeat(2,64px)] place-content-center gap-2 h-56  w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Start" 
      description="'place-content-start'는 인라인 축과 블록 축의 시작 부분에 항목을 배치하는 데 사용합니다."
      :code="placeContentCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[repeat(2,64px)] place-content-start gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="End" 
      description="'place-content-end'는 인라인 및 블록 축의 끝 부분에 항목을 배치하는 데 사용합니다."
      :code="placeContentCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[repeat(2,64px)] place-content-end gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="Space between" 
      description="'place-content-between'는 인라인 축과 블록 축을 따라 그리드 항목을 배치하여 각 축에서 행과 열 사이의 간격이 동일하도록 합니다."
      :code="placeContentCode4" 
      bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[repeat(2,64px)] place-content-between gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="Space around"
      description="`place-content-around` 속성을 사용하여 인라인 축과 블록 축을 따라 그리드 항목을 배치하여 각 축에서 각 행과 열 주변에 동일한 공간이 확보되도록 합니다."
      :code="placeContentCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[repeat(2,64px)] place-content-around gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="space-evenly"
      description="'place-content-evenly'는 그리드 항목을 인라인 축과 블록 축에 균등하게 배치하는데 사용합니다."
      :code="placeContentCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[repeat(2,64px)] place-content-evenly gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Stretch" 
      description="'place-content-stretch'는 그리드 항목을 인라인 축과 블록 축을 따라 그리드 영역에 맞춰 늘리는 데 사용합니다."
      :code="placeContentCode7" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-2 place-content-stretch gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="반응형"
      description="중단점을 기준으로 레이아웃이 변경됩니다." 
      :code="placeContentCode8"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[repeat(2,64px)] place-content-start md:place-content-end gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
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
              <td data-header="class">place-content-center</td>
              <td data-header="style">place-content: center;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-center-safe</td>
              <td data-header="style">place-content: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-start</td>
              <td data-header="style">place-content: start;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-end</td>
              <td data-header="style">place-content: end;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-end-safe</td>
              <td data-header="style">place-content: safe end;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-between</td>
              <td data-header="style">place-content: space-between;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-around</td>
              <td data-header="style">place-content: space-around;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-evenly</td>
              <td data-header="style">place-content: space-evenly;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-baseline</td>
              <td data-header="style">place-content: baseline;</td>
            </tr>
            <tr>
              <td data-header="class">place-content-stretch</td>
              <td data-header="style">place-content: stretch;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const placeContentCode1 = `<div class="grid grid-cols-[repeat(2,64px)] place-content-center gap-2 h-56  w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const placeContentCode2 = `<div class="grid grid-cols-[repeat(2,64px)] place-content-start gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const placeContentCode3 = `<div class="grid grid-cols-[repeat(2,64px)] place-content-end gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const placeContentCode4 = `<div class="grid grid-cols-[repeat(2,64px)] place-content-between gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const placeContentCode5 = `<div class="grid grid-cols-[repeat(2,64px)] place-content-around gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const placeContentCode6 = `<div class="grid grid-cols-[repeat(2,64px)] place-content-evenly gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const placeContentCode7 = `<div class="grid grid-cols-2 place-content-stretch gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const placeContentCode8 = `<div class="grid grid-cols-[repeat(2,64px)] place-content-start md:place-content-end gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;
</script>