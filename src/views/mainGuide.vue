<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">퍼블리싱 가이드</h2>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="c-h2">목적</h3>
      <p class="c-list-title">이 가이드는 다음을 목표로 한다.</p>      
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <ul class="c-list-style">
                <li>여러명이 content 영역을 동시에 작업해도 결과가 동일할 것.</li>
                <li>Tailwind의 유틸리티 장점은 살리고, 디자인의 무질서를 차단할 것.</li>
                <li>HTML 작성자는 디자인 결정을 하지 않는다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>      
    </div>

    <div class="conts-area">
      <h3 class="c-h2">역할 분리 원칙</h3>
      <div class="tabs">        
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <ul class="c-list-style">
                <li>Layout(배치) -> 제한적 Tailwind 허용</li>
                <li>Component(UI) -> Tailwind 직접 사용 금지</li>
                <li>Utility(예외) -> 최소화</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h2">네이밍 체계</h3>
      <div class="c-table-wrap c-scrollbar horizontal">
        <table class="c-table-type03">
          <caption>Prefix, 의미, 책임 항목별 순서대로 안내하는 표입니다</caption>          
          <thead>
            <tr>
              <th scope="col">Prefix</th>
              <th scope="col">의미</th>
              <th scope="col">책임</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-header="Prefix">l-</td>
              <td data-header="의미">Layout</td>
              <td data-header="책임">흐름, 열, 정렬</td>
            </tr>
            <tr>
              <td data-header="Prefix">c-</td>
              <td data-header="의미">Component</td>
              <td data-header="책임">UI, 디자인</td>
            </tr>  
            <tr>
              <td data-header="Prefix">u-</td>
              <td data-header="의미">Utility</td>
              <td data-header="책임">예외 보조</td>
            </tr>        
          </tbody>
        </table>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h2">Tailwind 사용 허용 범위(핵심 규칙)</h3>
      <p class="c-list-title">오직 "레이아웃 목적"일 때만 허용한다.</p>
      <p class="c-list-title">허용 클래스</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">              
              <ul class="c-list-style">
                <li>grid</li>
                <li>grid-cols-*</li>
                <li>flex</li>
                <li>flex-col</li>
                <li>flex-wrap</li>
                <li>gap-*</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">예시</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value01" :dark="false" basic />
          </div>
        </div>
      </div>
      <p class="c-list-title">허용 조건</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>color / font / spacing(p/m) / border* / shadow* / rounded* 금지</li>
                <li>content 영역 최상위 컨테이너에서만 사용</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h2">Layout 규칙(l-)</h3>
      <p class="c-list-title">목적</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>반복되는 레이아웃 패턴의 중앙 통제</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">예시</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value08" :dark="false" basic />
          </div>
        </div>
      </div>
      <p class="c-list-title">Layout 사용 규칙</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>한 요소에 l- 클래스는 최대 1개</li>
                <li>layout 안에서는 c-만 배치</li>
                <li>layout 안에서 스타일 수정 금지</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <div class="conts-area">
      <h3 class="c-h2">Component 규칙(c-)</h3>
      <p class="c-list-title">원칙</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>디자인 책임의 최소 단위</li>
                <li>Component는 자기 자신만 책임지고 부모, 형제와의 관계(배치)는 절대 정의하지 않는다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">허용</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>color</li>
                <li>typography</li>
                <li>padding(내부)</li>
                <li>border / shadow</li>
                <li>hover / active</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">금지</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>grid / flex (외부에 영향을 주지 않는다. 내부는 가능)</li>
                <li>width / height (고정값을 되도록 넣지 않는다)</li>
                <li>margin</li>
                <li>column</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">기본 구조</p>
      <div class="tabs"> 
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value02" :dark="false" basic />
          </div>
        </div>
      </div>      
    </div>

    <div class="conts-area">
      <h3 class="c-h2">클래스 조합 순서</h3>
      <p class="c-list-title">원칙</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>1. layout(grid, flex)</li>
                <li>2. component(c-)</li>
                <li>3. modifier / state</li>
              </ul>
            </div>
          </div>
        </div>
      </div>      
      <p class="c-list-title">예시</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value03" :dark="false" basic />
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h2">카드 리스트 공식 패턴</h3>
      <p class="c-list-title">권장</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value04" :dark="false" basic />
          </div>
        </div>
      </div>
      <p class="c-list-title">금지</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value05" :dark="false" basic />
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h2">Component 네이밍 규칙</h3>
      <p class="c-list-title">Block / Element / Modifier (BEM-lite)</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>c-{block}</li>
                <li>c-{block}__{element}</li>
                <li>c-{block}--{modifier}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">예시</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value06" :dark="false" basic />
          </div>
        </div>
      </div>
      <p class="c-list-title">상태 표현</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>is-active</li>
                <li>is-disabled</li>
                <li>has-error</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">예시</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0202" id="tabPanel0202" class="tab-panel !p-0 on">
            <code-mirror v-model="value07" :dark="false" basic />
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="c-h2">BEM css 클래스 명명 규칙</h3>
      <p class="c-list-title">BEM 명명 규칙은 세 가지 뚜렷한 이점을 제공한다.</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>BEM은 목적 또는 기능을 전달한다.</li>
                <li>BEM은 구성 요소의 구조를 전달한다.</li>
                <li>BEM은 선택자 명시도를 항상 낮은 수준으로 유지한다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">BEM 클래스 이름은 최대 세 가지로 구성된다.</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>블록(Block): 구성 요소의 가장 바깥쪽 상위 요소를 블록으로 정의한다.</li>
                <li>요소(Element): 구성 요소 안쪽에는 하나 또는 그 이상의 요소가 있을 수 있다.</li>
                <li>변경자(Modifier): 블록 또는 요소는 변경자를 이용하여 변형을 표시할 수 있다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">세 가지 형식을 모두 클래스 이름에 사용하면 이렇게 보일 것이다.</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <p>.block__element--modifier</p>
            </div>
          </div>
        </div>
      </div>      
    </div>

    <div class="conts-area">
      <h3 class="c-h2">css 명시도</h3>
      <p class="c-list-title">CSS 명시도(Specificity)는 여러 개의 CSS 규칙이 동일한 요소를 가리킬 때, 어떤 스타일을 우선적으로 적용할지 결정하는 점수 체계입니다.<br>
        쉽게 말해 "누가 목소리가 더 큰가"를 따지는 규칙이죠.</p>
      <p class="c-list-title">CSS 명시도 점수표</p>
      <div class="c-table-wrap c-scrollbar horizontal">
        <table class="c-table-type03 mt-0">
          <caption>구분, 선택자 예시, 점수(가중치) 항목별 순서대로 안내하는 표입니다</caption>
          <thead>
            <tr>
              <th scope="col">구분</th>
              <th scope="col">선택자 예시</th>
              <th scope="col">점수(가중치)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-header="Prefix">!important</td>
              <td data-header="의미">color: red !important;</td>
              <td data-header="책임">무한대 (최우선)</td>
            </tr>
            <tr>
              <td data-header="Prefix">Inline Style</td>
              <td data-header="의미">
                &lt;div style="color: blue;"&gt;
              </td>
              <td data-header="책임">1000점</td>
            </tr>
            <tr>
              <td data-header="Prefix">ID 선택자</td>
              <td data-header="의미">#header</td>
              <td data-header="책임">100점</td>
            </tr>
            <tr>
              <td data-header="Prefix">Class / 속성 / 가상 클래스</td>
              <td data-header="의미">.menu, [type="text"], :hover</td>
              <td data-header="책임">10점</td>
            </tr>
            <tr>
              <td data-header="Prefix">태그 / 가상 요소</td>
              <td data-header="의미">div, h1, ::before</td>
              <td data-header="책임">1점</td>
            </tr>
            <tr>
              <td data-header="Prefix">전체 선택자</td>
              <td data-header="의미">*</td>
              <td data-header="책임">0점</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="c-list-title">점수 계산 예시</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start !gap-5">
              <p>여러 선택자가 섞여 있을 때는 점수를 더하면 된다.</p>
              <ul class="c-list-style">
                <li>nav -> 1점(태그 1개)</li>
                <li>nav ul -> 2점(태그 2개)</li>
                <li>.nav-list -> 10점(클래스 1개)</li>
                <li>nav .nav-list -> 11점(태그 1개 + 클래스 1개)</li>
                <li>#header .nav-list -> 110점(ID 1개 + 클래스 1개)</li>
              </ul>
              <p class="c-text"><strong>핵심규칙 :</strong> 1점짜리 태그 선택자가 100개 모여도, 10점짜리 클래스 선택자 1개를 이길수 없다.</p>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">우선순위 결정의 3가지 원칙</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li>점수가 높은 것이 이긴다.</li>
                <li>점수가 같다면 '마지막'이 이긴다(Cascading)</li>
                <li>!important가 모든 것을 압도한다.(유지보수 매우 어렵게 만들기 때문에 사용을 자제해야 한다.)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">명시도를 낮게 유지하기 위해 중첩(Nesting)의 최소화</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start !gap-5">
              <ul class="c-list-style">
                <li>일반적인 방식 : .card ul li a (점수 : 클래스 10점 + 태그 3점 = 13점)</li>
                <li>BEM 방식 : .card__link (점수 : 클래스 10점 = 10점)</li>
              </ul>
              <p class="c-text">BEM은 요소의 위치가 아무리 깊어도 클래스 이름을 <strong>.block__element</strong> 식으로 길게 지을지언정, 선택자 자체는 하나만 사용합니다.<br>
              덕분에 모든 스타일의 명시도가 10점(클래스 1개) 근처에서 평평하게 유지됩니다.</p>
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">명시도를 낮게 유지해야 하는 이유</p>
      <div class="tabs">
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container flex-col !items-start">
              <ul class="c-list-style">
                <li><strong>스타일 덮어쓰기가 쉽다.</strong><br>
                 명시도가 너무 높으면(예: header nav ul li.active), 나중에 이 스타일을 수정하려고 할 때 더 길고 복잡한 선택자를 써야 하거나 결국 !important를 남발하게 됩니다.<br>
                 하지만 BEM은 거의 다 10점이기 때문에, 뒤에 작성하기만 해도 스타일이 자연스럽게 교체됩니다.
                </li>
                <li><strong>코드의 재사용성이 올라간다.</strong><br>
                  특정 부모 요소에 종속된 선택자(.container .btn)는 해당 부모 밖으로 나가면 스타일이 깨집니다.<br>
                  반면 BEM 클래스(.btn--primary)는 독립적인 클래스이므로
                  어디에 가져다 붙여도 동일한 스타일을 유지합니다.
                </li>
              </ul>              
            </div>
          </div>
        </div>
      </div>
      <p class="c-list-title">명시도 비교</p>
      <div class="c-table-wrap c-scrollbar horizontal">
        <table class="c-table-type03">
          <caption>상황, 일반적인 CSS방식, BEM방식 항목별 순서대로 안내하는 표입니다</caption>
          <thead>
            <tr>
              <th scope="col">상황</th>
              <th scope="col">일반적인 CSS 방식</th>
              <th scope="col">BEM 방식</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-header="상황">기본 스타일</td>
              <td data-header="일반적인 CSS 방식">.nav ul li a (13점)</td>
              <td data-header="BEM 방식">.nav__link (10점)</td>
            </tr>
            <tr>
              <td data-header="상황">강조 스타일</td>
              <td data-header="일반적인 CSS 방식">.nav ul li a.active (23점)</td>
              <td data-header="BEM 방식">.nav__link--active (10점 / 클래스 교체)</td>
            </tr>
            <tr>
              <td data-header="상황">결과</td>
              <td data-header="일반적인 CSS 방식">스타일 수정을 위해 계속 점수를 높여야 함</td>
              <td data-header="BEM 방식">모든 선택자 10점대로 평등함</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CodeMirror from "vue-codemirror6";
const value01 = ref(`<ul class="grid grid-cols-3 gap-6">
  <li class="c-card"></li>
</ul>`);
const value02 = ref(`<article class="c-card">
  <h3 class="c-card__title">제목</h3>
  <p class="c-card__desc">설명</p>
</article>`);
const value03 = ref(`<article class="grid grid-cols-3 gap-6">
  <div class="c-card c-card--modifier is-state">
  </div>
</article>`);
const value04 = ref(`<article class="grid grid-cols-3 gap-6">
  <div class="c-card">
  </div>
</article>`);
const value05 = ref(`<ul class="grid grid-cols-3 gap-6 p-6 bg-white">`);
const value06 = ref(`<button type="button" class="c-btn c-btn--primary">
<div class="c-card">
  <div class="c-card__title"></div>
</div>`);
const value07 = ref(`<button class="c-btn is-active"></button>`);
const value08 = ref(`<div class="l-btn">
  <button type="button" class="c-btn">button</button>
  <button type="button" class="c-btn c-btn--outline">button</button>
</div>`);
</script>

<style scoped>

</style>