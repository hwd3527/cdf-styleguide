<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">justify-content</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/justify-content" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview title="Start"
      description="'justify-start'는 컨테이너의 시작 부분에 아이템을 정렬합니다."
      :code="justifyContentCode1" bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-start gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Center" 
      description="'justify-center'는 컨테이너의 중앙에 아이템을 정렬합니다. 'justify-center-safe'는 컨테이너 넓이가 작아지면 item이 컨테이너의 중앙이 아닌 시작 부분을 맞춥니다." 
      :code="justifyContentCode2"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-center gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
        <div class="flex justify-center-safe gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="justify-end"
      description="'justify-end'는 컨테이너의 끝 부분에 아이템을 정렬합니다. 'justify-end-safe'는 컨테이너 넓이가 작아지면 item이 컨테이너의 끝 부분이 아닌 시작 부분을 맞춥니다.'"
      :code="justifyContentCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-end gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
        <div class="flex justify-end-safe gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="justify-between"
      description="'justify-between'는 컨테이너의 시작 부분과 끝 부분 사이에 아이템을 정렬합니다"
      :code="justifyContentCode4" 
      bg="light"
      >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-between gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="justify-around" 
      description="'justify-around'는 컨테이너의 아이템 양쪽 공간을 동일하게 분배합니다. 아이템 양쪽 공간이 겹치지 않습니다."
      :code="justifyContentCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-around gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="justify-evenly"
      description="'justify-evenly'는 컨테이너의 아이템 양쪽 공간을 동일하게 분배합니다. 아이템 양쪽 공간이 겹칩니다." 
      :code="justifyContentCode6"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-evenly gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="justify-stretch"
      description="'justify-stretch'는 컨테이너의 아이템 중에 자동 크기롤 설정된 항목을 컨테이너의 주축에 따라 공간을 채웁니다." 
      :code="justifyContentCode7"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[6rem_auto_6rem] justify-stretch gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="justify-normal"
      description="'justify-normal'는 아무것도 설정되지 않은 상태입니다." 
      :code="justifyContentCode8"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-normal gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형" 
      description="중단점으로 정한 크기에서 설정한 형식으로 변환 됩니다."
      :code="justifyContentCode9" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex justify-start md:justify-between gap-2 w-full">
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
              <td data-header="class">justify-start</td>
              <td data-header="style">justify-content: flex-start;</td>
            </tr>
            <tr>
              <td data-header="class">justify-end</td>
              <td data-header="style">justify-content: flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">justify-end-safe</td>
              <td data-header="style">justify-content: safe flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">justify-center</td>
              <td data-header="style">justify-content: center;</td>
            </tr>
            <tr>
              <td data-header="class">justify-center-safe</td>
              <td data-header="style">justify-content: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">justify-between</td>
              <td data-header="style">justify-content: space-between;</td>
            </tr>
            <tr>
              <td data-header="class">justify-around</td>
              <td data-header="style">justify-content: space-around;</td>
            </tr>
            <tr>
              <td data-header="class">justify-evenly</td>
              <td data-header="style">justify-content: space-evenly;</td>
            </tr>
            <tr>
              <td data-header="class">justify-stretch</td>
              <td data-header="style">justify-content: stretch;</td>
            </tr>
            <tr>
              <td data-header="class">justify-baseline</td>
              <td data-header="style">justify-content: baseline;</td>
            </tr>
            <tr>
              <td data-header="class">justify-normal</td>
              <td data-header="style">justify-content: normal;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

import ComponentPreview from '../../components/ComponentPreview.vue';

const justifyContentCode1 = `<div class="flex justify-start gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyContentCode2 = `<div class="flex justify-center gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
<div class="flex justify-center-safe gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const justifyContentCode3 = `<div class="flex justify-end gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
<div class="flex justify-end-safe gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`;

const justifyContentCode4 = `<div class="flex justify-between gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyContentCode5 = `<div class="flex justify-around gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyContentCode6 = `<div class="flex justify-evenly gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyContentCode7 = `<div class="grid grid-cols-[6rem_auto_6rem] justify-stretch gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyContentCode8 = `<div class="flex justify-normal gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const justifyContentCode9 = `<div class="flex justify-start md:justify-between gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

</script>