<template>
  <div class="page-title-wrap">
    <h2 class="c-h1">Table</h2>
  </div>
  <div class="cont-zone-wrap">
    <ComponentPreview 
      title="type01"
      description="반응형 모바일에서 header를 표시하기 위해서 td에 'data-header'를 추가해야 합니다.<br>
      그리고 모바일에서는 원칙적으로 thead가 사라지는데 꼭 유지해야 하는 th에는 'mobile' 클래스를 붙여 주시기 바랍니다." 
      :code="tableCode1"
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="l-table">
          <div class="c-table-top-info">
            <p class="c-table-top-info__txt">총 <strong>67개</strong>의 자재가 등록되어 있습니다.</p>
            <span class="c-table-top-info__page"><span class="c-table-top-info__current">1</span> / 10</span>
          </div>
          <div class="c-table-wrap type01 c-scrollbar horizontal">
            <table class="c-table-type01 !min-w-[1000px]">
              <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">품목명</th>
                  <th scope="col">규격</th>
                  <th scope="col">단위</th>
                  <th scope="col" class="mobile">
                    <div class="c-check">
                      <div class="c-check__conts">
                        <div class="c-check__inner">
                          <input type="checkbox" name="rao_all" id="rao_all">
                          <label for="rao_all">서비스구독</label>
                          <i></i>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>                
                <tr>
                  <td data-header="번호">5</td>
                  <td class="title">철근</td>
                  <td data-header="규격">250×1000×1000㎜</td>
                  <td data-header="단위">kg</td>
                  <td data-header="서비스구독">
                    <div class="c-check">
                      <div class="c-check__conts">
                        <div class="c-check__inner">
                          <input type="checkbox" name="rao_06" id="rao_06">
                          <i></i>
                        </div>
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
                    <div class="c-check">
                      <div class="c-check__conts">
                        <div class="c-check__inner">
                          <input type="checkbox" name="rao_07" id="rao_07">
                          <i></i>
                        </div>
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
                    <div class="c-check">
                      <div class="c-check__conts">
                        <div class="c-check__inner">
                          <input type="checkbox" name="rao_08" id="rao_08">
                          <i></i>
                        </div>
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
                    <div class="c-check">
                      <div class="c-check__conts">
                        <div class="c-check__inner">
                          <input type="checkbox" name="rao_09" id="rao_09">
                          <i></i>
                        </div>
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
                    <div class="c-check">
                      <div class="c-check__conts">
                        <div class="c-check__inner">
                          <input type="checkbox" name="rao_10" id="rao_10">
                          <i></i>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="type02" 
      description="" 
      :code="tableCode2" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-table-wrap c-scrollbar horizontal">
          <table class="c-table-type02 !min-w-[1000px]">
            <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">품목명</th>
                <th scope="col">규격</th>
                <th scope="col">단위</th>
                <th scope="col" class="mobile">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_all" id="rao_all">
                        <label for="rao_all">서비스구독</label>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-header="번호">5</td>
                <td class="title">철근</td>
                <td data-header="규격">250×1000×1000㎜</td>
                <td data-header="단위">kg</td>
                <td data-header="서비스구독">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_06" id="rao_06">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_07" id="rao_07">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_08" id="rao_08">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_09" id="rao_09">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_10" id="rao_10">
                        <i></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="type02 gray" 
      description="" 
      :code="tableCode3" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-table-wrap c-scrollbar horizontal">
          <table class="c-table-type02 gray mt-0 !min-w-[1000px]">
            <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">품목명</th>
                <th scope="col">규격</th>
                <th scope="col">단위</th>
                <th scope="col" class="mobile">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_all" id="rao_all">
                        <label for="rao_all">서비스구독</label>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-header="번호">5</td>
                <td class="title">철근</td>
                <td data-header="규격">250×1000×1000㎜</td>
                <td data-header="단위">kg</td>
                <td data-header="서비스구독">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_06" id="rao_06">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_07" id="rao_07">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_08" id="rao_08">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_09" id="rao_09">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_10" id="rao_10">
                        <i></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="type03" 
      description="" 
      :code="tableCode4" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-table-wrap c-scrollbar horizontal">
          <table class="c-table-type03 !min-w-[1000px]">
            <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">품목명</th>
                <th scope="col">규격</th>
                <th scope="col">단위</th>
                <th scope="col" class="mobile">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_all" id="rao_all">
                        <label for="rao_all">서비스구독</label>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-header="번호">5</td>
                <td class="title">철근</td>
                <td data-header="규격">250×1000×1000㎜</td>
                <td data-header="단위">kg</td>
                <td data-header="서비스구독">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_06" id="rao_06">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_07" id="rao_07">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_08" id="rao_08">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_09" id="rao_09">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_10" id="rao_10">
                        <i></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="type04" 
      description="" 
      :code="tableCode5" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-table-wrap c-scrollbar horizontal">
          <table class="c-table-type04 !min-w-[1000px]">
            <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">품목명</th>
                <th scope="col">규격</th>
                <th scope="col">단위</th>
                <th scope="col" class="mobile">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_all" id="rao_all">
                        <label for="rao_all">서비스구독</label>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-header="번호">5</td>
                <td class="title">철근</td>
                <td data-header="규격">250×1000×1000㎜</td>
                <td data-header="단위">kg</td>
                <td data-header="서비스구독">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_06" id="rao_06">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_07" id="rao_07">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_08" id="rao_08">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_09" id="rao_09">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_10" id="rao_10">
                        <i></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview 
      title="type05" 
      description="" 
      :code="tableCode6" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-table-wrap c-scrollbar horizontal">
          <table class="c-table-type05 !min-w-[1000px]">
            <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">품목명</th>
                <th scope="col">규격</th>
                <th scope="col">단위</th>
                <th scope="col" class="mobile">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_all" id="rao_all">
                        <label for="rao_all">서비스구독</label>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-header="번호">5</td>
                <td class="title">철근</td>
                <td data-header="규격">250×1000×1000㎜</td>
                <td data-header="단위">kg</td>
                <td data-header="서비스구독">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_06" id="rao_06">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_07" id="rao_07">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_08" id="rao_08">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_09" id="rao_09">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_10" id="rao_10">
                        <i></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ComponentPreview>
   
    <ComponentPreview 
      title="type06" 
      description="" 
      :code="tableCode7" 
      bg="light"
    >
      <div class="code-preview__conts__cluster w-full max-w-7xl">
        <div class="c-table-wrap c-scrollbar horizontal">
          <table class="c-table-type06 !min-w-[1000px]">
            <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">품목명</th>
                <th scope="col">규격</th>
                <th scope="col">단위</th>
                <th scope="col" class="mobile">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_all" id="rao_all">
                        <label for="rao_all">서비스구독</label>
                        <i></i>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-header="번호">5</td>
                <td class="title">철근</td>
                <td data-header="규격">250×1000×1000㎜</td>
                <td data-header="단위">kg</td>
                <td data-header="서비스구독">
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_06" id="rao_06">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_07" id="rao_07">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_08" id="rao_08">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_09" id="rao_09">
                        <i></i>
                      </div>
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
                  <div class="c-check">
                    <div class="c-check__conts">
                      <div class="c-check__inner">
                        <input type="checkbox" name="rao_10" id="rao_10">
                        <i></i>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ComponentPreview>
    

  </div>
</template>

<script setup>
import ComponentPreview from '../components/ComponentPreview.vue';

const tableCode1 = `<div class="l-table">
<div class="c-table-top-info">
  <p class="c-table-top-info__txt">총 <strong>67개</strong>의 자재가 등록되어 있습니다.</p>
  <span class="c-table-top-info__page"><span class="c-table-top-info__current">1</span> / 10</span>
</div>
<div class="c-table-wrap type01 c-scrollbar horizontal">
  <table class="c-table-type01">
    <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
    <thead>
      <tr>
        <th scope="col">번호</th>
        <th scope="col">품목명</th>
        <th scope="col">규격</th>
        <th scope="col">단위</th>
        <th scope="col" class="mobile">
          <div class="c-check">
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="checkbox" name="rao_all" id="rao_all">
                <label for="rao_all">서비스구독</label>
                <i></i>
              </div>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>                
      <tr>
        <td data-header="번호">5</td>
        <td class="title">철근</td>
        <td data-header="규격">250×1000×1000㎜</td>
        <td data-header="단위">kg</td>
        <td data-header="서비스구독">
          <div class="c-check">
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="checkbox" name="rao_06" id="rao_06">
                <i></i>
              </div>
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
          <div class="c-check">
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="checkbox" name="rao_07" id="rao_07">
                <i></i>
              </div>
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
          <div class="c-check">
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="checkbox" name="rao_08" id="rao_08">
                <i></i>
              </div>
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
          <div class="c-check">
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="checkbox" name="rao_09" id="rao_09">
                <i></i>
              </div>
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
          <div class="c-check">
            <div class="c-check__conts">
              <div class="c-check__inner">
                <input type="checkbox" name="rao_10" id="rao_10">
                <i></i>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>`;

const tableCode2 = `<div class="c-table-wrap c-scrollbar horizontal">
<table class="c-table-type02">
  <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">품목명</th>
      <th scope="col">규격</th>
      <th scope="col">단위</th>
      <th scope="col" class="mobile">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_all" id="rao_all">
              <label for="rao_all">서비스구독</label>
              <i></i>
            </div>
          </div>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">5</td>
      <td class="title">철근</td>
      <td data-header="규격">250×1000×1000㎜</td>
      <td data-header="단위">kg</td>
      <td data-header="서비스구독">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_06" id="rao_06">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_07" id="rao_07">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_08" id="rao_08">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_09" id="rao_09">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_10" id="rao_10">
              <i></i>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>`;

const tableCode3 = `<div class="c-table-wrap c-scrollbar horizontal">
<table class="c-table-type02 gray mt-0">
  <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">품목명</th>
      <th scope="col">규격</th>
      <th scope="col">단위</th>
      <th scope="col" class="mobile">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_all" id="rao_all">
              <label for="rao_all">서비스구독</label>
              <i></i>
            </div>
          </div>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">5</td>
      <td class="title">철근</td>
      <td data-header="규격">250×1000×1000㎜</td>
      <td data-header="단위">kg</td>
      <td data-header="서비스구독">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_06" id="rao_06">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_07" id="rao_07">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_08" id="rao_08">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_09" id="rao_09">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_10" id="rao_10">
              <i></i>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>`;

const tableCode4 = `<div class="c-table-wrap c-scrollbar horizontal">
<table class="c-table-type03">
  <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">품목명</th>
      <th scope="col">규격</th>
      <th scope="col">단위</th>
      <th scope="col" class="mobile">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_all" id="rao_all">
              <label for="rao_all">서비스구독</label>
              <i></i>
            </div>
          </div>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">5</td>
      <td class="title">철근</td>
      <td data-header="규격">250×1000×1000㎜</td>
      <td data-header="단위">kg</td>
      <td data-header="서비스구독">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_06" id="rao_06">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_07" id="rao_07">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_08" id="rao_08">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_09" id="rao_09">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_10" id="rao_10">
              <i></i>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>`;

const tableCode5 = `<div class="c-table-wrap c-scrollbar horizontal">
<table class="c-table-type04">
  <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">품목명</th>
      <th scope="col">규격</th>
      <th scope="col">단위</th>
      <th scope="col" class="mobile">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_all" id="rao_all">
              <label for="rao_all">서비스구독</label>
              <i></i>
            </div>
          </div>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">5</td>
      <td class="title">철근</td>
      <td data-header="규격">250×1000×1000㎜</td>
      <td data-header="단위">kg</td>
      <td data-header="서비스구독">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_06" id="rao_06">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_07" id="rao_07">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_08" id="rao_08">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_09" id="rao_09">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_10" id="rao_10">
              <i></i>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>`;

const tableCode6 = `<div class="c-table-wrap c-scrollbar horizontal">
<table class="c-table-type05">
  <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">품목명</th>
      <th scope="col">규격</th>
      <th scope="col">단위</th>
      <th scope="col" class="mobile">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_all" id="rao_all">
              <label for="rao_all">서비스구독</label>
              <i></i>
            </div>
          </div>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">5</td>
      <td class="title">철근</td>
      <td data-header="규격">250×1000×1000㎜</td>
      <td data-header="단위">kg</td>
      <td data-header="서비스구독">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_06" id="rao_06">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_07" id="rao_07">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_08" id="rao_08">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_09" id="rao_09">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_10" id="rao_10">
              <i></i>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>`;

const tableCode7 = `<div class="c-table-wrap c-scrollbar horizontal">
<table class="c-table-type06">
  <caption>자재리스트로 번호, 품목명, 규격, 단위, 서비스구독 항목별 순서대로 안내하는 표입니다</caption>
  <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">품목명</th>
      <th scope="col">규격</th>
      <th scope="col">단위</th>
      <th scope="col" class="mobile">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_all" id="rao_all">
              <label for="rao_all">서비스구독</label>
              <i></i>
            </div>
          </div>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-header="번호">5</td>
      <td class="title">철근</td>
      <td data-header="규격">250×1000×1000㎜</td>
      <td data-header="단위">kg</td>
      <td data-header="서비스구독">
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_06" id="rao_06">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_07" id="rao_07">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_08" id="rao_08">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_09" id="rao_09">
              <i></i>
            </div>
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
        <div class="c-check">
          <div class="c-check__conts">
            <div class="c-check__inner">
              <input type="checkbox" name="rao_10" id="rao_10">
              <i></i>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>`;




</script>