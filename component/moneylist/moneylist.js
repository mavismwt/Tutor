// component/moneylist/moneylist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date: {
      type:String,
      value:''
    },
    time: {
      type: String,
      value: ''
    },
    money: {
      type: String,
      value: ''
    },
    info: {
      type: [],
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    info: [{
      title: '钱款信息',
      detail: '已支付'
    },
    {
      title: '钱款信息',
      detail: '已支付'
    },
    {
      title: '钱款信息',
      detail: '已支付'
    }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateTo:function(e) {
      let url = e.currentTarget.dataset.url
      wx.navigateTo({
        url: url,
      })
    }
  }
})
