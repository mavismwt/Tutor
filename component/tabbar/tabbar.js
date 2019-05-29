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
    identity: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    identity: identity,
    isIPX: app.globalData.isIPX,
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    nav: function (e) {
      console.log('os')
      wx.navigateTo({
        url: '/pages/middle/middle',
      })
    },
  }
})
