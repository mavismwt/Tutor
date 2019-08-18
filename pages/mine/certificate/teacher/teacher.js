// pages/mine/teacherAuth/teacherAuth.js
var isOnlineAuth = false;
var app = getApp();
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
    image:'/images/add.png',
  },

  chooseImage: function () {
    var that = this;
    // 选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths[0]
        });
        
      }
    })
  },

  submit: function () {
    // wx.setStorage({
    //   key: 'isAuthed',
    //   data: '1',
    // })
    // app.globalData.isAuthed = true,
      // wx.showModal({
      //   title: '提交成功',
      //   content: '我们将在9:00—23:00间三小时内完成审核\n您可先浏览收藏老师信息',
      //   showCancel: false,
      //   success: function (res) {
      //     wx.reLaunch({
      //       url: '/pages/teacher/teacher',
      //     })
      //   }
      // })
      console.log('lalalal')
      const that = this
      wx.uploadFile({
        url: 'https://hd.plus1sec.cn/student/auth/upload',
        filePath: that.data.image,
        name: getApp().globalData.id,
        formData: {
          auth: "File",
        },
        header: {
          'Authorization': 'Bearer' + ' ' + getApp().globalData.token,
          "Content-Type": "multipart/form-data" 
        },
        method: 'POST',
        complete: function (res) {
          console.log(res)
        }
      })
    
  },

  // submit: function () {
  //   wx.setStorage({
  //     key: 'isAuthed',
  //     data: '1',
  //   })
  //   app.globalData.isAuthed = true,
  //   wx.redirectTo({
  //     url: '../done/done',
  //   })
  // },

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
    wx.request({
      url: 'https://hd.plus1sec.cn/student/auth/status/' + getApp().globalData.id,
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token,
      },
      method: 'GET',
      success: function (res) {
        console.log(res)
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