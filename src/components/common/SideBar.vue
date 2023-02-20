<template>
	<div class="sidebar">
		<aside>
			<div class="lnbToggle" @click="toggleSideBar"></div>
			<div class="osullocArea" :class="{ showSidebar: isClosedSideBar }"></div>
			<ul class="leftMenu">
				<li>
					<span class="accordionTitle active">
						대시보드
						<!-- <span class="accIcon"></span> -->
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						주문관리
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit">주문관리</span></li>
						<li><span class="subTit">배송관리</span></li>
						<li>
							<span class="subTit on">
								클래임관리
								<ul class="subMenu3depth">
									<li class="selected"><span> 클래임 관리</span></li>
									<li><span> 클래임 상품현황</span></li>
								</ul>
							</span>
						</li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						상품관리
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						회원관리
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						전시관리
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						프로모션
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						다다일상
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						예약관리
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						고객문의
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						컨텐츠관리
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						베이커리
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						통계
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
				<li>
					<span class="accordionTitle">
						관리기능
						<span class="accIcon"></span>
					</span>
					<ul class="subMenu">
						<li><span class="subTit"></span></li>
					</ul>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
export default {
	name: 'SideBar',
	props: {
		isClosedSideBar: {
			type: Boolean,
			default: true,
		},
	},
	computed: {},
	methods: {
		toggleSideBar() {
			this.$emit('toggleSideBar');
		},
		click() {
			console.log('hello');
		},
	},
};
</script>

<style scoped></style>
