export const requireAuth = () => (from, to, next) => {
	console.log('hello');
	// 로그인 정보가 있으면 next
	// eslint-disable-next-line no-constant-condition
	if ('login' !== 'login') {
		return next();
	}
	next('/login');
};
