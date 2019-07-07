// pages/mine/mine.js
const app = getApp();
var isAuthed = true;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    isIPX: app.globalData.isIPX,
    isAuthed: isAuthed,
    listArray: [[
      {
        title: '我的认证',
        detail: 'certificate'
      },
      
      {
        title: '钱款信息',
        detail: 'money'
      }
    ],
    [
    {
      title: '我的资料',
      detail: 'information'
    },
    {
      title: '我的收藏',
      detail: 'collect'
    }],
    [
    {
      title: '平台须知',
      detail: 'notice'
    },
    {
      title: '反馈意见',
      detail: 'feedback'
    }
    ]],
    tabbar: {},
  },

  onClick: function (e) {
    var isAuthed = true;
    wx.getStorage({
      key: 'isAuthed',
      success: function(res) {
        isAuthed = (res.data==1)? true : false
      },
      fail: function(res) {
        isAuthed = false
        console.log(res)
      }
    })
    console.log(isAuthed)
    const detail = e.currentTarget.dataset.detail
    if (detail == 'certificate') {
      const identity = app.globalData.identity
      const isAuthed = app.globalData.isAuthed
      if (isAuthed==false) {
        wx.navigateTo({
          url: '/pages/mine/certificate/' + identity + '/' + identity
        })
      } else {
        wx.navigateTo({
          url: '/pages/mine/certificate/mine/mine',
        })
      }
      
    } else {
      wx.navigateTo({
        url: '/pages/mine/' + detail + '/' + detail
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    wx.hideTabBar();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.settingList = this.selectComponent("#settingList");
    wx.showLoading({
      title: '加载中',
    })
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: app.globalData.userInfo
        })
        wx.hideLoading();
      }
    })
    wx.getStorage({
      key: 'isAuthed',
      success: function (res) {
        isAuthed = (res.data == 1) ? true : false
      },
      fail: function (res) {
        isAuthed = false
      }
    })
    this.setData({
      isAuthed: isAuthed,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'isAuthed',
      success: function (res) {
        isAuthed = (res.data == 1) ? true : false
      },
      fail: function (res) {
        isAuthed = false
      }
    })
    this.setData({
      isAuthed: isAuthed,
    })
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