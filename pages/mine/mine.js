// pages/mine/mine.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    isIPX: app.globalData.isIPX,
    listArray: [
      {
        title: '我的认证',
        detail: 'certificate'
      },
      {
        title: '我的资料',
        detail: 'information'
      },
      {
        title: '我的收藏',
        detail: 'collect'
      },
      {
        title: '钱款信息',
        detail: 'money'
      },
      {
        title: '平台须知',
        detail: 'notice'
      },
      {
        title: '反馈意见',
        detail: 'feedback'
      }
    ],
    tabbar: {},
  },

  onClick: function (e) {
    const index = e.currentTarget.id// e.currentTarget
    const detail = this.data.listArray[index].detail
    if (index == 0) {
      const identity = app.globalData.identity
      wx.navigateTo({
        url: '/pages/mine/certificate/' + identity + '/' + identity
      })
    } else {
      wx.navigateTo({
        url: '/pages/mine/' + this.data.listArray[index].detail + '/' + this.data.listArray[index].detail
      })
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    wx.hideTabBar();
    // wx.getUserInfo({
    //   success: res => {
    //     app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: app.globalData.userInfo
        })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.settingList = this.selectComponent("#settingList");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})