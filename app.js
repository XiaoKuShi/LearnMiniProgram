const kToken = 'token'

App({
  globalData: {
    token: ''
  },
  onLaunch: function () {
    //1. 从本地存储中取出token
    const token = wx.getStorageSync(kToken)
    console.log('token: ' + token)
    //2. 判断token是否存在
    if (token && token.length !== 0) {
      //3. 已有token, 验证是否过期

    } else {
      //4. 没有token, 重新登录
      this.login()
    }
  },

  login() {
    wx.login({
      success: (res) => {
        //1. 取出token
        const code = res.code;

        //2. 存储到全局变量
        this.globalData.token = code

        //3. 存储到本地
        wx.setStorageSync(kToken, code)
      }
    })
  }
})
