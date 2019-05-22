// pages/mine/teacherAuth/teacherAuth.js
var isOnlineAuth = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOnlineAuth: isOnlineAuth,
    methodArray: [{
      id: 1,
      name: '上传学生证',
      isOnlineAuth: false,
    }, {
      id: 2,
      name: '学信网在线认证',
      isOnlineAuth: true,
    }],
    current: '上传学生证',
    position: 'left',
    checked: false,
    disabled: false,
  },

  submit: function () {
    wx.redirectTo({
      url: '../done/done',
    })
  },

  handleChange({ detail = {} }) {
    this.setData({
      current: detail.value,
      isOnlineAuth: (detail.value == '上传学生证')?false:true
    });
  },
  handleClick() {
    this.setData({
      position: this.data.position.indexOf('left') !== -1 ? 'right' : 'left',
    });
  },
  handleDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  changeToOnline: function (e) {
    isOnlineAuth = true
    this.setData({ isOnlineAuth: isOnlineAuth })
  },
  changeToLocal: function (e) {
    isOnlineAuth = false
    this.setData({ isOnlineAuth: isOnlineAuth })
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