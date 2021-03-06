// pages/blank.js
const app = getApp();
const idetity = getApp().globalData.identity;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: getApp().globalData.isInit,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var main = ''
    wx.getStorage({
      key: 'identity',
      success(res) {
        const identity = res.data
        app.globalData.identity = identity
        switch (identity) {
          case 'student':
            main = 'teacher';
            wx.reLaunch({
              url: '/pages/teacher/teacher',
            })
            break;
          case 'teacher':
            main = 'student';
            wx.reLaunch({
              url: '/pages/student/student',
            })
            break;
          default:
            break;
        }

      },
      fail() {
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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