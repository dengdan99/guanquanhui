import {
  COMP,
  COMT,
  COMB,
  COM_LIST
} from '../mutation-types'

const state = {
  items: [],
  comp: {},
  comt: {},
  comb: {}
}

const mutations = {
  [COMP] (state, action) {
    state.comp = action
  },
  [COMT] (state, action) {
    state.comt = action
  },
  [COMB] (state, action) {
    state.comb = action
  },
  [COM_LIST] (state, action) {
    state.items = action.compList
  }
}

export default {
  state,
  mutations
}
