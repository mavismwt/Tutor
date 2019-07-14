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
    },
    statusCode: {
      type: Number,
      value: 0
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
    clearTimer: false,
    status: [
      {
        code: 0,
        content: '已回绝',
        confirm: '联系客服',
        cancel: ''
      },
      {
        code: 1,
        content: '待接受',
        confirm: '接受申请',
        cancel: '拒绝申请'
      },
      {
        code: 2,
        content: '已接受',
        confirm: '去试教',
        cancel: '取消试教'
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm: function(e) {
      const code = e.currentTarget.dataset.code
      switch (code) {
        case 1:
          wx.showModal({
            title: '接受申请成功',
            content: '是否现在去试教',
            confirmText: '去试教',
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '/pages/message/chat/chat',
                })
              }
            }
          })
        break;
        case 2:
          wx.navigateTo({
            url: '/pages/message/chat/chat',
          })
          break;
        case 0: 
          wx.showModal({
            title: '联系客服',
            content: '如您在申请过程中遇到问题，请您在工作时间拨打客服电话（13164175090），我们将尽快解决您的问题。',
            showCancel: false,
          })
          break;
      }
    },
    cancel: function(e) {

    }
  }
})
