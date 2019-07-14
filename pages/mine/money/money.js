// pages/mine/money/money.js
const app = getApp();
var identity = app.globalData.identity;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity: identity,
    withdraw: 70,
    detail1: [{
      date: '2019年6月1日',
      time: '2019年5月13日 20:53',
      money: '试教费70元',
      info: [{
        title: '收款状态',
        detail: '已收款',
        isLink: false
      },
      {
        title: '收款人',
        detail: '叶老师',
        isLink: true,
        url: '/pages/teacher/detail/detail'
      },
      {
        title: '收款时间',
        detail: '2019年5月14日 8:32',
        isLink: false
      }]
    },
    {
      date: '2019年6月1日',
      time: '2019年5月11日 20:53',
      money: '试教费70元',
      info: [
      {
        title: '钱款状态',
        detail: '试教已取消，原路退款',
        isLink: false
      },
      {
        title: '收款时间',
        detail: '2019年5月12日 21:00',
        isLink: false
      },
      {
        title: '收款金额',
        detail: '试教费70元+中介费30元',
        isLink: false
      }
      ]
    }
    ],
    detail2: [{
      date: '2019年6月1日',
      time: '2019年5月13日 20:53',
      money: '试教费70元',
      info: [{
        title: '付款人',
        detail: '李同学',
        isLink: true,
        url: '/pages/student/detail/detail'
      },
      {
        title: '收款状态',
        detail: '已收款',
        isLink: false
      },
      {
        title: '收款时间',
        detail: '2019年5月14日 8:32',
        isLink: false
      }
      ]
    },
    {
      date: '2019年6月1日',
      time: '2019年5月13日 20:53',
      money: '试教费70元',
      info: [
      {
        title: '付款人',
        detail: '李同学',
        isLink: true,
        url: '/pages/student/detail/detail'
      },
      {
        title: '钱款状态',
        detail: '试教已取消，原路退款',
        isLink: false
      }
      ]
    }
    ],
    
  },
  withdraw: function (e) {
    const that = this
    wx.showModal({
      title: '提现申请提交',
      content: '将在3个工作日内到账，请注意查收。',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          that.setData({
            withdraw: 0
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    identity = app.globalData.identity;
    console.log(this.data.identity)
    this.setData({
      identity: identity
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.moneyist = this.selectComponent("#moneylist");
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