<template>
  <div class="page-title-wrap gap-4 justify-between">
    <h2 class="c-h1">align-items</h2>
    <a class="c-btn size-xs outline" href="https://tailwindcss.com/docs/align-items" target="_blank">
      <span class="txt">tailwind에서 더보기</span>
    </a>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Stretch" 
      description="'items-stretch'는 컨테이너에 가로축을 기준으로 늘어나서 채웁니다."
      :code="alignItemsCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-stretch gap-2 h-56 w-full">
          <div class="box-border py-4 flex-1">Item 1</div>
          <div class="box-border py-12 flex-1">Item 2</div>
          <div class="box-border py-8 flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Start" 
      description="'items-start'는 컨테이너에 가로축을 기준으로 시작 부분에 정렬합니다." 
      :code="alignItemsCode2"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-start gap-2 h-56 w-full">
          <div class="box-border !py-4 flex-1">Item 1</div>
          <div class="box-border !py-12 flex-1">Item 2</div>
          <div class="box-border !py-8 flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Center" 
      description="'items-center'는 컨테이너에 가로축을 기준으로 중앙 부분에 정렬합니다." 
      :code="alignItemsCode3"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-center gap-2 h-56 w-full">
          <div class="box-border !py-4 flex-1">Item 1</div>
          <div class="box-border !py-12 flex-1">Item 2</div>
          <div class="box-border !py-8 flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="End" 
      description="'items-end'는 컨테이너 내 아이템들을 가로축의 끝 부분에 정렬합니다." 
      :code="alignItemsCode4"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-end gap-2 h-56 w-full">
          <div class="box-border !py-4 flex-1">Item 1</div>
          <div class="box-border !py-12 flex-1">Item 2</div>
          <div class="box-border !py-8 flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="baseline" 
      description="'items-baseline'는 컨테이너 가로축을 따라 아이템들의 기준선을 정렬합니다." 
      :code="alignItemsCode5"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-baseline gap-2 h-56 w-full">
          <div class="box-border !pt-2 !pb-6 flex-1">Item 1</div>
          <div class="box-border !pt-8 !pb-12 flex-1">Item 2</div>
          <div class="box-border !pt-12 !pb-4 flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="last baseline" 
      description="'items-baseline-last'는 컨테이너의 가로축을 따라 항목을 정렬하여 모든 항목의 마지막 기준선을 맞춥니다."
      :code="alignItemsCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="grid grid-cols-[1fr_auto] items-baseline-last gap-8 h-56 w-full">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, modi quos cum quas ullam doloremque
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
          <span>스페이스리크루트닷컴</span>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="반응형"
      description="중단점을 기준으로 레이아웃이 변경됩니다." 
      :code="alignItemsCode7"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="flex items-stretch md:items-center gap-2 h-56 w-full">
          <div class="box-border flex-1">Item 1</div>
          <div class="box-border flex-1">Item 2</div>
          <div class="box-border flex-1">Item 3</div>
        </div>
      </div>
    </ComponentPreview>

    

    <div class="conts-area">
      <h3 class="c-h3">사용할 수 있는 클래스</h3>
      <div class="c-table-wrap c-scrollbar horizontal">
        <table class="c-table-type03 ~!min-w-[1000px]">
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
              <td data-header="class">items-start</td>
              <td data-header="style">align-items: flex-start;</td>
            </tr>
            <tr>
              <td data-header="class">items-end</td>
              <td data-header="style">align-items: flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">items-end-safe</td>
              <td data-header="style">align-items: safe flex-end;</td>
            </tr>
            <tr>
              <td data-header="class">items-center</td>
              <td data-header="style">align-items: center;</td>
            </tr>
            <tr>
              <td data-header="class">items-center-safe</td>
              <td data-header="style">align-items: safe center;</td>
            </tr>
            <tr>
              <td data-header="class">items-baseline</td>
              <td data-header="style">align-items: baseline;</td>
            </tr>
            <tr>
              <td data-header="class">items-baseline-last</td>
              <td data-header="style">align-items: last baseline;</td>
            </tr>
            <tr>
              <td data-header="class">items-stretch</td>
              <td data-header="style">align-items: stretch;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentPreview from '../../components/ComponentPreview.vue';

const alignItemsCode1 = `<div class="flex items-stretch gap-2 h-56 w-full">
  <div class="py-4 flex-1">Item 1</div>
  <div class="py-12 flex-1">Item 2</div>
  <div class="py-8 flex-1">Item 3</div>
</div>`;

const alignItemsCode2 = `<div class="flex items-start gap-2 h-56 w-full">
  <div class="!py-4 flex-1">Item 1</div>
  <div class="!py-12 flex-1">Item 2</div>
  <div class="!py-8 flex-1">Item 3</div>
</div>`;

const alignItemsCode3 = `<div class="flex items-center gap-2 h-56 w-full">
  <div class="!py-4 flex-1">Item 1</div>
  <div class="!py-12 flex-1">Item 2</div>
  <div class="!py-8 flex-1">Item 3</div>
</div>`;

const alignItemsCode4 = `<div class="flex items-end gap-2 h-56 w-full">
  <div class="!py-4 flex-1">Item 1</div>
  <div class="!py-12 flex-1">Item 2</div>
  <div class="!py-8 flex-1">Item 3</div>
</div>`;

const alignItemsCode5 = `<div class="flex items-baseline gap-2 h-56 w-full">
  <div class="!pt-2 !pb-6 flex-1">Item 1</div>
  <div class="!pt-8 !pb-12 flex-1">Item 2</div>
  <div class="!pt-12 !pb-4 flex-1">Item 3</div>
</div>`;

const alignItemsCode6 = `<div class="grid grid-cols-[1fr_auto] items-baseline-last gap-8 h-56 w-full">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, modi quos cum quas ullam doloremque
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
  <span>스페이스리크루트닷컴</span>
</div>`;

const alignItemsCode7 = `<div class="flex items-stretch md:items-center gap-2 h-56 w-full">
  <div class="box-border flex-1">Item 1</div>
  <div class="box-border flex-1">Item 2</div>
  <div class="box-border flex-1">Item 3</div>
</div>`;




</script>