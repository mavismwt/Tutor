// component/teacherlist/teacherlist.js
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
    school: {
      type: String,
      value: '学校'
    }, 
    grade: {
      type: String,
      value: '可教年级'
    }, 
    object: {
      type: String,
      value: '可教科目'
    },
    time: {
      type: String,
      value: '空闲时间'
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
      value: '/pages/teacher/info/teacher/teacher'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})