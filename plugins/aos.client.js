import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    disable: 'none',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    debounceDelay: 10,
    offset: 10,
    delay: 0,
    duration: 500,
    mirror: true,
  })
}
