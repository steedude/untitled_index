import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginUserApi, logoutUserApi, googleAuthApi } from '@/apis/user'
import { registerUserApi, setUserInfoApi } from '@/apis/user'

const DEFAULT_IMAGE = 'https://randomuser.me/api/portraits/lego/0.jpg'

export default defineStore(
  'user',
  () => {
    const account = ref('')
    const name = ref('')
    const image = ref('')

    function setToken(tokenStr) {
      localStorage.setItem('untitled_index_token', tokenStr)
    }

    function getToken() {
      return localStorage.getItem('untitled_index_token')
    }

    function setUserValueByData(serverUserData) {
      account.value = serverUserData.account
      name.value = serverUserData.name
      image.value = serverUserData.image || DEFAULT_IMAGE
    }

    async function setUserInfo(nameStr, teamStr) {
      const userInfo = {}
      if (nameStr) userInfo.name = nameStr
      if (teamStr) userInfo.team = teamStr
      const res = await setUserInfoApi(userInfo)
      const { user } = res.data
      setUserValueByData(user)
    }

    async function logoutUser() {
      await logoutUserApi()
      localStorage.removeItem('untitled_index_token')
      account.value = ''
      name.value = ''
      image.value = DEFAULT_IMAGE
    }

    async function loginUserByGoogle(data) {
      const res = await googleAuthApi(data)
      const { token, user } = res.data
      setToken(token)
      setUserValueByData(user)
    }

    async function loginUser(data) {
      const res = await loginUserApi(data)
      const { token, user } = res.data
      setToken(token)
      setUserValueByData(user)
    }

    async function registerUser(data) {
      const res = await registerUserApi(data)
      const { token, user } = res.data
      setToken(token)
      setUserValueByData(user)
    }

    return {
      account,
      name,
      image,
      getToken,
      loginUser,
      logoutUser,
      loginUserByGoogle,
      registerUser,
      setUserInfo
    }
  },
  {
    persist: true
  }
)
