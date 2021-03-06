// pages/message/send/send.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity: 'student',
    studentArray: [{
      name: '李同学',
      date: '2019年7月1日',
      sex: 'male',
      statusTitle: '已接受',
      statusColor: '#3cdede',
      school: '华科附中',
      grade: '初二',
      price: '70',
      time: '周六下午',
      operate: '查看',
      operateColor: 'ffcb68',
      showCountDown: false
    },
    {
      name: '陈同学',
      date: '2019年7月1日',
      sex: 'male',
      statusTitle: '已接受',
      statusColor: '#3cdede',
      school: '华师附中',
      grade: '初二',
      price: '70',
      time: '周六下午',
      operate: '查看',
      operateColor: 'ffcb68',
      showCountDown: false
    },
    {
      name: '张同学',
      date: '2019年7月1日',
      sex: 'female',
      statusTitle: '已接受',
      statusColor: '#3cdede',
      school: '实验中学',
      grade: '高二',
      price: '70',
      time: '周六下午',
      operate: '查看',
      operateColor: 'ffcb68',
      showCountDown: false
    }],
    teacherArray: [{
      name: '王老师',
      date: '2019年6月1日',
      sex: 'female',
      statusTitle: '已接受',
      statusColor: '#3cdede',
      school: '武汉大学',
      grade: '大二',
      price: '100',
      time: '周六下午',
      operate: '查看',
      operateColor: 'ffcb68',
      showCountDown: false
    },
    {
      name: '刘老师',
      date: '2019年7月3日',
      sex: 'female',
      statusTitle: '待接受',
      statusColor: '#3cdede',
      school: '华中科技大学',
      grade: '大一',
      price: '70',
      time: '周六下午',
      operate: '查看',
      operateColor: 'ffcb68',
      showCountDown: false
    },
    {
      name: '陈老师',
      date: '2019年5月31日',
      sex: 'male',
      statusTitle: '已回绝',
      statusColor: '#a9a9a9',
      school: '华中科技大学',
      grade: '大一',
      price: '70',
      time: '周六下午',
      operate: '查看',
      operateColor: 'ffcb68',
      showCountDown: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const identity = app.globalData.identity
    this.setData({
      identity: identity
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