<template>
	<div id="wrap">
		<div class="style-guide-wrap">
			<Sidebar />
			<OptionMenu :isActive="isOptionMenuActive" @close="closeOptionMenu" />
			<div class="right-cont-zone cdf-scrollbar">
				<router-view />
			</div>
			<button type="button" class="cdf-btn size-m rounded btn-setting" :class="isOptionMenuActive ? 'close' : ''" @click="toggleOptionMenu">
				<i class="material-symbols-rounded">settings</i>
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue';
import RightTop from './components/RightTop.vue';
import OptionMenu from './components/OptionMenu.vue';

const isOptionMenuActive = ref(false);

function toggleOptionMenu() {
	isOptionMenuActive.value = true;
}

function closeOptionMenu() {
	isOptionMenuActive.value = false;
}

// 옵션 메뉴 영역 밖 클릭 시 닫기
onMounted(() => {
	document.addEventListener('click', (event) => {
		const optionMenuElement = document.querySelector('.option-menu-zone');
		const settingButtonElement = document.querySelector('.btn-setting');
		if (isOptionMenuActive.value && optionMenuElement && !optionMenuElement.contains(event.target) && !settingButtonElement.contains(event.target)) {
			isOptionMenuActive.value = false;
		}
	});
});
</script>