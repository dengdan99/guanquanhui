import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from './config'
import { getCookie, signOut } from '../libs/authService'

Vue.use(VueResource)

// HTTP相关
// Vue.http.options.crossOrigin = true
// Vue.http.options.credentials = true
// Vue.http.options.xhr = {
//   withCredentials: 'true'
// }
Vue.http.interceptors.push((request, next) => {
  // 这里对请求体进行处理
  if (getCookie('token')) {
    request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^")|("$)/g, '')
  }
  request.headers.Authorization = 'Bearer '
  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      signOut()
      window.location.pathname = '/login'
    }
  })
})

export const UserInfoResource = Vue.resource(API_ROOT + 'api/user{/id}')
export const ArticleListResource = Vue.resource(API_ROOT + 'api/article/list{/id}{/controller}')
export const ArticleResource = Vue.resource(API_ROOT + 'api/article/detail{/id}')
export const DicResource = Vue.resource(API_ROOT + 'api/home/common')
export const PatyResource = Vue.resource(API_ROOT + 'api/activity{/id}{/controller}')
export const baikeResource = Vue.resource(API_ROOT + 'api/baike{/controller}')
export const communityResource = Vue.resource(API_ROOT + 'api/merchant_club{/controller}')
export const clubResource = Vue.resource(API_ROOT + 'api/club{/id}')
export const merchantResource = Vue.resource(API_ROOT + 'api/merchant{/id}')

export const orderResource = Vue.resource(API_ROOT + 'api/complaint{/id}{/controller}')
export const orderListResource = Vue.resource(API_ROOT + 'api/complaint/mine')
