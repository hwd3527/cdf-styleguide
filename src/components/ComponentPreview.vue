<template>
  <div class="code-preview">
    <div class="code-preview__header">
      <div>
        <h3 class="c-h3">{{title}}</h3>
        <p class="code-preview__header__desc-text" v-html="description"></p>
      </div>
      <button type="button" class="c-btn c-btn--sm c-btn--text" @click="showCode = !showCode" :title="showCode ? 'Show Preview' : 'Show Code'">
        <i class="material-symbols-rounded" v-if="showCode">visibility</i>
        <i class="material-symbols-rounded" v-else>code</i>
      </button>
    </div>
    
    <div class="code-preview__container" v-if="showCode">
      <button type="button" class="c-btn c-btn--sm c-btn--outline" @click="handleCopy" :title="copied ? 'Copied!' : 'Copy code'">
        <i class="material-symbols-rounded" v-if="copied">check</i>
        <i class="material-symbols-rounded" v-else="copied">content_copy</i>
      </button>
      <pre class="code-preview__container__code"><code>{{ code.trim() }}</code></pre>
    </div>
    <div class="code-preview__conts" :class="{'dark': bg === 'dark'}" v-else>
        <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps({
  title: String,
  description: String,
  code: String,
  bg: {
    type: String,
    default: 'light'
  }
});

const showCode = ref(false);
const copied = ref(false);

const  handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
</script>

<style lang="scss" scoped>

</style>