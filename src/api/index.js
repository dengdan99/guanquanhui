import {
  ArticleListResource,
  ArticleResource,
  UserInfoResource,
  DicResource,
  PatyResource,
  baikeResource,
  communityResource,
  clubResource,
  merchantResource,
  orderResource,
  orderListResource
} from './resources'

export const getArticleList = (id, options) => {
  return ArticleListResource.get({id, ...options})
}
export const getArticle = (id) => {
  return ArticleResource.get({id})
}
export const updateFrontUserInfo = (uid, options) => {
  return UserInfoResource.update({id: uid}, options)
}
export const getFrontUserInfo = (uid) => {
  return UserInfoResource.get({id: uid})
}
export const getDic = () => {
  return DicResource.get()
}
export const getPatyLIst = (options) => {
  return PatyResource.get({id: '', ...options})
}
export const getPaty = (pid) => {
  return PatyResource.get({id: pid})
}
export const getBaikeList = (options) => {
  return baikeResource.get(options)
}
export const getCommunityList = () => {
  return communityResource.get()
}
export const getClub = (id) => {
  return clubResource.get({id: id})
}
export const joinClub = (id, options) => {
  return clubResource.update({id: id}, options)
}
export const getMerchant = (id) => {
  return merchantResource.get({id: id})
}

export const getOrderList = () => {
  return orderListResource.get()
}
export const getOrder = (id) => {
  return orderResource.get({id})
}
export const newOrder = (options) => {
  return orderResource.save({id: ''}, options)
}
export const starOrder = (id, options) => {
  return orderResource.update({id}, options)
}
