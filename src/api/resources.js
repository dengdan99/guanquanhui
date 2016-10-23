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
export const ArticleResource = Vue.resource(API_ROOT + 'api/moto_sale{/id}{/controller}')
export const DicResource = Vue.resource(API_ROOT + 'api/home/common')
