<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">align-self</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/align-self" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Auto" 
      description="'self-auto'는 컨테이너의 속성에 따라 아이템의 정렬을 자동으로 설정합니다."
      :code="alignSelfCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-stretch gap-2 h-56 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border self-auto flex-1 !bg-cyan-300">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Start" 
      description="'self-start'는 컨테이너의 값과 관계없이 아이템을 시작 부분에 정렬합니다." 
      :code="alignSelfCode2"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-stretch gap-2 h-56 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border self-start flex-1 !bg-cyan-300">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Center" 
      description="'self-center'는 컨테이너의 값과 관계없이 아이템을 중앙 부분에 정렬합니다." 
      :code="alignSelfCode3"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-stretch gap-2 h-56 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border self-center flex-1 !bg-cyan-300">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="End" 
      description="'self-end'는 컨테이너의 값과 관계없이 아이템을 끝 부분에 정렬합니다."
      :code="alignSelfCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-stretch gap-2 h-56 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border self-end flex-1 !bg-cyan-300">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="stretch" 
      description="'self-stretch'는 컨테이너의 값과 관계없이 아이템을 늘려서 컨테이너를 채웁니다." 
      :code="alignSelfCode5"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-stretch gap-2 h-56 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border flex-1 self-stretch !bg-cyan-300">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="baseline" 
      description="'self-baseline'는 항목의 기준선이 플렉스 컨테이너의 교차축 기준선과 일치하도록 정렬합니다."
      :code="alignSelfCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 h-56 w-full">
          <div class="box-border self-baseline flex-1 !pt-2 !pb-6">Item 1</div>
          <div class="box-border self-baseline flex-1 !pt-8 !pb-12">Item 2</div>
          <div class="box-border self-baseline flex-1 !pt-12 !pb-4">Item 3</div>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="last baseline" 
      description="'self-baseline-last'는 컨테이너의 가로축을 따라 항목을 정렬하여 모든 항목의 마지막 기준선을 맞춥니다."
      :code="alignSelfCode7" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[1fr_auto] gap-8 h-56 w-full">
          <p class="self-baseline-last">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, modi quos cum
            quas ullam doloremque
            commodi beatae veritatis dolore aperiam eaque similique quam provident minus hic et quidem veniam esse?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum dolor cupiditate tenetur maxime,
            est repellendus? Quia earum culpa quas, tempore optio mollitia adipisci dolor, quaerat tenetur repellat
            dolores architecto.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda et quia modi eligendi fugit minus alias
            totam numquam deleniti?
            Harum distinctio voluptatum nulla obcaecati provident nobis minima totam magnam illum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Officia, laboriosam,
            possimus magnam reiciendis cumque dicta aperiam ab harum modi nesciunt dolores repellat! Quisquam, quidem.
            Officia, laboriosam,
          </p>
          <span class="self-baseline-last">스페이스리크루트닷컴</span>
        </div>
      </div>
    </ComponentPreview>
    
    <ComponentPreview 
      title="반응형"
      description="중단점을 기준으로 레이아웃이 변경됩니다." 
      :code="alignSelfCode8"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex gap-2 h-56 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border self-start md:self-end flex-1 !bg-cyan-300">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
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
              <td data-header="class">self-auto</td>
              <td data-header="style">align-self: auto;</td>
            </tr>
            <tr>
              <td data-header="class">self-start</td>
              <td data-header="style">align-self: flex-start;</td>
            </tr>
            <tr>
              <td data-header="class">self-end</td>
              <td data-header="style">align-self: flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">self-end-safe</td>
              <td data-header="style">align-self: safe flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">self-center</td>
              <td data-header="style">align-self: center;</td>
            </tr>
            <tr>
              <td data-header="class">self-center-safe</td>
              <td data-header="style">align-self: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">self-stretch</td>
              <td data-header="style">align-self: stretch;</td>
            </tr>
            <tr>
              <td data-header="class">self-baseline</td>
              <td data-header="style">align-self: baseline;</td>
            </tr>
            <tr>
              <td data-header="class">self-baseline-last</td>
              <td data-header="style">align-self: last baseline;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const alignSelfCode1 = `<div class="flex items-stretch gap-2 h-56 w-full">
  <div class="flex-1">Item 1</div>
  <div class="self-auto flex-1 !bg-cyan-300">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

const alignSelfCode2 = `<div class="flex items-stretch gap-2 h-56 w-full">
  <div class="flex-1">Item 1</div>
  <div class="self-start flex-1 !bg-cyan-300">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

const alignSelfCode3 = `<div class="flex items-stretch gap-2 h-56 w-full">
  <div class="flex-1">Item 1</div>
  <div class="self-center flex-1 !bg-cyan-300">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

const alignSelfCode4 = `<div class="flex items-stretch gap-2 h-56 w-full">
  <div class="flex-1">Item 1</div>
  <div class="self-end flex-1 !bg-cyan-300">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

const alignSelfCode5 = `<div class="flex items-stretch gap-2 h-56 w-full">
  <div class="flex-1">Item 1</div>
  <div class="flex-1 self-stretch !bg-cyan-300">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

const alignSelfCode6 = `<div class="flex gap-2 h-56 w-full">
  <div class="self-baseline flex-1 !pt-2 !pb-6">Item 1</div>
  <div class="self-baseline flex-1 !pt-8 !pb-12">Item 2</div>
  <div class="self-baseline flex-1 !pt-12 !pb-4">Item 3</div>
</div>`;

const alignSelfCode7 = `<div class="grid grid-cols-[1fr_auto] gap-8 h-56 w-full">
  <p class="self-baseline-last">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, modi quos cum
    quas ullam doloremque
    commodi beatae veritatis dolore aperiam eaque similique quam provident minus hic et quidem veniam esse?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum dolor cupiditate tenetur maxime,
    est repellendus? Quia earum culpa quas, tempore optio mollitia adipisci dolor, quaerat tenetur repellat
    dolores architecto.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda et quia modi eligendi fugit minus alias
    totam numquam deleniti?
    Harum distinctio voluptatum nulla obcaecati provident nobis minima totam magnam illum.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Officia, laboriosam,
    possimus magnam reiciendis cumque dicta aperiam ab harum modi nesciunt dolores repellat! Quisquam, quidem.
    Officia, laboriosam,
  </p>
  <span class="self-baseline-last">스페이스리크루트닷컴</span>
</div>`;

const alignSelfCode8 = `<div class="flex gap-2 h-56 w-full">
  <div class="flex-1">Item 1</div>
  <div class="self-start md:self-end flex-1 !bg-cyan-300">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>`;

</script>