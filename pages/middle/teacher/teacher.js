// pages/teacher/info/teacher/teacher.js
const app = getApp();
var util = require('../../../utils/util.js');
var ismale = true;
var check1 = true;
var check2 = false;
var check3 = false;
var checks = [true, false, false];
var isSelectHidden = true;
var multiIndex = [[0, 0]];
var date = util.formatDate(new Date());
var dates = [date];
var type = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isIPX: getApp().globalData.isIPX,
    phone: "",
    name: "",
    address: "",
    price: 0,
    studentStatus: '',
    teacherRequire: '',
    number: '',
    perTime: '',
    object: [],
    timeList:[],
    grade: [],
    switch1: false,
    switch2: true,
    value: 'sex',
    ismale: ismale,
    sexRoc: [{ "title": '男', check: check1, }, { "title": '女', check: check2, }, { "title": '不限', check: check3, }],
    checks: checks,
    singleIndex: 0,
    singleArray: ['华中科技大学', '武汉大学', '华中师范大学', '华中农业大学', '中南财经政法大学','武汉理工大学','更多高校'],
    gradeIndex: 0,
    gradeArray: [{ text: '大一', id: 'UNI_1' }, { text: '大二', id: 'UNI_2' }, { text: '大三', id: 'UNI_3' }, { text: '大四', id: 'UNI_4' }],
    multiArray: [
      ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'], ['上午', '下午', '晚上']],
    objectMultiArray: [[{ id: 'MON', name: '星期一' }, { id: 'TUE', name: '星期二' }, { id: 'WED', name: '星期三' }, { id: 'THU', name: '星期四' }, { id: 'FRI', name: '星期五' }, { id: 'SAT', name: '星期六' }, { id: 'SUN', name: '星期日' }],
    [{ id: 'MORN', name: '上午' }, { id: 'AFTER', name: '下午' }, { id: 'EVEN', name: '晚上' }]],
    multiIndex: multiIndex,
    objectArray: [{ object: '语文', id: 'CHINESE', isSelected: false }, { object: '数学', id: 'MATH', isSelected: false }, { object: '英语', id: 'ENGLISH', isSelected: false }, { object: '物理', id: 'PHYSICS', isSelected: false }, { object: '化学', id: 'CHEMISTRY', isSelected: false }, { object: '生物', id: 'BIOLOGY', isSelected: false }, { object: '政治', id: 'POLITICS', isSelected: false }, { object: '历史', id: 'HISTORY', isSelected: false }, { object: '地理', id: 'GEOGRAPHY', isSelected: false }],
    teachArray: [{ object: '一年级', id: 'PRI_1', isSelected: false }, { object: '二年级', id: 'PRI_2', isSelected: false }, { object: '三年级', id: 'PRI_3', isSelected: false }, { object: '四年级', id: 'PRI_4', isSelected: false }, { object: '五年级', id: 'PRI_5', isSelected: false }, { object: '六年级', id: 'PRI_6', isSelected: false }, { object: '初一', id: 'MID_1', isSelected: false }, { object: '初二', id: 'MID_2', isSelected: false }, { object: '初三', id: 'MID_3', isSelected: false }, { object: '高一', id: 'MIDHIGH_1', isSelected: false }, { object: '高二', id: 'MIDHIGH_2', isSelected: false }, { object: '高三', id: 'MIDHIGH_3', isSelected: false }],
    selectArray: [],
    isSelectHidden: isSelectHidden,
    timeArray: [{ day: '', detail: '' }],
    date: date,
    dates: dates,
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

  showSelect: function (e) {
    type = e.currentTarget.dataset['type'];
    const objectArray = this.data.objectArray;
    const gradeArray = this.data.teachArray;
    isSelectHidden = false;
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
      default:
        break;
    }
    this.setData({
      isSelectHidden: isSelectHidden
    })
    // wx.request({
    //   url: 'https://www.yjwbenji.top',
    //   data: {},
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },

  select: function (e) {
    let index = e.currentTarget.dataset['index']
    let status = !e.currentTarget.dataset['status']
    let urlStr = 'selectArray[' + index + '].isSelected'
    var selectArray = this.data.selectArray
    this.setData({
      [urlStr]: status,
    })
    switch (type) {
      case 'object':
        this.setData({
          objectArray: selectArray
        })
        break;
      case 'grade':
        this.setData({
          teachArray: selectArray
        })
        break;
      default:
        break;
    }
    this.addObject()
    this.addGrade()
  },
  confirmSelect: function(e) {

  },
  
  addObject: function (e) {
    const t = this.data
    var i = 0
    var object = []
    for (i = 0; i < t.objectArray.length; i++) {
      if (t.objectArray[i].isSelected == true) {
        object.push(t.objectArray[i].object)
      }
    }
    this.setData({
      object: object
    })
  },
  addGrade: function (e) {
    const t = this.data
    var i = 0
    var grade = []
    for (i = 0; i < t.teachArray.length; i++) {
      if (t.teachArray[i].isSelected == true) {
        grade.push(t.teachArray[i].object)
      }
    }
    this.setData({
      grade:grade
    })
  },

  changeSelectStatus: function () {
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

  addTime: function (e) {
    multiIndex.push([0, 0])
    this.setData({
      multiIndex: multiIndex,
    })
  },

  deleteTime: function (e) {
    const index = e.currentTarget.dataset.index
    multiIndex.splice(index, 1)
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

  deleteDate: function (e) {
    const index = e.currentTarget.dataset.index
    dates.splice(index, 1)
    this.setData({
      dates: dates,
    })
  },

  complete: function (e) {
    app.globalData.isCompleted = true; 
    wx.navigateTo({
      url: '/pages/teacher/info/done/done',
    })
  },

  completeInfo: function (e) {
    const id = getApp().globalData.id;
    const t = this.data;
    wx.request({
      url: 'https://hd.plus1sec.cn/student/signup',
      data: {
        "openid": id,
        "name": "xn",
        "university": "HUST",
        "grade": "UNI_1",
        "phone": "15623337359",
        "email": "xn@MediaList.com",
        "authStatus": "UNCOMMITED",
        "Gender": "MALE",
        "subjects": {
          "create": [
            {
              "name": "CHINESE",
              "level": {
                "set": [
                  "MID_1",
                  "PRI_1"
                ]
              }
            }
          ]
        },
        "avalible": {
          "create": [
            {
              "day": "SUN",
              "detail": "MORN"
            }
          ]
        },
        "invitations": {},
        "order": {}
      },
      //   "openid": id,
      //   "name": t.name,
      //   "university": t.singleArray[t.singleIndex],
      //   "grade": t.gradeArray[t.gradeIndex].id,
      //   "phone": t.phone,
      //   "email": "xn@MediaList.com",
      //   "authStatus": "UNCOMMITED",
      //   "Gender": t.ismale ? "MALE" : "FEMALE",
      //   "subjects": {
      //     "create": [
      //       {
      //         "name": "CHINESE",
      //         "level": {
      //           "set": ["MID_1"]//t.grade
      //         }
      //       }
      //     ]
      //   },
      //   "avalible": {
      //     "create": t.timeList
      //   },
      //   "invitations": {},
      //   "order": {}
      // },
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token,
        'content-type': 'application/json'
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data);
        if (res.statusCode == 200) {
          wx.navigateTo({
            url: '/pages/teacher/info/done/done',
          })
        } else {
          wx.showModal({
            title: '填写失败',
            content: '请重新填写后再次提交',
            showCancel: false
          })
        }
      }
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      singleIndex: e.detail.value
    })
  }, 
  bindPickerChange1: function (e) {
    this.setData({
      gradeIndex: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    let urlStr = 'multiIndex[' + index + ']'
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
    this.addTimeList();
  },
  addTimeList: function (e) {
    const t = this.data
    var i = 0
    var timeList = []
    for (i = 0; i < t.multiIndex; i++) {
      timeList.push({
        "day": t.multiArray[0][multiIndex[i][0]],
        "detail": t.multiArray[1][multiIndex[i][1]]
      })
    }
    this.setData({
      timeList: timeList
    })
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
