// pages/student/student.js
const app = getApp();
var isHidden = true;
var select = 'object';
let objectArray = [{ object: '语文', isSelected: false }, { object: '数学', isSelected: false }, { object: '英语', isSelected: false }, { object: '物理', isSelected: false }, { object: '化学', isSelected: false }, { object: '生物', isSelected: false }, { object: '政治', isSelected: false }, { object: '历史', isSelected: false }, { object: '地理', isSelected: false }, { object: '其他', isSelected: false }];
let gardeArray = [{ object: '小学', isSelected: false }, { object: '初中', isSelected: false }, { object: '高中', isSelected: false }, { object: '其他', isSelected: false }];
let sexArray = [{ object: '男', isSelected: false }, { object: '女', isSelected: false }, { object: '不限', isSelected: false }];
let typeArray = [{ object: '短期', isSelected: false }, { object: '长期', isSelected: false }, { object: '不限', isSelected: false }];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //tabbar
    isHidden: isHidden,
    select: select,
    tabbar: {},
    itemSelect: [{
      title: '家教类型',
      selected: false,
      type: 'type'
    },
    {
      title: '科目',
      selected: false,
      type: 'object'
    },
    {
      title: '年级',
      selected: false,
      type: 'grade'
    },
    {
      title: '性别要求',
      selected: false,
      type: 'sex'
    }],
    studentArray: [
      {
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
      {
        id: 0,
        name: '张同学',
        img: '/images/touxiang/s0.png',
        sex: 'female',
        price: '80',
        grade: '高二',
        object: '数学',
        time: '周六晚上',
        location: 'XXXX小区XX单元XX楼XXX室',
        sexDeamand: '不限',
        isLongTerm: false,
        number: '2',
        perTime: '2'
      }],
    selectArray: [{
      object: '',
      isSelected: false
    }],
    tabbar: {}
  },

  select: function (e) {
    let index = e.currentTarget.dataset['index']
    let status = !e.currentTarget.dataset['status']
    let urlStr = 'selectArray[' + index + '].isSelected'
    this.setData({
      [urlStr]: status
    })
  },
  confirm: function(e) {
    let sel = this.data.select;
    let selectIndex = 0;
    switch (sel) {
      case 'object':
        selectIndex = 1;
        break;
      case 'grade':
        selectIndex = 2;
        break;
      case 'sex':
        selectIndex = 3;
        break;
      case 'type':
        selectIndex =0;
        break;
      default:
        break;
    }
    let selStr = 'itemSelect[' + selectIndex + '].selected'
    this.setData({
      [selStr]: true
    })
  },
  changeStatus: function (e) {
    let type = e.currentTarget.dataset['type'];
    isHidden = !isHidden
    switch (type) {
      case 'object':
        this.setData({
          selectArray: objectArray
        })
        break;
      case 'grade':
        this.setData({
          selectArray: gardeArray
        })
        break;
      case 'sex':
        this.setData({
          selectArray: sexArray
        })
        break;
      case 'type':
        this.setData({
          selectArray: typeArray
        })
        break;
      default:
        break;
    }
    this.setData({
      isHidden: isHidden
    })
  },
  showSelect: function (e) {
    let type = e.currentTarget.dataset['type'];
    isHidden = false;
    switch (type) {
      case 'object':
        this.setData({
          select: 'object',
          selectArray: objectArray
        })
        break;
      case 'grade':
        this.setData({
          select: 'grade',
          selectArray: gardeArray
        })
        break;
      case 'sex':
        this.setData({
          select: 'sex',
          selectArray: sexArray
        })
        break;
      case 'type':
        this.setData({
          select: 'type',
          selectArray: typeArray
        })
        break;
      default:
        break;
    }
    this.setData({
      isHidden: isHidden
    })
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
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },


  onLoad: function (options) {
    app.editTabbar();
    wx.hideTabBar()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.studentList = this.selectComponent("#studentList");
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