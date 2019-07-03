// pages/message/chat/chat.js
const app = getApp();
var util = require('../../../utils/util.js');
var index = 0;
var notice = [];
const identity = getApp().globalData.identity;
const title = identity == 'student' ? '李同学' : '叶老师';
const info = identity == 'student' ? studentInfo : teacherInfo;
const teacherStatus = [{
  id: 1,
  detail: '等待对方填写时间地点',
  confirmButton: '提醒对方',
  cancelButton: '取消试教',
  noticeInfo: '已为您发送提醒信息'
},
{
  id: 2,
  detail: '待确认试教',
  confirmButton: '确认试教',
  cancelButton: '取消试教',
  url: '/pages/message/detail/detail',
  noticeInfo: '您已确认试教成功，请在也约定好的时间前往试教，请注意人身安全'
},
{
  id: 3,
  detail: '试教开始',
  confirmButton: '',
  cancelButton: '',
  noticeInfo: ''
},
{
  id: 4,
  detail: '打款处理中\n3个工作日内打款至账户',
  confirmButton: '查看详情',
  cancelButton: '联系客服',
  url: '/pages/mine/money/money',
  noticeInfo: ''
}
];
const studentStatus = [{
    id: 1,
    detail: '待填写试教时间地点',
    confirmButton: '去填写',
    cancelButton: '取消试教',
    url:'/pages/message/info/info',
    noticeInfo: '填写成功，等待教师确认'
  },
  {
    id: 2,
    detail: '待教师确认试教',
    confirmButton: '提醒对方',
    cancelButton: '取消试教',
    noticeInfo: '已为您发送提醒消息'
  },
  {
    id: 3,
    detail: '试教中',
    confirmButton: '已试教',
    cancelButton: '联系客服',
    noticeInfo:''
  },
  {
    id: 4,
    detail: '试教结束',
    confirmButton: '查看详情',
    cancelButton: '',
    url: '/pages/mine/money/money',
    noticeInfo:''
  }
  ];
const studentInfo = {
  school: '华中科技大学',
  grade: '大三',
  price: '70'
};
const teacherInfo = {
  school: '光谷四小',
  grade: '五年级',
  price: '70'
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice: [{time: '',detail: ''}],
    title: title,
    info: studentInfo,
    identity: 'student',
    index: 0,
    isIPX: app.globalData.isIPX,
    totalHeight: 0,
    inputHeight: 0,
    process: '待试教',
    index: 0,
    objectStatus:[],
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

  gotoProcess: function() {
    if (index < this.data.objectStatus.length-1) {
      index += 1
      getApp().globalData.statusCode += 1
      this.setData({
        index: index
      })
    }
    const time = util.formatTime(new Date());
    const current = this.data.index -1;
    const urlindex = this.data.index;
    notice.push({time: time, detail: this.data.objectStatus[current].noticeInfo})
    this.setData({
      notice: notice
    })
    console.log(current+'  '+this.data.objectStatus[urlindex].url)
    if (this.data.objectStatus[urlindex].url) {
      wx.redirectTo({
        url: this.data.objectStatus[urlindex].url,
      })
    }
    if (this.data.objectStatus[current].url) {
      wx.redirectTo({
        url: this.data.objectStatus[current].url,
      })
    }
  },

  cancel: function() {
    notice = [],
    index = 0,
    wx.showModal({
      title: '取消试教',
      content: '取消后将无法再次沟通，\n且无法获得报酬',
      success: function(res) {
        if (res.confirm) {
          wx.navigateBack()
          getApp().globalData.statusCode = 0
        } else if (res.cancel) {
          
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const identity = getApp().globalData.identity 
    const index = getApp().globalData.statusCode
    this.setData({
      identity: identity,
      index:index
    })
    switch (identity) {
      case 'student':
        this.setData({
          objectStatus: studentStatus,
          info: studentInfo,
          title: '叶老师'
        })
        break;
      case 'teacher':
        this.setData({
          objectStatus: teacherStatus,
          info: teacherInfo,
          title: '李同学'
        })
        break;
      default:
        break;
    }
    
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
    const index = getApp().globalData.statusCode
    console.log(index)
    this.setData({
      index:index
    })
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