import req from '../../utils/network.js'

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.原生方法
    //request_origon()

    //2.封装后的网络请求
    req({
      url: 'https://dev.hinounou.vip/public/api/Customer/doLogin',
      method: "POST",
      data: {
        username: "18516046839",
        password: "123456",
        regid: "0",
        lang: "en",
        os: "ios",
        vers: "2"
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  request_origon() {
    wx.request({
      url: 'https://dev.hinounou.vip/public/api/Customer/doLogin',
      method: "POST",
      data: {
        username: "18516046839",
        password: "123456",
        regid: "0",
        lang: "en",
        os: "ios",
        vers: "2"
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})