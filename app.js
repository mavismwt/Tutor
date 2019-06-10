//app.js
// var jwt = require(jsonwebtoken); 
// const openid = jwt.decode(token);
// console.log(openid);
App({
  onLaunch: function () {
    const that = this;
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();
    wx.showLoading({
      title: '加载中',
    })
    // 登录
    wx.login({
      success: res => {
        that.isAuthed()
        if (res.code) {
          wx.request({
            url: 'https://hd.plus1sec.cn/signup',
            method: 'POST',
            data: {
              code: res.code
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              const auth = res.header.Authorization;
              const id = res.data.id;
              const token = that.getToken(auth);
              console.log('Bearer '+token);
              that.globalData.token = token; 
              that.globalData.id = id; 
              wx.hideLoading();
            }
          })
        } else {
          console.log('获取用户登录态失败')
        }
      }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getToken: function(auth) {
    const Authorization = auth || null
    if(Authorization === null){
      return ''
    }
    const token = Authorization.replace("Bearer ", "")
    
    return token
  },
  getSystemInfo: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systemInfo = res;
        let deviceModel = 'iPhone X';
        if (res.model.indexOf(deviceModel) > -1) {
          that.globalData.isIPX = true;
        }
      }
    });
    wx.getStorage({
      key: 'isAuthed',
      success: function(res) {
        that.globalData.isAuthed = true;
      },
    })
  },
  isAuthed: function() {
    wx.getStorage({
      key: 'isAuthed',
      success: function(res) {
        getApp().globalData.isAuthed = true
      },
      fail: function(res) {
        getApp().globalData.isAuthed = false
      }
    })
  },

  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    userInfo: null,
    identity: 'student',
    token: '',
    id:'',
    statusCode: 0,
    isInit: true,
    isAuthed: false,
    isCompleted: false,
    isIPX: false,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#3CDEDE",
      "list": [
        {
          "pagePath": "/pages/teacher/teacher",
          "text": "找老师",
          "iconPath": "icon/icon_teacher_non.png",
          "selectedIconPath": "icon/icon_teacher_sel.png"
        },
        {
          "pagePath": "/pages/student/student",
          "text": "找学生",
          "iconPath": "icon/icon_student_non.png",
          "selectedIconPath": "icon/icon_student_sel.png"
        },
        {
          "pagePath": "/pages/middle/middle",
          "iconPath": "icon/icon_more.png",
          "isSpecial": true,
          "text": ""
        },
        {
          "pagePath": "/pages/message/message",
          "text": "消息",
          "iconPath": "icon/icon_message_non.png",
          "selectedIconPath": "icon/icon_message_sel.png"
        },
        {
          "pagePath": "/pages/mine/mine",
          "text": "个人中心",
          "iconPath": "icon/icon_user_non.png",
          "selectedIconPath": "icon/icon_user_sel.png"
        }
      ]
    }
  }
})