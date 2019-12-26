// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ["衣服","帽子","鞋子"]
  },

  aaaClick() {
    console.log('点击了');
  },
  handleTouchStart() {
    console.log('handleTouchStart');
  },
  handleTouchEnd() {
    console.log('handleTouchEnd');
  },
  handleTap() {
    console.log('handleTap');
  },
  handleTouchCancel() {
    console.log('handleTouchCancel');
  },
  handleTouchMove() {
    console.log('handleTouchMove');
  },
  handleTouchLongTap() {
    console.log('handleTouchLongTap');
  },
  handleItemClick(event) {
    console.log(event);
  },
  capture1() {
    console.log("capture1");
  },
  capture2() {
    console.log("capture2");
  },
  capture3() {
    console.log("capture3");
  },
  tap1() {
    console.log("tap1");
  },
  tap2() {
    console.log("tap2");
  },
  tap3() {
    console.log("tap3");
  }
})