// pages/mine/collect/collect.js
const app = getApp();
var identity = app.globalData.identity;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity: identity,
    studentArray: [
      {
        id: 0,
        name: '李同学',
        img: '/images/touxiang/s1.png',
        sex: 'male',
        price: '80',
        grade: '高二',
        object: '数学',
        time: '周六晚上',
        location: 'XXXX小区XX单元XX楼XXX室',
        sexDeamand: '不限',
        isLongTerm: true
      },
      {
        id: 0,
        name: '张同学',
        img: '/images/touxiang/s0.png',
        sex: 'female',
        price: '80',
        grade: '高二',
        object: '数学',
        time: '周六晚上',
        location: 'XXXX小区XX单元XX楼XXX室',
        sexDeamand: '不限',
        isLongTerm: false,
        number: '2',
        perTime: '2'
      }],
    teacherArray: [{
      name: '叶老师',
      img:'/images/touxiang/t1.png',
      sex: 'female',
      school: '华中科技大学',
      grade: '一年级',
      price: '100',
      object: '数学，英语',
      time: '周一下午'
    },
    {
      name: '陈老师',
      img:'/images/touxiang/t2.png',
      sex: 'male',
      school: '华中科技大学',
      grade: '高三',
      price: '100',
      object: '物理',
      time: '周三晚上'
    }]
  },

  onClick: function (e) {
    var index = e.currentTarget.id// e.currentTarget
    wx.navigateTo({
      url: '/pages/student/detail/detail?id=' + this.data.studentArray[index].id
    })
  },
  onClickT: function (e) {
    var index = e.currentTarget.id// e.currentTarget
    wx.navigateTo({
      url: '/pages/teacher/detail/detail?id=' + this.data.teacherArray[index].id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    identity = app.globalData.identity;
    this.setData({
      identity: identity
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.studentlist = this.selectComponent("#studentlist");
    this.teacherlist = this.selectComponent("#teacherlist");
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