<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">align-content</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/align-content" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Start" 
      description="`content-start` 속성을 사용하여 컨테이너의 행을 교차축의 시작 부분에 맞춰 배치합니다."
      :code="alignContentCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-start gap-2 h-56 w-full">
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
      description="`content-center`를 사용하여 컨테이너의 행을 교차축 중앙에 배치합니다."
      :code="alignContentCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid content-center grid-cols-3 gap-2 h-56 w-full">
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
      description="'content-end'는 컨테이너에 가로축을 기준으로 끝 부분에 정렬합니다."
      :code="alignContentCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-end gap-2 h-56 w-full">
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
      title="Space between"
      description="'content-between'는 컨테이너 내 첫 행과 마지막 행 사이에 공간을 균등하게 배치합니다." 
      :code="alignContentCode4"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-between gap-2 h-56 w-full">
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
      title="space around" 
      description="'content-around'는 컨테이너 내 각 행 주위에 동일한 간격으로 행을 배치합니다."
      :code="alignContentCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-around gap-2 h-56 w-full">
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
      title="space evenly" 
      description="'content-evenly'는 컨테이너 내 각 행 주위에 동일한 간격으로 행을 배치하지만 행과 행 사이에도 동일한 간격을 둡니다."
      :code="alignContentCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-evenly gap-2 h-56 w-full">
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
      description="'content-stretch'는 컨테이너 내 각 행 주위에 동일한 간격으로 공간을 채웁니다."
      :code="alignContentCode7"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-stretch gap-2 h-56 w-full">
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
      title="Normal" 
      description="'content-normal'는 기본 위치에 배치합니다."
      :code="alignContentCode8" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-normal gap-2 h-56 w-full">
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
      :code="alignContentCode9" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 content-start md:content-around gap-2 h-56 w-full">
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
              <td data-header="class">content-normal</td>
              <td data-header="style">align-content: normal;</td>
            </tr>
            <tr>
              <td data-header="class">content-center</td>
              <td data-header="style">align-content: center;</td>
            </tr>
            <tr>
              <td data-header="class">content-start</td>
              <td data-header="style">align-content: flex-start;</td>
            </tr>
            <tr>
              <td data-header="class">content-end</td>
              <td data-header="style">align-content: flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">content-between</td>
              <td data-header="style">align-content: space-between;</td>
            </tr>
            <tr>
              <td data-header="class">content-around</td>
              <td data-header="style">align-content: space-around;</td>
            </tr>
            <tr>
              <td data-header="class">content-evenly</td>
              <td data-header="style">align-content: space-evenly;</td>
            </tr>
            <tr>
              <td data-header="class">content-baseline</td>
              <td data-header="style">align-content: baseline;</td>
            </tr>
            <tr>
              <td data-header="class">content-stretch</td>
              <td data-header="style">align-content: stretch;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const alignContentCode1 = `<div class="grid grid-cols-3 content-start gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode2 = `<div class="grid content-center grid-cols-3 gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode3 = `<div class="grid grid-cols-3 content-end gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode4 = `<div class="grid grid-cols-3 content-between gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode5 = `<div class="grid grid-cols-3 content-around gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode6 = `<div class="grid grid-cols-3 content-evenly gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode7 = `<div class="grid grid-cols-3 content-stretch gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode8 = `<div class="grid grid-cols-3 content-normal gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const alignContentCode9 = `<div class="grid grid-cols-3 content-start md:content-around gap-2 h-56 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

</script>