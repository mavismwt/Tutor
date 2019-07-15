// pages/index/detail/detail.js
const app = getApp();
var isCompleted = app.globalData.isCompleted;
//let isIphoneX = app.globalData.isIphoneX; this.setData({ isIphoneX: isIphoneX })
const subjectJSON = {
  "CHINESE": "语文", "MATH": "数学", "ENGLISH": "英语", "PHYSICS": "物理", "CHEMISTRY": "化学", "BIOLOGY": "生物", "POLITICS": "政治", "HISTORY": "历史", "GEOGRAPHY": "地理"
};
const gradeJSON = { "PRI_1": "一年级", "PRI_2": "二年级", "PRI_3": "三年级", "PRI_4": "四年级", "PRI_5": "五年级", "PRI_6": "六年级", "MID_1": "初一", "MID_2": "初二", "MID_3": "初三", "MIDHIGH_1": "高一", "MIDHIGH_2": "高二", "MIDHIGH_3": "高三" };
const timeJSON = { "MORN": "上午", "AFTER": "中午", "EVEN": "晚上" };
const weekJSON = { "MON": "周一", "TUE": "周二", "WED": "周三", "THU": "周四", "FRI": "周五", "SAT": "周六", "SUN": "周日" };
const sexJSON = { "MALE": "男", "FEMALE": "女", "BOTH": "不限" }
const schoolJSON = { "HUST": "华中科技大学", "WHU": "武汉大学", "OTHER": "其他高校" }
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCompleted: app.globalData.isCompleted,
    isIPX: app.globalData.isIPX,
    position:'fixed',
    list: {},
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
    const dataStr = options.data
    const list = JSON.parse(dataStr)
    this.setData({
      list: list
    })
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
    
  },

  showList: function (res) {
    const that = this
    var list = {}
    var i = 0
    if (res.statusCode == 200) {
        console.log(res.data.data)
        const name = res.data.data.name.slice(0, 1) + '老师'
        const sex = res.data.data.Gender == 'MALE' ? 'male' : 'female'
        var price = 70
        if (res.data.data[i].expectPay) {
          price = res.data.data[i].expectPay
        }
        const school = schoolJSON[`${res.data.data.university}`]

        var times = ''
        var subjects = ''
        var levels = ''

        const timeList = res.data.data.avalible
        const subjectList = res.data.data.subjects
        const levelList = res.data.data.subjects[0].level
        var j, k, l = 0

        for (j = 0; j < timeList.length; j++) {
          const day = weekJSON[`${timeList[j].day}`]
          const detail = timeJSON[`${timeList[j].detail}`]
          const time = day + detail
          times = times + ' ' + time
        }
        times = times.slice(1, times.length)

        for (k = 0; k < subjectList.length; k++) {
          const subject = subjectJSON[`${subjectList[k].name}`]
          subjects = subjects + ' ' + subject
        }
        subjects = subjects.slice(1, subjects.length)

        for (l = 0; l < levelList.length; l++) {
          const level = gradeJSON[`${levelList[l]}`]
          levels = levels + ' ' + level
        }
        levels.slice(1, levels.length)
        list= { id: res.data.data.openid, name: name, img: '/images/touxiang/t1.png', sex: sex, school: school, grade: levels, price: price, time: times, object: subjects }
      console.log('list'+list)
      that.setData({
        list: list
      })
    }
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