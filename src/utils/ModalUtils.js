import { shallowReactive } from 'vue'

export function openModal(targetId) {
  const modal = document.getElementById(targetId)
  if (!modal) {
    console.warn(`[openModal] Modal "${targetId}" not found in DOM`)
    return
  }

  modal.style.display = '' 
  modal.classList.add('shown', 'in')
  document.body.classList.add('scroll-no')

  // Close when clicking outside the modal box
  // Supports both `.cdf-modal-box` and `.modal-box` markup
  if (!modal._overlayHandler) {
    modal._overlayHandler = (e) => {
      const clickedInsideBox = e.target?.closest?.('.cdf-modal-box, .modal-box')
      if (!clickedInsideBox) {
        closeModal(targetId)
      }
    }
    modal.addEventListener('click', modal._overlayHandler)
  }

  modal.querySelectorAll('.close-modal').forEach((btn) => {
    if (!btn._closeHandler) {
      btn._closeHandler = () => {
        closeModal(targetId)
      }
      btn.addEventListener('click', btn._closeHandler)
    } else {
    }
  })
}

export function closeModal(targetId) {
  const modal = document.getElementById(targetId)
  if (!modal) {
    console.warn(`[closeModal] No open modal found`)
    document.body.classList.remove('scroll-no');
    return
  }

  modal.classList.remove('in', 'shown')
  modal.style.display = 'none'
  document.body.classList.remove('scroll-no')

  modal.querySelectorAll('.close-modal').forEach((btn) => {
    if (btn._closeHandler) {
      btn.removeEventListener('click', btn._closeHandler)
      delete btn._closeHandler
    }
  })

  if (modal._overlayHandler) {
    modal.removeEventListener('click', modal._overlayHandler)
    delete modal._overlayHandler
  }
}

const modalPromises = new Map()
const modalStates = new Map()

/**
 * 모달 상태 생성 또는 가져오기
 * @param {string} modalId - 모달 ID
 * @returns {Object} - 해당 모달의 상태 객체
 */
export function getModalState(modalId = 'modal_alert') {
  if (!modalStates.has(modalId)) {
    modalStates.set(modalId, shallowReactive({})) 
  }
  return modalStates.get(modalId)
}

/**
 * Promise 기반 모달 열기 (범용)
 * @param {string} modalId - 모달 ID
 * @param {Object} data - 모달에 전달할 임의의 데이터 (자유 형식)
 * @returns {Promise<any>} - 모달에서 반환하는 값
 */
export function showModal(modalId, data = {}) {
  return new Promise((resolve) => {
    const modalState = getModalState(modalId)
    Object.assign(modalState, data)
    modalPromises.set(modalId, resolve)
    openModal(modalId)
  })
}

/**
 * 모달 결과 해결
 * @param {string} modalId - 모달 ID
 * @param {any} result - 결과값
 */
export function resolveModal(modalId, result) {
  const resolve = modalPromises.get(modalId)
  if (resolve) {
    resolve(result)
    modalPromises.delete(modalId)
  }
  
  closeModal(modalId)
  
  const modalState = modalStates.get(modalId)
  if (modalState) {
    Object.keys(modalState).forEach(key => {
      delete modalState[key]
    })
  }
}




// const confirmed = await showModal('modal_alert', {
//   modalMessage: '정말로 이 항목을 삭제하시겠습니까?',
//   showCancelButton: true
// })

// if (confirmed) {
//   // 삭제 로직
//   console.log('사용자가 확인을 눌렀습니다')
// } else {
//   console.log('사용자가 취소를 눌렀습니다')
// }

// // 알림 모달 (확인 버튼만)
// await showModal('modal_alert', {
//   modalMessage: '저장이 완료되었습니다.',
//   showCancelButton: false
// })