import {
  PATY,
  PATY_LIST,
  ADD_PATY_LIST,
  REQUEST_PATY_LIST,
  GET_PATY_LIST_FAILURE
} from '../mutation-types'

const state = {
  isFetching: false,
  isMore: true,
  items: [],
  paty: {}
}

const mutations = {
  [PATY] (state, action) {
    state.paty = action
  },
  [PATY_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.patyList
  },
  [ADD_PATY_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = [...action.patyList, ...state.items]
  },
  [REQUEST_PATY_LIST] (state) {
    state.isFetching = true
  },
  [GET_PATY_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
