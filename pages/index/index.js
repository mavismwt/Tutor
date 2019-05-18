//index.js
//获取应用实例
const app = getApp();
var isHidden = true;
var obejctArrray = ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理', '其他'];
var object = 'object';
Page({
  /**
   * 页面的初始数据
   */
  
  data: {
    userInfo: {},
    show: true,
    isHidden: isHidden,
    teacherArray: [
      {
        id: 0,
        name: '叶老师',
        sex:'female',
        school: '华中科技大学',
        grade: '一年级，二年级，三年级',
        price:'100',
        object:'数学，英语',
        time:'周一下午'
      },
      {
        id: 0,
        name: '陈老师',
        sex: 'male',
        school: '华中科技大学',
        grade: '高三',
        price: '100',
        object: '物理',
        time: '周三晚上'
      }, 
      {
        id: 0,
        name: '王老师',
        sex: 'female',
        school: '武汉大学',
        grade: '一年级',
        price: '100',
        object: '数学，英语',
        time: '周一下午'
      },
      {
        id: 0,
        name: '陆老师',
        sex: 'male',
        school: '华中科技大学',
        grade: '高三',
        price: '100',
        object: '物理',
        time: '周三晚上'
      },
      {
        id: 0,
        name: '林老师',
        sex: 'female',
        school: '华中科技大学',
        grade: '高三',
        price: '100',
        object: '物理',
        time: '周三晚上'
      },
    ],
    object: object,
    obejctArrray: obejctArrray,
    tabbar: {}
  },

  onClick: function (e) {
    var index = e.currentTarget.id// e.currentTarget
    console.log(this.data.teacherArray[index])
    wx.navigateTo({
      url: 'detail/detail?id='+this.data.teacherArray[index].id
    })
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    this.teacherList = this.selectComponent("#teacherList");
    this.collaspe = this.selectComponent("#collaspe");
  },
  navToDetail: function(e) {
    wx.navigateTo({
      url: 'detail/detail',
    })
  },
  changeStatus: function (e) {
    isHidden = !isHidden
    obejctArrray = ['语文', '数学', '英语', '物理', '化学', '生物', '政治'];
    this.setData({isHidden:isHidden})
    this.setData({ obejctArrray: obejctArrray})
    // wx.request({
    //   url: 'https://www.yjwbenji.top',
    //   data: {},
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    app.editTabbar();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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