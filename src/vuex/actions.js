import * as api from '../api'
import * as types from './mutation-types'

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
  api.getFrontArticleList(options).then(response => {
    if (!response.ok) {
      return commit(types.GET_ARTICLE_LIST_FAILURE)
    }
    const json = response.data
    const isMore = !(json.data.length < options.itemsPerPage)
    options.isAdd
      ? commit(types.ADD_ARTICLE_LIST, {
        articleList: json.data,
        isMore: isMore
      })
      : commit(types.ARTICLE_LIST, {
        articleList: json.data,
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
  return api.getFrontUserInfo(uid).then(response => {
    const json = response.data
    commit(types.UPDATE_USERINFO, json)
  })
}

export const updateUserInfo = ({ commit }, options) => {

}
