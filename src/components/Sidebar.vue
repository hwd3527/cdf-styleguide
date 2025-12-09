<template>
  <header class="left-menu-zone" :class="{ on: isMenuOpen === true }">
    <div class="logo">
      <h1>Style Guide</h1>
      <button type="button" class="cdf-btn size-m rounded btn-menu" @click="isMenuOpen = !isMenuOpen">
        <i class="material-symbols-rounded">menu</i>
      </button>
    </div>
    <nav class="cdf-scrollbar">
      <details open="">
        <summary class="group">Flexbox & Grid</summary>
        <ul>
          <li><router-link to="/flexBasisGuide" class="">Flex Basis</router-link></li>
          <li><router-link to="/flexDirectionGuide" class="">Flex Direction</router-link></li>
          <li><router-link to="/flexWrapGuide" class="">Flex Wrap</router-link></li>
        </ul>
      </details>
      <!-- <details open="">
        <summary class="group">Layout</summary>
        <ul>
          <li><a href="/gridLayoutGuide" class="">Grid Layout</a></li>
          <li><a href="/columnsGuide" class="">Columns</a></li>
          <li><a href="/gutterGuide" class="">Gutter</a></li>
          <li><a aria-current="page" href="/displayFlexGuide">Display flex</a></li>
          <li><a href="/displayGridGuide" class="">Display Grid</a></li>
          <li><a href="/spacingGuide" class="">Spacing</a></li>
        </ul>
      </details> -->
      <details open="">
        <summary class="group">Components</summary>
        <ul>
          <li>
            <router-link to="/buttonGuide" class="">Button</router-link>
          </li>
          <li>
            <router-link to="/textInputGuide" class="">Text Input</router-link>
          </li>
          <li>
            <router-link to="/selectboxGuide" class="">Selectbox</router-link>
          </li>
          <li>
            <router-link to="/pagingGuide" class="">Paging</router-link>
          </li>
          <li>
            <router-link to="/radioButtonGuide" class="">Radio Button</router-link>
          </li>
          <li>
            <router-link to="/checkboxGuide" class="">Checkbox</router-link>
          </li>
          <li>
            <router-link to="/switchGuide" class="">Toggle Switch</router-link>
          </li>
          <li>
            <router-link to="/labelGuide" class="">Label</router-link>
          </li>
          <li>
            <router-link to="/tableGuide" class="">Table</router-link>
          </li>
          <li><a href="/styleGuide/tab" class="">Tab</a></li>
          <li><a href="/styleGuide/modal" class="">Modal</a></li>
          <li>
            <router-link to="/tooltipGuide" class="">Tooltip</router-link>
          </li>
          <li><a href="/styleGuide/spinner" class="">Spinner</a></li>
          <li>
            <router-link to="/accordionGuide" class="">Accordion</router-link>
          </li>
          <li>
            <router-link to="/textGuide" class="">Text</router-link>
          </li>
        </ul>
      </details>

    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();

const isMenuOpen = ref(false);

// 메뉴 영역 밖 클릭 시 닫기
onMounted(() => {
  document.addEventListener('click', (event) => {
    const sidebarElement = document.querySelector('.left-menu-zone');
    if (isMenuOpen.value && sidebarElement && !sidebarElement.contains(event.target)) {
      isMenuOpen.value = false;
    }
  });
});

</script>

<style lang="scss" scoped>

</style>