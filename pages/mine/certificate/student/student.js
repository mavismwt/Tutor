// pages/mine/studentAuth/studentAuth.js
var isOnlineAuth= false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    methodArray: [{
      id: 1,
      name: '上传孩子学生证',
      isOnlineAuth: false,
    }, {
      id: 2,
      name: '上传户口品孩子页',
      isOnlineAuth: true,
    }],
    current: '上传孩子学生证',
    position: 'left',
    checked: false,
    disabled: false,
  },

  submit: function() {
    wx.showModal({
      title: '提交成功',
      content: '我们将在9:00—23:00间三小时内完成审核\n您可先浏览收藏老师信息',
      showCancel: false,
      success: function (res) {
        wx.reLaunch({
          url: '/pages/teacher/index',
        })
      }
    })
  },

  handleChange({ detail = {} }) {
    this.setData({
      current: detail.value,
      isOnlineAuth: (detail.value == '上传孩子学生证') ? false : true
    });
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