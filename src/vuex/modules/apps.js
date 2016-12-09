import {
  UPDATE_DIC,
  UPDATE_MENU1
} from '../mutation-types.js'

const state = {
  dic: {
    area: [],
    feature: [],
    profession: [],
    sex: [],
    yn: []
  },
  menuData1: [
    {id: 1, name: '空白', mode: 3}
  ]
}

const mutations = {
  [UPDATE_DIC] (state, status) {
    state.dic = status
  },
  [UPDATE_MENU1] (state, status) {
    state.menuData1 = status
  }
}

export default {
  state,
  mutations
}
