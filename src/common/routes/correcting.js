import { createRouter } from 'Client/bundle';
const Correcting = createRouter({
	load: () =>
		import('../pages/correcting')
});

const CommonIndex = createRouter({
	load: () =>
		import('../pages/index')
});


export default {
	title: '我的博客',
	path: '/',
	routes:[{
		title: '个人主页',
		path: '/setting',
		component: CommonIndex,
	},
	{
		title: '首页',
		path: '/home',
		component: Correcting,
	}
	]
}