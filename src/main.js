// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import './styles.css'

export default function (Vue, { router, head, isClient }) {

  // 注入环境变量
  Vue.mixin({
    computed: {
      domain() {
        return process.env.GRIDSOME_API_URL
      }
    }
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
