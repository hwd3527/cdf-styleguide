<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">flex</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/flex" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="'flex'안의 자식 엘리먼트가 가지고 있는 크기를 무시하고 부모 컨테이너의 크기에 맞게 배치됩니다." 
      :code="flexCode1"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-14 flex-none">Item 1</div>
          <div class="box-border w-64 flex-1">Item 2</div>
          <div class="box-border w-32 flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Initial" 
      description="'flex-initial' 플렉스 아이템의 크기가 줄어들지만 초기 크기보다 늘어나지는 않습니다."
      :code="flexCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-14 flex-none">Item 1</div>
          <div class="box-border w-64 flex-initial">Item 2</div>
          <div class="box-border w-32 flex-initial">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Auto"
      description="'flex-auto' 플렉스 아이템의 초기 크기에 비례하여 커지거나 작아집니다."
      :code="flexCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-14 flex-none">Item 1</div>
          <div class="box-border w-64 flex-auto">Item 2</div>
          <div class="box-border w-32 flex-auto">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="none" 
      description="'flex-none' 플렉스 아이템의 크기가 고정됩니다." 
      :code="flexCode4"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-14 flex-none">Item 1</div>
          <div class="box-border w-32 flex-none">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점으로 원하는 화면 크기에서 플렉스 아이템의 크기가 변경됩니다." 
      :code="flexCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 w-full">
          <div class="box-border w-14 flex-none md:flex-1">Item 1</div>
          <div class="box-border w-32 flex-none md:flex-1">Item 2</div>
          <div class="box-border w-64 flex-none md:flex-1">Item 3</div>
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
              <td data-header="class">flex-&lt;number&gt;
              </td>
              <td data-header="style">flex-&lt;number&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">flex-&lt;fraction&gt;
              </td>
              <td data-header="style">flex: calc(&lt;fraction&gt; * 100%);</td>
            </tr>
            <tr>
              <td data-header="class">flex-auto</td>
              <td data-header="style">flex: auto;</td>
            </tr>
            <tr>
              <td data-header="class">flex-initial</td>
              <td data-header="style">flex: 0 auto;</td>
            </tr>
            <tr>
              <td data-header="class">flex-none</td>
              <td data-header="style">flex: none;</td>
            </tr>
            <tr>
              <td data-header="class">flex-(&lt;custom-property&gt;)</td>
              <td data-header="style">flex: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">flex-[&lt;value&gt;]</td>
              <td data-header="style">flex: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const flexCode1 = `<div class="flex gap-2 w-full">
  <div class="w-14 flex-none">Item 1</div>
  <div class="w-64 flex-1">Item 2</div>
  <div class="w-32 flex-1">Item 3</div>
</div>`;

const flexCode2 = `<div class="flex gap-2 w-full">
  <div class="w-14 flex-none">Item 1</div>
  <div class="w-64 flex-initial">Item 2</div>
  <div class="w-32 flex-initial">Item 3</div>
</div>`;

const flexCode3 = `<div class="flex gap-2 w-full">
  <div class="w-14 flex-none">Item 1</div>
  <div class="w-64 flex-auto">Item 2</div>
  <div class="w-32 flex-auto">Item 3</div>
</div>`;

const flexCode4 = `<div class="flex gap-2 w-full">
  <div class="w-14 flex-none">Item 1</div>
  <div class="w-32 flex-none">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

const flexCode5 = `<div class="flex gap-2 w-full">
  <div class="w-14 flex-none md:flex-1">Item 1</div>
  <div class="w-32 flex-none md:flex-1">Item 2</div>
  <div class="w-64 flex-none md:flex-1">Item 3</div>
</div>`;

</script>