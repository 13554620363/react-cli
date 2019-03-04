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
	title: '作业',
	path: '/',
	routes:[{
		title: 'test',
		path: '/test',
		component: CommonIndex,
	},
	{
		title: 'a',
		path: '/a',
		component: Correcting,
	}
	]
}