import {
  ARTICLE_LIST,
  ADD_ARTICLE_LIST,
  REQUEST_ARTICLE_LIST,
  GET_ARTICLE_LIST_FAILURE
} from '../mutation-types'

const state = {
  isFetching: false,
  isMore: true,
  items: []
}

const mutations = {
  [ARTICLE_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.articleList
  },
  [ADD_ARTICLE_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = [...state.items, ...action.articleList]
  },
  [REQUEST_ARTICLE_LIST] (state) {
    state.isFetching = true
  },
  [GET_ARTICLE_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
