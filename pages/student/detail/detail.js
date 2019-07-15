// pages/student/detail/detail.js
const app = getApp();
var isAuthed = app.globalData.isAuthed;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    isCompleted: app.globalData.isCompleted,
    identity: app.globalData.identity,
    isAuthed: isAuthed,
    isIPX: app.globalData.isIPX,
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

  completeInfo: function (e) {
    const identity = app.globalData.identity
    wx.navigateTo({
      url: '/pages/middle/' + identity + '/' + identity,
    })
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

  forward: function(e) {
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  apply: function(e) {
    const id = app.globalData.identity;
    const isAuthed = app.globalData.isAuthed
    const identity = app.globalData.identity
    const that = this
    if (id=='teacher'&& isAuthed) {
      wx.showModal({
        title: '申请成功',
        content: '可在申请消息里查看状态\t打开消息提醒，第一时间接收消息',
        showCancel: false,
      })
    } else if (id=='teacher'&&!isAuthed){
      wx.showModal({
        title: '申请失败',
        content: '求教有道是一个真实的社区，您需要完成身份认证后才可进行后续操作',
        confirmText: '去认证',
        cancelText: '暂不认证',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/mine/certificate/'+identity+'/'+identity,
            })
          }
        }
      })
    } else if (id!='student') {
      wx.showModal({
        title: '申请失败',
        content: '只有家教身份才能申请当家教哦\n如需更换身份，请在个人中心-反馈意见中提交反馈，我们将尽快为您处理',
        confirmText: '去反馈',
        cancelText: '暂不反馈',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/mine/feedback/feedback',
            })
          }
        }
      })
    } else {
      wx.showModal({
        title: '申请失败',
        content: '发生了未知错误\n请仔细检查个人资料与认证是否完善再重新提交',
        showCancel: false,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const dataStr = options.data
    const list = JSON.parse(dataStr)
    this.setData({
      list: list
    })
    const that = this
    wx.getStorage({
      key: 'info',
      success: function (res) {
        that.setData({
          isCompleted: true,
        })
      },
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