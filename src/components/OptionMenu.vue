<template>
  <header class="option-menu-zone" :class="{ active: isActive }">
    <div class="liquidGlass-effect"></div>
    <div class="liquidGlass-tint"></div>
    <div class="liquidGlass-shine"></div>
    <div class="option-inner">
      <h2 class="c-h2">Setting</h2>
      <h4 class="c-h4 mt-8">테마 선택</h4>
      <div class="c-check c-check--chip mt-3 flex-col">
        <div class="c-check__chip basic" @click="onThemeChange('basic')">
          <input type="radio" class="radio" name="theme" id="theme_0101" :checked="theme === 'basic'">
          <label class="c-check__chip__outline" for="theme_0101">basic</label>
        </div>
        <div class="c-check__chip vortal" @click="onThemeChange('vortal')">
          <input type="radio" class="radio" name="theme" id="theme_0102" :checked="theme === 'vortal'">
          <label class="c-check__chip__outline" for="theme_0102">theme01</label>
        </div>
        <div class="c-check__chip istation" @click="onThemeChange('istation')">
          <input type="radio" class="radio" name="theme" id="theme_0103" :checked="theme === 'istation'">
          <label class="c-check__chip__outline" for="theme_0103">theme02</label>
        </div>
        <div class="c-check__chip pad" @click="onThemeChange('pad')">
          <input type="radio" class="radio" name="theme" id="theme_0104" :checked="theme === 'pad'">
          <label class="c-check__chip__outline" for="theme_0104">theme03</label>
        </div>
        <div class="c-check__chip vortal" @click="onThemeChange('dark')">
          <input type="radio" class="radio" name="theme" id="theme_0105" :checked="theme === 'dark'">
          <label class="c-check__chip__outline" for="theme_0105">dark</label>
        </div>
      </div>
      <h4 class="c-h4 mt-8">레이아웃 선택</h4>
      <div class="c-check c-check--chip mt-3 flex-col">
        <div class="c-check__chip vortal" @click="onLayoutChange('')">
          <input type="radio" class="radio" name="layout" id="layout_0201" :checked="layout === ''">
          <label class="c-check__chip__outline" for="layout_0201">normal</label>
        </div>
        <div class="c-check__chip vortal" @click="onLayoutChange('center')">
          <input type="radio" class="radio" name="layout" id="layout_0202" :checked="layout === 'center'">
          <label class="c-check__chip__outline" for="layout_0202">center</label>
        </div>
      </div>
    </div>
    <button type="button" class="btn size-s text btn-close" @click="$emit('close')">
      <i class="material-symbols-rounded">close</i>
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const theme = ref('basic');
function onThemeChange(themeName) {
  console.log('Theme changing to:', themeName);
  theme.value = themeName;
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('selectedTheme', theme.value);
}
const layout = ref('');
function onLayoutChange(layoutName) {
  console.log('Layout changing to:', layoutName);
  layout.value = layoutName;
  document.documentElement.setAttribute('data-layout', layout.value);
  localStorage.setItem('selectedLayout', layout.value);
}

onMounted(() => {
  const savedTheme = localStorage.getItem('selectedTheme') || '';
  theme.value = savedTheme;
  document.documentElement.setAttribute('data-theme', theme.value);
  const savedLayout = localStorage.getItem('selectedLayout') || '';
  layout.value = savedLayout;
  document.documentElement.setAttribute('data-layout', layout.value);
});
</script>

<style lang="scss" scoped>

</style>