<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Paging</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Type01" 
      description="paging type01 입니다." 
      :code="pagingCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-paginate">
          <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
            <i class="material-symbols-outlined">first_page</i>
          </a>
          <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
            <i class="material-symbols-outlined">chevron_left</i>
          </a>
          <div class="c-paginate__page">
            <a href="#" class="is-active" title="1페이지'">1</a>
            <a href="#" title="2페이지'">2</a>
            <a href="#" title="3페이지'">3</a>
            <a href="#" title="4페이지'">4</a>
            <a href="#" title="5페이지'">5</a>
            <a href="#" title="6페이지'">6</a>
            <a href="#" title="7페이지'">7</a>
            <a href="#" title="8페이지'">8</a>
            <a href="#" title="9페이지'">9</a>
            <a href="#" title="10페이지'">10</a>
          </div>
          <a href="#" class="c-paginate__next" title="다음페이지">
            <i class="material-symbols-outlined">chevron_right</i>
          </a>
          <a href="#" class="c-paginate__last" title="마지막페이지">
            <i class="material-symbols-outlined">last_page</i>
          </a>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Type02" 
      description="paging type02 입니다." 
      :code="pagingCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-paginate c-paginate--type02">
          <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
            <i class="material-symbols-outlined">first_page</i>
          </a>
          <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
            <i class="material-symbols-outlined">arrow_back</i>
          </a>
          <div class="c-paginate__page">
            <a href="#" class="is-active" title="1페이지'">1</a>
            <a href="#" title="2페이지'">2</a>
            <a href="#" title="3페이지'">3</a>
            <a href="#" title="4페이지'">4</a>
            <a href="#" title="5페이지'">5</a>
            <a href="#" title="6페이지'">6</a>
            <a href="#" title="7페이지'">7</a>
            <a href="#" title="8페이지'">8</a>
            <a href="#" title="9페이지'">9</a>
            <a href="#" title="10페이지'">10</a>
          </div>
          <a href="#" class="c-paginate__next" title="다음페이지">
            <i class="material-symbols-outlined">arrow_forward</i>
          </a>
          <a href="#" class="c-paginate__last" title="마지막페이지">
            <i class="material-symbols-outlined">last_page</i>
          </a>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Mobile" 
      description="paging mobile 스타일 입니다." 
      :code="pagingCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-paginate c-paginate--mobile">
          <a href="#" class="c-paginate__first" title="처음 페이지">
            <i class="material-symbols-outlined">first_page</i>
          </a>
          <a href="#" class="c-paginate__prev" title="이전 페이지">
            <i class="material-symbols-outlined">chevron_left</i>
          </a>
          <div class="c-paginate__page">
            <span class="c-paginate__current">1</span>
            /
            <span class="c-paginate__total">10</span>
          </div>
          <a href="#" class="c-paginate__next" title="다음페이지">
            <i class="material-symbols-outlined">chevron_right</i>
          </a>
          <a href="#" class="c-paginate__last" title="마지막페이지">
            <i class="material-symbols-outlined">last_page</i>
          </a>
        </div>
      </div>
    </ComponentPreview>    
  </div>
</template>

<script setup>
import ComponentPreview from '../components/ComponentPreview.vue';


const pagingCode1 = `<div class="c-paginate">
  <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
    <i class="material-symbols-outlined">first_page</i>
  </a>
  <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
    <i class="material-symbols-outlined">chevron_left</i>
  </a>
  <div class="c-paginate__page">
    <a href="#" class="is-active" title="1페이지'">1</a>
    <a href="#" title="2페이지'">2</a>
    <a href="#" title="3페이지'">3</a>
    <a href="#" title="4페이지'">4</a>
    <a href="#" title="5페이지'">5</a>
    <a href="#" title="6페이지'">6</a>
    <a href="#" title="7페이지'">7</a>
    <a href="#" title="8페이지'">8</a>
    <a href="#" title="9페이지'">9</a>
    <a href="#" title="10페이지'">10</a>
  </div>
  <a href="#" class="c-paginate__next" title="다음페이지">
    <i class="material-symbols-outlined">chevron_right</i>
  </a>
  <a href="#" class="c-paginate__last" title="마지막페이지">
    <i class="material-symbols-outlined">last_page</i>
  </a>
</div>`;

const pagingCode2 = `<div class="c-paginate c-paginate--type02">
  <a href="#" class="c-paginate__first is-disabled" title="처음 페이지">
    <i class="material-symbols-outlined">first_page</i>
  </a>
  <a href="#" class="c-paginate__prev is-disabled" title="이전 페이지">
    <i class="material-symbols-outlined">arrow_back</i>
  </a>
  <div class="c-paginate__page">
    <a href="#" class="is-active" title="1페이지'">1</a>
    <a href="#" title="2페이지'">2</a>
    <a href="#" title="3페이지'">3</a>
    <a href="#" title="4페이지'">4</a>
    <a href="#" title="5페이지'">5</a>
    <a href="#" title="6페이지'">6</a>
    <a href="#" title="7페이지'">7</a>
    <a href="#" title="8페이지'">8</a>
    <a href="#" title="9페이지'">9</a>
    <a href="#" title="10페이지'">10</a>
  </div>
  <a href="#" class="c-paginate__next" title="다음페이지">
    <i class="material-symbols-outlined">arrow_forward</i>
  </a>
  <a href="#" class="c-paginate__last" title="마지막페이지">
    <i class="material-symbols-outlined">last_page</i>
  </a>
</div>`;

const pagingCode3 = `<div class="c-paginate c-paginate--mobile">
  <a href="#" class="c-paginate__first" title="처음 페이지">
    <i class="material-symbols-outlined">first_page</i>
  </a>
  <a href="#" class="c-paginate__prev" title="이전 페이지">
    <i class="material-symbols-outlined">chevron_left</i>
  </a>
  <div class="c-paginate__page">
    <span class="c-paginate__current">1</span>
    /
    <span class="c-paginate__total">10</span>
  </div>
  <a href="#" class="c-paginate__next" title="다음페이지">
    <i class="material-symbols-outlined">chevron_right</i>
  </a>
  <a href="#" class="c-paginate__last" title="마지막페이지">
    <i class="material-symbols-outlined">last_page</i>
  </a>
</div>`;






</script>