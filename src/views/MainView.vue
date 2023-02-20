<template>
	<div>
		<Header />
		<div class="container" :class="{ showSidebar: isClosedSideBar }">
			<SideBar
				:isClosedSideBar="isClosedSideBar"
				@toggleSideBar="toggleSideBar"
			/>
			<ContentForm />
		</div>
	</div>
</template>

<script>
import Header from '@/components/common/HeaderForm';
import SideBar from '@/components/common/SideBar';
import ContentForm from '@/components/common/ContentForm';

export default {
	name: 'MainView',
	components: { ContentForm, SideBar, Header },
	computed: {},
	data() {
		return {
			isClosedSideBar: false,
		};
	},
	methods: {
		toggleSideBar() {
			this.isClosedSideBar = !this.isClosedSideBar;
		},
	},
};
</script>
