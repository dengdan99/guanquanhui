// global getter
export const route = state => state.route
export const isLoading = state => state.globalVal.isLoading
export const direction = state => state.globalVal.direction
export const pageTitle = state => state.globalVal.pageTitle
export const showTabbar = state => state.globalVal.showTabbar

// article getter
export const articleList = state => state.article.items
export const articleIsMore = state => state.article.isMore

export const userInfo = state => state.user.info

export const dic = state => state.apps.dic
export const menuData1 = state => {
  return state.apps.menuData1.map(item => {
    let _link = ''
    if (item.mode === 3) {
      if (item.id === 0) {
        _link = '/paty/index'
      } else {
        _link = '/paty/detail/' + item.id
      }
    } else {
      _link = '/article/list/' + item.id
    }
    return {
      text: item.name,
      link: _link
    }
  })
}

export const patyList = state => state.paty.items
export const patyIsMore = state => state.paty.isMore
export const paty = state => state.paty.paty

export const sreachData = state => state.baike.sreach
export const baikeList = state => state.baike.items
export const baikeIsMore = state => state.baike.isMore

export const commList = state => {
  const items = state.community.items
  let comp = { list1: [], list2: [], list3: [] }
  items.forEach(it => {
    if (it.type === 1) comp.list1.push(it)
    if (it.type === 2) comp.list2.push(it)
    if (it.type === 3) comp.list3.push(it)
  })
  return comp
}
