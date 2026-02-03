<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">margin</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/margin" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">  
    <ComponentPreview 
      title="기본" 
      description="'m-&amp;lt;number&amp;gt;' 유틸리티를 사용하여 요소의 바깥 여백을 설정할 수 있습니다."
      :code="marginCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="!bg-gray-100">
          <span class="m-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="한쪽 면에 마진 추가하기" 
      description="'mt-&amp;lt;number&amp;gt;', 'mr-&amp;lt;number&amp;gt;', 'mb-&amp;lt;number&amp;gt;', 'ml-&amp;lt;number&amp;gt;' 
      유틸리티를 사용하여 요소의 특정 한쪽에 바깥 여백을 설정할 수 있습니다."
      :code="marginCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="!bg-gray-100">
          <span class="mt-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
        <div class="!bg-gray-100">
          <span class="mr-4 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
        <div class="!bg-gray-100">
          <span class="mb-4 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
        <div class="!bg-gray-100">
          <span class="ml-2 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="가로 마진 추가" 
      description="'mx-&lt;number&gt;'는 요소의 가로 마진을 제어합니다." 
      :code="marginCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="!bg-gray-100">
          <span class="mx-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="세로 마진 추가" 
      description="'my-&lt;number&gt;'는 요소의 세로 마진을 제어합니다." 
      :code="marginCode4"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="!bg-gray-100">
          <span class="my-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="음수값 마진" 
      description="'-m&lt;number&gt;'는 요소의 음수 마진을 제어합니다." 
      :code="marginCode5"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="p-4 !bg-gray-100">
          <span class="-mb-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="자식들 사이에 마진 주기" 
      description="'space-x-&lt;number&gt;', 'space-y-&lt;number&gt;'는 요소의 자식들 사이에 마진을 제어합니다." 
      :code="marginCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex space-x-4 !bg-gray-100">
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
          <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형"
      description="중단점을 기준으로 마진값이 변경됩니다." 
      :code="marginCode7"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="!bg-gray-100">
          <span class="mt-4 md:mt-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
        </div>
      </div>
    </ComponentPreview>
        

    <div class="conts-area">
      <h3 class="c-h3">반응형</h3>
      <p class="c-information-text mt-5">중단점을 기준으로 마진값이 변경됩니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex !gap-8">
              <div class="!bg-gray-100">
                <span class="mt-4 md:mt-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value07" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value07')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    

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
              <td data-header="class">m-&lt;number&gt;</td>
              <td data-header="style">margin: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-m-&lt;number&gt;</td>
              <td data-header="style">margin: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">m-auto</td>
              <td data-header="style">margin: auto;</td>
            </tr>
            <tr>
              <td data-header="class">m-px</td>
              <td data-header="style">margin: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-m-px</td>
              <td data-header="style">margin: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">m-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">m-[&lt;value&gt;]</td>
              <td data-header="style">margin: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">mx-&lt;number&gt;</td>
              <td data-header="style">margin-inline: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-mx-&lt;number&gt;</td>
              <td data-header="style">margin-inline: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mx-auto</td>
              <td data-header="style">margin-inline: auto;</td>
            </tr>
            <tr>
              <td data-header="class">mx-px</td>
              <td data-header="style">margin-inline: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-mx-px</td>
              <td data-header="style">margin-inline: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">mx-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-inline: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mx-[&lt;value&gt;]</td>
              <td data-header="style">margin-inline: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">my-&lt;number&gt;</td>
              <td data-header="style">margin-block: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-my-&lt;number&gt;</td>
              <td data-header="style">margin-block: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">my-auto</td>
              <td data-header="style">margin-block: auto;</td>
            </tr>
            <tr>
              <td data-header="class">my-px</td>
              <td data-header="style">margin-block: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-my-px</td>
              <td data-header="style">margin-block: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">my-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-block: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">my-[&lt;value&gt;]</td>
              <td data-header="style">margin-block: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">ms-&lt;number&gt;</td>
              <td data-header="style">margin-inline-start: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-ms-&lt;number&gt;</td>
              <td data-header="style">margin-inline-start: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ms-auto</td>
              <td data-header="style">margin-inline-start: auto;</td>
            </tr>
            <tr>
              <td data-header="class">ms-px</td>
              <td data-header="style">margin-inline-start: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-ms-px</td>
              <td data-header="style">margin-inline-start: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">ms-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-inline-start: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ms-[&lt;value&gt;]</td>
              <td data-header="style">margin-inline-start: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">me-&lt;number&gt;</td>
              <td data-header="style">margin-inline-end: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-me-&lt;number&gt;</td>
              <td data-header="style">margin-inline-end: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">me-auto</td>
              <td data-header="style">margin-inline-end: auto;</td>
            </tr>
            <tr>
              <td data-header="class">me-px</td>
              <td data-header="style">margin-inline-end: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-me-px</td>
              <td data-header="style">margin-inline-end: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">me-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-inline-end: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">me-[&lt;value&gt;]</td>
              <td data-header="style">margin-inline-end: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">mt-&lt;number&gt;</td>
              <td data-header="style">margin-top: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-mt-&lt;number&gt;</td>
              <td data-header="style">margin-top: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mt-auto</td>
              <td data-header="style">margin-top: auto;</td>
            </tr>
            <tr>
              <td data-header="class">mt-px</td>
              <td data-header="style">margin-top: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-mt-px</td>
              <td data-header="style">margin-top: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">mt-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-top: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mt-[&lt;value&gt;]</td>
              <td data-header="style">margin-top: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">mr-&lt;number&gt;</td>
              <td data-header="style">margin-right: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-mr-&lt;number&gt;</td>
              <td data-header="style">margin-right: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mr-auto</td>
              <td data-header="style">margin-right: auto;</td>
            </tr>
            <tr>
              <td data-header="class">mr-px</td>
              <td data-header="style">margin-right: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-mr-px</td>
              <td data-header="style">margin-right: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">mr-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-right: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mr-[&lt;value&gt;]</td>
              <td data-header="style">margin-right: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">mb-&lt;number&gt;</td>
              <td data-header="style">margin-bottom: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-mb-&lt;number&gt;</td>
              <td data-header="style">margin-bottom: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mb-auto</td>
              <td data-header="style">margin-bottom: auto;</td>
            </tr>
            <tr>
              <td data-header="class">mb-px</td>
              <td data-header="style">margin-bottom: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-mb-px</td>
              <td data-header="style">margin-bottom: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">mb-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-bottom: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">mb-[&lt;value&gt;]</td>
              <td data-header="style">margin-bottom: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">ml-&lt;number&gt;</td>
              <td data-header="style">margin-left: calc(var(--spacing) * &lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">-ml-&lt;number&gt;</td>
              <td data-header="style">margin-left: calc(var(--spacing) * -&lt;number&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ml-auto</td>
              <td data-header="style">margin-left: auto;</td>
            </tr>
            <tr>
              <td data-header="class">ml-px</td>
              <td data-header="style">margin-left: 1px;</td>
            </tr>
            <tr>
              <td data-header="class">-ml-px</td>
              <td data-header="style">margin-left: -1px;</td>
            </tr>
            <tr>
              <td data-header="class">ml-(&lt;custom-property&gt;)</td>
              <td data-header="style">margin-left: var(&lt;custom-property&gt;);</td>
            </tr>
            <tr>
              <td data-header="class">ml-[&lt;value&gt;]</td>
              <td data-header="style">margin-left: &lt;value&gt;;</td>
            </tr>
            <tr>
              <td data-header="class">space-x-&lt;number&gt;</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-x-reverse: 0;
                margin-inline-start: calc(calc(var(--spacing) * &lt;number&gt;) * var(--tw-space-x-reverse));
                  margin-inline-end: calc(calc(var(--spacing) * &lt;number&gt;) * calc(1 - var(--tw-space-x-reverse)));
                    };</td>
            </tr>
            <tr>
              <td data-header="class">-space-x-&lt;number&gt;</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-x-reverse: 0;
                margin-inline-start: calc(calc(var(--spacing) * -&lt;number&gt;) * var(--tw-space-x-reverse));
                margin-inline-end: calc(calc(var(--spacing) * -&lt;number&gt;) * calc(1 - var(--tw-space-x-reverse)));
                }</td>
            </tr>
            <tr>
              <td data-header="class">space-x-px</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-x-reverse: 0;
                margin-inline-start: calc(1px * var(--tw-space-x-reverse));
                margin-inline-end: calc(1px * calc(1 - var(--tw-space-x-reverse)));
                };</td>
            </tr>
            <tr>
              <td data-header="class">-space-x-px</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-x-reverse: 0;
                margin-inline-start: calc(-1px * var(--tw-space-x-reverse));
                margin-inline-end: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
                };</td>
            </tr>
            <tr>
              <td data-header="class">space-x-(&lt;custom-property&gt;)</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-x-reverse: 0;
                margin-inline-start: calc(var(&lt;custom-property&gt;) * var(--tw-space-x-reverse));
                  margin-inline-end: calc(var(&lt;custom-property&gt;) * calc(1 - var(--tw-space-x-reverse)));
                    };</td>
            </tr>
            <tr>
              <td data-header="class">space-x-[&lt;value&gt;]</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-x-reverse: 0;
                margin-inline-start: calc(&lt;value&gt; * var(--tw-space-x-reverse));
                  margin-inline-end: calc(&lt;value&gt; * calc(1 - var(--tw-space-x-reverse)));
                    };</td>
            </tr>
            <tr>
              <td data-header="class">space-y-[&lt;value&gt;]</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-y-reverse: 0;
                margin-block-start: calc(calc(var(--spacing) * &lt;number&gt;) * var(--tw-space-y-reverse));
                  margin-block-end: calc(calc(var(--spacing) * &lt;number&gt;) * calc(1 - var(--tw-space-y-reverse)));
                    };</td>
            </tr>
            <tr>
              <td data-header="class">-space-y-[&lt;value&gt;]</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-y-reverse: 0;
                margin-block-start: calc(calc(var(--spacing) * -&lt;number&gt;) * var(--tw-space-y-reverse));
                margin-block-end: calc(calc(var(--spacing) * -&lt;number&gt;) * calc(1 - var(--tw-space-y-reverse)));
                };</td>
            </tr>
            <tr>
              <td data-header="class">space-y-px</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-y-reverse: 0;
                margin-block-start: calc(1px * var(--tw-space-y-reverse));
                margin-block-end: calc(1px * calc(1 - var(--tw-space-y-reverse)));
                };</td>
            </tr>
            <tr>
              <td data-header="class">-space-y-px</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-y-reverse: 0;
                margin-block-start: calc(-1px * var(--tw-space-y-reverse));
                margin-block-end: calc(-1px * calc(1 - var(--tw-space-y-reverse)));
                };</td>
            </tr>
            <tr>
              <td data-header="class">space-y-(&lt;custom-property&gt;)</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-y-reverse: 0;
                margin-block-start: calc(var(&lt;custom-property&gt;) * var(--tw-space-y-reverse));
                  margin-block-end: calc(var(&lt;custom-property&gt;) * calc(1 - var(--tw-space-y-reverse)));
                    };</td>
            </tr>
            <tr>
              <td data-header="class">space-y-[&lt;value&gt;]</td>
              <td data-header="style">& > :not(:last-child) {
                --tw-space-y-reverse: 0;
                margin-block-start: calc(&lt;value&gt; * var(--tw-space-y-reverse));
                  margin-block-end: calc(&lt;value&gt; * calc(1 - var(--tw-space-y-reverse)));
                    };</td>
            </tr>
            <tr>
              <td data-header="class">space-x-reverse</td>
              <td data-header="style">& > :not(:last-child)) {
                --tw-space-x-reverse: 1;
                }</td>
            </tr>
            <tr>
              <td data-header="class">space-y-reverse</td>
              <td data-header="style">& > :not(:last-child)) {
                --tw-space-y-reverse: 1;
                }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const marginCode1 = `<div class="!bg-gray-100">
  <span class="m-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const marginCode2 = `<div class="!bg-gray-100">
  <span class="mt-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>
<div class="!bg-gray-100">
  <span class="mr-4 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>
<div class="!bg-gray-100">
  <span class="mb-4 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>
<div class="!bg-gray-100">
  <span class="ml-2 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const marginCode3 = `<div class="!bg-gray-100">
  <span class="mx-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const marginCode4 = `<div class="!bg-gray-100">
  <span class="my-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const marginCode5 = `<div class="p-4 !bg-gray-100">
  <span class="-mb-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const marginCode6 = `<div class="flex space-x-4 !bg-gray-100">
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
  <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

const marginCode7 = `<div class="!bg-gray-100">
  <span class="mt-4 md:mt-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
</div>`;

</script>