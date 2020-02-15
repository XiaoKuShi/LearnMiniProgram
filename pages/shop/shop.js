// pages/shop/shop.js
Page({
  data: {
    name: "",
    age: 0
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name,
      age: options.age
    })
  },
  onUnload: function () {
    //1.获取首页的界面对象
    //获取所有活跃界面
    const pages = getCurrentPages()
    const home = pages[0]

    //2.调用Home的方法
    home.setData({
      title: '新的title'
    })
  }
})