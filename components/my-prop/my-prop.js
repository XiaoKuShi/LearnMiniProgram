// components/my-prop/my-prop.js
Component({
  properties: {
    title: {
      type: String,
      value: '--',
      observer: function(newValue, oldValue) {
        //监听值变化
      }
    },
    content: {
      type: String,
      value: '--',
      observer: function(newVal, oldVal) {

      }
    }
  },
  externalClasses: ['titleclass']
})
