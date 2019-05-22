// component/settinglist/settinglist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    canEdit: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    detail: {
      type: String,
      value: ''
    },
    showStatus: {
      type: Boolean,
      value: false,
    },
    statusTitle: {
      type: String,
      value: '已回绝'
    },
    statusColor: {
      type: String,
      value: '#a9a9a9'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
