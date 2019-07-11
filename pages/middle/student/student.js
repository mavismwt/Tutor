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
var location = "";
const id = getApp().globalData.id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isIPX: getApp().globalData.isIPX,
    image:'/images/bg_add.png',
    phone:'',
    name: '',
    address: '',
    price: 0,
    studentStatus: '',
    teacherRequire: '',
    number: '',
    perTime: '',
    sexRequire: 'MALE',
    switch1: false,//是否为短期家教
    switch2: true,
    value: 'sex',
    ismale: ismale,
    object: [],
    objectID: [],
    timeList:[{"day":"MON","deatil":"MORN"}],
    timeListStr: ["周一上午"],
    sexRoc: [{"title": '男',check: check1,},{"title": '女',check: check2,},{"title": '不限',check: check3,}],
    checks: checks,
    index: 0,
    singleArray: [{ text: '一年级', id: 'PRI_1' }, { text: '二年级', id: 'PRI_2' }, { text: '三年级', id: 'PRI_3' }, { text: '四年级', id: 'PRI_4' }, { text: '五年级', id: 'PRI_5' }, { text: '六年级', id: 'PRI_6' }, { text: '初一', id: 'MID_1' }, { text: '初二', id: 'MID_2' }, { text: '初三', id: 'MID_3' }, { text: '高一', id: 'MIGHIDGH_1' }, { text: '高二', id: 'MIGHIDGH_2' }, { text: '高三', id: 'MIGHIDGH_3' }],
    multiArray: [[{ id: 'MON', name: '星期一' }, { id: 'TUE', name: '星期二' }, { id: 'WED', name: '星期三' }, { id: 'THU', name: '星期四' }, { id: 'FRI', name: '星期五' }, { id: 'SAT', name: '星期六' }, { id: 'SUN', name: '星期日' }],
    [{ id: 'MORN', name: '上午' }, { id: 'AFTER', name: '下午' }, { id: 'EVEN', name: '晚上' }]],
    multiIndex: multiIndex,
    objectArray: [{ object: '语文', id: 'CHINESE', isSelected: false }, { object: '数学', id: 'MATH', isSelected: false }, { object: '英语', id: 'ENGLISH', isSelected: false }, { object: '物理', id: 'PHYSICS', isSelected: false }, { object: '化学', id: 'CHEMISTRY', isSelected: false }, { object: '生物', id: 'BIOLOGY', isSelected: false }, { object: '政治', id: 'POLITICS', isSelected: false }, { object: '历史', id: 'HISTORY', isSelected: false }, { object: '地理', id: 'GEOGRAPHY', isSelected: false }],
    isSelectHidden: isSelectHidden,
    timeArray: [{day:'',detail:''}],
    date: date,
    dates: dates,
  },
  chooseImage: function () {
    var that = this;
    // 选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          image: tempFilePaths[0]
        });
      }
    })
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
    var objectID = []
    for (i = 0; i < t.objectArray.length; i++) {
      if (t.objectArray[i].isSelected == true) {
        object.push(t.objectArray[i].object)
        objectID.push(t.objectArray[i].id)
      }
    }
    this.setData({
      object: object,
      objectID: objectID
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
          sexRequire: 'MALE'
        });
        break;
      case '1':
        checks = [false, true, false];
        this.setData({
          sexRequire: 'FEMALE'
        });
        break;
      case '2':
        checks = [false, false, true]; 
        this.setData({
          sexRequire: 'BOTH'
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

  inputedit: function(e) {
    const name = e.currentTarget.dataset.name
    this.setData({
      [name]: e.detail.detail.value
    })
    console.log(e.currentTarget.dataset.name);
  },
  inputedit2: function (e) {
    const name = e.currentTarget.dataset.name
    this.setData({
      [name]: e.detail.value
    })
    console.log(e.currentTarget.dataset.name);
  },

  complete: function (e) {
    const t = this.data
    const studentInfo = {
      id: 0,
      name: t.name ,
      img: '/images/touxiang/s1.png',
      sex: t.ismale ? "male" : "female",
      price: t.price,
      grade: t.singleArray[t.index].text,
      object: t.object,
      time: t.timeListStr,
      location: t.address,
      sexDeamand: t.teacherGender,
      isLongTerm: !t.switch1
    };
    app.globalData.info = studentInfo;
    wx.setStorage({
      key: 'info222',
      data: studentInfo
    })
    wx.navigateTo({
      url: '/pages/teacher/info/done/done',
    })
  },

  completeInfo: function(e) {
    const id = getApp().globalData.id;
    const t = this.data;
    var data = {};
    if (t.switch1 == false) {
      //长期家教
      data = {
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
            "Level": t.singleArray[t.index].id,
            "pay": t.price,
            "childGender": t.ismale ? "MALE" : "FEMALE",
            "teacherGender": t.sexRequire,
            "teacherReuqire": t.teacherRequire,
            "childStatus": t.studentStatus,
            "subjects": {
              "set": t.objectID
            },
            "longTerm": {
              "create": {
                "lessonTime": t.perTime,
                "days": t.number,
                "timeList": {
                  "create": t.timeList
                }
              }
            }
          }
        }
      }
    } else {
      //短期家教
      data = {
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
            "Level": t.singleArray[t.index].id,
            "pay": t.price,
            "childGender": t.ismale ? "MALE" : "FEMALE",
            "teacherGender": t.sexRequire,
            "teacherReuqire": t.teacherRequire,
            "childStatus": t.studentStatus,
            "subjects": {
              "set": t.objectID
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
      }
    }
    console.log(data)
    wx.request({
      url: 'https://hd.plus1sec.cn/parent/signup',
      data: data,
      header: {
        'Authorization': 'Bearer'+' '+ getApp().globalData.token,
        'content-type': 'application/json'
      },
      method: 'POST',
      success: function(res) {
        if (res.statusCode == 200) {
          wx.navigateTo({
            url: '/pages/teacher/info/done/done',
          })
        } else {
          wx.showModal({
            title: '发布失败',
            content: '您可能已经发布您的信息，如未发布请重新填写后再次提交',
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
    const that = this;
    let index = e.currentTarget.dataset.index
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex[index]
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    that.addTimeList();
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
    var timeListStr = []
    var day = ''
    for (i = 0; i < t.multiIndex.length;i++) {
      switch (t.multiArray[0][multiIndex[i][0]].id) {
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
        default:
          break;

      }
      timeListStr.push(
        day + t.multiArray[1][multiIndex[i][1]].name
      )
      console.log(timeListStr)
      timeList.push({
        "day": t.multiArray[0][multiIndex[i][0]].id,
        "detail": t.multiArray[1][multiIndex[i][1]].id
      })
    }
    this.setData({
      timeList: timeList,
      timeListStr: timeListStr
    })
  },
  showHelp: function(e) {
    wx.showModal({
      title: '',
      content: '',
    })
  },
  getLocation: function(e) {
    wx.chooseLocation({
      success: function(res) {
        console.log(res.name)
        location = res.name
      },
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
    this.setData({
      address: location
    })
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
