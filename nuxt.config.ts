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
				to: ['harshasterhk@gmail.com','study@preponn.com']
			},
			smtp: {
				host: process.env.PREPONN_WEB_MAIL_HOST,
				port: process.env.PREPONN_WEB_MAIL_PORT,
				auth: {
					user: process.env.PREPONN_WEB_MAIL_USERNAME,
					pass: process.env.PREPONN_WEB_MAIL_PASSWORD
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