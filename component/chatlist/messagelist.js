// component/messagelist/messagelist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value:'李同学'
    },
    date: {
      type: String,
      value: '2019年7月3日'
    },
    sex: {
      type: String,
      value: 'male'
    },
    process: {
      type: String,
      value: '待确认试教时间地点'
    }, 
    latestMessage: {
      type: String,
      value: ''
    }
    //attrArray: [],
  },

  /**
   * 组件的初始数据
   */
  data: {
    targetTime: new Date().getTime() + 6430000,
    myFormat: ['时', '分', '秒'],
    status: '进行中...',
    clearTimer: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
