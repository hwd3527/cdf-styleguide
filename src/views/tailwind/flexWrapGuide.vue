<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">flex-wrap</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/flex-wrap" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="wrap이 없을 때" 
      description="'flex-nowrap'은 정해진 플렉스 사이즈를 넘쳐도 플렉스 아이템이 한 줄에 모두 배치되도록 합니다."
      :code="flexWrapCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-nowrap gap-2 w-full  overflow-x-auto">
          <div class="box-border w-2/5 flex-none">Item 1</div>
          <div class="box-border w-2/5 flex-none">Item 2</div>
          <div class="box-border w-2/5 flex-none">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Wrap이 있을 때" 
      description="'flex-wrap' 플렉스 아이템을 래핑해서 플렉스의 사이즈를 넘칠 때 다음 줄로 넘기도록 합니다."
      :code="flexWrapCode2" 
      bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-wrap gap-2 w-full">
          <div class="box-border w-2/5 flex-none">Item 1</div>
          <div class="box-border w-2/5 flex-none">Item 2</div>
          <div class="box-border w-2/5 flex-none">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Wrap이 반대 반향일 때" 
      description="'flex-wrap-reverse' 플렉스 아이템을 반대 방향으로 래핑하는 데 사용합니다."
      :code="flexWrapCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-wrap-reverse gap-2 w-full">
          <div class="box-border w-2/5 flex-none">Item 1</div>
          <div class="box-border w-2/5 flex-none">Item 2</div>
          <div class="box-border w-2/5 flex-none">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 플렉스의 방향을 설정합니다."
      :code="flexWrapCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-wrap md:flex-wrap-reverse gap-2 w-full">
          <div class="box-border w-2/5 flex-none">Item 1</div>
          <div class="box-border w-2/5 flex-none">Item 2</div>
          <div class="box-border w-2/5 flex-none">Item 3</div>
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
              <td data-header="class">flex-nowrap</td>
              <td data-header="style">flex-wrap: nowrap;</td>
            </tr>
            <tr>
              <td data-header="class">flex-wrap</td>
              <td data-header="style">flex-wrap: wrap;</td>
            </tr>
            <tr>
              <td data-header="class">flex-wrap-reverse</td>
              <td data-header="style">flex-wrap: wrap-reverse;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const flexWrapCode1 = `<div class="flex flex-nowrap gap-2 w-full overflow-x-auto">
  <div class="w-2/5 flex-none">Item 1</div>
  <div class="w-2/5 flex-none">Item 2</div>
  <div class="w-2/5 flex-none">Item 3</div>
</div>`;

const flexWrapCode2 = `<div class="flex flex-wrap gap-2 w-full">
  <div class="w-2/5 flex-none">Item 1</div>
  <div class="w-2/5 flex-none">Item 2</div>
  <div class="w-2/5 flex-none">Item 3</div>
</div>`;

const flexWrapCode3 = `<div class="flex flex-wrap-reverse gap-2 w-full">
  <div class="w-2/5 flex-none">Item 1</div>
  <div class="w-2/5 flex-none">Item 2</div>
  <div class="w-2/5 flex-none">Item 3</div>
</div>`;

const flexWrapCode4 = `<div class="flex flex-wrap md:flex-wrap-reverse gap-2 w-full">
  <div class="w-2/5 flex-none">Item 1</div>
  <div class="w-2/5 flex-none">Item 2</div>
  <div class="w-2/5 flex-none">Item 3</div>
</div>`;

</script>