import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from './config'
import store from '../vuex'
import { getCookie, signOut } from '../libs/authService'

Vue.use(VueResource)
const weixinLogin = 'http://hh.wangziqing.cc/api/wechat/oauth2'
// HTTP相关
// Vue.http.options.crossOrigin = true
// Vue.http.options.credentials = true
// Vue.http.options.xhr = {
//   withCredentials: 'true'
// }
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((request, next) => {
  // 这里对请求体进行处理
  store.dispatch('showLoading')
  if (getCookie('token')) {
    // request.params.token = getCookie('token')
    // request.headers.common['Token'] = getCookie('token')
    // request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^")|("$)/g, '')
    request.headers.map['X-Auth-Token'] = [getCookie('token')]
    // console.log(request.headers)
  } else {
    // window.location = weixinLogin
  }
  // request.headers.Authorization = 'Bearer '
  next((response) => {
    store.dispatch('hideLoading')
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location = weixinLogin
    }
  })
})
export const PackResource = Vue.resource(API_ROOT + 'api/wechat/package')

export const UserInfoResource = Vue.resource(API_ROOT + 'api/user{/id}')
export const UserRankResource = Vue.resource(API_ROOT + 'api/user/intergral/rank{/controller}')
export const UserPassiveResource = Vue.resource(API_ROOT + 'api/sustain/passive{/controller}')
export const UserSupportResource = Vue.resource(API_ROOT + 'api/sustain/support{/id}')
export const VolunteerRuleResource = Vue.resource(API_ROOT + 'api/volunteer/rule')

export const TypeResource = Vue.resource(API_ROOT + 'api/type{/id}')
export const ArticleListResource = Vue.resource(API_ROOT + 'api/article/list{/id}{/controller}')
export const ArticleResource = Vue.resource(API_ROOT + 'api/article/detail{/id}')
export const ArticleHomeResource = Vue.resource(API_ROOT + 'api/article/home{/controller}')
export const ArticleLatestResource = Vue.resource(API_ROOT + 'api/article/latest')
export const ArticleDatesResource = Vue.resource(API_ROOT + 'api/article/dates{/controller}')

export const DicResource = Vue.resource(API_ROOT + 'api/home/common')
export const PatyLastResource = Vue.resource(API_ROOT + 'api/activity/latest')
export const LatestLastResource = Vue.resource(API_ROOT + 'api/theme/latest/first')

export const PatyResource = Vue.resource(API_ROOT + 'api/activity{/id}{/controller}')
export const PatyAboutResource = Vue.resource(API_ROOT + 'api/activity/about')
export const baikeResource = Vue.resource(API_ROOT + 'api/baike{/controller}')
export const telResource = Vue.resource(API_ROOT + 'api/telephone')

export const communityResource = Vue.resource(API_ROOT + 'api/merchant_club{/controller}')
export const clubListResource = Vue.resource(API_ROOT + 'api/club')
export const clubResource = Vue.resource(API_ROOT + 'api/club{/id}')
export const merchantResource = Vue.resource(API_ROOT + 'api/merchant{/id}')
export const clubBossResource = Vue.resource(API_ROOT + 'api/club/boss{/id}')

export const orderResource = Vue.resource(API_ROOT + 'api/complaint{/id}{/controller}')
export const orderListResource = Vue.resource(API_ROOT + 'api/complaint{/controller}')
export const orderMyListResource = Vue.resource(API_ROOT + 'api/complaint/mine{/controller}')

export const volunteerStateResourec = Vue.resource(API_ROOT + 'api/volunteer/state{/uid}')
export const volunteerResourec = Vue.resource(API_ROOT + 'api/volunteer')

export const toupiaoIssuelistResourec = Vue.resource(API_ROOT + 'api/issue/theme{/id}')
export const toupiaoIssueResourec = Vue.resource(API_ROOT + 'api/record/issue{/tid}/solution{/pid}')
export const toupiaoDetailResourec = Vue.resource(API_ROOT + 'api/theme{/id}')
export const toupiaoListResourec = Vue.resource(API_ROOT + 'api/theme{/controller}')
