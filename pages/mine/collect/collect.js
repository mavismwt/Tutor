// pages/mine/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentArray: [
      {
        id: 0,
        name: '李同学',
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
        sex: 'male',
        price: '80',
        grade: '高二',
        object: '数学',
        time: '周六晚上',
        location: 'XXXX小区XX单元XX楼XXX室',
        sexDeamand: '不限',
        isLongTerm: true
      }],
  },

  onClick: function (e) {
    var index = e.currentTarget.id// e.currentTarget
    wx.navigateTo({
      url: 'detail/detail?id=' + this.data.studentArray[index].id
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