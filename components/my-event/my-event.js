// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      this.triggerEvent('aaa', {name:'小高', age:18}, {})
    }
  }
})
