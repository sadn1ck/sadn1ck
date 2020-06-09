import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faCheck, faLaptop, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { fab, faFacebook, faFacebookSquare, faTwitter, faTwitterSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faCheckCircle } from '@fortawesome/fontawesome-free-regular'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fab, fas)
library.add(faFacebook, faFacebookSquare, faTwitter, faTwitterSquare, faGooglePlusSquare)
library.add(faCircle, faCheckCircle, faCheck, faLaptop, faUniversity)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
