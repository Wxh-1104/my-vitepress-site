import DefaultTheme from 'vitepress/theme'
import './custom.css'

import { Icon } from '@iconify/vue'

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    app.component('Icon', Icon)
  }
}
