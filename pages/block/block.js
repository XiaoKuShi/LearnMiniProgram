// pages/block/block.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    movies: ["盗梦空间", "大话西游", "星际穿越"],
    nums: [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
  },

  handleShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})