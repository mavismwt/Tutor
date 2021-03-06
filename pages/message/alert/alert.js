// pages/message/alert/alert.js
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '12:01',
  },
  confirm: function(e) {
    wx.setStorage({
      key: 'alert',
      data: this.data.time,
    })
    wx.showModal({
      title: '设置成功',
      content: '要注意自己的安全哦',
      success: function(res) {
        wx.navigateBack()
      }
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var now = new Date()
    var time = util.formatTimeShort(new Date())
    this.setData({
      time: time
    })
  },

  getNowTime: function(){
    var now = new Date();
    const h = now.getHours()
    const m = now.getMinutes()
    // var formatDate = h + ':' + m;
    return [h, m].map().join(':') 
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