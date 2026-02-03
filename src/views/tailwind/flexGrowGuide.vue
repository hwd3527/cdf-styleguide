<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">flex-grow</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/flex" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="아이템 성장 허용" 
      description="'grow' 플렉스 아이템이 사용 가능한 공간을 채우기 위해 아이템이 커지도록 허용합니다."
      :code="flexGrowCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 flex-none">Item 1</div>
          <div class="box-border w-16 grow">Item 2</div>
          <div class="box-border w-16 flex-none">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="성장 요인에 따른 성장" 
      description="성장 요인에 따라 플렉스 아이템이 비례적으로 커지도록 하는 유틸리티를 사용하면 각 아이템이 상대적으로 사용 가능한 공간을 채웁니다.
        'grow-&lt;number&gt;', 'grow-3'"
      :code="flexGrowCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 grow-3">Item 1</div>
          <div class="box-border w-16 grow-7">Item 2</div>
          <div class="box-border w-16 grow-4">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="아이템 성장 방지" 
      description="'grow-0' 플렉스 아이템이 커지는 것을 방지합니다." 
      :code="flexGrowCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 grow">Item 1</div>
          <div class="box-border w-16 grow-0">Item 2</div>
          <div class="box-border w-16 grow">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 아이템의 성장을 설정합니다." 
      :code="flexGrowCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-16 grow md:grow-0">Item 1</div>
          <div class="box-border w-16 grow md:grow-0">Item 2</div>
          <div class="box-border w-16 grow md:grow-0">Item 3</div>
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
              <td data-header="class">grow
              </td>
              <td data-header="style">flex-grow: 1;</td>
            </tr>
            <tr>
              <td data-header="class">grow-&lt;number&gt;
              </td>
              <td data-header="style">flex-grow: &lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">grow-[&lt;value&gt;]</td>
              <td data-header="style">flex-grow: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">grow-(&lt;custom-property&gt;)</td>
              <td data-header="style">flex-grow: var(&lt;custom-property&gt;);</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const flexGrowCode1 = `<div class="flex gap-2 w-full">
  <div class="w-16 flex-none">Item 1</div>
  <div class="w-16 grow">Item 2</div>
  <div class="w-16 flex-none">Item 3</div>
</div>`;

const flexGrowCode2 = `<div class="flex gap-2 w-full">
  <div class="w-16 grow-3">Item 1</div>
  <div class="w-16 grow-7">Item 2</div>
  <div class="w-16 grow-4">Item 3</div>
</div>`;

const flexGrowCode3 = `<div class="flex gap-2 w-full">
  <div class="w-16 grow">Item 1</div>
  <div class="w-16 grow-0">Item 2</div>
  <div class="w-16 grow">Item 3</div>
</div>`;

const flexGrowCode4 = `<div class="flex gap-2 w-full">
  <div class="w-16 grow md:grow-0">Item 1</div>
  <div class="w-16 grow md:grow-0">Item 2</div>
  <div class="w-16 grow md:grow-0">Item 3</div>
</div>`;

</script>