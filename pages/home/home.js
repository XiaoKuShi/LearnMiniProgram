// pages/home/home.js
Page({
  data: {
    message: "怎么了？",
    firstname: "Mark",
    lastname: "Gao",
    age: 20,
    isActive: false,
    isShow: true,
    score: 35,
    time: new Date().toLocaleString()
  },

  onLoad() {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString()
      })
    }, 1000)
  },

  changColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleChangeScore() {
    var s = this.data.score
    s += 10
    s = s > 100 ? 45:s
    this.setData({
      score: s
    })
  }
})