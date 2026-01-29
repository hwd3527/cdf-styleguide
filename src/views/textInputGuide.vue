<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Text Input</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="기본" 
      description="form 안의 label의 경우 기본 가로 막대 모양이고, bullet을 사용할 경우 label에 .bullet을 추가하면 됩니다.<br />필수 항목일때는 label에 .required를 추가하면 됩니다." 
      :code="inputCode1" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0101" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0101" class="c-input" placeholder="input text">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0102" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0102" class="c-input" placeholder="readonly" value="readonly" readonly>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0103" class="c-form__label c-form__label--bullet">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0103" class="c-input" placeholder="disabled" value="disabled" disabled>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="언더라인"
      description="input에 .c-input--underline 클래스를 추가하면 언더라인 스타일이 적용됩니다."
      :code="inputCode2" 
      bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0101" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0101" class="c-input c-input--underline" placeholder="input text">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0102" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0102" class="c-input c-input--underline" placeholder="readonly"
                value="readonly" readonly>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0103" class="c-form__label c-form__label--bullet">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0103" class="c-input c-input--underline" placeholder="disabled"
                value="disabled" disabled>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="상태" 
      description="input의 상태를 나타낼 때는 .c-form--error, .c-form--success 클래스를 .c-form__conts에 추가합니다."
      :code="inputCode3" 
      bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0201" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts c-form--error">
            <div class="c-form__inner">
              <input type="text" id="input0201" class="c-input" value="에러">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0202" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts c-form--success">
            <div class="c-form__inner">
              <input type="text" id="input0202" class="c-input" value="성공">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0203" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0203" class="c-input" value="정보">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="크기"
      description="input의 크기를 조절할 때는 .c-input--xs, .c-input--sm, .c-input--md, .c-input--lg, .c-input--xl 클래스를 추가합니다." 
      :code="inputCode4"
      bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0301" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0301" class="c-input c-input--xs" placeholder="size-xs">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0302" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0302" class="c-input c-input--sm" placeholder="size-s">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0303" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0303" class="c-input c-input--md" placeholder="size-m">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0304" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0304" class="c-input c-input--lg" placeholder="size-l">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0305" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0305" class="c-input c-input--xl" placeholder="size-xl">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="가로형"
      description="input을 가로형으로 배치할 때는 .l-form--horizontal 클래스를 .c-form에 추가합니다."
      :code="inputCode5" bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form c-form--horizontal">
          <div class="c-form__tit">
            <label for="input0401" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input0401" class="c-input">
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="폼이 여러개 일때" 
      description="input이 가로형일때 폼을 여러개 배치할 수 있습니다."
      :code="inputCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form c-form--horizontal">
          <div class="c-form__tit">
            <label for="input050101" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <input type="text" id="input050101" class="c-input">
              <select name="input050101" id="input050101" class="c-select">
                <option value="">선택</option>
              </select>
              <button type="button" class="c-btn">button</button>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="폼이 여러개 일때 인라인으로 처리하면 폼 자체 크기로 정렬" 
      description="input이 가로형일때 폼을 여러개 배치할 수 있습니다." 
      :code="inputCode7" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form c-form--horizontal">
          <div class="c-form__tit">
            <label for="input0601" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner c-form--inline">
              <input type="text" id="input0601" class="c-input">
              <select name="input050101" id="input0602" class="c-select">
                <option value="">선택</option>
                <option value="1">옵션123456789</option>
              </select>
              <button type="button" class="c-btn">button</button>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="아이콘 버튼이 있는 input" 
      description="input 안에 아이콘 버튼이 있는 경우 .c-form__inner 안에 .c-form__btn을 추가하고 input과 버튼을 배치합니다."
      :code="inputCode8" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0601" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <div class="c-form__btn">
                <input type="password" id="input0601" class="c-input" value="1234">
                <button type="button" class="c-btn c-btn--text passview">
                  <span class="sr-only">입력한 비밀번호 보기</span>
                  <i class="c-btn__icon material-symbols-rounded">visibility_off</i>
                </button>
              </div>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0601" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <div class="c-form__btn">
                <input type="password" id="input0601" class="c-input" value="1234">
                <button type="button" class="c-btn c-btn--text delete">
                  <span class="sr-only">입력한 내용 삭제</span>
                  <i class="c-btn__icon material-symbols-rounded fill">
                    cancel
                  </i>
                </button>
                <button type="button" class="c-btn c-btn--text passview">
                  <span class="sr-only">입력한 비밀번호 보기</span>
                  <i class="c-btn__icon material-symbols-rounded">visibility_off</i>
                </button>
              </div>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="textarea"
      description="" 
      :code="inputCode9"
      bg="light">
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0601" class="c-form__label">레이블</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <textarea name="" id="" class="c-textarea" placeholder="textarea"></textarea>
            </div>
            <p class="c-form__hint">도움말</p>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="file input" 
      description="" 
      :code="inputCode10" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0102" class="c-form__label c-form__label--bullet">파일 업로드</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <div class="c-form__file">
                <input type="text" id="input0102" class="c-input c-input--md" placeholder="파일 선택">
                <label for="file0102">
                  <i class="material-symbols-rounded">attach_file</i>
                </label>
                <input type="file" id="file0102">
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="기호가 있는 input" 
      description="" 
      :code="inputCode11" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-form">
          <div class="c-form__tit">
            <label for="input0102" class="c-form__label c-form__label--bullet">달성률</label>
          </div>
          <div class="c-form__conts">
            <div class="c-form__inner">
              <div class="c-form__btn" style="width:10rem;">
                <input type="text" class="c-input c-input--sm" id="input1301" value="0">
                <span class="c-form__sign c-form__sign--sm">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentPreview>


  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ComponentPreview from '../components/ComponentPreview.vue';


const inputCode1 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0101" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0101" class="c-input" placeholder="input text">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0102" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0102" class="c-input" placeholder="readonly" value="readonly"
        readonly>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0103" class="c-form__label c-form__label--bullet">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0103" class="c-input" placeholder="disabled" value="disabled"
        disabled>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode2 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0101" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0101" class="c-input c-input--underline" placeholder="input text">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0102" class="c-form__label c-form__label--bullet c-form__label--required">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0102" class="c-input c-input--underline" placeholder="readonly"
        value="readonly" readonly>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0103" class="c-form__label c-form__label--bullet">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0103" class="c-input c-input--underline" placeholder="disabled"
        value="disabled" disabled>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode3 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0201" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts c-form--error">
    <div class="c-form__inner">
      <input type="text" id="input0201" class="c-input" value="에러">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0202" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts c-form--success">
    <div class="c-form__inner">
      <input type="text" id="input0202" class="c-input" value="성공">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0203" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0203" class="c-input" value="정보">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode4 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0301" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0301" class="c-input c-input--xs" placeholder="size-xs">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0302" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0302" class="c-input c-input--sm" placeholder="size-s">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0303" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0303" class="c-input c-input--md" placeholder="size-m">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0304" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0304" class="c-input c-input--lg" placeholder="size-l">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0305" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0305" class="c-input c-input--xl" placeholder="size-xl">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode5 = `<div class="c-form c-form--horizontal">
  <div class="c-form__tit">
    <label for="input0401" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input0401" class="c-input">
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode6 = `<div class="c-form c-form--horizontal">
  <div class="c-form__tit">
    <label for="input050101" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <input type="text" id="input050101" class="c-input">
      <select name="input050101" id="input050101" class="c-select">
        <option value="">선택</option>
      </select>
      <button type="button" class="c-btn">button</button>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode7 = `<div class="c-form c-form--horizontal">
  <div class="c-form__tit">
    <label for="input0601" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner c-form--inline">
      <input type="text" id="input0601" class="c-input">
      <select name="input050101" id="input0602" class="c-select">
        <option value="">선택</option>
        <option value="1">옵션123456789</option>
      </select>
      <button type="button" class="c-btn">button</button>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode8 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0601" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <div class="c-form__btn">
        <input type="password" id="input0601" class="c-input" value="1234">
        <button type="button" class="c-btn c-btn--text passview">
          <span class="sr-only">입력한 비밀번호 보기</span>
          <i class="c-btn__icon material-symbols-rounded">visibility_off</i>
        </button>
      </div>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>
<div class="c-form">
  <div class="c-form__tit">
    <label for="input0601" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <div class="c-form__btn">
        <input type="password" id="input0601" class="c-input" value="1234">
        <button type="button" class="c-btn c-btn--text delete">
          <span class="sr-only">입력한 내용 삭제</span>
          <i class="c-btn__icon material-symbols-rounded fill">
            cancel
          </i>
        </button>
        <button type="button" class="c-btn c-btn--text passview">
          <span class="sr-only">입력한 비밀번호 보기</span>
          <i class="c-btn__icon material-symbols-rounded">visibility_off</i>
        </button>
      </div>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode9 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0601" class="c-form__label">레이블</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <textarea name="" id="" class="c-textarea" placeholder="textarea"></textarea>
    </div>
    <p class="c-form__hint">도움말</p>
  </div>
</div>`;

const inputCode10 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0102" class="c-form__label c-form__label--bullet">파일 업로드</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <div class="c-form__file">
        <input type="text" id="input0102" class="c-input c-input--md" placeholder="파일 선택">
        <label for="file0102">
          <i class="material-symbols-rounded">attach_file</i>
        </label>
        <input type="file" id="file0102">
      </div>
    </div>
  </div>
</div>`;

const inputCode11 = `<div class="c-form">
  <div class="c-form__tit">
    <label for="input0102" class="c-form__label c-form__label--bullet">달성률</label>
  </div>
  <div class="c-form__conts">
    <div class="c-form__inner">
      <div class="c-form__btn" style="width:10rem;">
        <input type="text" class="c-input c-input--sm" id="input1301" value="0">
        <span class="c-form__sign c-form__sign--sm">%</span>
      </div>
    </div>
  </div>
</div>`;



onMounted(() => {
  //btn-icon-wrap 안의 passview 버튼을 클릭하면 btn-icon-wrap 안의 input type="password"의 type이 text로 변경되어 비밀번호가 보이게 됩니다.
  document.querySelectorAll('.c-form__btn .passview').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.c-form__btn').querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
        btn.querySelector('i').textContent = 'visibility';
      } else {
        input.type = 'password';
        btn.querySelector('i').textContent = 'visibility_off';
      }
    });
  });

  //btn-icon-wrap 안의 delete 버튼을 클릭하면 btn-icon-wrap 안의 input 내용이 삭제되는 코드
  document.querySelectorAll('.c-form__btn .delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.c-form__btn').querySelector('input');
      input.value = '';
      input.focus();
    });
  });
});

 
</script>