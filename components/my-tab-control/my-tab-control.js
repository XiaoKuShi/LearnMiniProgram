// components/my-tab-control/my-tab-control.js
Component({
  properties: {
    titles: Array
  },

  data: {
    currentIndex: 0
  },

  methods: {
    handleTap(event) {
      const index = event.currentTarget.dataset.index

      this.setData({
        currentIndex: this.data.currentIndex = index
      })
      //想外接传递选中的类型和下标
      this.triggerEvent(['itemclick'], {index: index, name: this.properties.titles[index]}, {})
    }
  }
})
