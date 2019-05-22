// component/studentlist/long/long.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: '名字'
    },
    sex: {
      type: String,
      value: 'male'
    },
    price: {
      type: String,
      value: 'XX'
    },
    grade: {
      type: String,
      value: '年级'
    },
    object: {
      type: String,
      value: '科目'
    },
    time: {
      type: String,
      value: '时间'
    },
    location: {
      type: String,
      value: '地点'
    },
    sexDeamand: {
      type: String,
      value: '不限'
    },
    isLongTerm: {
      type: Boolean,
      value: true
    },
    number: {
      type: String,
      value: '1'
    },
    perTime: {
      type: String,
      value: '2'
    },
    lookNumber: {
      type: String,
      value: '333'
    },
    appliNumber: {
      type: String,
      value: '20'
    },
    url: {
      type: String,
      value: '/pages/teacher/info/student/student'
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    url: '/pages/teacher/info/student/student'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    edit: function() {
      var that = this
      wx.navigateTo({
        url: that.data.url,
      })
    }
  }
})
