<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Badge</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="기본 badge 스타일입니다." 
      :code="badgeCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <span class="c-badge c-badge--hard c-badge--gray">BADGE</span>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="스타일" 
      description="badge 스타일입니다. hard, soft, border, rounded 네가지 스타일이 있습니다." 
      :code="badgeCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <span class="c-badge c-badge--hard c-badge--gray">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--gray">BADGE</span>
        <span class="c-badge c-badge--border c-badge--gray">BADGE</span>
        <span class="c-badge c-badge--rounded c-badge--gray">BADGE</span>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="사이즈" 
      description="badge 사이즈입니다. sm, md, lg 세가지 사이즈가 있습니다."
      :code="badgeCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <span class="c-badge c-badge--hard c-badge--gray c-badge--sm">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--gray c-badge--md">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--gray c-badge--lg">BADGE</span>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="색상" 
      description="badge 색상입니다. gray, green, turquoise, cyan, blue, purple, rose, red, orange, yellow 열가지 색상이 있습니다." 
      :code="badgeCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <span class="c-badge c-badge--hard c-badge--gray">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--green">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--turquoise">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--cyan">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--blue">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--purple">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--rose">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--red">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--orange">BADGE</span>
        <span class="c-badge c-badge--hard c-badge--yellow">BADGE</span>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="색상(파스텔)"
      description="badge 파스텔 색상입니다. gray, green, turquoise, cyan, blue, purple, rose, red, orange, yellow 열가지 색상이 있습니다."
      :code="badgeCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <span class="c-badge c-badge--soft c-badge--gray">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--green">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--turquoise">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--cyan">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--blue">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--purple">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--rose">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--red">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--orange">BADGE</span>
        <span class="c-badge c-badge--soft c-badge--yellow">BADGE</span>
      </div>
    </ComponentPreview>
  

  </div>
</template>

<script setup>
import ComponentPreview from '../components/ComponentPreview.vue';

const badgeCode1 = `<span class="c-badge c-badge--hard c-badge--gray">BADGE</span>`;

const badgeCode2 = `<span class="c-badge c-badge--hard c-badge--gray">BADGE</span>
<span class="c-badge c-badge--soft c-badge--gray">BADGE</span>
<span class="c-badge c-badge--border c-badge--gray">BADGE</span>
<span class="c-badge c-badge--rounded c-badge--gray">BADGE</span>`;

const badgeCode3 = `<span class="c-badge c-badge--hard c-badge--gray c-badge--sm">BADGE</span>
<span class="c-badge c-badge--hard c-badge--gray c-badge--md">BADGE</span>
<span class="c-badge c-badge--hard c-badge--gray c-badge--lg">BADGE</span>`;

const badgeCode4 = `<span class="c-badge c-badge--hard c-badge--gray">BADGE</span>
<span class="c-badge c-badge--hard c-badge--green">BADGE</span>
<span class="c-badge c-badge--hard c-badge--turquoise">BADGE</span>
<span class="c-badge c-badge--hard c-badge--cyan">BADGE</span>
<span class="c-badge c-badge--hard c-badge--blue">BADGE</span>
<span class="c-badge c-badge--hard c-badge--purple">BADGE</span>
<span class="c-badge c-badge--hard c-badge--rose">BADGE</span>
<span class="c-badge c-badge--hard c-badge--red">BADGE</span>
<span class="c-badge c-badge--hard c-badge--orange">BADGE</span>
<span class="c-badge c-badge--hard c-badge--yellow">BADGE</span>`;

const badgeCode5 = `<span class="c-badge c-badge--soft c-badge--gray">BADGE</span>
<span class="c-badge c-badge--soft c-badge--green">BADGE</span>
<span class="c-badge c-badge--soft c-badge--turquoise">BADGE</span>
<span class="c-badge c-badge--soft c-badge--cyan">BADGE</span>
<span class="c-badge c-badge--soft c-badge--blue">BADGE</span>
<span class="c-badge c-badge--soft c-badge--purple">BADGE</span>
<span class="c-badge c-badge--soft c-badge--rose">BADGE</span>
<span class="c-badge c-badge--soft c-badge--red">BADGE</span>
<span class="c-badge c-badge--soft c-badge--orange">BADGE</span>
<span class="c-badge c-badge--soft c-badge--yellow">BADGE</span>`;

</script>