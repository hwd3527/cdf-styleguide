<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">justify-self</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/justify-self" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Auto"
      description="'justify-self-auto'는 부모 'justify-items' 속성 값에 따라 정렬합니다."
      :code="justifySelfCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border justify-self-auto !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Start" 
      description="'justify-self-start'는 그리드 항목의 인라인 축의 시작 부분에 정렬합니다."
      :code="justifySelfCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid justify-items-stretch grid-cols-3 gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border justify-self-start !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>
      
    <ComponentPreview
       title="Center" 
       description="'justify-self-center'는 그리드 항목의 인라인 축의 중앙 부분에 정렬합니다. 'justify-self-center-safe'는 화면이 작아지면 item이 컨테이너의 중앙 부분이 아닌 시작 부분을 맞춥니다.'"
      :code="justifySelfCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border justify-self-center !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="End"
      description="'justify-self-end'는 그리드 항목의 인라인 축의 끝 부분에 정렬합니다. 'justify-self-end-safe'는 화면이 작아지면 item이 컨테이너의 끝 부분이 아닌 시작 부분을 맞춥니다."
      :code="justifySelfCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border justify-self-end !bg-cyan-300">Item 2</div>
          <div class="box-border">Item 3</div>
          <div class="box-border">Item 4</div>
          <div class="box-border">Item 5</div>
          <div class="box-border">Item 6</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Stretch"
      description="'justify-self-stretch'는 그리드 항목의 인라인 축의 영역을 채웁니다."
      :code="justifySelfCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-start gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border justify-self-stretch !bg-cyan-300">Item 2</div>
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
      :code="justifySelfCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border justify-self-start md:justify-self-end !bg-cyan-300">Item 2</div>
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
              <td data-header="class">justify-self-auto</td>
              <td data-header="style">justify-self: auto;</td>
            </tr>
            <tr>
              <td data-header="class">justify-self-start</td>
              <td data-header="style">justify-self: start;</td>
            </tr>
            <tr>
              <td data-header="class">justify-self-center</td>
              <td data-header="style">justify-self: center;</td>
            </tr>
            <tr>
              <td data-header="class">justify-self-center-safe</td>
              <td data-header="style">justify-self: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">justify-self-end</td>
              <td data-header="style">justify-self: end;</td>
            </tr>
            <tr>
              <td data-header="class">justify-self-end-safe</td>
              <td data-header="style">justify-self: safe end;</td>
            </tr>
            <tr>
              <td data-header="class">justify-self-stretch</td>
              <td data-header="style">justify-self: stretch;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const justifySelfCode1 = `<div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
  <div>Item 1</div>
  <div class="justify-self-auto !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const justifySelfCode2 = `<div class="grid justify-items-stretch grid-cols-3 gap-2 w-full">
  <div>Item 1</div>
  <div class="justify-self-start !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const justifySelfCode3 = `<div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
  <div>Item 1</div>
  <div class="justify-self-center !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const justifySelfCode4 = `<div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
  <div>Item 1</div>
  <div class="justify-self-end !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const justifySelfCode5 = `<div class="grid grid-cols-3 justify-items-start gap-2 w-full">
  <div>Item 1</div>
  <div class="justify-self-stretch !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

const justifySelfCode6 = `<div class="grid grid-cols-3 justify-items-stretch gap-2 w-full">
  <div>Item 1</div>
  <div class="justify-self-start md:justify-self-end !bg-cyan-300">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`;

</script>