import {
  UPDATE_DIC
} from '../mutation-types.js'

const state = {
  dic: {
    area: [],
    feature: [],
    profession: [],
    sex: [],
    yn: []
  }
}

const mutations = {
  [UPDATE_DIC] (state, status) {
    state.dic = status
  }
}

export default {
  state,
  mutations
}
