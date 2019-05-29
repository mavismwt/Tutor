// pages/index/info/student/student.js
const app = getApp()
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
const id = getApp().globalData.id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isIPX: getApp().globalData.isIPX,
    phone: "15623337359",
    name: "袁佳",
    address: "华中科技大学韵苑23栋",
    price: 60,
    studentStatus: 'alallal',
    teacherRequire: 'ffafaà',
    number: '1',
    perTime: '2',
    sexRequire: 'male',
    switch1: false,//是否为短期家教
    switch2: true,
    value: 'sex',
    ismale: ismale,
    object: [],
    timeList:[],
    sexRoc: [{"title": '男',check: check1,},{"title": '女',check: check2,},{"title": '不限',check: check3,}],
    checks: checks,
    index: 0,
    singleArray: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
    multiArray: [
      ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'], ['上午', '下午', '晚上']],
    objectMultiArray: [[{id: 0,name: '星期一'}, {id: 1,name: '星期二'},{id: 2,name: '星期三'},{id: 3,name: '星期四'},{id: 4,name: '星期五'},{id: 5,name: '星期六'},{id: 6,name: '星期日'}], [{id: 0,name: '上午'},{id: 1,name: '下午'},{id: 2,name: '晚上'}]],
    multiIndex: multiIndex,
    objectArray: [{ object: '语文', isSelected: false }, { object: '数学', isSelected: false }, { object: '英语', isSelected: false }, { object: '物理', isSelected: false }, { object: '化学', isSelected: false }, { object: '生物', isSelected: false }, { object: '政治', isSelected: false }, { object: '历史', isSelected: false }, { object: '地理', isSelected: false }, { object: '其他', isSelected: false }],
    isSelectHidden: isSelectHidden,
    timeArray: [{day:'',detail:''}],
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
  select: function (e) {
    let index = e.currentTarget.dataset['index']
    let status = !e.currentTarget.dataset['status']
    let urlStr = 'objectArray[' + index + '].isSelected'
    this.setData({
      [urlStr]: status,
    })
    this.addObject()
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
        this.setData({
          sexRequire: 'male'
        });
        break;
      case '1':
        checks = [false, true, false];
        this.setData({
          sexRequire: 'female'
        });
        break;
      case '2':
        checks = [false, false, true]; 
        this.setData({
          sexRequire: 'both'
        });
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
  deleteTime: function(e) {
    const index = e.currentTarget.dataset.index
    multiIndex.splice(index,1)
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
      dates: dates
    })
  },


  completeInfo: function(e) {
    const id = getApp().globalData.id;
    const t = this.data;
    wx.request({
      url: 'https://hd.plus1sec.cn/parent/signup',
      data: {
        "openid": id,
        "phone": t.phone,
        "name": t.name,
        "address": t.address,
        "email": "873498174@163.com",
        "authStatus": "UNCOMMITED",
        "starList": {},
        "invitations": {},
        "order": {},
        "publish": false,
        "publishTerm": {
          "create": {
            "Level": t.singleArray[t.index],
            "pay": t.price,
            "childGender": t.ismale?"male":"female",
            "teacherGender": t.sexRequire,
            "teacherReuqire": t.teacherRequire,
            "childStatus": t.studentStatus,
            "subjects": {
              "set": t.object
            },
            "longTerm": {
              "create": {
                "lessonTime": t.perTime,
                "days": t.number,
                "timeList": {
                  "create": t.timeList
                }
              }
            },
            "shortTerm": {
              "create": {
                "lessonTime": t.perTime,
                "all": t.number,
                "timeList": {
                  "set": t.dates
                }
              }
            }
          }
        }
      },
      header: {
        'Authorization': 'Bearer'+' '+ getApp().globalData.token,
        'content-type': 'application/json'
      },
      method: 'POST',
      success: function(res) {
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
    this.addTimeList;
  },
  bindDateChange: function (e) {
    let index = e.currentTarget.dataset.index
    let urlStr = 'dates[' + index + ']'
    this.setData({
      [urlStr]: e.detail.value
    })
  },

  addTimeList: function(e) {
    const t = this.data
    var i = 0
    var timeList = []
    for (i = 0; i < t.multiIndex;i++) {
      timeList.push({
        "day": t.multiArray[0][multiIndex[i][0]],
        "detail": t.multiArray[1][multiIndex[i][1]]
      })
    }
    this.setData({
      timeList: timeList
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
