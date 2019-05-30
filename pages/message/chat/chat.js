// pages/message/chat/chat.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: app.globalData.id,
    isIPX: app.globalData.isIPX,
    totalHeight: 0,
    inputHeight: 0,
    info: {
      school: '华中科技大学',
      grade: '大三',
      price: '70'
    },
    process: '待试教',
    index: 0,
    teacherStatus:[{
      id:1,
      detail:'等待对方填写时间地点',
      confirmButton:'提醒对方',
      cancelButton:'取消试教'
    }, 
    {
      id: 2,
      detail: '待确认试教',
      confirmButton: '确认试教',
      cancelButton: '取消试教'
    },
    {
      id: 3,
      detail: '试教开始',
      confirmButton: '确认试教',
      cancelButton: '取消试教'
    },
    {
      id: 4,
      detail: '打款处理中\n3个工作日内打款至账户',
      confirmButton: '确认试教',
      cancelButton: '取消试教'
    }
    ],
    studentStatus: [{
      id: 1,
      detail: '待填写试教时间地点',
      confirmButton: '去填写',
      cancelButton: '取消试教'
    },
    {
      id: 2,
      detail: '待教师确认试教',
      confirmButton: '提醒对方',
      cancelButton: '取消试教'
    },
    {
      id: 3,
      detail: '试教中',
      confirmButton: '已试教',
      cancelButton: '联系客服'
    }
    ]

  },

  inputFocus(e) {
    var that = this
    if (e.detail.height) {
      this.setData ({
        inputHeight: e.detail.height
      })
    }
    var query = wx.createSelectorQuery()
    query.select('#input').boundingClientRect();
    query.exec(function (res) {
      
      console.log(res)
    })
  },
  inputBlur() {
    this.setData({
      inputHeight: 0
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