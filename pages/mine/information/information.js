// pages/mine/information/information.js
const app = getApp();
var identity = app.globalData.identity;
var contactInfo = [{contactIndex: 0,name: '',number: '',advice:''}];
var contactNum = 2;
const gradeArray = [{ text: '大一', id: 'UNI_1' }, { text: '大二', id: 'UNI_2' }, { text: '大三', id: 'UNI_3' }, { text: '大四', id: 'UNI_4' }];
const objectArray = [{ object: '语文', id: 'CHINESE', isSelected: false }, { object: '数学', id: 'MATH', isSelected: false }, { object: '英语', id: 'ENGLISH', isSelected: false }, { object: '物理', id: 'PHYSICS', isSelected: false }, { object: '化学', id: 'CHEMISTRY', isSelected: false }, { object: '生物', id: 'BIOLOGY', isSelected: false }, { object: '政治', id: 'POLITICS', isSelected: false }, { object: '历史', id: 'HISTORY', isSelected: false }, { object: '地理', id: 'GEOGRAPHY', isSelected: false }];
const teachArray = [{ object: '一年级', id: 'PRI_1', isSelected: false }, { object: '二年级', id: 'PRI_2', isSelected: false }, { object: '三年级', id: 'PRI_3', isSelected: false }, { object: '四年级', id: 'PRI_4', isSelected: false }, { object: '五年级', id: 'PRI_5', isSelected: false }, { object: '六年级', id: 'PRI_6', isSelected: false }, { object: '初一', id: 'MID_1', isSelected: false }, { object: '初二', id: 'MID_2', isSelected: false }, { object: '初三', id: 'MID_3', isSelected: false }, { object: '高一', id: 'MIDHIGH_1', isSelected: false }, { object: '高二', id: 'MIDHIGH_2', isSelected: false }, { object: '高三', id: 'MIDHIGH_3', isSelected: false }]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    identity: 'student',
    current: 0,
    isInfo: true,
    studentInfo: null,
    teacherInfo: {
      name: '叶老师',
      img: '/images/touxiang/t1.png',
      sex: 'female',
      school: '华中科技大学',
      grade: '一年级',
      price: '100',
      object: '数学，英语',
      time: '周一下午'
    },
    listData: {},
    contactInfo: [{
      contactIndex: 1,
      name: '',
      number:'',
      advice:'建议填写学校内的亲近好友'
    }, 
    {
      contactIndex: 2,
      name: '',
      number: '',
      advice: '建议填写父母或辅导员联系方式'
    }],
    contactNum: contactNum
  },

  change: function (e) {
    const current = e.detail.current
    this.setData({
      current: current
    })
  },

  handleChange: function (e) {
    const that = this;
    that.setData({
      current:e.detail.key
    })
  },

  checkCurrent: function (e) {
    const that = this;
    if (that.data.current === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        current: e.target.dataset.current
      })
    }
  },

  addContact: function() {
    contactInfo = this.data.contactInfo;
    contactNum += 1;
    contactInfo.push({ contactIndex: contactNum, name: '', number: '', advice:'' })
    console.log(contactInfo)
    this.setData({
      contactInfo:contactInfo
    })
  },
  saveInfo: function() {
    wx.showModal({
      title: '保存成功',
      content: '已保存安全防护信息',
      showCancel: false,
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    const id = app.globalData.id;
    identity = app.globalData.identity;
    this.setData({
      identity: identity,
      id: id
    }) 
    const searchid = identity=='student'?'parent':'student'
    const call = identity == 'student' ? '同学' : '老师'
    wx.request({
      url: 'https://hd.plus1sec.cn/' + searchid + '/info/' + this.data.id,
      header: {
        'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        if (identity == 'student') {
          var listData = {}
          var times = ''
          var subjects = ''
          var level = ''
          var i, j, k, h = 0
          const timeList = res.data.data.publishTerm.longTerm.timeList
          const subjectList = res.data.data.publishTerm.subjects
          for (i = 0; i < timeList.length; i++) {
            var day = ''
            var detail = ''
            switch (timeList[i].day) {
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
            switch (timeList[i].detail) {
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
            if (i == 0) {
              times = day + detail
            } else {
              times = times + ' ' + day + detail
            }
          }
          for (j = 0; j < subjectList.length; j++) {
            for (k = 0; k < objectArray.length; k++) {
              if (subjectList[j] == objectArray[k].id) {
                if (j == 0) {
                  subjects = objectArray[k].object
                } else {
                  subjects = subjects + ' ' + objectArray[k].object
                }
              }
            }
          }
          for (h = 0; h < teachArray.length; h++) {
            if (res.data.data.publishTerm.Level == teachArray[h].id) {
              level = teachArray[h].object
            }
          }
          var sexDeamand = '';
          let teacherGender = res.data.data.publishTerm.teacherGender;
          switch (teacherGender) {
            case 'MALE':
              sexDeamand = '男';
              break;
            case 'FEMALE':
              sexDeamand = '女';
              break;
            case 'BOTH':
              sexDeamand = '不限';
              break;
          }
          if (!res.data.data.longTerm) {
            listData = {
              name: res.data.data.name.slice(0,1) + '同学',
              img: '/images/touxiang/t1.png',
              sex: res.data.data.publishTerm.childGender == 'MALE' ? 'male' : 'female',
              grade: level,
              price: res.data.data.publishTerm.pay,
              object: subjects,
              time: times,
              location: res.data.data.address,
              sexDeamand: sexDeamand,
              isLongTerm: true
            }
          } else {
            listData = {
              name: res.data.data.name.slice(0, 1) + '同学',
              img: '/images/touxiang/t1.png',
              sex: res.data.data.publishTerm.childGender == 'MALE' ? 'male' : 'female',
              grade: level,
              price: res.data.data.publishTerm.pay,
              object: subjects,
              time: times,
              location: res.data.data.address,
              sexDeamand: sexDeamand,
              isLongTerm: false,
              number: res.data.data.publishTerm.shotTerm.all,
              perTime: res.data.data.publishTerm.shortTerm.lessonTime
            }
          }
          that.setData({
            listData: listData
          })
        } else {
          var listData = {}
          var times = ''
          var subjects = ''
          var level = ''
          const timeList = res.data.data.avalible
          const subjectList = res.data.data.subjects
          for (i = 0; i < timeList.length; i++) {
            var day = ''
            var detail = ''
            switch (timeList[i].day) {
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
            switch (timeList[i].detail) {
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
            if (i == 0) {
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
          var l = 0
          for (l = 0; l < res.data.data.subjects[0].level.length; l++) {
            for (h = 0; h < teachArray.length; h++) {
              if (res.data.data.subjects[0].level[l] == teachArray[h].id) {
                if (l == 0) {
                  level = teachArray[h].object
                } else {
                  level = level + ' ' + teachArray[h].object
                }
              }
            }
          }
          
          var school = ''
          switch (res.data.data.university) {
            case 'HUST':
              school = '华中科技大学';
              break;
            case 'WHU':
              school = '武汉大学';
              break;
            default:
              school = '其他高校';
              break;
          }
          listData = {
            id: res.data.data.openid,
            name: res.data.data.name.slice(0,1)+'老师',
            school: school,
            img: '/images/touxiang/t1.png',
            sex: res.data.data.Gender == 'MALE' ? 'male' : 'female',
            grade: level,
            price: res.data.data.expectPay,
            object: subjects,
            time: times
          }
          that.setData({
            listData: listData
          })
          console.log(that.data.listData)
        }
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (identity == 'student') {
      this.list = this.selectComponent("#studentList");
    } else {
      this.list = this.selectComponent("#teacherList");
    }
    this.toplistcell = this.selectComponent("#toplistcell");
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