<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">flex-basis</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/flex-basis" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="간격 규칙 사용" 
      description="basis-&amp;lt;number&amp;gt;를 사용하여 flex 항목의 초기 크기를 설정합니다." 
      :code="flexBasisCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-row gap-2 w-full">
          <div class="basis-64 box-border">basis-64</div>
          <div class="basis-64 box-border">basis-64</div>
          <div class="basis-128 box-border">basis-128</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="컨테이너 크기 사용" 
      description="컨테이너 크기에 따라 플렉스 항목의 초기 크기를 설정합니다. 'basis-xs'" 
      :code="flexBasisCode2"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-row gap-2 w-full">
          <div class="basis-3xs box-border">basis-3xs</div>
          <div class="basis-2xs box-border">basis-2xs</div>
          <div class="basis-xs box-border">basis-xs</div>
          <div class="basis-sm box-border">basis-sm</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="백분율 사용" 
      description="백분율을 사용하여 플렉스 항목의 초기 크기를 설정합니다. 'basis-&amp;lt;fraction&amp;gt;', 'basis-1/2', 'basis-2/3'"
      :code="flexBasisCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-row gap-2 w-full">
          <div class="basis-1/3 box-border">basis-1/3</div>
          <div class="basis-2/3 box-border">basis-2/3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="사용자 정의 값 사용"
      description="사용자가 정의한 값을 사용하여 플렉스 항목의 초기 크기를 설정합니다. 'basis-[value]'"
      :code="flexBasisCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-row gap-2 w-full">
          <div class="basis-[10vw] box-border">basis-[10vw]</div>
          <div class="basis-[20vw] box-border">basis-[20vw]</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="반응형 디자인" 
      description="중단점 접두사를 사용하여 각각의 화면 크기에서 플렉스 항목의 초기 크기를 설정합니다. 'md:', 'lg:' 등"
      :code="flexBasisCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex flex-row gap-2 w-full">
          <div class="basis-1/4 md:basis-1/3 box-border">basis-1/4 md:basis-1/3</div>
          <div class="basis-1/4 md:basis-1/3 box-border">basis-1/4 md:basis-1/3</div>
          <div class="basis-1/2 md:basis-1/3 box-border">basis-1/2 md:basis-1/3</div>
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
              <td data-header="class">basis-&lt;number&gt;</td>
              <td data-header="style">flex-basis: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">basis-&lt;fraction&gt;</td>
              <td data-header="style">flex-basis: calc(&lt;fraction&gt; * 100%);</td>
            </tr>
            <tr>
              <td data-header="class">basis-full</td>
              <td data-header="style">flex-basis: 100%;</td>
            </tr>
            <tr>
              <td data-header="class">basis-auto</td>
              <td data-header="style">flex-basis: auto;</td>
            </tr>
            <tr>
              <td data-header="class">basis-3xs</td>
              <td data-header="style">flex-basis: var(--container-3xs); /* 16rem (256px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-2xs</td>
              <td data-header="style">flex-basis: var(--container-2xs); /* 18rem (288px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-xs</td>
              <td data-header="style">flex-basis: var(--container-xs); /* 20rem (320px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-sm</td>
              <td data-header="style">flex-basis: var(--container-sm); /* 24rem (384px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-md</td>
              <td data-header="style">flex-basis: var(--container-md); /* 28rem (448px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-lg</td>
              <td data-header="style">flex-basis: var(--container-lg); /* 32rem (512px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-xl</td>
              <td data-header="style">flex-basis: var(--container-xl); /* 36rem (576px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-2xl</td>
              <td data-header="style">flex-basis: var(--container-2xl); /* 42rem (672px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-3xl</td>
              <td data-header="style">flex-basis: var(--container-3xl); /* 48rem (768px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-4xl</td>
              <td data-header="style">flex-basis: var(--container-4xl); /* 56rem (896px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-5xl</td>
              <td data-header="style">flex-basis: var(--container-5xl); /* 64rem (1024px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-6xl</td>
              <td data-header="style">flex-basis: var(--container-6xl); /* 72rem (1152px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-7xl</td>
              <td data-header="style">flex-basis: var(--container-7xl); /* 80rem (1280px) */</td>
            </tr>
            <tr>
              <td data-header="class">basis-(&lt;custom-property&gt;)</td>
              <td data-header="style">flex-basis: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">basis-[&lt;value&gt;]</td>
              <td data-header="style">flex-basis: &lt;value&gt;;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const flexBasisCode1 = `<div class="flex flex-row gap-2 w-full">
  <div class="basis-64">basis-64</div>
  <div class="basis-64">basis-64</div>
  <div class="basis-128">basis-128</div>
</div>`;

const flexBasisCode2 = `<div class="flex flex-row gap-2 w-full">
  <div class="basis-3xs">basis-3xs</div>
  <div class="basis-2xs">basis-2xs</div>
  <div class="basis-xs">basis-xs</div>
  <div class="basis-sm">basis-sm</div>
</div>`;

const flexBasisCode3 = `<div class="flex flex-row gap-2 w-full">
  <div class="basis-1/3">basis-1/3</div>
  <div class="basis-2/3">basis-2/3</div>
</div>`;

const flexBasisCode4 = `<div class="flex flex-row gap-2 w-full">
  <div class="basis-[10vw]">basis-[10vw]</div>
  <div class="basis-[20vw]">basis-[20vw]</div>
</div>`;

const flexBasisCode5 = `<div class="flex flex-row gap-2 w-full">
  <div class="basis-1/4 md:basis-1/3">basis-1/4 md:basis-1/3</div>
  <div class="basis-1/4 md:basis-1/3">basis-1/4 md:basis-1/3</div>
  <div class="basis-1/2 md:basis-1/3">basis-1/2 md:basis-1/3</div>
</div>`;


</script>