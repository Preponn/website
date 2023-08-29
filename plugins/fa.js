import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faFacebook)
library.add(faInstagram)
library.add(faLinkedinIn)
library.add(faYoutube)
library.add(faCircle)
library.add(faEnvelope)
library.add(faPhone)
library.add(faWhatsapp)


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})