// pages/index/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCompleted: false,
    name: '叶老师',
    lastLogin: '1小时前',
    school: '华中科技大学',
    grade: '一年级',
    price: '100',
    object: '数学，英语',
    time: '周一下午',
    infoArray: [
      {
        title: '学科成绩',
        icon:'/images/tupian.png',
        detail:'专业排名第一'
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
    imageArray:['/images/tupian.png', '/images/tupian.png', '/images/tupian.png', '/images/tupian.png']
  },

  completeInfo: function (e) {
    wx.navigateTo({
      url: '/pages/index/info/select/select',
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

  alert: function (e) {
    wx.showModal({
      title: '申请失败',
      content: '求教有道是一个真实的社区，您需要完成身份认证后才可进行后续操作',
      confirmText: '去认证',
      cancelText: '暂不认证',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/mine/auth/auth',
          })
        }
      }
    })
  },
  foward: function (e) {
    wx.navigateTo({
      url: '/pages/message/message',
    })
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