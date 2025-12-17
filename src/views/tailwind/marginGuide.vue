<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="cdf-h1">margin</h2>
    <a class="cdf-btn size-xs outline" href="https://tailwindcss.com/docs/margin" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">  
    <div class="conts-area">
      <h3 class="cdf-h3">기본</h3>
      <p class="cdf-information-text mt-5">'m-&lt;number&gt;' 유틸리티를 사용하여 요소의 바깥 여백을 설정할 수 있습니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex">
              <div class="!bg-gray-100">
                <span class="m-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value01" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value01')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">한쪽 면에 마진 추가하기</h3>
      <p class="cdf-information-text mt-5">'mt-&lt;number&gt;', 'mr-&lt;number&gt;', 'mb-&lt;number&gt;', 'ml-&lt;number&gt;' 유틸리티를 사용하여 요소의 특정 한쪽에 바깥 여백을 설정할 수 있습니다.</p>
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
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value02" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value02')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">가로 마진 추가</h3>
      <p class="cdf-information-text mt-5">'mx-&lt;number&gt;'는 요소의 가로 마진을 제어합니다.</p>
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
                <span class="mx-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value03" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value03')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="conts-area">
      <h3 class="cdf-h3">세로 마진 추가</h3>
      <p class="cdf-information-text mt-5">'my-&lt;number&gt;'는 요소의 세로 마진을 제어합니다.</p>
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
                <span class="my-6 w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value04" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value04')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">음수값 마진</h3>
      <p class="cdf-information-text mt-5">'-m&lt;number&gt;'는 요소의 음수 마진을 제어합니다.</p>
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
              <div class="p-4 !bg-gray-100">
                <span class="-mb-8 w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value05" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value05')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">자식들 사이에 마진 주기</h3>
      <p class="cdf-information-text mt-5">'space-x-&lt;number&gt;', 'space-y-&lt;number&gt;'는 요소의 자식들 사이에 마진을 제어합니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal !flex">
              <div class="flex space-x-4 !bg-gray-100">
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
                <span class="w-10 h-10 !bg-cyan-300 !inline-block"></span>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value06" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value06')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">반응형</h3>
      <p class="cdf-information-text mt-5">중단점을 기준으로 마진값이 변경됩니다.</p>
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
      <h3 class="cdf-h3">사용할 수 있는 클래스</h3>
      <div class="cdf-table-wrap cdf-scrollbar horizontal">
        <table class="cdf-table-type03">
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
import { ref, onMounted } from 'vue'

import CodeMirror from "vue-codemirror6";

const value01 = ref(`<div>
  <span class="m-8"></span>
</div>`);
const value02 = ref(`<div>
  <span class="mt-6"></span>
</div>
<div>
  <span class="mr-4"></span>
</div>
<div>
  <span class="mb-4"></span>
</div>
<div>
  <span class="ml-2"></span>
</div>`);
const value03 = ref(`<div>
  <span class="mx-6"></span>
</div>`);
const value04 = ref(`<div>
  <span class="my-6"></span>
</div>`);
const value05 = ref(`<div class="p-4">
  <span class="-mb-8"></span>
</div>`);
const value06 = ref(`<div class="flex space-x-4">
  <span></span>
  <span></span>
  <span></span>
</div>`);
const value07 = ref(`<div>
  <span class="mt-4 md:mt-8"></span>
</div>`);




// copyCode를 클릭하면 코드 복사
function copyCode(value) {
  const code = eval(value);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code.value)
      .then(() => {
        alert('코드가 클립보드에 복사되었습니다.');
      })
      .catch(err => {
        console.error('코드 복사 실패:', err);
      });
  } else {
    alert('이 브라우저는 클립보드 API를 지원하지 않습니다.');
  }
}

onMounted(() => {
  tabContents()
});

function tabContents() {
  //tab menu
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    var tabList = tabs.querySelectorAll('.tab-list-item'),
      tabPanels = tabs.querySelectorAll('.tab-panel');

    tabList.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        tabList.forEach(function (item) {
          item.classList.remove('on');
          item.setAttribute('aria-selected', 'false');
          item.setAttribute('tabindex', '-1');
        });
        tabPanels.forEach(function (panel) {
          panel.classList.remove('on');
        });
        tab.classList.add('on');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
        tabPanels[index].classList.add('on');
        tabPanels[1].querySelector('.CodeMirror')?.CodeMirror?.refresh();
      });

      tab.addEventListener('keyup', function (e) {
        var keycode = e.keyCode || e.which;
        if (keycode === 39 || keycode === 40) { // Right or Down arrow
          var nextTab = tabList[(index + 1) % tabList.length];
          nextTab.focus();
          nextTab.click();
        } else if (keycode === 37 || keycode === 38) { // Left or Up arrow
          var prevTab = tabList[(index - 1 + tabList.length) % tabList.length];
          prevTab.focus();
          prevTab.click();
        }
      });
    });
  });

  // Trigger click on the first tab to initialize	
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    tabs.querySelectorAll('.tab-list-item')[0].click();
  });

  //btn-icon-wrap 안의 passview 버튼을 클릭하면 btn-icon-wrap 안의 input type="password"의 type이 text로 변경되어 비밀번호가 보이게 됩니다.
  document.querySelectorAll('.btn-icon-wrap .passview').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.btn-icon-wrap').querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
        btn.querySelector('i').textContent = 'visibility';
      } else {
        input.type = 'password';
        btn.querySelector('i').textContent = 'visibility_off';
      }
    });
  });

  //btn-icon-wrap 안의 delete 버튼을 클릭하면 btn-icon-wrap 안의 input 내용이 삭제되는 코드
  document.querySelectorAll('.btn-icon-wrap .delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.btn-icon-wrap').querySelector('input');
      input.value = '';
      input.focus();
    });
  });
}
</script>