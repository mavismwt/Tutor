// pages/student/detail/detail.js
const app = getApp();
var isAuthed = app.globalData.isAuthed;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIPX: app.globalData.isIPX,
    isAuthed: isAuthed,
    isCompleted: false,
    id: 0,
    name: '李同学',
    img: '/images/touxiang/s1.png',
    sex: 'male',
    lastLogin: '1小时前',
    grade: '一年级',
    price: '80',
    object: '数学，英语',
    sexRec: '女',
    location: '巴黎豪庭',
    infoArray: [
      {
        title: '授课时间',
        icon: '/images/tupian.png',
        detail: '周末'
      },
      {
        title: '课时安排',
        icon: '/images/tupian.png',
        detail: '2课时'
      },
      {
        title: '孩子学习情况',
        icon: '/images/tupian.png',
        detail: '成绩中上'
      },
      {
        title: '教师要求',
        icon: '/images/tupian.png',
        detail: '曾经给XXX的学生上过XX时间的XXXX课'
      }
    ],
  },

  favorite: function (e) {
    wx.showModal({
      title: '收藏成功',
      content: '可在个人中心-收藏中查看',
      showCancel: false,
      // success: function (res) {
      //   if (res.confirm) {
      //     console.log('用户点击确定')
      //   }
      // }
    })
  },

  send: function (e) {
    wx.showModal({
      title: '申请成功',
      content: '可在申请消息里查看状态\t打开消息提醒，第一时间接收消息',
      showCancel: false,
    })
  },

  alert: function (e) {
    wx.showModal({
        title: '申请失败',
        content: '求教有道是一个真实的社区，您需要完成身份认证后才可进行后续操作',
        confirmText: '去认证',
        cancelText: '暂不认证',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/mine/certificate/teacher/teacher',
            })
          }
        }
      })
  },
  forward: function(e) {
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isAuthed: app.globalData.isAuthed
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