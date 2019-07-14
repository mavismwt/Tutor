// pages/index/detail/detail.js
const app = getApp();
var isCompleted = app.globalData.isCompleted;
//let isIphoneX = app.globalData.isIphoneX; this.setData({ isIphoneX: isIphoneX })
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCompleted: app.globalData.isCompleted,
    isIPX: app.globalData.isIPX,
    position:'fixed',
    img: '/images/touxiang/t1.png',
    id: 0,
    name: '叶老师',
    sex: 'female',
    lastLogin: '1小时前',
    school: '华中科技大学',
    grade: '一年级',
    price: '100',
    object: '数学，英语',
    time: '周一下午',
    infoArray: [
      {
        title: '学科成绩',
        icon: '/images/tupian.png',
        detail: '专业排名第一'
      },
      {
        title: '自我介绍',
        icon: '/images/tupian.png',
        detail: '我是来自XXX的XXX，我的爱好是XXX'
      },
      {
        title: '家教经历',
        icon: '/images/tupian.png',
        detail: '曾经给XXX小学的学生上过XX时间的XXXX课'
      }
    ],
    imageArray: ['/images/tupian.png', '/images/tupian.png', '/images/tupian.png', '/images/tupian.png']
  },

  completeInfo: function (e) {
    const identity = app.globalData.identity
    wx.navigateTo({
      url: '/pages/middle/'+identity+'/'+identity,
    })
  },

  favorite: function(e) {
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
  
  forward: function (e) {
    wx.getShareInfo({
      shareTicket: '',
    })
    // wx.navigateTo({
    //   url: '/pages/message/message',
    // })
  },
  apply: function (e) {
    const id = app.globalData.identity;
    const isAuthed = app.globalData.isAuthed
    const that = this
    if (id == 'student' && isAuthed) {
      wx.showModal({
        title: '申请成功',
        content: '可在申请消息里查看状态\t打开消息提醒，第一时间接收消息',
        showCancel: false,
      })
    } else if (id == 'student' && !isAuthed) {
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
    } else if (id != 'student') {
      wx.showModal({
        title: '申请失败',
        content: '只有学生身份才能申请家教哦\n如需更换身份，请在个人中心-反馈意见中提交反馈，我们将尽快为您处理',
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
    var that = this
    wx.getStorage({
      key: 'info',
      success: function(res) {
        that.setData({
          isCompleted: true
        })
      },
    })
    wx.getStorage({
      key: 'isAuthed',
      success: function (res) {
        that.setData({
          isAuthed: true,
        })
      },
    })
    wx.request({
      url: 'https://hd.plus1sec.cn/student/info/id',
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'GET',
      success: function (res) {
        wx.hideLoading()
        that.showList(res)
      }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.infoList = this.selectComponent("#infoList");
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