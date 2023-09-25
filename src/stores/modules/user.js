import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { loginUserApi, logoutUserApi, googleAuthApi } from '@/apis/user'
// import { registerUserApi, setUserInfoApi } from '@/apis/user'
import { loginUserApi, logoutUserApi } from '@/apis/user'
import { registerUserApi } from '@/apis/user'

const DEFAULT_IMAGE = 'https://randomuser.me/api/portraits/lego/0.jpg'

export default defineStore(
  'user',
  () => {
    const account = ref('')
    const updated = ref('')
    const isLogin = ref(false)

    function setToken(tokenStr) {
      isLogin.value = true
      localStorage.setItem('untitled_index_token', tokenStr)
    }

    function getToken() {
      return localStorage.getItem('untitled_index_token')
    }

    function setUserValueByData(serverUserData) {
      account.value = serverUserData.account
      updated.value = serverUserData.image || DEFAULT_IMAGE
    }

    // async function setUserInfo(nameStr, teamStr) {
    //   const userInfo = {}
    //   if (nameStr) userInfo.name = nameStr
    //   if (teamStr) userInfo.team = teamStr
    //   const res = await setUserInfoApi(userInfo)
    //   const { user } = res.data
    //   setUserValueByData(user)
    // }

    async function logoutUser() {
      await logoutUserApi()
      localStorage.removeItem('untitled_index_token')
      account.value = ''
      updated.value = ''
      isLogin.value = false
    }

    // async function loginUserByGoogle(data) {
    //   const res = await googleAuthApi(data)
    //   const { token, user } = res.data
    //   setToken(token)
    //   setUserValueByData(user)
    // }

    async function loginUser(data) {
      const res = await loginUserApi(data)
      const { token, user } = res.resultMap
      setToken(token)
      setUserValueByData(user)
    }

    async function registerUser(data) {
      await registerUserApi(data)
    }

    return {
      account,
      updated,
      isLogin,
      getToken,
      loginUser,
      logoutUser,
      // loginUserByGoogle,
      registerUser
      // setUserInfo
    }
  },
  {
    persist: true
  }
)
