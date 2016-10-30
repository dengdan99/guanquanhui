import {
  UPDATE_SREACH,
  BAIKE_LIST,
  ADD_BAIKE_LIST,
  REQUEST_BAIKE_LIST,
  GET_BAIKE_LIST_FAILURE
} from '../mutation-types'

const state = {
  sreach: {
    keyword: '',
    district: [],
    type: []
  },
  isFetching: false,
  isMore: true,
  items: []
}

const mutations = {
  [UPDATE_SREACH] (state, action) {
    state.sreach = action.sreachData
  },
  [BAIKE_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.baikeList
  },
  [ADD_BAIKE_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = [...state.items, ...action.baikeList]
  },
  [REQUEST_BAIKE_LIST] (state) {
    state.isFetching = true
  },
  [GET_BAIKE_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
