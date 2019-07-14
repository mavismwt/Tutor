// pages/message/chat/chat.js
const app = getApp();
var util = require('../../../utils/util.js');
var msg = ''; 
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
  url: '/pages/message/contact/contact',
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
  detail: '钱款到账中 3个工作日内打款至账户',
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
    noticeInfo:'已完成试教'
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
    userInfo:{},
    message: '',
    newslist: [],
    example: [{
      self: true,
      date: '2019-1-1',
      avatarUrl: '',
      type: 'text',
      content: 'sakdas'
    },
    {
      self: true,
      date: '2019-1-1',
      avatarUrl: '',
      type: 'text',
      content: '大sad'
    },
    {
      self: false,
      date: '2019/7/15',
      avatarUrl: '',
      type: 'text',
      content: '大sad'
    }]
  },
  send: function(e) {
    
    const that = this 
    const list = that.data.newslist
    list.push({
      self: true,
      date: '2019/7/15',
      avatarUrl: '',
      type: 'text',
      content: that.data.message
    })
    that.setData({
      newslist: list
    })
  },

  input(e) {
    console.log(e.detail.value)
    this.setData({
      message: e.detail.value
    }
    )
  },

  inputFocus(e) {
    console.log(this.data.message)
    var that = this
    if (e.detail.height) {
      this.setData ({
        inputHeight: e.detail.height
      })
    }
    var query = wx.createSelectorQuery()
    query.select('#input').boundingClientRect();
    query.exec(function (res) {
      
    })
  },
  inputBlur() {
    this.setData({
      inputHeight: 0
    })
  },

  getData: function(e) {
    const io = require('socket.io-client')

    const chat = io('http://localhost:8010/chat')
    //上线
    chat.emit('register', { user: { id: 'xxxxxx111', name: "client-1" } })
    //发送消息
    chat.emit('send', { user: { id: 'xxxxxx222', name: "client-1" }, toUser: "client-2", info: 'send from node-1' })
    //获取消息
    chat.on('getMsg', (data) => {
      console.log(data)
    })
  },


  gotoProcess: function(e) {
    const time = util.formatTime(new Date());
    var current = e.currentTarget.dataset['index']
    if (current < this.data.objectStatus.length) {
      const operation = e.currentTarget.dataset['operation']
      switch (operation) {
        case '去填写':
          wx.redirectTo({
            url: this.data.objectStatus[current].url,
          })
          notice.push({ time: time, detail: this.data.objectStatus[current].noticeInfo })
          this.setData({
            notice: notice
          })
          current += 1;
          break;
        case '确认试教':
          wx.redirectTo({
            url: this.data.objectStatus[current].url,
          })
          current += 1;
          break;
        case '查看详情':
          wx.redirectTo({
            url: this.data.objectStatus[current].url,
          })
          break;
        default:
          notice.push({ time: time, detail: this.data.objectStatus[current].noticeInfo })
          this.setData({
            notice: notice
          })
          current += 1;
        break;
      }
      this.setData({
        index: current
      })
      getApp().globalData.statusCode = current
    }
  },

  cancel: function(e) {
    const current = e.currentTarget.dataset['index']
    if (current < this.data.objectStatus.length) {
      const operation = e.currentTarget.dataset['operation']
      switch (operation) {
        case '联系客服': 
          wx.showModal({
            title: '联系客服',
            content: '如您在试教过程中遇到问题，请您在工作时间拨打客服电话（13164175090），我们将尽快解决您的问题。',
            showCancel: false,
          })
          break;
        default:
          notice = [],
          index = 0,
          wx.showModal({
            title: '取消试教',
            content: '取消试教后将无法再次与对方沟通，也无法获得相应的报酬。',
            success: function (res) {
              if (res.confirm) {
                wx.navigateBack()
                getApp().globalData.statusCode = 0
              } else if (res.cancel) {

              }
            },
          })
          break;
      }
    }
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
   wx.getUserInfo({
      success:(res)=>{
        this.setData({
          userInfo:res.userInfo
        })
      }
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
    this.setData({
      notice: notice
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