import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import * as auth from './libs/authService'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)
Vue.config.devtools = true

import Device from './plugins/device'
import ToastPlugin from './plugins/toast'
import AlertPlugin from './plugins/alert'
// $device
Vue.use(Device)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

const router = new Router({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

/**
* sync router params
*/
import { sync } from 'vuex-router-sync'
import store from './vuex'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

if (process.env.NODE_ENV !== 'production') {
  auth.saveCookie('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJzaGEyNTYifQ==.eyJpc3MiOiJLZW5ueSBIdSBKV1QiLCJpYXQiOjE0Nzk4ODQwMTUsImV4cCI6MTQ3OTg5MTIxNSwiYXVkIjoicWQuaGgud2FuZ3ppcWluZy5jYyIsInN1YiI6IkpvaG4gV3UgSldUIiwidWlkIjozMH0=.ced24c5697322c0553bc60270636e94e580d8103077fbd904339bf5e2de10803')
  auth.saveCookie('uid', 24)
}

/**
* sync router loading status
*/
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (!/login/.test(to.path)) {
    if (!auth.isLogin()) {
      auth.saveCookie('startPage', to.path)
      Vue.$vux.toast.show({
        type: 'text',
        text: '正在获取微信授权，请稍后...'
      })
      setTimeout(() => (
        window.location.href = 'http://hh.wangziqing.cc/api/wechat/oauth2'
      ), 2000)
      return
    }
  }

  if (toIndex) {
    if (toIndex > fromIndex) {
      store.dispatch('goForward')
    } else {
      store.dispatch('goReverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.dispatch('goForward')
  }
  store.dispatch('showLoading')
  setTimeout(next, 50)
})
router.afterEach(() => {
  store.dispatch('hideLoading')
})

sync(store, router)

import { map } from './router.map.js'

router.map(map)

// save position for demo page
// let demoScrollTop = 0
// function saveDemoScrollTop () {
//   console.log(demoScrollTop)
//   demoScrollTop = window.scrollY
// }

// router.beforeEach(function (transition) {
//   if (transition.to.fullPath !== '/demo') {
//     window.removeEventListener('scroll', saveDemoScrollTop, false)
//   }
//   if (/\/http/.test(transition.to.path)) {
//     let url = transition.to.path.split('http')[1]
//     window.location.href = `http${url}`
//   } else {
//     if (/\/demo\/component\/\w+/.test(transition.to.path)) {
//       router.go({
//         replace: true,
//         path: transition.to.path.replace('/demo', ''),
//         append: false
//       })
//     } else {
//       transition.next()
//     }
//   }
// })

// router.afterEach(function (transition) {
//   if (transition.to.path !== '/demo') {
//     window.scrollTo(0, 0)
//   } else {
//     window.removeEventListener('scroll', saveDemoScrollTop, false)
//     // if from component page
//     if (demoScrollTop && /component/.test(transition.from.path)) {
//       setTimeout(function () {
//         window.scrollTo(0, demoScrollTop)
//       }, 100)
//     }
//     setTimeout(function () {
//       window.addEventListener('scroll', saveDemoScrollTop, false)
//     }, 1000)
//   }
// })

router.start(App, '#app')
