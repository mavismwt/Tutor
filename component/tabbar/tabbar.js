// tabBarComponent/tabBar.js
const app = getApp();
const identity = getApp().globalData.identity;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": []
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIPX: app.globalData.isIPX,
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    nav: function (e) {
      var that = this
      const identity = app.globalData.identity
      const url = app.globalData.identity == 'student' ? '/pages/middle/student/student' : '/pages/middle/teacher/teacher'
      this.setData({
        url: url
      })
      wx.navigateTo({
        url: url,
      })
    },
  }
})
