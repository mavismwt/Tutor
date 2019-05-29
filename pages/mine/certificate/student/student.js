// pages/mine/studentAuth/studentAuth.js
var isOnlineAuth= false;
var app = getApp();
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
      name: '上传户口本孩子页',
      isOnlineAuth: true,
    }],
    current: '上传孩子学生证',
    position: 'left',
    checked: false,
    disabled: false,
    image: '/images/add.png',
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  chooseImage: function () {
    var that = this;
    // 选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths[0]
        });
      }
    })
  },
  submit: function () {
    wx.setStorage({
      key: 'isAuthed',
      data: '1',
    })
    app.globalData.isAuthed = true,
    wx.showModal({
      title: '提交成功',
      content: '我们将在9:00—23:00间三小时内完成审核\n您可先浏览收藏老师信息',
      showCancel: false,
      success: function (res) {
        wx.reLaunch({
          url: '/pages/teacher/teacher',
        })
      }
    })
  },

  handleChange({ detail = {} }) {
    this.setData({
      current: detail.value,
      isOnlineAuth: (detail.value == '上传孩子学生证') ? false : true,
      image: ''
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