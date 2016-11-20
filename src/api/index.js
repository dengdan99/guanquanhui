import {
  PackResource,
  ArticleListResource,
  ArticleResource,
  UserInfoResource,
  UserPassiveResource,
  UserSupportResource,
  DicResource,
  PatyResource,
  baikeResource,
  communityResource,
  clubResource,
  clubListResource,
  clubBossResource,
  merchantResource,
  orderResource,
  orderListResource,
  orderMyListResource,
  TypeResource,
  ArticleHomeResource,
  ArticleLatestResource,
  ArticleDatesResource,
  PatyAboutResource,
  volunteerStateResourec,
  volunteerResourec,
  UserRankResource,
  telResource,
  VolunteerRuleResource,
  PatyLastResource,
  LatestLastResource,
  toupiaoIssuelistResourec,
  toupiaoIssueResourec,
  toupiaoDetailResourec,
  toupiaoListResourec

} from './resources'

export const getPack = () => {
  return PackResource.get()
}
export const getArticleList = (id, options) => {
  return ArticleListResource.get({id, ...options})
}
export const getArticle = (id) => {
  return ArticleResource.get({id})
}
export const getArticleLatest = () => {
  return ArticleLatestResource.get()
}
export const getArticleDates = (options) => {
  return ArticleDatesResource.get(options)
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
export const getAboutList = (options) => {
  return PatyAboutResource.get(options)
}
export const getPaty = (pid) => {
  return PatyResource.get({id: pid})
}
export const signupPaty = (pid, options) => {
  return PatyResource.save({id: pid}, options)
}
export const getBaikeList = (options) => {
  return baikeResource.get(options)
}
export const getCommunityList = () => {
  return communityResource.get()
}
export const getClubList = () => {
  return clubListResource.get()
}
export const getClub = (id) => {
  return clubResource.get({id: id})
}
export const joinClub = (id, options) => {
  return clubResource.update({id: id}, options)
}
export const clubBoss = (id, options) => {
  return clubBossResource.save({id: id}, options)
}
export const getMerchant = (id) => {
  return merchantResource.get({id: id})
}
export const getOrderList = (options) => {
  return orderListResource.get(options)
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
export const getorderMyListResource = () => {
  return orderMyListResource.get()
}
export const getorderUserPassive = (options) => {
  return UserPassiveResource.get(options)
}
export const getAllList = () => {
  return TypeResource.get({id: ''})
}
export const getAdList = (id) => {
  return TypeResource.get({id})
}
export const getHomeAritcle = (options) => {
  return ArticleHomeResource.get(options)
}
export const volunteerState = (uid) => {
  return volunteerStateResourec.get({uid})
}
export const volunteer = (options) => {
  return volunteerResourec.save(options)
}
export const getUserRank = (options) => {
  return UserRankResource.get(options)
}
export const getTelResource = () => {
  return telResource.get()
}
export const getUserSupport = (id) => {
  return UserSupportResource.get({id})
}
export const getVolunteerRule = () => {
  return VolunteerRuleResource.get()
}
export const getPatyLast = () => {
  return PatyLastResource.get()
}
export const getLatestLast = () => {
  return LatestLastResource.get()
}
export const getIssuelist = (id) => {
  return toupiaoIssuelistResourec.get({id})
}
export const getIssue = (tid, pid) => {
  return toupiaoIssueResourec.get({tid, pid})
}
export const getToupiaoDetail = (id) => {
  return toupiaoDetailResourec.get({id})
}
export const getToupiaoList = (options) => {
  return toupiaoListResourec.get({...options})
}
