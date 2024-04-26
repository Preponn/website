export default ({
	target : 'static',
	generate : {
		routes : [
			"/course/sat",
			"/course/act",
			"/course/amc-8",
			"/course/gre",
		]
	},
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
	modules: ["@nuxt/content"],
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