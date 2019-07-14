// component/select/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['已发布', '取消发布'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
  },
 

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击下拉显示框
    selectTap() {
      // 获取现在状态
      // wx.request({
      //   url: 'https://hd.plus1sec.cn/parent/publish/status',
      //   header: {
      //     'Authorization': 'Bearer' + ' ' + getApp().globalData.token
      //   },
      //   method: 'GET',
      //   success: function (res) {
      //     console.log(res)
      //   },
      // })
      this.setData({
        selectShow: !this.data.selectShow
      });
    },
    // 点击下拉列表
    optionTap(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      if (Index == 1) {
        wx.showModal({
          title: '取消发布成功',
          content: '您的资料将不在广场展示，他人无法主动向您发送申请。重新展示请再次发布。',
          showCancel: false,
        })
        wx.request({
          url: 'https://hd.plus1sec.cn/parent/publish/false',
          header: {
            'Authorization': 'Bearer' + ' ' + getApp().globalData.token
          },
          method: 'POST',
          success: function (res) {
            console.log(res)
          }
        })
      } else if (index == 0) {
        wx.showModal({
          title: '发布成功',
          content: '您的资料将在广场展示。',
          showCancel: false,
        })
        wx.request({
          url: 'https://hd.plus1sec.cn/parent/publish/true',
          header: {
            'Authorization': 'Bearer' + ' ' + getApp().globalData.token
          },
          method: 'POST',
          success: function (res) {
            console.log(res)
          }
        })
      }
      this.setData({
        index: Index,
        selectShow: !this.data.selectShow
      });
    }
  }
})
