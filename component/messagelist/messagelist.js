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
    statusTitle: {
      type: String,
      value: '已接受'
    }, 
    statusColor: {
      type: String,
      value: '#3cdede'
    }, 
    school: {
      type: String,
      value: '华中科技大学'
    },
    grade: {
      type: String,
      value: '大二'
    },
    price: {
      type: String,
      value: '70'
    },
    time: {
      type: String,
      value: '周六下午'
    },
    operate: {
      type: String,
      value: '支付'
    },
    operateColor: {
      type: String,
      value: 'ffcb68'
    },
    showCountDown: {
      type: Boolean,
      value: false
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
