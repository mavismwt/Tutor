//index.js
//获取应用实例
const app = getApp();
var isHidden = true;
let objectArray = [{object: '语文',isSelected: false},{object: '数学',isSelected: false},{object: '英语',isSelected: false},{object: '物理',isSelected: false},{object: '化学',isSelected: false},{object: '生物',isSelected: false},{object: '政治',isSelected: false},{object: '历史',isSelected: false},{object: '地理',isSelected: false},{object: '其他',isSelected: false}];
let gardeArray = [{ object: '小学', isSelected: false }, { object: '初中', isSelected: false }, { object: '高中', isSelected: false }, { object: '其他', isSelected: false }];
let sexArray = [{ object: '男', isSelected: false }, { object: '女', isSelected: false }, { object: '不限', isSelected: false }];
let schoolArray = [{ object: '华中科技大学', isSelected: false }, { object: '武汉大学', isSelected: false }, { object: '不限', isSelected: false }];
Page({
  /**
   * 页面的初始数据
   */
  
  data: {
    isHidden: isHidden,
    teacherArray: [
      {
        name: '叶老师',
        sex: 'female',
        school: '华中科技大学',
        grade: '一年级',
        price:'100',
        object:'数学，英语',
        time:'周一下午'
      },
      {
        name: '陈老师',
        sex: 'male',
        school: '华中科技大学',
        grade: '高三',
        price: '100',
        object: '物理',
        time: '周三晚上'
      }, 
      {
        name: '叶老师',
        sex: 'male',
        school: '华中科技大学',
        grade: '一年级',
        price: '100',
        object: '数学，英语',
        time: '周一下午'
      },
      {
        name: '陈老师',
        sex: 'female',
        school: '华中科技大学',
        grade: '高三',
        price: '100',
        object: '物理',
        time: '周三晚上'
      },
    ],
    selectArray: [{
      object: '',
      isSelected: false
    }],
    tabbar: {}
  },

  select: function(e) {
    let index = e.currentTarget.dataset['index']
    let status = !e.currentTarget.dataset['status']
    let urlStr = 'selectArray[' + index + '].isSelected'
    this.setData({
      [urlStr]: status,
    })
  },

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    this.teacherList = this.selectComponent("#teacherList");
  },
  navToDetail: function(e) {
    wx.navigateTo({
      url: 'detail/detail',
    })
  },
  onClick: function (e) {
    var index = e.currentTarget.id// e.currentTarget
    wx.navigateTo({
      url: 'detail/detail?id=' + this.data.teacherArray[index].id
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
      case 'school':
        this.setData({
          selectArray: schoolArray
        })
        break;
      default:
        break;
    }
    this.setData({
      isHidden: isHidden
    })
    // wx.request({
    //   url: 'https://www.yjwbenji.top',
    //   data: {},
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },
  showSelect: function (e) {
    let type = e.currentTarget.dataset['type'];
    isHidden = false;
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
      case 'school':
        this.setData({
          selectArray: schoolArray
        })
        break;
      default:
        break;
    }
    this.setData({
      isHidden: isHidden
    })

    console.log(array)
    // wx.request({
    //   url: 'https://www.yjwbenji.top',
    //   data: {},
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    wx.hideTabBar()
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