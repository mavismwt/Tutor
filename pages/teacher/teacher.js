//index.js
//获取应用实例
const app = getApp();
var select = 'object';
var filter = false;
var isHidden = true;
var searchData = {};
const objectArray = [{ object: '语文', id: 'CHINESE', isSelected: false }, { object: '数学', id: 'MATH', isSelected: false }, { object: '英语', id: 'ENGLISH', isSelected: false }, { object: '物理', id: 'PHYSICS', isSelected: false }, { object: '化学', id: 'CHEMISTRY', isSelected: false }, { object: '生物', id: 'BIOLOGY', isSelected: false }, { object: '政治', id: 'POLITICS', isSelected: false }, { object: '历史', id: 'HISTORY', isSelected: false }, { object: '地理', id: 'GEOGRAPHY', isSelected: false }];
const gradeArray = [{ object: '一年级', id: 'PRI_1', isSelected: false }, { object: '二年级', id: 'PRI_2', isSelected: false }, { object: '三年级', id: 'PRI_3', isSelected: false }, { object: '四年级', id: 'PRI_4', isSelected: false }, { object: '五年级', id: 'PRI_5', isSelected: false }, { object: '六年级', id: 'PRI_6', isSelected: false }, { object: '初一', id: 'MID_1', isSelected: false }, { object: '初二', id: 'MID_2', isSelected: false }, { object: '初三', id: 'MID_3', isSelected: false }, { object: '高一', id: 'MIDHIGH_1', isSelected: false }, { object: '高二', id: 'MIDHIGH_2', isSelected: false }, { object: '高三', id: 'MIDHIGH_3', isSelected: false }]
const sexArray = [{ object: '男', id: 'MALE', isSelected: false }, { object: '女', id: 'FEMALE', isSelected: false }, { object: '不限', id: 'BOTH', isSelected: false }];
const schoolArray = [{ object: '华中科技大学', id:'HUST',isSelected: false }, { object: '武汉大学', id:'WHU', isSelected: false }, { object: '其他',id:'OTHER', isSelected: false }];

const subjectJSON = {
  "CHINESE": "语文", "MATH": "数学", "ENGLISH": "英语", "PHYSICS": "物理", "CHEMISTRY": "化学", "BIOLOGY": "生物", "POLITICS": "政治", "HISTORY": "历史", "GEOGRAPHY": "地理"
};
const gradeJSON = { "PRI_1": "一年级", "PRI_2": "二年级", "PRI_3": "三年级", "PRI_4": "四年级", "PRI_5": "五年级", "PRI_6": "六年级", "MID_1": "初一", "MID_2": "初二", "MID_3": "初三",  "MIDHIGH_1": "高一", "MIDHIGH_2": "高二", "MIDHIGH_3": "高三"};
const timeJSON = { "MORN": "上午", "AFTER": "中午", "EVEN": "晚上" };
const weekJSON = { "MON": "周一", "TUE": "周二", "WED": "周三","THU":"周四","FRI":"周五","SAT":"周六","SUN":"周日"};
const sexJSON = {"MALE":"男","FEMALE":"女","BOTH":"不限"}
const schoolJSON = {"HUST":"华中科技大学","WHU":"武汉大学","OTHER":"其他高校"}
var list = []
Page({
  /**
   * 页面的初始数据
   */

  data: {
    list: [], //放置返回数据的数组
    listPage: 0,
    listLoading: false, //"上拉加载"的变量，默认false，隐藏
    listLoadingComplete: false,//“没有数据”的变量，默认false，隐藏
    selected: false,
    isIPX: getApp().globalData.isIPX,
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
    selectArray: [{
      object: '',
      isSelected: false
    }],
    tabbar: {}
  },

  confirm: function (e) {
    const that = this
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
    this.getSelectData()
    console.log(searchData)
    wx.request({
      url: 'https://hd.plus1sec.cn/parent/publishlist/search',
      data: searchData,
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        var i = 0
        if (res.statusCode == 200) {
          list = []
          for (i = 0; i < res.data.students.length; i++) {
            console.log(res.data.students[i])
            const name = res.data.students[i].name.slice(0, 1) + '老师'
            const sex = res.data.students[i].Gender == 'MALE' ? 'male' : 'female'
            const price = res.data.students[i].expectPay
            const school = schoolJSON[`${res.data.students[i].university}`]

            var times = ''
            var subjects = ''
            var levels = ''

            const timeList = res.data.students[i].avalible
            const subjectList = res.data.students[i].subjects
            const levelList = res.data.students[i].subjects[0].level
            var j, k, l = 0

            for (j = 0; j < timeList.length; j++) {
              const day = weekJSON[`${timeList[j].day}`]
              const detail = timeJSON[`${timeList[j].detail}`]
              const time = day + detail
              times = times + ' ' + time
            }
            times = times.slice(1, times.length)

            for (k = 0; k < subjectList.length; k++) {
              const subject = subjectJSON[`${subjectList[k].name}`]
              subjects = subjects + ' ' + subject
            }
            subjects = subjects.slice(1, subjects.length)

            for (l = 0; l < levelList.length; l++) {
              const level = gradeJSON[`${levelList[l]}`]
              levels = levels + ' ' + level
            }
            levels.slice(1, levels.length)
            list.push({ id: res.data.students[i].openid, name: name, img: '/images/touxiang/t1.png', sex: sex, school: school, grade: levels, price: price, time: times, object: subjects })
            console.log(list)
          }
          that.setData({
            list: list
          })
        }
      }
    })
  },

  getSelectData: function() {
    searchData = {
      levels: [],
      university:[],
      gender: [],
      subjects: []
    }
    var levels = ['PRI_1', 'PRI_2', 'PRI_3', 'PRI_4', 'PRI_5', 'PRI_6', 'MID_1', 'MID_2', 'MID_3', 'MIDHIGH_1', 'MIDHIGH_2', 'MIDHIGH_3']
    var levelSelected = false
    var gender = ['MALE', 'FEMALE']
    var genderSelected = false
    var subjects = ['CHINESE', 'MATH', 'ENGLISH', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'POLITICS', 'HISTORY', 'GEOGRAPHY']
    var subjectsSelected = false
    var university = ['HUST', 'WHU', 'OTHER']
    var universitySelected = false
    var i, j, k, h = 0
    for (i = 0; i < gradeArray.length; i++) {
      if (gradeArray[i].isSelected && !levelSelected) {
        levels = []
        levels.push(gradeArray[i].id)
        levelSelected = true
      } else if (gradeArray[i].isSelected) {
        levels.push(gradeArray[i].id)
      }
    }
    for (i = 0; i < sexArray.length; i++) {
      if (sexArray[i].isSelected && !genderSelected) {
        gender = []
        gender.push(sexArray[i].id)
        genderSelected = true
      } else if (sexArray[i].isSelected) {
        gender.push(sexArray[i].id)
      }
    }
    for (i = 0; i < objectArray.length; i++) {
      if (objectArray[i].isSelected && !subjectsSelected ) {
        subjects = []
        subjects.push(objectArray[i].id)
        subjectsSelected = true
      } else if (objectArray[i].isSelected) {
        subjects.push(objectArray[i].id)
      }
    }
    for (i = 0; i < schoolArray.length; i++) {
      if (schoolArray[i].isSelected && !universitySelected) {
        university = []
        university.push(schoolArray[i].id)
        universitySelected = true
      } else if (schoolArray[i].isSelected) {
        university.push(schoolArray[i].id)
      }
    }
    searchData.levels = levels
    searchData.subjects = subjects
    searchData.gender = gender
    searchData.university = university
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
      url: 'detail/detail?id='+getApp().globalData.id
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
          selectArray: gradeArray
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
          selectArray: gradeArray
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
    if (!refresh) {
      list = this.data.list
    } else {
      list = []
    }
    var that = this
    wx.request({
      url: 'https://hd.plus1sec.cn/parent/publishlist?first=10&skip=' + page*10,
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'GET',
      success: function (res) {
        wx.hideLoading()
        that.showList(res)
      }
    })
  },

  showList: function(res) {
    const that = this
    var i = 0
    if(res.statusCode == 200) {
      for (i = 0; i < res.data.data.length; i++) {
        console.log(res.data.data[i])
        const name = res.data.data[i].name.slice(0, 1) + '老师'
        const sex = res.data.data[i].Gender == 'MALE' ? 'male' : 'female'
        const price = res.data.data[i].expectPay
        const school = schoolJSON[`${res.data.data[i].university}`]

        var times = ''
        var subjects = ''
        var levels = ''

        const timeList = res.data.data[i].avalible
        const subjectList = res.data.data[i].subjects
        const levelList = res.data.data[i].subjects[0].level
        var j, k, l = 0

        for (j = 0; j < timeList.length; j++) {
          const day = weekJSON[`${timeList[j].day}`]
          const detail = timeJSON[`${timeList[j].detail}`]
          const time = day + detail
          times = times + ' ' + time
        }
        times = times.slice(1, times.length)

        for (k = 0; k < subjectList.length; k++) {
          const subject = subjectJSON[`${subjectList[k].name}`]
          subjects = subjects + ' ' + subject
        }
        subjects = subjects.slice(1, subjects.length)

        for (l = 0; l < levelList.length; l++) {
          const level = gradeJSON[`${levelList[l]}`]
          levels = levels + ' ' + level
        }
        levels.slice(1, levels.length)
        list.push({ id: res.data.data[i].openid, name: name, img: '/images/touxiang/t1.png', sex: sex, school: school, grade: levels, price: price, time: times, object: subjects })
      }
      that.setData({
        list: list,
        listLoading: false
      })
    }
  },

  onPullDownRefresh() {
    //刷新
    this.loadListOnPage(0,true);
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
    this.loadListOnPage(0,true);
    // wx.request({
    //   url: 'https://hd.plus1sec.cn/student/update',
    //   id: getApp().globalData.id,
    //   data: {
    //     expectPay: "100"
    //   },
    //   header: {
    //     'Authorization': 'Bearer' + ' ' + getApp().globalData.token
    //   },
    //   method: 'POST',
    //   success: function (res) {
    //     console.log(res)
    //   }

    // })
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