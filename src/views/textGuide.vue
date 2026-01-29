<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Text</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="Heading" 
      description="heading 스타일입니다." 
      :code="textCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl flex-col !items-start !gap-4">
        <h1 class="c-h1">Heading 1</h1>
        <h2 class="c-h2">Heading 2</h2>
        <h3 class="c-h3">Heading 3</h3>
        <h4 class="c-h4">Heading 4</h4>
        <h5 class="c-h5">Heading 5</h5>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="List" 
      description="list 스타일입니다." 
      :code="textCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl !block">
        <span class="c-list-title">List Title</span>
        <ul class="c-list-style">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius laborum vitae, eos exercitationem
            modi illum? Non vel doloremque aliquid unde magnam. Temporibus officia odit inventore doloribus dolore
            voluptatem nulla!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat assumenda, dignissimos
            fuga adipisci, soluta enim quos aliquam commodi incidunt aliquid? Cum eius sunt accusantium blanditiis
            iusto? Aperiam, perferendis asperiores?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam alias, quae repellendus,
            quibusdam quasi laudantium impedit expedita autem ad rerum doloremque itaque cupiditate nemo, dolor
            modi accusantium illo dignissimos!</li>
        </ul>
      </div>
    </ComponentPreview>

    

    



  </div>
</template>

<script setup>
import ComponentPreview from '../components/ComponentPreview.vue';

const textCode1 = `<h1 class="c-h1">Heading 1</h1>
<h2 class="c-h2">Heading 2</h2>
<h3 class="c-h3">Heading 3</h3>
<h4 class="c-h4">Heading 4</h4>
<h5 class="c-h5">Heading 5</h5>`

const textCode2 = `<span class="c-list-title">List Title</span>
<ul class="c-list-style">
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius laborum vitae, eos exercitationem
    modi illum? Non vel doloremque aliquid unde magnam. Temporibus officia odit inventore doloribus dolore
    voluptatem nulla!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quaerat assumenda, dignissimos
    fuga adipisci, soluta enim quos aliquam commodi incidunt aliquid? Cum eius sunt accusantium blanditiis
    iusto? Aperiam, perferendis asperiores?</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam alias, quae repellendus,
    quibusdam quasi laudantium impedit expedita autem ad rerum doloremque itaque cupiditate nemo, dolor
    modi accusantium illo dignissimos!</li>
</ul>`



</script>