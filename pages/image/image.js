// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: ""
  },

  handleChooseAlbum() {
    //打开系统相册
    wx.chooseImage({
      success: (res)=> {
        const url = res.tempFilePaths[0]
        this.setData({
          imageUrl: url
        })
      },
    })
  },

  listenImageLoad1() {
    console.log("图片1加载完成")
  },

  listenImageLoad2() {
    console.log("图片2加载完成")
  }

})