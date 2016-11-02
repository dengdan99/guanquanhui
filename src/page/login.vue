<template>
  <div>{{info}}
  </div>
</template>

<script>
import { go } from '../libs/router'
import * as auth from '../libs/authService'

export default {
  components: {
  },
  data () {
    return {
      info: ''
    }
  },
  ready () {
    this.login(this.$route.params.uid, this.$route.params.token)
  },
  methods: {
    login (uid, token) {
      auth.saveCookie('uid', uid)
      auth.saveCookie('token', token)
      if (typeof auth.getCookie('startPage') !== 'undefined') {
        console.log(auth.getCookie('startPage'))
        this.goto(auth.getCookie('startPage'))
        auth.getCookie('startPage', '')
      } else {
        this.goto('/user/index')
      }
    },
    goto (path) {
      go(path, this.$router)
    }
  }
}
</script>