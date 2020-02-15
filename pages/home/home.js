// pages/home/home.js
Page({
  data: {
    title: '默认title'
  },

  handlePushClick() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })

    // wx.redirectTo({
    //   url: '',
    // })

    // wx.switchTab({
    //   url: '',
    // })
  }
})