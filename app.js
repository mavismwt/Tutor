//app.js

App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
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
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
        //  if (res.model == "iPhone X") {
        //    t.setData({
        //      isIPX: true,
        //    })
        //  } else {
        //    t.setData({
        //      isIPX: false,
        //    })
        //  }
      }
    });
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
    isAuthed: false,
    isCompleted: false,
    isIPX: false,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#3CDEDE",
      "list": [
        {
          "pagePath": "/pages/teacher/index",
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