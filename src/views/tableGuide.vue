<template>
  <div class="page-title-wrap">
    <h2 class="cdf-h1">Table</h2>
  </div>
  <div class="cont-zone-wrap">
    <div class="conts-area">
      <h3 class="cdf-h3">Type01</h3>
      <p class="cdf-information-text mt-5">반응형 모바일에서 header를 표시하기 위해서 td에 'data-header'를 추가해야 합니다.<br> 그리고 모바일에서는 원칙적으로
        thead가 사라지는데 꼭 유지해야 하는 td에는 'mobile' 클래스를 붙여 주시기 바랍니다.</p>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container normal">
              <div class="cdf-table-top-info-line">
                <p class="info-txt">총 <strong>67개</strong>의 자재가 등록되어 있습니다.</p>
                <span class="page"><span class="current">1</span> / 10</span>
              </div>
              <div class="cdf-table-wrap type01 cdf-scrollbar horizontal">
                <table class="cdf-table-type01">
                  <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
                  <thead>
                    <tr>
                      <th scope="col">번호</th>
                      <th scope="col">품목명</th>
                      <th scope="col">규격</th>
                      <th scope="col">단위</th>
                      <th scope="col" class="mobile">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_all" id="rao_all">
                            <label for="rao_all">서비스구독</label>
                            <i></i>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-header="번호">10</td>
                      <td class="title">초고장력철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_01" id="rao_01">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">9</td>
                      <td class="title">초고장력철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_02" id="rao_02">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">8</td>
                      <td class="title">콘크리트</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_03" id="rao_03">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">7</td>
                      <td class="title">콘크리트</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_04" id="rao_04">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">6</td>
                      <td class="title">철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_05" id="rao_05">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">5</td>
                      <td class="title">철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_06" id="rao_06">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">4</td>
                      <td class="title">철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_07" id="rao_07">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">3</td>
                      <td class="title">철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_08" id="rao_08">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">2</td>
                      <td class="title">철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_09" id="rao_09">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">1</td>
                      <td class="title">철근</td>
                      <td data-header="규격">250×1000×1000㎜</td>
                      <td data-header="단위">kg</td>
                      <td data-header="서비스구독">
                        <div class="cdf-form-check">
                          <div class="cdf-form-check-inner">
                            <input type="checkbox" name="rao_10" id="rao_10">
                            <i></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      <h3 class="cdf-h3">Type02</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <div class="cdf-table-wrap cdf-scrollbar horizontal">
                <table class="cdf-table-type02">
                  <caption>등록자재리스트로 번호, 품목명, 규격, 단위, 단가(만원), 조사기관(KPRC,물가정보,거래가격) 항목별 순서대로 안내하는 표입니다</caption>
                  <thead>
                    <tr>
                      <th scope="col" rowspan="2">번호</th>
                      <th scope="col" rowspan="2">품목명</th>
                      <th scope="col" rowspan="2">규격</th>
                      <th scope="col" rowspan="2">단위</th>
                      <th scope="col" rowspan="2">단가(만원)</th>
                      <th scope="colgroup" colspan="3">조사기관</th>
                    </tr>
                    <tr>
                      <th scope="col">KPRC</th>
                      <th scope="col">물가정보</th>
                      <th scope="col">거래가격</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-header="번호">1</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"></td>
                      <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
                    </tr>
                    <tr>
                      <td data-header="번호">2</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
                    </tr>
                    <tr>
                      <td data-header="번호">3</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(물가정보)"></td>
                      <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
                    </tr>
                    <tr>
                      <td data-header="번호">4</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(물가정보)"></td>
                      <td data-header="조사기관(거래가격)"></td>
                    </tr>
                    <tr>
                      <td data-header="번호">5</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
                    </tr>
                    <tr>
                      <td data-header="번호">6</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(물가정보)"></td>
                      <td data-header="조사기관(거래가격)"></td>
                    </tr>
                    <tr>
                      <td data-header="번호">7</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"></td>
                      <td data-header="조사기관(물가정보)"></td>
                      <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
                    </tr>
                    <tr>
                      <td data-header="번호">8</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
                    </tr>
                    <tr>
                      <td data-header="번호">9</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"></td>
                      <td data-header="조사기관(물가정보)"></td>
                      <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
                    </tr>
                    <tr>
                      <td data-header="번호">10</td>
                      <td class="title">철근</td>
                      <td data-header="규격">000</td>
                      <td data-header="단위">kg</td>
                      <td data-header="단가(만원)">100</td>
                      <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
                      <td data-header="조사기관(거래가격)"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value02" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value02')">코드 복사</button>
          </div>

        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Type02 gray</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <div class="cdf-table-wrap cdf-scrollbar horizontal">
                <table class="cdf-table-type02 gray mt-0">
                  <caption>순위, 업체명, 보유면허, 본사지역, 시공능력평가, 시공실적(3년전), 등급, 현금흐름, 추천사유 항목별 순서대로 안내하는 표입니다</caption>
                  <colgroup>
                    <col style="width: 8%;">
                    <col>
                    <col style="width: 14%;">
                    <col style="width: 8%;">
                    <col style="width: 12%;">
                    <col style="width: 12%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">순위</th>
                      <th scope="col">업체명</th>
                      <th scope="col">보유면허</th>
                      <th scope="col">본사지역</th>
                      <th scope="col">시공능력평가</th>
                      <th scope="col">시공실적(3년전)</th>
                      <th scope="col">등급</th>
                      <th scope="col">현금흐름</th>
                      <th scope="col">추천사유</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-header="순위">1위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">2위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">3위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">4위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">5위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">6위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">7위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">8위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value0202" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value0202')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Type03</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <div class="cdf-table-wrap cdf-scrollbar horizontal">
                <table class="cdf-table-type03 mt-0">
                  <caption>순위, 업체명, 보유면허, 본사지역, 시공능력평가, 시공실적(3년전), 등급, 현금흐름, 추천사유 항목별 순서대로 안내하는 표입니다</caption>
                  <colgroup>
                    <col style="width: 8%;">
                    <col>
                    <col style="width: 14%;">
                    <col style="width: 8%;">
                    <col style="width: 12%;">
                    <col style="width: 12%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">순위</th>
                      <th scope="col">업체명</th>
                      <th scope="col">보유면허</th>
                      <th scope="col">본사지역</th>
                      <th scope="col">시공능력평가</th>
                      <th scope="col">시공실적(3년전)</th>
                      <th scope="col">등급</th>
                      <th scope="col">현금흐름</th>
                      <th scope="col">추천사유</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-header="순위">1위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">2위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">3위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">4위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">5위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">6위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">7위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                    <tr>
                      <td data-header="순위">8위</td>
                      <td class="left title">
                        <a href="javascript:void(0)" class="detail-link">
                          주*******
                          <i class="material-symbols-rounded">search</i>
                        </a>
                      </td>
                      <td data-header="보유번호">토목 공사업</td>
                      <td data-header="본사지역">부산</td>
                      <td data-header="시공능력평가" class="right">123,130,000,000</td>
                      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
                      <td data-header="등급" class="point">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value03" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value03')">코드 복사</button>
          </div>
        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Type04</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <div class="cdf-table-wrap cdf-scrollbar horizontal">
                <table class="cdf-table-type04">
                  <colgroup>
                    <col style="width: 6%">
                    <col>
                    <col style="width: 10%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 18%;">
                    <col style="width: 18%;">
                    <col style="width: 6%;">
                  </colgroup>
                  <caption>번호, 회사명, 본사지역, 담당자, 등급, 현금흐름, 시공능력평가, 시공실적, 삭제 항목별 순서대로 안내하는 표입니다</caption>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">회사명</th>
                      <th scope="col">본사지역</th>
                      <th scope="col">담당자</th>
                      <th scope="col">등급</th>
                      <th scope="col">현금흐름</th>
                      <th scope="col">시공능력평가</th>
                      <th scope="col">시공실적</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-header="번호">1</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">2</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">3</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">4</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">5</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">6</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">7</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">8</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">9</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">10</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value04" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value04')">코드 복사</button>
          </div>

        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Type05</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <div class="cdf-table-wrap cdf-scrollbar horizontal">
                <table class="cdf-table-type05">
                  <colgroup>
                    <col style="width: 6%">
                    <col>
                    <col style="width: 10%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 18%;">
                    <col style="width: 18%;">
                    <col style="width: 6%;">
                  </colgroup>
                  <caption>번호, 회사명, 본사지역, 담당자, 등급, 현금흐름, 시공능력평가, 시공실적, 삭제 항목별 순서대로 안내하는 표입니다</caption>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">회사명</th>
                      <th scope="col">본사지역</th>
                      <th scope="col">담당자</th>
                      <th scope="col">등급</th>
                      <th scope="col">현금흐름</th>
                      <th scope="col">시공능력평가</th>
                      <th scope="col">시공실적</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-header="번호">1</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">2</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">3</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">4</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">5</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">6</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">7</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">8</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">9</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">10</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value05" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value05')">코드 복사</button>
          </div>

        </div>
      </div>
    </div>

    <div class="conts-area">
      <h3 class="cdf-h3">Type06</h3>
      <div class="tabs">
        <div role="tablist" class="tab-list">
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0101" id="tabList0101" class="tab-list-item on"
            aria-selected="true" tabindex="0"><span>Preview</span></a>
          <a href="javascript:void(0)" role="tab" aria-controls="tabPanel0102" id="tabList0102" class="tab-list-item"
            aria-selected="false" tabindex="-1"><span>Code</span></a>
        </div>
        <div class="tab-conts">
          <div role="tabpanel" aria-labelledby="tabList0101" id="tabPanel0101" class="tab-panel on">
            <div class="container">
              <div class="cdf-table-wrap cdf-scrollbar horizontal">
                <table class="cdf-table-type06">
                  <colgroup>
                    <col style="width: 6%">
                    <col>
                    <col style="width: 10%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 8%;">
                    <col style="width: 18%;">
                    <col style="width: 18%;">
                    <col style="width: 6%;">
                  </colgroup>
                  <caption>번호, 회사명, 본사지역, 담당자, 등급, 현금흐름, 시공능력평가, 시공실적, 삭제 항목별 순서대로 안내하는 표입니다</caption>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">회사명</th>
                      <th scope="col">본사지역</th>
                      <th scope="col">담당자</th>
                      <th scope="col">등급</th>
                      <th scope="col">현금흐름</th>
                      <th scope="col">시공능력평가</th>
                      <th scope="col">시공실적</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-header="번호">1</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">2</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">3</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">4</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">5</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">6</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">7</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">8</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">9</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-header="번호">10</td>
                      <td class="title left">주식회사 코드팜2 </td>
                      <td data-header="본사지역">강원도</td>
                      <td data-header="담당자">홍길동</td>
                      <td data-header="등급">BB</td>
                      <td data-header="현금흐름">B(CR2)</td>
                      <td data-header="시공능력평가">999,999,999,999</td>
                      <td data-header="시공실적">999,999,999,999</td>
                      <td data-header="삭제">
                        <button type="button" class="cdf-btn size-xs text">
                          <i class="material-symbols-rounded">delete</i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div role="tabpanel" aria-labelledby="tabList0102" id="tabPanel0102" class="tab-panel">
            <code-mirror v-model="value06" :dark="true" basic />
            <button type="button" class="clipboard" @click="copyCode('value06')">코드 복사</button>
          </div>

        </div>
      </div>
    </div>



  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import CodeMirror from "vue-codemirror6";

const value01 = ref(`<div class="cdf-table-top-info-line">
  <p class="info-txt">총 <strong>67개</strong>의 자재가 등록되어 있습니다.</p>
  <span class="page"><span class="current">1</span> / 10</span>
</div>
<div class="cdf-table-wrap type01 cdf-scrollbar horizontal">
  <table class="cdf-table-type01">
    <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
    <thead>
      <tr>
        <th scope="col">번호</th>
        <th scope="col">품목명</th>
        <th scope="col">규격</th>
        <th scope="col">단위</th>
        <th scope="col" class="mobile">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_all" id="rao_all">
              <label for="rao_all">서비스구독</label>
              <i></i>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-header="번호">10</td>
        <td class="title">초고장력철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_01" id="rao_01">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">9</td>
        <td class="title">초고장력철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_02" id="rao_02">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">8</td>
        <td class="title">콘크리트</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_03" id="rao_03">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">7</td>
        <td class="title">콘크리트</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_04" id="rao_04">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">6</td>
        <td class="title">철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_05" id="rao_05">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">5</td>
        <td class="title">철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_06" id="rao_06">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">4</td>
        <td class="title">철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_07" id="rao_07">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">3</td>
        <td class="title">철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_08" id="rao_08">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">2</td>
        <td class="title">철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_09" id="rao_09">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td data-header="번호">1</td>
        <td class="title">철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="cdf-form-check">
            <div class="cdf-form-check-inner">
              <input type="checkbox" name="rao_10" id="rao_10">
              <i></i>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`);
const value02 = ref(`<div class="cdf-table-wrap cdf-scrollbar horizontal">
  <table class="cdf-table-type02">
    <caption>등록자재리스트로 번호, 품목명, 규격, 단위, 단가(만원), 조사기관(KPRC,물가정보,거래가격) 항목별 순서대로 안내하는 표입니다</caption>
    <thead>
      <tr>
        <th scope="col" rowspan="2">번호</th>
        <th scope="col" rowspan="2">품목명</th>
        <th scope="col" rowspan="2">규격</th>
        <th scope="col" rowspan="2">단위</th>
        <th scope="col" rowspan="2">단가(만원)</th>
        <th scope="colgroup" colspan="3">조사기관</th>
      </tr>
      <tr>
        <th scope="col">KPRC</th>
        <th scope="col">물가정보</th>
        <th scope="col">거래가격</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-header="번호">1</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"></td>
        <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
      </tr>
      <tr>
        <td data-header="번호">2</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
      </tr>
      <tr>
        <td data-header="번호">3</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(물가정보)"></td>
        <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
      </tr>
      <tr>
        <td data-header="번호">4</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(물가정보)"></td>
        <td data-header="조사기관(거래가격)"></td>
      </tr>
      <tr>
        <td data-header="번호">5</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
      </tr>
      <tr>
        <td data-header="번호">6</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(물가정보)"></td>
        <td data-header="조사기관(거래가격)"></td>
      </tr>
      <tr>
        <td data-header="번호">7</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"></td>
        <td data-header="조사기관(물가정보)"></td>
        <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
      </tr>
      <tr>
        <td data-header="번호">8</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
      </tr>
      <tr>
        <td data-header="번호">9</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"></td>
        <td data-header="조사기관(물가정보)"></td>
        <td data-header="조사기관(거래가격)"><i class="material-symbols-rounded">check</i></td>
      </tr>
      <tr>
        <td data-header="번호">10</td>
        <td class="title">철근</td>
        <td data-header="규격">000</td>
        <td data-header="단위">kg</td>
        <td data-header="단가(만원)">100</td>
        <td data-header="조사기관(KPRC)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(물가정보)"><i class="material-symbols-rounded">check</i></td>
        <td data-header="조사기관(거래가격)"></td>
      </tr>
    </tbody>
  </table>
</div>`);
const value0202 = ref(`<div class="cdf-table-wrap cdf-scrollbar horizontal">
<table class="cdf-table-type02 gray mt-0">
  <caption>순위, 업체명, 보유면허, 본사지역, 시공능력평가, 시공실적(3년전), 등급, 현금흐름, 추천사유 항목별 순서대로 안내하는 표입니다</caption>
  <colgroup>
    <col style="width: 8%;">
    <col>
    <col style="width: 14%;">
    <col style="width: 8%;">
    <col style="width: 12%;">
    <col style="width: 12%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">순위</th>
      <th scope="col">업체명</th>
      <th scope="col">보유면허</th>
      <th scope="col">본사지역</th>
      <th scope="col">시공능력평가</th>
      <th scope="col">시공실적(3년전)</th>
      <th scope="col">등급</th>
      <th scope="col">현금흐름</th>
      <th scope="col">추천사유</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="순위">1위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">2위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">3위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">4위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">5위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">6위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">7위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">8위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
  </tbody>
</table>
</div>`);
const value03 = ref(`<div class="cdf-table-wrap cdf-scrollbar horizontal">
<table class="cdf-table-type03 mt-0">
  <caption>순위, 업체명, 보유면허, 본사지역, 시공능력평가, 시공실적(3년전), 등급, 현금흐름, 추천사유 항목별 순서대로 안내하는 표입니다</caption>
  <colgroup>
    <col style="width: 8%;">
    <col>
    <col style="width: 14%;">
    <col style="width: 8%;">
    <col style="width: 12%;">
    <col style="width: 12%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">순위</th>
      <th scope="col">업체명</th>
      <th scope="col">보유면허</th>
      <th scope="col">본사지역</th>
      <th scope="col">시공능력평가</th>
      <th scope="col">시공실적(3년전)</th>
      <th scope="col">등급</th>
      <th scope="col">현금흐름</th>
      <th scope="col">추천사유</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="순위">1위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">2위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">3위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">4위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">5위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-ai">AI추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">6위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">7위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
    <tr>
      <td data-header="순위">8위</td>
      <td class="left title">
        <a href="javascript:void(0)" class="detail-link">
          주*******
          <i class="material-symbols-rounded">search</i>
        </a>
      </td>
      <td data-header="보유번호">토목 공사업</td>
      <td data-header="본사지역">부산</td>
      <td data-header="시공능력평가" class="right">123,130,000,000</td>
      <td data-header="시공실적(3년전)" class="right">3,130,000,000</td>
      <td data-header="등급" class="point">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="추천사유"><span class="rec-in">사내추천</span></td>
    </tr>
  </tbody>
</table>
</div>`);
const value04 = ref(`<div class="cdf-table-wrap cdf-scrollbar horizontal">
  <table class="cdf-table-type04">
    <colgroup>
      <col style="width: 6%">
      <col>
      <col style="width: 10%;">
      <col style="width: 8%;">
      <col style="width: 8%;">
      <col style="width: 8%;">
      <col style="width: 18%;">
      <col style="width: 18%;">
      <col style="width: 6%;">
    </colgroup>
    <caption>번호, 회사명, 본사지역, 담당자, 등급, 현금흐름, 시공능력평가, 시공실적, 삭제 항목별 순서대로 안내하는 표입니다</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">회사명</th>
        <th scope="col">본사지역</th>
        <th scope="col">담당자</th>
        <th scope="col">등급</th>
        <th scope="col">현금흐름</th>
        <th scope="col">시공능력평가</th>
        <th scope="col">시공실적</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-header="번호">1</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">2</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">3</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">4</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">5</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">6</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">7</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">8</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">9</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
      <tr>
        <td data-header="번호">10</td>
        <td class="title left">주식회사 코드팜2 </td>
        <td data-header="본사지역">강원도</td>
        <td data-header="담당자">홍길동</td>
        <td data-header="등급">BB</td>
        <td data-header="현금흐름">B(CR2)</td>
        <td data-header="시공능력평가">999,999,999,999</td>
        <td data-header="시공실적">999,999,999,999</td>
        <td data-header="삭제">
          <button type="button" class="cdf-btn size-xs text">
            <i class="material-symbols-rounded">delete</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`);
const value05 = ref(`<div class="cdf-table-wrap cdf-scrollbar horizontal">
<table class="cdf-table-type05">
  <colgroup>
    <col style="width: 6%">
    <col>
    <col style="width: 10%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
    <col style="width: 18%;">
    <col style="width: 18%;">
    <col style="width: 6%;">
  </colgroup>
  <caption>번호, 회사명, 본사지역, 담당자, 등급, 현금흐름, 시공능력평가, 시공실적, 삭제 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">회사명</th>
      <th scope="col">본사지역</th>
      <th scope="col">담당자</th>
      <th scope="col">등급</th>
      <th scope="col">현금흐름</th>
      <th scope="col">시공능력평가</th>
      <th scope="col">시공실적</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">1</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">2</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">3</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">4</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">5</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">6</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">7</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">8</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">9</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">10</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
</div>`);
const value06 = ref(`<div class="cdf-table-wrap cdf-scrollbar horizontal">
<table class="cdf-table-type06">
  <colgroup>
    <col style="width: 6%">
    <col>
    <col style="width: 10%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
    <col style="width: 8%;">
    <col style="width: 18%;">
    <col style="width: 18%;">
    <col style="width: 6%;">
  </colgroup>
  <caption>번호, 회사명, 본사지역, 담당자, 등급, 현금흐름, 시공능력평가, 시공실적, 삭제 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">회사명</th>
      <th scope="col">본사지역</th>
      <th scope="col">담당자</th>
      <th scope="col">등급</th>
      <th scope="col">현금흐름</th>
      <th scope="col">시공능력평가</th>
      <th scope="col">시공실적</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">1</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">2</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">3</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">4</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">5</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">6</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">7</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">8</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">9</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
    <tr>
      <td data-header="번호">10</td>
      <td class="title left">주식회사 코드팜2 </td>
      <td data-header="본사지역">강원도</td>
      <td data-header="담당자">홍길동</td>
      <td data-header="등급">BB</td>
      <td data-header="현금흐름">B(CR2)</td>
      <td data-header="시공능력평가">999,999,999,999</td>
      <td data-header="시공실적">999,999,999,999</td>
      <td data-header="삭제">
        <button type="button" class="cdf-btn size-xs text">
          <i class="material-symbols-rounded">delete</i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
</div>
`);

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