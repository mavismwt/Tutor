// pages/message/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    targetTime: new Date().getTime() + 300000,
  },

  clear: function(e) {
    console.log("done")
  },

  cancel: function (e) {

    wx.navigateBack()
  },

  timeOut: function (e) {
    wx.navigateTo({
      url: '/pages/message/help/done/done',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      targetTime: new Date().getTime() + 300000
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
    this.setData({
      targetTime: new Date().getTime() + 3000000
    })
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
function countDown(that, count) {
  if (count == 0) {
    that.setData({
      timeCountDownTop: '获取验证码',
      counting: false
    })
    return;
  }

  that.setData({
    counting: true,
    timeCountDownTop: count + '秒后重新获取',
  })

  setTimeout(function () {
    count--;
    countDown(that, count);
  }, 1000);
}