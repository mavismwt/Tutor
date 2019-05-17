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
    show: true,
    isHidden: isHidden,
    teacherArray: [
      {
        name: '叶老师',
        sex:'female',
        school: '华中科技大学',
        grade: '一年级，二年级，三年级',
        price:'100',
        object:'数学，英语',
        time:'周一下午'
      },
      {
        name: '陈老师',
        sex: 'male',
        school: '华中科技大学',
        grade: '高三',
        price: '100',
        object: '物理',
        time: '周三晚上'
      }, 
      {
        name: '王老师',
        sex: 'female',
        school: '武汉大学',
        grade: '一年级',
        price: '100',
        object: '数学，英语',
        time: '周一下午'
      },
      {
        name: '陆老师',
        sex: 'male',
        school: '华中科技大学',
        grade: '高三',
        price: '100',
        object: '物理',
        time: '周三晚上'
      },
      {
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
  onLoad: function (options) {
    app.editTabbar();
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