const cookieScripts = {
	necessary: [],
	analytics: [],
	marketing: [],
	functional: [],
};

export default defineNuxtConfig({
	app: {
		head: {
			title: 'Myelophone App Custom Title',
			meta: [
				{
					name: 'description',
					content:
						'Welcome to our new amazing website where you can explore exciting content and features!',
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			cookieScripts,
			cookieControl: {
				enabled: true,
			},
			bundleTranslations: true,
			splitCss: true,
			stores: {
				cart: false,
				user: false,
			},
			frankfurterCurrencies: [],
			frankfurterBaseCurrency: 'USD',
			creativeCursor: false,
		},
	},
});
