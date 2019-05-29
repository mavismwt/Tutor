// pages/mine/information/information.js
const app = getApp();
var identity = app.globalData.identity;
var contactInfo = [{contactIndex: 0,name: '',number: '',advice:''}];
var contactNum = 2;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    isInfo: true,
    studentInfo:{
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
    teacherInfo: {
      name: '叶老师',
      img: '/images/touxiang/t1.png',
      sex: 'female',
      school: '华中科技大学',
      grade: '一年级',
      price: '100',
      object: '数学，英语',
      time: '周一下午'
    },
    info: {
      id: 0,
      name: '老师',
      sex: 'male',
      price: '80',
      school:'华中科技大学',
      grade: '高二',
      object: '数学',
      time: '周六晚上'
    }, 
    contactInfo: [{
      contactIndex: 1,
      name: '',
      number:'',
      advice:'建议填写学校内的亲近好友'
    }, 
    {
      contactIndex: 2,
      name: '',
      number: '',
      advice: '建议填写父母或辅导员联系方式'
    }],
    contactNum: contactNum
  },

  change: function (e) {
    const current = e.detail.current
    this.setData({
      current: current
    })
  },

  handleChange: function (e) {
    const that = this;
    that.setData({
      current:e.detail.key
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

  addContact: function() {
    contactInfo = this.data.contactInfo;
    contactNum += 1;
    contactInfo.push({ contactIndex: contactNum, name: '', number: '', advice:'' })
    console.log(contactInfo)
    this.setData({
      contactInfo:contactInfo
    })
  },
  saveInfo: function() {
    wx.showModal({
      title: '保存成功',
      content: '已保存安全防护信息',
      showCancel: false,
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
    if (identity == 'student') {
      this.list = this.selectComponent("#studentList");
    } else {
      this.list = this.selectComponent("#teacherList");
    }
    this.toplistcell = this.selectComponent("#toplistcell");
    this.definedButton = this.selectComponent("#definedButton");
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