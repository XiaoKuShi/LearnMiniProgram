// pages/home/home.js
Page({
  onShareAppMessage: function(options) {
    return {
      title: '你好啊，小乐乐',
      path: '/pages/home/home',
      imageUrl: '/asserts/002.jpg'
    }
  },

  handleShowToast1() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 3000
    })
  },
  handleShowToast2() {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 3000
    })
  },
  handleShowToast3() {
    wx.showToast({
      title: '今天是个好日子，天气好极了',
      icon: 'none',
      duration: 3000
    })
  },
  handleShowModal1() {
    wx.showModal({
      title: '提示',
      content: '是否要退出登录',
      showCancel: true,
      cancelText: '取消吧',
      cancelColor: '#222222',
      confirmText: '就退咋地',
      confirmColor: '#ff0000',
      success: function(res) {
        console.log('modal弹出成功')
        if(res.cancel) {
          console.log('点击了取消')
        }
        if (res.confirm) {
          console.log('点击了确定')
        }
      },
      fail: function() {
        console.log('modal弹出失败')
      },
      complete: function() {
        console.log('不知道modal有没有弹出')
      }
    })
  },
  handleShowLoading1() {
    wx.showLoading({
      title: '等待中...',
      mask: true
    })
    //需要手动隐藏
    setTimeout(()=> {
      wx.hideLoading()
    }, 2000)
  },
  handleShowAction1() {
    wx.showActionSheet({
      itemList: ['1','2','3'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }
})