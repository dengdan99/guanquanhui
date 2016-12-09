<template>
  <div>{{info}}
  </div>
</template>

<script>
import { go } from '../libs/router'
import * as auth from '../libs/authService'
import { mapActions } from 'vuex'

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
    ...mapActions([
      'getMenuList'
    ]),
    login (uid, token) {
      auth.saveCookie('uid', uid)
      auth.saveCookie('token', token)
      this.getMenuList()
      if (typeof auth.getCookie('startPage') !== 'undefined') {
        console.log(auth.getCookie('startPage'))
        this.goto(auth.getCookie('startPage'))
        auth.getCookie('startPage', '')
      } else {
        this.goto('/')
      }
    },
    goto (path) {
      go(path, this.$router)
    }
  }
}
</script>