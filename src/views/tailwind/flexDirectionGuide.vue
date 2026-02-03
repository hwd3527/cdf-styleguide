<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">flex-direction</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/flex-direction" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Row" 
      description="'flex-row' 플렉스 항목을 수평으로 배치하는데 사용합니다."
      :code="flexDirectionCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-row gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Row reversed" 
      description="'flex-row-reverse' 플렉스 아이템을 수평으로 반전하여 배치하는데 사용합니다." 
      :code="flexDirectionCode2"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-row-reverse gap-2 w-full">
          <div class="box-border">Item 1</div>
          <div class="box-border">Item 2</div>
          <div class="box-border">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Column" 
      description="'flex-col' 플렉스 항목을 수직으로 배치하는데 사용합니다."
      :code="flexDirectionCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-col gap-2 w-full">
          <div class="box-border md:w-sm">Item 1</div>
          <div class="box-border md:w-sm">Item 2</div>
          <div class="box-border md:w-sm">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Column reversed" 
      description="플렉스 아이템을 수직 반대 방향으로 배치하는 데 사용합니다." 
      :code="flexDirectionCode4"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-col-reverse gap-2 w-full">
          <div class="box-border md:w-sm">Item 1</div>
          <div class="box-border md:w-sm">Item 2</div>
          <div class="box-border md:w-sm">Item 3</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 플렉스의 방향을 설정합니다." 
      :code="flexDirectionCode5"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-col md:flex-row gap-2 w-full">
          <div class="box-border">item1</div>
          <div class="box-border">item2</div>
          <div class="box-border">item3</div>
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
              <td data-header="class">flex-row</td>
              <td data-header="style">flex-direction: row;</td>
            </tr>
            <tr>
              <td data-header="class">flex-row-reverse</td>
              <td data-header="style">flex-direction: row-reverse;</td>
            </tr>
            <tr>
              <td data-header="class">flex-col</td>
              <td data-header="style">flex-direction: column;</td>
            </tr>
            <tr>
              <td data-header="class">flex-col-reverse</td>
              <td data-header="style">flex-direction: column-reverse;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

import ComponentPreview from '../../components/ComponentPreview.vue';

const flexDirectionCode1 = `<div class="flex flex-row gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const flexDirectionCode2 = `<div class="flex flex-row-reverse gap-2 w-full">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;

const flexDirectionCode3 = `<div class="flex flex-col gap-2 w-full">
  <div class="md:w-sm">Item 1</div>
  <div class="md:w-sm">Item 2</div>
  <div class="md:w-sm">Item 3</div>
</div>`;

const flexDirectionCode4 = `<div class="flex flex-col-reverse gap-2 w-full">
  <div class="md:w-sm">Item 1</div>
  <div class="md:w-sm">Item 2</div>
  <div class="md:w-sm">Item 3</div>
</div>`;

const flexDirectionCode5 = `<div class="flex flex-col md:flex-row gap-2 w-full">
  <div>item1</div>
  <div>item2</div>
  <div>item3</div>
</div>`;

</script>