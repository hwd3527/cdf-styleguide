<template>
  <div class="right-top">
    <div class="liquidGlass-effect"></div>
    <div class="liquidGlass-tint"></div>
    <div class="liquidGlass-shine"></div>
    <div class="theme-sel">
      <label for="theme-select">Theme</label>
      <select id="theme-select" class="cdf-select size-s" style="width: 12rem;" @change="onThemeChange">
        <option value="basic" :selected="theme === ''">basic</option>
        <option selected="" value="vortal" :selected="theme === 'vortal'">vortal</option>
        <option value="istation" :selected="theme === 'istation'">my-istation</option>
        <option value="pad" :selected="theme === 'pad'">pad-plus</option>
        <option value="dark" :selected="theme === 'dark'">dark</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('');
function onThemeChange(event) {
  theme.value = event.target.value;
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('selectedTheme', theme.value);
}

onMounted(() => {
  const savedTheme = localStorage.getItem('selectedTheme') || '';
  theme.value = savedTheme;
  document.documentElement.setAttribute('data-theme', theme.value);
});
</script>

<style lang="scss" scoped>

</style>