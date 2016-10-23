import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import globalVal from './modules/global.val'
import articleList from './modules/article.list'
import user from './modules/user'
import apps from './modules/apps'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    globalVal,
    articleList,
    user,
    apps
  },
  actions,
  getters,
  strict: debug
})
