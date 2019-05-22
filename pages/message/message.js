// pages/message/message.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    status: [{
      str: '待接受',
      color: '#ffcb68'
    },
    {
      str: '已接受',
      color: '#3cdede'
    },
    {
      str: '已回绝',
      color: '#a9a9a9'
    }],
    statusCode: 1,
  },

  handleChange: function (e) {
    const that = this;
    that.setData({
      current: e.detail.key
    })
  },
  checkCurrent: function (e) {
    const that = this;

    if (that.data.current === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        current: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    wx.hideTabBar()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.listcell = this.selectComponent("#listcell");
    this.toplistcell = this.selectComponent("#toplistcell");
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