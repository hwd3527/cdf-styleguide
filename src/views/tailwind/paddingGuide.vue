<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">padding</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/padding" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">

    <ComponentPreview 
      title="기본" 
      description="'p-&amp;lt;number&amp;gt;' 유틸리티를 사용하여 요소의 안쪽 여백을 설정할 수 있습니다."
      :code="paddingCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="p-8 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="한쪽에 패딩 추가하기" 
      description="'pt-&amp;lt;number&amp;gt;', 'pr-&amp;lt;number&amp;gt;', 'pb-&amp;lt;number&amp;gt;', 'pl-&amp;lt;number&amp;gt;' 유틸리티를 사용하여 요소의 특정 한쪽에 안쪽 여백을 설정할 수 있습니다."
      :code="paddingCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !gap-8">
        <div class="pt-6 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
        <div class="pr-4 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
        <div class="pb-4 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
        <div class="pl-2 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="가로 패딩 추가"
      description="'px-&amp;lt;number&amp;gt;'는 요소의 가로 패딩을 제어합니다."
      :code="paddingCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !gap-8">
        <div class="px-6 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="세로 패딩 추가" 
      description="'py-&lt;number&gt;'는 요소의 세로 패딩을 제어합니다." 
      :code="paddingCode4"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !gap-8">
        <div class="py-6 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="반응형" 
      description="중단점을 기준으로 패딩값이 변경됩니다." 
      :code="paddingCode5"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !gap-8">
        <div class="py-6 md:py-10 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
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
              <td data-header="class">p-&lt;number&gt;</td>
              <td data-header="style">padding: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">p-px</td>
              <td data-header="style">padding: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">p-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">p-[&lt;value&gt;]</td>
              <td data-header="style">padding: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">px-&lt;number&gt;</td>
              <td data-header="style">padding-inline: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">px-px</td>
              <td data-header="style">padding-inline: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">px-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-inline: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">px-[&lt;value&gt;]</td>
              <td data-header="style">padding-inline: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">py-&lt;number&gt;</td>
              <td data-header="style">padding-block: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">py-px</td>
              <td data-header="style">padding-block: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">py-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-block: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">py-[&lt;value&gt;]</td>
              <td data-header="style">padding-block: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">ps-&lt;number&gt;</td>
              <td data-header="style">padding-inline-start: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ps-px</td>
              <td data-header="style">padding-inline-start: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">ps-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-inline-start: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ps-[&lt;value&gt;]</td>
              <td data-header="style">padding-inline-start: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pe-&lt;number&gt;</td>
              <td data-header="style">padding-inline-end: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pe-px</td>
              <td data-header="style">padding-inline-end: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pe-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-inline-end: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pe-[&lt;value&gt;]</td>
              <td data-header="style">padding-inline-end: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pt-&lt;number&gt;</td>
              <td data-header="style">padding-top: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pt-px</td>
              <td data-header="style">padding-top: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pt-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-top: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pt-[&lt;value&gt;]</td>
              <td data-header="style">padding-top: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pr-&lt;number&gt;</td>
              <td data-header="style">padding-right: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pr-px</td>
              <td data-header="style">padding-right: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pr-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-right: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pr-[&lt;value&gt;]</td>
              <td data-header="style">padding-right: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pb-&lt;number&gt;</td>
              <td data-header="style">padding-bottom: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pb-px</td>
              <td data-header="style">padding-bottom: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pb-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-bottom: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pb-[&lt;value&gt;]</td>
              <td data-header="style">padding-bottom: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">pl-&lt;number&gt;</td>
              <td data-header="style">padding-left: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pl-px</td>
              <td data-header="style">padding-left: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">pl-(&lt;custom-property&gt;)</td>
              <td data-header="style">padding-left: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">pl-[&lt;value&gt;]</td>
              <td data-header="style">padding-left: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const paddingCode1 = `<div class="p-8 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const paddingCode2 = `<div class="pt-6 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>
<div class="pr-4 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>
<div class="pb-4 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>
<div class="pl-2 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const paddingCode3 = `<div class="px-6 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const paddingCode4 = `<div class="py-6 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const paddingCode5 = `<div class="py-6 md:py-10 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;
</script>