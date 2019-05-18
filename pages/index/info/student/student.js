// pages/index/info/student/student.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    listArray: [],
    index: 0,
    multiArray: [['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'], ['上午', '下午', '晚上']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '星期一'
        },
        {
          id: 1,
          name: '星期二'
        },
        {
          id: 2,
          name: '星期三'
        },
        {
          id: 3,
          name: '星期四'
        },
        {
          id: 4,
          name: '星期五'
        },
        {
          id: 5,
          name: '星期六'
        },
        {
          id: 6,
          name: '星期日'
        }
      ], [
        {
          id: 0,
          name: '上午'
        },
        {
          id: 1,
          name: '下午'
        },
        {
          id: 2,
          name: '晚上'
        }
      ]
    ],
    multiIndex: [0, 0],
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
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