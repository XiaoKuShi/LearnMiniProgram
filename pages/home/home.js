// pages/home/home.js
Page({
  data: {
    counter: 0
  },

  handleIncrement(event) {
    this.setData({
      counter: this.data.counter+=1
    })
    console.log('My name is ' + event.detail.name + ', age ' + event.detail.age)
  },

  handleSelIncrement() {
    const my_sel = this.selectComponent('#select-id')
    //1.调用setData
    // my_sel.setData({
    //   counter: my_sel.data.counter += 1
    // })
    //2.调用对象内部方法
    my_sel.increment()
  },

  handleTabClick(event) {
    console.log("选中了第 " + event.detail.index + " 个，类型是: " + event.detail.name)
  }
})