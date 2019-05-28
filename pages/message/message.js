// pages/message/message.js
const app = getApp();
var identity = app.globalData.identity;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    identity: identity,
    current: 0,
    status: [{
      id: 0,
      str: '待接受',
      color: '#ffcb68'
    },
    {
      id: 1,
      str: '已接受',
      color: '#3cdede'
    },
    {
      id: 2,
      str: '已回绝',
      color: '#a9a9a9'
    }],
    statusCode: 1,
    receiveMessage1:[{
      title:'李同学/初三',
      status: 0,
    },
    {
      title: '张同学/高三',
      status: 1,
    },
    {
      title: '王同学/高一',
      status: 2,
    }],
    sendMessage1: [{
      title: '李同学/初二',
      status: 0,
    },
    {
      title: '陈同学/初三',
      status: 1,
    },
    {
      title: '张同学/高二',
      status: 2,
    }],
    receiveMessage2: [{
      title: '叶老师/华中科技大学',
      status: 0,
    },
    {
      title: '章老师/武汉大学',
      status: 1,
    },
    {
      title: '左老师/华中科技大学',
      status: 2,
    }],
    sendMessage2: [{
      title: '王老师/武汉大学',
      status: 0,
    },
    {
      title: '刘老师/华中科技大学',
      status: 1,
    },
    {
      title: '陈老师/华中科技大学',
      status: 2,
    }],
    chatInfo2:[{
      name:'叶老师',
      date:'2019年5月31日'
    }], 
    chatInfo1: [{
      name: '李同学',
      sex:'male',
      date: '2019年6月2日'
    }]

  },

  change: function(e) {
    const current = e.detail.current
    this.setData({
      current: current
    })
  },

  handleChange: function (e) {
    const that = this;
    that.setData({
      current: e.detail.key
    })
  },
  checkCurrent: function (e) {
    const that = this;

    if (that.data.current === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        current: e.target.dataset.current
      })
    }
  },

  navToReceive: function(e) {
    wx.navigateTo({
      url: 'receive/receive',
    })
  },

  navToSend: function (e) {
    wx.navigateTo({
      url: 'send/send',
    })
  },
  navtoChat: function (e) {
    wx.navigateTo({
      url: '/pages/message/chat/chat',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    wx.hideTabBar();
    identity = app.globalData.identity;
    this.setData({
      identity: identity
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.listcell = this.selectComponent("#listcell");
    this.toplistcell = this.selectComponent("#toplistcell");
    this.chatlist = this.selectComponent("#chatlist");
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