import { ArticleResource, UserInfoResource, DicResource } from './resources'

export const getFrontArticleList = (options) => {
  return ArticleResource.get({id: 'getList', ...options})
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
