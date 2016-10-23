// import {API_ROOT} from '../../api/config.js'
import {
  UPDATE_LOADING,
  UPDATE_DIRECTION,
  UPDATE_PAGETITLE,
  UPDATE_TABBAR
} from '../mutation-types.js'

const state = {
  isLoading: false,
  direction: 'forward',
  pageTitle: '未知页面',
  showTabbar: true
}

const mutations = {
  [UPDATE_LOADING] (state, status) {
    state.isLoading = status
  },

  [UPDATE_DIRECTION] (state, direction) {
    state.direction = direction
  },

  [UPDATE_PAGETITLE] (state, title) {
    state.pageTitle = title
  },

  [UPDATE_TABBAR] (state, isShow) {
    state.showTabbar = isShow
  }
}

export default {
  state,
  mutations
}
