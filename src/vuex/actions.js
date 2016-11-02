import * as api from '../api'
import * as types from './mutation-types'
import { getCookie } from '../libs/authService'

export const showLoading = ({ commit }) => {
  commit(types.UPDATE_LOADING, true)
}

export const hideLoading = ({ commit }) => {
  commit(types.UPDATE_LOADING, false)
}

export const goForward = ({ commit }) => {
  commit(types.UPDATE_DIRECTION, 'forward')
}

export const goReverse = ({ commit }) => {
  commit(types.UPDATE_DIRECTION, 'reverse')
}

export const setPageTitle = ({ commit }, title) => {
  commit(types.UPDATE_PAGETITLE, title)
}

export const showTabbar = ({ commit }) => {
  commit(types.UPDATE_TABBAR, true)
}

export const hideTabbar = ({ commit }) => {
  commit(types.UPDATE_TABBAR, false)
}

// getArticleList
export const getArticleList = ({ commit }, options) => {
  commit(types.REQUEST_ARTICLE_LIST)
  return api.getArticleList(options.id, options.param).then(response => {
    if (!response.ok) {
      return commit(types.GET_ARTICLE_LIST_FAILURE)
    }
    const json = response.data
    const isMore = !(json.results.length < options.itemsPerPage)
    options.isAdd
      ? commit(types.ADD_ARTICLE_LIST, {
        articleList: json.results,
        isMore: isMore
      })
      : commit(types.ARTICLE_LIST, {
        articleList: json.results,
        isMore: isMore
      })
  }, response => {
    commit(types.GET_ARTICLE_LIST_FAILURE)
  })
}

export const getDic = ({commit}) => {
  api.getDic().then(response => {
    const json = response.data
    Object.keys(json).forEach(key => {
      json[key] = Object.keys(json[key]).map(k => {
        return { name: json[key][k], value: k }
      })
    })
    commit(types.UPDATE_DIC, json)
  })
}

export const getUserInfo = ({commit}, uid) => {
  if (typeof uid === 'undefined') uid = getCookie('uid')
  return api.getFrontUserInfo(uid).then(response => {
    const json = response.data
    commit(types.UPDATE_USERINFO, json)
  })
}

export const updateUserInfo = ({ commit }, options) => {

}

// get patyList
export const getPatyList = ({ commit }, options) => {
  commit(types.REQUEST_PATY_LIST)
  return api.getPatyLIst(options.param).then(response => {
    if (!response.ok) {
      return commit(types.GET_PATY_LIST_FAILURE)
    }
    const json = response.data
    const isMore = !(json.results.length < options.itemsPerPage)
    options.isAdd
      ? commit(types.ADD_PATY_LIST, {
        patyList: json.results,
        isMore: isMore
      })
      : commit(types.PATY_LIST, {
        patyList: json.results,
        isMore: isMore
      })
  }, response => {
    commit(types.GET_PATY_LIST_FAILURE)
  })
}

export const getPaty = ({ commit }, pid) => {
  return api.getPaty(pid).then(response => {
    if (response.ok) {
      commit(types.PATY, response.data)
    }
  })
}

export const getBaikeList = ({commit, state}, options) => {
  commit(types.REQUEST_BAIKE_LIST)
  let keyword = state.baike.sreach.keyword
  let areaId = state.baike.sreach.district.length > 0 ? state.baike.sreach.district[0] : 0
  let typeId = state.baike.sreach.type.length > 0 ? state.baike.sreach.type[0] : 0
  let isMore = true
  return api.getBaikeList({ ...options.pageParam, keyword, areaId, typeId }).then(response => {
    if (!response.ok) {
      return commit(types.GET_BAIKE_LIST_FAILURE)
    }
    const json = response.data
    const count = json.results.length
    if (count === 0) {
      isMore = false
    } else {
      isMore = !(json.results.length < options.itemsPerPage)
    }
    options.isAdd
      ? commit(types.ADD_BAIKE_LIST, {
        baikeList: json.results,
        isMore: isMore
      })
      : commit(types.BAIKE_LIST, {
        baikeList: json.results,
        isMore: isMore
      })
  }, response => {
    commit(types.GET_BAIKE_LIST_FAILURE)
  })
}

export const getCommunityList = ({commit}) => {
  return api.getCommunityList().then(response => {
    const json = response.data
    commit(types.COM_LIST, {
      compList: json
    })
  })
}

