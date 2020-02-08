// components/my-sel/my-sel.js
Component({
  data: {
    counter: 0
  },

  methods: {
    increment() {
      this.setData({
        counter: this.data.counter += 1
      })
    }
  }
})
