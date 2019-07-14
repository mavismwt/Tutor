//index.js
//获取应用实例
const app = getApp();
var select = 'object';
var filter = false;
var isHidden = true;

let objectArray = [{ object: '语文', isSelected: false }, { object: '数学', isSelected: false }, { object: '英语', isSelected: false }, { object: '物理', isSelected: false }, { object: '化学', isSelected: false }, { object: '生物', isSelected: false }, { object: '政治', isSelected: false }, { object: '历史', isSelected: false }, { object: '地理', isSelected: false }, { object: '其他', isSelected: false }];
let gardeArray = [{ object: '小学', isSelected: false }, { object: '初中', isSelected: false }, { object: '高中', isSelected: false }, { object: '其他', isSelected: false }];
let sexArray = [{ object: '男', isSelected: false }, { object: '女', isSelected: false }, { object: '不限', isSelected: false }];
let schoolArray = [{ object: '华中科技大学', isSelected: false }, { object: '武汉大学', isSelected: false }, { object: '不限', isSelected: false }];
Page({
  /**
   * 页面的初始数据
   */

  data: {
    list: [], //放置返回数据的数组
    listPage: 1,
    listLoading: false, //"上拉加载"的变量，默认false，隐藏
    listLoadingComplete: false,//“没有数据”的变量，默认false，隐藏
    selected: false,
    isHidden: isHidden,
    itemSelect: [{
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
      title: '性别',
      selected: false,
      type: 'sex'
    },
    {
      title: '学校',
      selected: false,
      type: 'school'
    }],
    teacherArray: [
    {
      id:'',
      name: '叶老师',
      img: '/images/touxiang/t1.png',
      sex: 'female',
      school: '华中科技大学',
      grade: '一年级',
      price: '100',
      object: '数学，英语',
      time: '周一下午'
    },
    {
      id: '',
      name: '陈老师',
      img: '/images/touxiang/t2.png',
      sex: 'male',
      school: '华中科技大学',
      grade: '高三',
      price: '100',
      object: '物理',
      time: '周三晚上'
    }
    ],
    selectArray: [{
      object: '',
      isSelected: false
    }],
    tabbar: {}
  },

  confirm: function (e) {
    let sel = this.data.select
    let selectIndex = 0;
    switch (sel) {
      case 'object':
        selectIndex = 0;
        break;
      case 'grade':
        selectIndex = 1;
        break;
      case 'sex':
        selectIndex = 2;
        break;
      case 'school':
        selectIndex = 3;
        break;
      default:
        break;
    }
    let selStr = 'itemSelect[' + selectIndex + '].selected'
    this.setData({
      [selStr]: true
    })
    wx.request({
      url: 'https://hd.plus1sec.cn/student/publishlist/search',
      data: {
        "grades": ["PRI_1", "PRI_2"],
        "gender": ["MALE", "FEMALE"],
        "subjects": ["MATH", "ENGLISH"]
      },
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
      }
    })
  },

  select: function (e) {
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
  navToDetail: function (e) {
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
          select: 'school',
          selectArray: schoolArray
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
      case 'school':
        this.setData({
          select: 'school',
          selectArray: schoolArray
        })
        break;
      default:
        break;
    }
    this.setData({
      isHidden: isHidden
    })

  },

  loadListOnPage: function (page, refresh) {
    var list = []
    if (!refresh) {
      list = this.data.list
    }
    var that = this
    wx.request({
      url: 'https://hd.plus1sec.cn/parent/publishlist?first=' + that.data.listPage + '&skip=10',
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'GET',
      success: function (res) {
        wx.hideLoading()
        console.log(res)
        if (res.statusCode == 200) {
          if (res.data.data.length != 0) {
            for (i = 0; i < res.data.data.length; i++) {
              var times = ''
              var subjects = ''
              var level = ''
              const timeList = res.data.data[i].avalible
              const subjectList = res.data.data[i].publishTerm.subjects
              for (p = 0; p < timeList.length; i++) {
                var day = ''
                var detail = ''
                switch (timeList[p].day) {
                  case 'MON':
                    day = '周一';
                    break;
                  case 'TUE':
                    day = '周二';
                    break;
                  case 'WED':
                    day = '周三';
                    break;
                  case 'THU':
                    day = '周四';
                    break;
                  case 'FRI':
                    day = '周五';
                    break;
                  case 'SAT':
                    day = '周六';
                    break;
                  case 'SUN':
                    day = '周日';
                    break;
                }
                switch (timeList[p].detail) {
                  case 'MORN':
                    detail = '上午';
                    break;
                  case 'AFTER':
                    detail = '下午';
                    break;
                  case 'EVEN':
                    detail = '晚上';
                    break;
                }
                if (p == 0) {
                  times = day + detail
                } else {
                  times = times + ' ' + day + detail
                }
              }
              for (j = 0; j < subjectList.length; j++) {
                for (k = 0; k < objectArray.length; k++) {
                  if (subjectList[j].name == objectArray[k].id) {
                    if (j == 0) {
                      subjects = objectArray[k].object
                    } else {
                      subjects = subjects + ' ' + objectArray[k].object
                    }
                  }
                }
              }
              for (h = 0; h < teachArray.length; h++) {
                if (res.res.data.data[i].subjects[0].level.level == teachArray[h].id) {
                  level = teachArray[h].object
                }
              }
              list.push({ id: res.data.data[i].openid, name: res.data.data[i].name, img: '/images/touxiang/t1.png', sex: res.data.data[i].Gender == 'MALE' ? 'male' : 'female', school: res.data.data[i].university, grade: level, price: res.data.data[i].expectPay , object: subjects, time: times })
            }
            that.setData({
              list: list,
              listLoading: false
            })
          } else {
            that.setData({
              listLoading: false,
              listLoadingComplete: true,
            })
          }
        } else {
          wx.showModal({
            title: '加载失败',
            content: '请检查网络及登录状况',
            showCancel: false,
          })
          that.setData({
            listLoading: false,
            listLoadingComplete: false,
          })
        }
      }
    })
  },

  onPullDownRefresh() {
    //刷新
    this.loadListOnPage(1,true);
    wx.showNavigationBarLoading();
    wx.stopPullDownRefresh()//刷新结束
  },

  onReachBottom() {
    //加载
    const that = this
    that.setData({
      listLoading: true
    })
    if (!that.data.searchLoadingComplete) {
      that.setData({
        listPage: that.data.listPage + 1, //每次触发上拉事件，+1
      });
      that.loadListOnPage(that.data.listPage,false);
    }
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    wx.hideTabBar();
    wx.showLoading({
      title: '加载中',
    })
    this.loadListOnPage(1,true);
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})