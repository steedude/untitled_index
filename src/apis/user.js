import request from '@/utils/request'

export function loginUserApi(data) {
  return request.post('/login', data)
}

export function logoutUserApi() {
  return request.post('/logout')
}

export function googleAuthApi(data) {
  return request.post('/googleAuth', data)
}

export function registerUserApi(data) {
  return request.post('/register', data)
}

export function getUserInfoApi() {
  return request.get('/user')
}

export function setUserInfoApi(data) {
  return request.post('/userSetting', data)
}
