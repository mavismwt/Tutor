// pages/mine/certificate/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuthed: getApp().globalData.isAuthed,
    identity: getApp().globalData.identity,
    shool: '',
    grade:'三年级',
    object:'机械学院/工业工程专业'
  },

  reAuth: function (e) {
    const identity = app.globalData.identity;
    wx.navigateTo({
      url: '../' + identity + '/' + identity,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const identity = app.globalData.identity;
    const school = identity=='student'?'光谷四小':'华中科技大学';
    this.setData({
      identity: identity,
      school: school
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