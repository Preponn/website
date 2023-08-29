export default defineNuxtConfig({
	build: {
		transpile: [
		  '@fortawesome/vue-fontawesome',
		  '@fortawesome/fontawesome-svg-core',
		  '@fortawesome/pro-solid-svg-icons',
		  '@fortawesome/pro-regular-svg-icons',
		  '@fortawesome/free-brands-svg-icons'
		]
	  },
	devtools: { enabled: true },
	modules: [
		"@nuxt/content",
		['nuxt-mail', {
			message: {
				to: 'harshasterhk@gmail.com',
			},
			smtp: {
				host: 'smtp-relay.sendinblue.com',
				port: 587,
				auth: {
					user: '31hk12@gmail.com',
					pass: 'npxqzcZjXOs9PCa3'
				},
			},
		}]
	],
	app: {
		head: {
			title: "Preponn",
			link: [ { rel: "icon", type: "image/png", href: "/logo.png" } ]
		}
	},
	plugins: [
		{ src: "~/plugins/fa.js", mode: "client"},
		{ src: "~/plugins/bs.js", mode: "client" },
	]
})