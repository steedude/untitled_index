const errorCode = {
  // errorCode為1000的時候，通常都會有message，message為後端回傳的錯誤訊息
  1001: 'missing information',
  1002: 'password and confirmPassword are not the same',
  1003: 'Duplicate username',
  1004: 'Incorrect username or password'
}

export default errorCode
