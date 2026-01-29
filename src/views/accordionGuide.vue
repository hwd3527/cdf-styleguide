<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Accordion</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="기본 accordion 스타일입니다." 
      :code="accordionCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-collapse">
          <div class="c-collapse__item">
            <input type="radio" name="my-accordion-1" checked>
            <div class="c-collapse__title">How do I create an account?</div>
            <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
              registration
              process.</div>
          </div>
          <div class="c-collapse__item">
            <input type="radio" name="my-accordion-1">
            <div class="c-collapse__title">I forgot my password. What should I do?</div>
            <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
              sent to your
              email.
            </div>
          </div>
          <div class="c-collapse__item">
            <input type="radio" name="my-accordion-1">
            <div class="c-collapse__title">How do I update my profile information?</div>
            <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
              email.
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="화살표 아이콘이 있는 아코디언" 
      description="accordion 화살표 아이콘 스타일입니다." 
      :code="accordionCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-collapse">
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-2" checked>
            <div class="c-collapse__title">How do I create an account?</div>
            <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
              registration
              process.</div>
          </div>
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-2">
            <div class="c-collapse__title">I forgot my password. What should I do?</div>
            <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
              sent to your
              email.
            </div>
          </div>
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-2">
            <div class="c-collapse__title">How do I update my profile information?</div>
            <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
              email.
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="plus, minus가 있는 아코디언" 
      description="accordion plus, minus 스타일입니다." 
      :code="accordionCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-collapse">
          <div class="c-collapse__item c-collapse__item--plus">
            <input type="radio" name="my-accordion-3" checked>
            <div class="c-collapse__title">How do I create an account?</div>
            <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
              registration
              process.</div>
          </div>
          <div class="c-collapse__item c-collapse__item--plus">
            <input type="radio" name="my-accordion-3">
            <div class="c-collapse__title">I forgot my password. What should I do?</div>
            <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
              sent to your email.
            </div>
          </div>
          <div class="c-collapse__item c-collapse__item--plus">
            <input type="radio" name="my-accordion-3">
            <div class="c-collapse__title">How do I update my profile information?</div>
            <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
              email.
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="그룹 아코디언" 
      description="accordion 그룹 스타일입니다." 
      :code="accordionCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-collapse c-collapse--join">
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-4" checked>
            <div class="c-collapse__title">How do I create an account?</div>
            <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
              registration
              process.</div>
          </div>
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-4">
            <div class="c-collapse__title">I forgot my password. What should I do?</div>
            <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
              sent to your
              email.
            </div>
          </div>
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-4">
            <div class="c-collapse__title">How do I update my profile information?</div>
            <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
              email.
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="Highlight 아코디언" 
      description="accordion 하이라이트 스타일입니다." 
      :code="accordionCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-collapse c-collapse--highlight">
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-5" checked>
            <div class="c-collapse__title">How do I create an account?</div>
            <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
              registration
              process.</div>
          </div>
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-5">
            <div class="c-collapse__title">I forgot my password. What should I do?</div>
            <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
              sent to your
              email.
            </div>
          </div>
          <div class="c-collapse__item c-collapse__item--arrow">
            <input type="radio" name="my-accordion-5">
            <div class="c-collapse__title">How do I update my profile information?</div>
            <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
              email.
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>


    

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'


import ComponentPreview from '../components/ComponentPreview.vue';

const accordionCode1 = `<div class="c-collapse">
  <div class="c-collapse__item">
    <input type="radio" name="my-accordion-1" checked>
    <div class="c-collapse__title">How do I create an account?</div>
    <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
      registration
      process.</div>
  </div>
  <div class="c-collapse__item">
    <input type="radio" name="my-accordion-1">
    <div class="c-collapse__title">I forgot my password. What should I do?</div>
    <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
      sent to your
      email.
    </div>
  </div>
  <div class="c-collapse__item">
    <input type="radio" name="my-accordion-1">
    <div class="c-collapse__title">How do I update my profile information?</div>
    <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
      email.
    </div>
  </div>
</div>`;

const accordionCode2 = `<div class="c-collapse">
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-2" checked>
    <div class="c-collapse__title">How do I create an account?</div>
    <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
      registration
      process.</div>
  </div>
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-2">
    <div class="c-collapse__title">I forgot my password. What should I do?</div>
    <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
      sent to your
      email.
    </div>
  </div>
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-2">
    <div class="c-collapse__title">How do I update my profile information?</div>
    <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
      email.
    </div>
  </div>
</div>`

const accordionCode3 = `<div class="c-collapse">
  <div class="c-collapse__item c-collapse__item--plus">
    <input type="radio" name="my-accordion-3" checked>
    <div class="c-collapse__title">How do I create an account?</div>
    <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
      registration
      process.</div>
  </div>
  <div class="c-collapse__item c-collapse__item--plus">
    <input type="radio" name="my-accordion-3">
    <div class="c-collapse__title">I forgot my password. What should I do?</div>
    <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
      sent to your email.
    </div>
  </div>
  <div class="c-collapse__item c-collapse__item--plus">
    <input type="radio" name="my-accordion-3">
    <div class="c-collapse__title">How do I update my profile information?</div>
    <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
      email.
    </div>
  </div>
</div>`

const accordionCode4 = `<div class="c-collapse c-collapse--join">
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-4" checked>
    <div class="c-collapse__title">How do I create an account?</div>
    <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
      registration
      process.</div>
  </div>
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-4">
    <div class="c-collapse__title">I forgot my password. What should I do?</div>
    <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
      sent to your
      email.
    </div>
  </div>
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-4">
    <div class="c-collapse__title">How do I update my profile information?</div>
    <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
      email.
    </div>
  </div>
</div>`

const accordionCode5 = `<div class="c-collapse c-collapse--highlight">
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-5" checked>
    <div class="c-collapse__title">How do I create an account?</div>
    <div class="c-collapse__content">Click the "Sign Up" button in the top right corner and follow the
      registration
      process.</div>
  </div>
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-5">
    <div class="c-collapse__title">I forgot my password. What should I do?</div>
    <div class="c-collapse__content">Click on "Forgot Password" on the login page and follow the instructions
      sent to your
      email.
    </div>
  </div>
  <div class="c-collapse__item c-collapse__item--arrow">
    <input type="radio" name="my-accordion-5">
    <div class="c-collapse__title">How do I update my profile information?</div>
    <div class="c-collapse__content">Go to "My Account" settings and select "Edit Profile" to make changes.
      email.
    </div>
  </div>
</div>`






</script>