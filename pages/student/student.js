// pages/student/student.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //tabbar
    tabbar: {},
    studentArray: [
      {
        name: '李同学',
        price: '80',
        grade: '高二',
        object: '数学',
        time: '周六晚上',
        location: 'XXXX小区XX单元XX楼XXX室',
        sex: '不限',
        isLongTerm: true
      }, 
      {
        name: '李同学',
        price: '80',
        grade: '高二',
        object: '数学',
        time: '周六晚上',
        location: 'XXXX小区XX单元XX楼XXX室',
        sex: '不限',
        isLongTerm: true
      },
      {
        name: '王同学',
        price: '120',
        grade: '高二',
        object: '物理',
        time: '周六下午',
        location: 'XXXX小区XX单元XX楼XXX室',
        sex: '女',
        isLongTerm: false,
        number: '1',
        perTime: '2'
      },
      {
        name: '王同学',
        price: '120',
        grade: '高二',
        object: '物理',
        time: '周六下午',
        location: 'XXXX小区XX单元XX楼XXX室',
        sex: '女',
        isLongTerm: false,
        number: '1',
        perTime: '2'
      }
    ],
    tabbar: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onLoad: function (options) {
    app.editTabbar();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.studentList = this.selectComponent("#studentList");
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