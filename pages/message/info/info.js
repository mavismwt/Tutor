// pages/message/info/info.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    address:'',
    phone:'',
    other:''
  },
  submit: function(e) {
    var t = this.data
    wx.showModal({
      title: '试教信息确认',
      content: '试教时间 '+t.time+'\n详细地址 '+t.address+'\n联系方式 '+t.phone+'\n其他注意事项 '+t.other,
      success: function(res) {
        if (res.confirm) {
          getApp().globalData.statusCode = 1
          wx.navigateBack()
        } else if (res.cancel) {

        }
      }
    })
  },

  inputedit: function (e) {
    const name = e.currentTarget.dataset.name
    this.setData({
      [name]: e.detail.detail.value
    })
    console.log(e.currentTarget.dataset.name);
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
    this.definedButton = this.selectComponent("#definedButton");
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