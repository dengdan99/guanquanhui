import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import globalVal from './modules/global.val'
import article from './modules/article'
import user from './modules/user'
import apps from './modules/apps'
import paty from './modules/paty'
import baike from './modules/baike'
import community from './modules/community'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    globalVal,
    article,
    user,
    apps,
    paty,
    baike,
    community
  },
  actions,
  getters,
  strict: debug
})
