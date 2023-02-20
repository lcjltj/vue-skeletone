<template>
	<p @click="go">Login</p>
</template>

<script>
export default {
	name: 'LoginView',
	methods: {
		go() {
			console.log('hello');
		},
	},
};
</script>

<style scoped></style>
