import { requireAuth } from '@/router/require';

export const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../../views/LoginView.vue'),
	},
	{
		path: '/',
		name: 'main',
		component: () => import('../../views/MainView.vue'),
		beforeEnter: requireAuth(),
	},
];
