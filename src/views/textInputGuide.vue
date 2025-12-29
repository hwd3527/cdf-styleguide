<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Text Input</h2>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="c-h3">기본</h3>
      <p class="c-information-text mt-5">form 안의 label의 경우 기본 가로 막대 모양이고, bullet을 사용할 경우 label에 .bullet을 추가하면 됩니다.<br>
        필수 항목일때는 label에 .required를 추가하면 됩니다.
      </p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container column">
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0101" class="bullet required">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0101" class="c-input" placeholder="input text">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0102" class="bullet required">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0102" class="c-input" placeholder="readonly" value="readonly"
                      readonly>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0103" class="bullet">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0103" class="c-input" placeholder="disabled" value="disabled"
                      disabled>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value01" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value01')">코드 복사</button>
          </div>

        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">언더 라인</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container column">
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0101" class="bullet required">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0101" class="c-input under-line" placeholder="input text">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0102" class="bullet required">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0102" class="c-input under-line" placeholder="readonly"
                      value="readonly" readonly>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0103" class="bullet">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0103" class="c-input under-line" placeholder="disabled"
                      value="disabled" disabled>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value08" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value08')">코드 복사</button>
          </div>

        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">상태</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container column">
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0201">레이블</label>
                </div>
                <div class="c-form-conts is-error">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0201" class="c-input" value="에러">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0202">레이블</label>
                </div>
                <div class="c-form-conts is-success">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0202" class="c-input" value="성공">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0203">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0203" class="c-input" value="정보">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value02" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value02')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">크기</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container column">
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0301">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0301" class="c-input size-xs" placeholder="size-xs">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0302">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0302" class="c-input size-s" placeholder="size-s">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0303">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0303" class="c-input size-m" placeholder="size-m">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0304">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0304" class="c-input size-l" placeholder="size-l">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0305">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0305" class="c-input size-xl" placeholder="size-xl">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value03" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value03')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">가로형</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container column">
              <div class="c-form-group horizontal">
                <div class="c-form-tit">
                  <label for="input0401">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input0401" class="c-input">
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value04" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value04')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">폼이 여러개 일때</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container">
              <div class="c-form-group horizontal">
                <div class="c-form-tit">
                  <label for="input050101">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <input type="text" id="input050101" class="c-input">
                    <select name="input050101" id="input050101" class="c-select">
                      <option value="">선택</option>
                    </select>
                    <button type="button" class="c-btn">button</button>
                  </div>
                  <p class="form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value05" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value05')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">폼이 여러개일때 인라인으로 처리하면 폼 자체 크기로 정렬</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container">
              <div class="c-form-group horizontal">
                <div class="c-form-tit">
                  <label for="input0601">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner c-inline">
                    <input type="text" id="input0601" class="c-input">
                    <select name="input050101" id="input0602" class="c-select">
                      <option value="">선택</option>
                      <option value="1">옵션123456789</option>
                    </select>
                    <button type="button" class="c-btn">button</button>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value06" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value06')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">아이콘 버튼이 있는 input</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container column">
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0601">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <div class="c-btn-icon-wrap">
                      <input type="password" id="input0601" class="c-input" value="1234">
                      <button type="button" class="c-btn text passview">
                        <span class="sr-only">입력한 비밀번호 보기</span>
                        <i class="material-symbols-rounded">visibility_off</i>
                      </button>
                    </div>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0601">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <div class="c-btn-icon-wrap">
                      <input type="password" id="input0601" class="c-input" value="1234">
                      <button type="button" class="c-btn text delete">
                        <span class="sr-only">입력한 내용 삭제</span>
                        <i class="material-symbols-rounded fill">
                          cancel
                        </i>
                      </button>
                      <button type="button" class="c-btn text passview">
                        <span class="sr-only">입력한 비밀번호 보기</span>
                        <i class="material-symbols-rounded">visibility_off</i>
                      </button>
                    </div>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value07" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value07')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h3">textarea</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0201" id="tabList0201" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0202" id="tabList0202" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0201" id="tabPanel0201" class="tab-panel on">
            <div class="container column">
              <div class="c-form-group">
                <div class="c-form-tit">
                  <label for="input0601">레이블</label>
                </div>
                <div class="c-form-conts">
                  <div class="c-form-conts-inner">
                    <textarea name="" id="" class="c-textarea" placeholder="textarea"></textarea>
                  </div>
                  <p class="c-form-hint">도움말</p>
                </div>
              </div>

            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel">
            <code-mirror v-model="value09" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value09')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import CodeMirror from "vue-codemirror6";

const value01 = ref(`<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0101" class="bullet required">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0101" class="c-input" placeholder="input text">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0102" class="bullet required">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0102" class="c-input" placeholder="readonly" value="readonly"
        readonly>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0103" class="bullet">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0103" class="c-input" placeholder="disabled" value="disabled"
        disabled>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);
const value02 = ref(`<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0201">레이블</label>
  </div>
  <div class="c-form-conts is-error">
    <div class="c-form-conts-inner">
      <input type="text" id="input0201" class="c-input" value="에러">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0202">레이블</label>
  </div>
  <div class="c-form-conts is-success">
    <div class="c-form-conts-inner">
      <input type="text" id="input0202" class="c-input" value="성공">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0203">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0203" class="c-input" value="정보">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);
const value03 = ref(`<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0301">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0301" class="c-input size-xs" placeholder="size-xs">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0302">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0302" class="c-input size-s" placeholder="size-s">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0303">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0303" class="c-input size-m" placeholder="size-m">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0304">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0304" class="c-input size-l" placeholder="size-l">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0305">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0305" class="c-input size-xl" placeholder="size-xl">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);
const value04 = ref(`<div class="c-form-group horizontal">
  <div class="c-form-tit">
    <label for="input0401">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0401" class="c-input">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);
const value05 = ref(`<div class="c-form-group horizontal">
  <div class="c-form-tit">
    <label for="input050101">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input050101" class="c-input">
      <select name="input050101" id="input050101" class="c-select">
        <option value="">선택</option>
      </select>
      <button type="button" class="c-btn">button</button>
    </div>
    <p class="form-hint">도움말</p>
  </div>
</div>`);
const value06 = ref(`<div class="c-form-group horizontal">
  <div class="c-form-tit">
    <label for="input0601">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner inline">
      <input type="text" id="input0601" class="c-input">
      <select name="input050101" id="input0602" class="c-select">
        <option value="">선택</option>
        <option value="1">옵션123456789</option>
      </select>
      <button type="button" class="c-btn">button</button>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);
const value07 = ref(`<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0601">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <div class="c-btn-icon-wrap">
        <input type="password" id="input0601" class="c-input" value="1234">
        <button type="button" class="c-btn text passview">
          <span class="sr-only">입력한 비밀번호 보기</span>
          <i class="material-symbols-rounded">visibility_off</i>
        </button>
      </div>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0601">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <div class="c-btn-icon-wrap">
        <input type="password" id="input0601" class="c-input" value="1234">
        <button type="button" class="c-btn text delete">
          <span class="sr-only">입력한 내용 삭제</span>
          <i class="material-symbols-rounded fill">
            cancel
          </i>
        </button>
        <button type="button" class="c-btn text passview">
          <span class="sr-only">입력한 비밀번호 보기</span>
          <i class="material-symbols-rounded">visibility_off</i>
        </button>
      </div>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);
const value08 = ref(`<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0101" class="bullet required">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0101" class="c-input under-line" placeholder="input text">
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0102" class="bullet required">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0102" class="c-input under-line" placeholder="readonly"
        value="readonly" readonly>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>
<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0103" class="bullet">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <input type="text" id="input0103" class="c-input under-line" placeholder="disabled"
        value="disabled" disabled>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);
const value09 = ref(`<div class="c-form-group">
  <div class="c-form-tit">
    <label for="input0601">레이블</label>
  </div>
  <div class="c-form-conts">
    <div class="c-form-conts-inner">
      <textarea name="" id="" class="c-textarea" placeholder="textarea"></textarea>
    </div>
    <p class="c-form-hint">도움말</p>
  </div>
</div>`);

// copyCode를 클릭하면 코드 복사
function copyCode(value) {
  const code = eval(value);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code.value)
      .then(() => {
        alert('코드가 클립보드에 복사되었습니다.');
      })
      .catch(err => {
        console.error('코드 복사 실패:', err);
      });
  } else {
    alert('이 브라우저는 클립보드 API를 지원하지 않습니다.');
  }
}

onMounted(() => {
  tabContents()
});

function tabContents() {
  //tab menu
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    var tabList = tabs.querySelectorAll('.tab-list-item'),
      tabPanels = tabs.querySelectorAll('.tab-panel');

    tabList.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        tabList.forEach(function (item) {
          item.classList.remove('on');
          item.setAttribute('aria-selected', 'false');
          item.setAttribute('tabindex', '-1');
        });
        tabPanels.forEach(function (panel) {
          panel.classList.remove('on');
        });
        tab.classList.add('on');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
        tabPanels[index].classList.add('on');
        tabPanels[1].querySelector('.CodeMirror')?.CodeMirror?.refresh();
      });

      tab.addEventListener('keyup', function (e) {
        var keycode = e.keyCode || e.which;
        if (keycode === 39 || keycode === 40) { // Right or Down arrow
          var nextTab = tabList[(index + 1) % tabList.length];
          nextTab.focus();
          nextTab.click();
        } else if (keycode === 37 || keycode === 38) { // Left or Up arrow
          var prevTab = tabList[(index - 1 + tabList.length) % tabList.length];
          prevTab.focus();
          prevTab.click();
        }
      });
    });
  });

  // Trigger click on the first tab to initialize	
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    tabs.querySelectorAll('.tab-list-item')[0].click();
  });

  //btn-icon-wrap 안의 passview 버튼을 클릭하면 btn-icon-wrap 안의 input type="password"의 type이 text로 변경되어 비밀번호가 보이게 됩니다.
  document.querySelectorAll('.btn-icon-wrap .passview').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.btn-icon-wrap').querySelector('input');
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
  document.querySelectorAll('.btn-icon-wrap .delete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.btn-icon-wrap').querySelector('input');
      input.value = '';
      input.focus();
    });
  });
}
</script>