// pages/index/info/student/student.js
var util = require('../../../../utils/util.js');  
var ismale = true;
var check1 = true;
var check2 = false;
var check3 = false;
var checks = [true, false, false];
var isSelectHidden = true;
var multiIndex = [[0, 0]];
var date = util.formatDate(new Date());
var dates = [date];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    switch1: false,
    switch2: true,
    value: 'sex',
    ismale: ismale,
    sexRoc: [{"title": '男',check: check1,},{"title": '女',check: check2,},{"title": '不限',check: check3,}],
    checks: checks,
    index: 0,
    singleArray: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
    multiArray: [
      ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'], ['上午', '下午', '晚上']],
    objectMultiArray: [[{id: 0,name: '星期一'}, {id: 1,name: '星期二'},{id: 2,name: '星期三'},{id: 3,name: '星期四'},{id: 4,name: '星期五'},{id: 5,name: '星期六'},{id: 6,name: '星期日'}], 
      [{id: 0,name: '上午'},{id: 1,name: '下午'},{id: 2,name: '晚上'}]],
    multiIndex: multiIndex,
    objectArray: [
      { object: '语文', isSelected: false }, { object: '数学', isSelected: false }, { object: '英语', isSelected: false }, { object: '物理', isSelected: false }, { object: '化学', isSelected: false }, { object: '生物', isSelected: false }, { object: '政治', isSelected: false }, { object: '历史', isSelected: false }, { object: '地理', isSelected: false }, { object: '其他', isSelected: false }],
    isSelectHidden: isSelectHidden,
    timeArray: [{day:'',detail:''}],
    date: date,
    dates:dates,
  },

  onChange1: function (e) {
    this.setData({
      switch1: e.detail.value
    })
  },
  onChange2: function (e) {
    this.setData({
      switch2: e.detail.value
    })
  },
  select: function (e) {
    let index = e.currentTarget.dataset['index']
    let status = !e.currentTarget.dataset['status']
    let urlStr = 'objectArray[' + index + '].isSelected'
    this.setData({
      [urlStr]: status,
    })
  },
  changeSelectStatus: function() {
    isSelectHidden = !isSelectHidden
    this.setData({
      isSelectHidden: isSelectHidden
    })
  },
  radioChange: function (e) {
    if (this.data.disabled) return;
    ismale = !ismale
    this.setData({
      ismale: ismale
    })
  },

  radioChange1: function (e) {
    var that = this;
    if (this.data.disabled) return;
    var index = e.currentTarget.id;
    switch (index) {
      case '0':
        checks = [true, false, false];
        break;
      case '1':
        checks = [false, true, false];
        break;
      case '2':
        checks = [false, false, true];
        break;
    }
    this.setData({
      checks: checks
    })
  },

  addTime: function(e) {
    multiIndex.push([0,0])
    this.setData({
      multiIndex: multiIndex,
    })
  },

  addDate: function (e) {
    dates.push(date)
    this.setData({
      dates: dates,
    })
  },


  completeInfo: function(e) {
    wx.navigateTo({
      url: '/pages/teacher/info/done/done',
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    let index = e.currentTarget.dataset.index
    let urlStr = 'multiIndex['+index+']'
    this.setData({
      [urlStr]: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    let index = e.currentTarget.dataset.index
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex[index]
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    //this.setData(data);
  },
  bindDateChange: function (e) {
    let index = e.currentTarget.dataset.index
    let urlStr = 'dates[' + index + ']'
    this.setData({
      [urlStr]: e.detail.value
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: date,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.infoList = this.selectComponent("#infoList");
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
