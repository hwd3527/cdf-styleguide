<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">place-self</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/place-self" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Auto" 
      description="'place-self-auto'는 컨테이너 속성 값에 따라 항목을 정렬하는데 사용합니다."
      :code="placeSelfCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border place-self-auto !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Start" 
      description="'place-self-start'는 두 축 모두에서 항목을 시작에 배치하는 데 사용합니다."
      :code="placeSelfCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border place-self-start !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Center" 
      description="'place-self-center'는 두 축 모두에서 항목을 중앙에 배치하는 데 사용합니다."
      :code="placeSelfCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border place-self-center !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="End" 
      description="'place-self-end'는 항목을 양쪽 축의 끝에 정렬합니다."
      :code="placeSelfCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border place-self-end !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Stretch" 
      description="'place-self-stretch'는 항목을 두 축으로 늘릴 수 있습니다." 
      :code="placeSelfCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border place-self-stretch !bg-cyan-300">Item 2</div>
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
      :code="placeSelfCode6"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 gap-2 h-56 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border place-self-start md:place-self-end !bg-cyan-300">Item 2</div>
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
              <td data-header="class">place-self-auto</td>
              <td data-header="style">place-self: auto;</td>
            </tr>
            <tr>
              <td data-header="class">place-self-start</td>
              <td data-header="style">place-self: start;</td>
            </tr>
            <tr>
              <td data-header="class">place-self-end</td>
              <td data-header="style">place-self: end;</td>
            </tr>
            <tr>
              <td data-header="class">place-self-end-safe</td>
              <td data-header="style">place-self: safe end;</td>
            </tr>
            <tr>
              <td data-header="class">place-self-center</td>
              <td data-header="style">place-self: center;</td>
            </tr>
            <tr>
              <td data-header="class">place-self-center-safe</td>
              <td data-header="style">place-self: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">place-self-stretch</td>
              <td data-header="style">place-self: stretch;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const placeSelfCode1 = `<div class="grid grid-cols-3 gap-2 h-56 w-full">
  <div>Item 1</div>
  <div class="place-self-auto !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeSelfCode2 = `<div class="grid grid-cols-3 gap-2 h-56 w-full">
  <div>Item 1</div>
  <div class="place-self-start !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeSelfCode3 = `<div class="grid grid-cols-3 gap-2 h-56 w-full">
  <div>Item 1</div>
  <div class="place-self-center !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeSelfCode4 = `<div class="grid grid-cols-3 gap-2 h-56 w-full">
  <div>Item 1</div>
  <div class="place-self-end !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const placeSelfCode5 = `<div class="grid grid-cols-3 gap-2 h-56 w-full">
  <div>Item 1</div>
  <div class="place-self-stretch !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;  

const placeSelfCode6 = `<div class="grid grid-cols-3 gap-2 h-56 w-full">
  <div>Item 1</div>
  <div class="place-self-start md:place-self-end !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

</script>