// components/my-slot-m/my-slot-m.js
Component({

  //1. properties: 外界传入数据
  properties: {
    name: String,
    desc: {
      type: String,
      value: '默认提示',
      observer: function (newValue, oldValue) {
        //监听值变化
      }
    }
  },

  //2. data: 定义组件内部的初始化数据
  data: {
    currentIndex: 0,
    info: {
      key1: "value1",
      key2: "value2"
    },
    movie: ["小鬼当家", "盗梦空间"]
  },

  //3. methods: 定义内部函数
  methods: {
    foo() {
      //自定义函数
    }
  },

  //4. options: 定义组件的配置选项
  options: {
    multipleSlots: true,     //使用多插槽时设置为true
    styleIsolation: "shared" //设置组件样式隔离方式
  },

  //5. externalClasses: 外界传入样式
  externalClasses: ['class1', 'class2'],

  //6. observer: 监听属性的改变, 包括 properties/data 中的数据
  // 监听的只有newValue
  observer: {
    currentIndex: function(newValue) {
      console.log('currentIndex 变化了: ' + newValue)
    }
  },

  //7. pageLifetimes: 监听Page的生命周期
  pageLifetimes: {
    show() {
      console.log("----- 组件所在界面显示 -----")
    },
    hide() {
      console.log("----- 组件所在界面隐藏 -----")
    },
    resize() {
      console.log("----- 监听界面尺寸改变 -----")
    }
  },

  //8. lifetimes: 监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建")
    },
    attached() {
      console.log("组件被添加到界面中")
    },
    ready() {
      console.log("组件被渲染出来")
    },
    moved() {
      console.log("组件被移动")
    },
    detached() {
      console.log("组件被移除")
    }
  }
})
