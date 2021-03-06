// pages/student/student.js
const app = getApp();
var isHidden = true;
var select = 'object';
var selectID = [];
var searchData = {};
const objectArray = [{ object: '语文', id: 'CHINESE', isSelected: false }, { object: '数学', id: 'MATH', isSelected: false }, { object: '英语', id: 'ENGLISH', isSelected: false }, { object: '物理', id: 'PHYSICS', isSelected: false }, { object: '化学', id: 'CHEMISTRY', isSelected: false }, { object: '生物', id: 'BIOLOGY', isSelected: false }, { object: '政治', id: 'POLITICS', isSelected: false }, { object: '历史', id: 'HISTORY', isSelected: false }, { object: '地理', id: 'GEOGRAPHY', isSelected: false }];
const gradeArray = [{ object: '一年级', id: 'PRI_1', isSelected: false }, { object: '二年级', id: 'PRI_2', isSelected: false }, { object: '三年级', id: 'PRI_3', isSelected: false }, { object: '四年级', id: 'PRI_4', isSelected: false }, { object: '五年级', id: 'PRI_5', isSelected: false }, { object: '六年级', id: 'PRI_6', isSelected: false }, { object: '初一', id: 'MID_1', isSelected: false }, { object: '初二', id: 'MID_2', isSelected: false }, { object: '初三', id: 'MID_3', isSelected: false }, { object: '高一', id: 'MIDHIGH_1', isSelected: false }, { object: '高二', id: 'MIDHIGH_2', isSelected: false }, { object: '高三', id: 'MIDHIGH_3', isSelected: false }]
const sexArray = [{ object: '男', id: 'MALE', isSelected: false }, { object: '女', id: 'FEMALE', isSelected: false }, { object: '不限', id: 'BOTH',isSelected: false }];
const typeArray = [{ object: '短期', isSelected: false }, { object: '长期', isSelected: false }, { object: '不限', isSelected: false }];

const subjectJSON = {
  "CHINESE": "语文", "MATH": "数学", "ENGLISH": "英语", "PHYSICS": "物理", "CHEMISTRY": "化学", "BIOLOGY": "生物", "POLITICS": "政治", "HISTORY": "历史", "GEOGRAPHY": "地理"
};
const gradeJSON = { "PRI_1": "一年级", "PRI_2": "二年级", "PRI_3": "三年级", "PRI_4": "四年级", "PRI_5": "五年级", "PRI_6": "六年级", "MID_1": "初一", "MID_2": "初二", "MID_3": "初三", "MIDHIGH_1": "高一", "MIDHIGH_2": "高二", "MIDHIGH_3": "高三" };
const timeJSON = { "MORN": "上午", "AFTER": "中午", "EVEN": "晚上" };
const weekJSON = { "MON": "周一", "TUE": "周二", "WED": "周三", "THU": "周四", "FRI": "周五", "SAT": "周六", "SUN": "周日" };
const sexJSON = { "MALE": "男", "FEMALE": "女", "BOTH": "不限" }

Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [], //放置返回数据的数组
    listPage: 0,
    listLoading: false, //"上拉加载"的变量，默认false，隐藏
    listLoadingComplete: false,//“没有数据”的变量，默认false，隐藏
    isHidden: isHidden,
    isIPX: getApp().globalData.isIPX,
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
    this.getSelectData();
    console.log(searchData)
    wx.request({
      url: 'https://hd.plus1sec.cn/student/publishlist/search',
      data: searchData,
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
      }
    })
  },
  getSelectData: function (e) {
    searchData = {
      grades: [],
      gender: [],
      subjects: []
    }
    var grades = []
    var gradeSelected = false
    var gender = []
    var genderSelected = false
    var subjects = []
    var subjectsSelected = false
    var i,j,k = 0
    for (i = 0; i < gradeArray.length; i++) {
      if (gradeArray[i].isSelected) {
        grades.push(gradeArray[i].id)
        gradeSelected = true
      }
    }
    if (!gradeSelected) {
      grades = ['PRI_1', 'PRI_2', 'PRI_3', 'PRI_4', 'PRI_5', 'PRI_6', 'MID_1', 'MID_2', 'MID_3', 'MIDHIGH_1', 'MIDHIGH_2', 'MIDHIGH_3']
    }
    for (i = 0; i < sexArray.length; i++) {
      if (sexArray[i].isSelected) {
        gender.push(sexArray[i].id)
        genderSelected = true
      }
    }
    if (!genderSelected) {
      gender = ['MALE','FEMALE']
    } 

    for (i = 0; i < objectArray.length; i++) {
      if (objectArray[i].isSelected) {
        subjects.push(objectArray[i].id)
        subjectsSelected = true
      }
    }
    if (!subjectsSelected) {
      subjects = ['CHINESE', 'MATH', 'ENGLISH', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'POLITICS', 'HISTORY', 'GEOGRAPHY']
    }
    searchData.grades = grades
    searchData.subjects = subjects
    searchData.gender = gender
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
          selectArray: gradeArray
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
          selectArray: gradeArray
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
    const data = this.data.list[index]
    const dataStr = JSON.stringify(data);
    console.log(dataStr)
    wx.navigateTo({
      url: 'detail/detail?data=' + dataStr
    })
  },
  
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  loadListOnPage: function (page,refresh) {
    var list = []
    if (!refresh) {
      list = this.data.list
    }
    const that = this;
    wx.request({
      url: 'https://hd.plus1sec.cn/student/publishlist?first=10&skip=' + page*10,
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'GET',
      success: function (res) {
        wx.hideLoading()
        console.log(res)
        if (res.statusCode == 200) {
          if (res.data.data.length != 0) {
            var q = 0
            for (q = 0; q < res.data.data.length; q++) {
              const reqData = res.data.data[q]
              var listData = {}
              var list = []
              var times = ''
              var subjects = ''
              var level = ''
              var i, j, k, h = 0

              const timeList = reqData.publishTerm.longTerm.timeList
              const subjectList = reqData.publishTerm.subjects
              const sexDeamand = sexJSON[`${reqData.publishTerm.teacherGender}`]

              for (j = 0; j < timeList.length; j++) {
                const day = weekJSON[`${timeList[j].day}`]
                const detail = timeJSON[`${timeList[j].detail}`]
                times = times + ' ' + day + detail
              }
              times = times.slice(1,times.length)
              
              for (j = 0; j < subjectList.length; j++) {
                const subject = subjectJSON[`${subjectList[j]}`]
                subjects = subjects + ' ' + subject
              }
              subjects = subjects.slice(1,subjects.length)

              for (h = 0; h < gradeArray.length; h++) {
                if (reqData.publishTerm.Level == gradeArray[h].id) {
                  level = gradeArray[h].object
                }
              }
              console.log({
                name: reqData.name.slice(0, 1) + '同学',
                img: '/images/touxiang/s1.png',
                sex: reqData.publishTerm.childGender == 'MALE' ? 'male' : 'female',
                grade: level,
                price: reqData.publishTerm.pay,
                object: subjects,
                time: times,
                location: reqData.address == '' ? '巴黎豪庭' : reqData.address,
                sexDeamand: sexDeamand,
                isLongTerm: true
              })
              if (!reqData.longTerm) {
                listData = {
                  name: reqData.name.slice(0, 1) + '同学',
                  img: '/images/touxiang/s1.png',
                  sex: reqData.publishTerm.childGender == 'MALE' ? 'male' : 'female',
                  grade: level,
                  price: reqData.publishTerm.pay,
                  object: subjects,
                  time: times,
                  location: reqData.address == '' ? '巴黎豪庭' : reqData.address,
                  sexDeamand: sexDeamand,
                  isLongTerm: true
                }
              } else {
                listData = {
                  name: reqData.name.slice(0, 1) + '同学',
                  img: '/images/touxiang/s2.png',
                  sex: reqData.publishTerm.childGender == 'MALE' ? 'male' : 'female',
                  grade: level,
                  price: reqData.publishTerm.pay,
                  object: subjects,
                  time: times,
                  location: reqData.address,
                  sexDeamand: sexDeamand,
                  isLongTerm: false,
                  number: reqData.publishTerm.shotTerm.all,
                  perTime: reqData.publishTerm.shortTerm.lessonTime
                }
              }
              list.push(listData)
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
  
  onPullDownRefresh: function() {
    //刷新
    this.loadListOnPage(0,true);
    wx.showNavigationBarLoading();
    wx.stopPullDownRefresh()//刷新结束
  },

  onReachBottom: function() {
    //加载
    const that = this
    this.setData({
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
    this.loadListOnPage(0,true);
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})