import {
  UPDATE_USERINFO
} from '../mutation-types.js'
const state = {
  info: {
    id: 0,
    open_id: 0,
    nickname: '',
    sex: 0,
    area_id: 0,
    avator: '',
    profession_id: 0,
    mobile: '',
    birthday: '',
    feature_id: 0,
    integral: 0,
    is_volunteer: 0,
    is_gived: 0,
    created_at: '',
    updated_at: ''
  }
}

const mutations = {
  [UPDATE_USERINFO] (state, status) {
    state.info = status
  }
}

export default {
  state,
  mutations
}
