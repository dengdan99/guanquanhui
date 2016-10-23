// global getter
export const route = state => state.route
export const isLoading = state => state.globalVal.isLoading
export const direction = state => state.globalVal.direction
export const pageTitle = state => state.globalVal.pageTitle
export const showTabbar = state => state.globalVal.showTabbar

// article getter
export const articleList = state => state.articleList.items
export const articleIsMore = state => state.articleList.isMore

export const userInfo = state => state.user.info

export const dic = state => state.apps.dic
