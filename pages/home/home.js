// pages/home/home.js

Page({
  data: {
    userInfo: [],
    list: [],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    var that = this

    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    var that = this
    that.setData({
      userInfo: res.userInfo
    })
  },

  click123123() {
    console.log("123123被点击了")
  },

  onShow: function() {
    var that = this
    var url1 = "http://ios.zmzapi.com/index.php?accesskey=519f9cab85c8059d17544947k361a827&client=1&g=api/v3&m=index&a=article_list&page=0&token=edc3c80aed456c1266237e555b5bf218&uid=5704761"
    var url2 = "http://ctrl.zmzapi.net/app/ads?platform=7&ver=252"
    wx.request({
      url: url1,
      success (res) {
        console.log(res.data.data)
        that.setData({
          list: res.data.data
        })
      }
    })
  },

  onPageScroll (obj){
    console.log(obj)
  }
})