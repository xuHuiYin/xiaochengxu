// components/my-cpn/my-cpn.js
Component({
  //定义组件 配置选项
  options:{
    styleIsolation:"shared",  //自定义组件与父组件 样式 相互影响  如果不设置 则不会相互影响
    multipleSlots:true
  },
  /**
   * 组件的属性列表  传递数据
   */
  properties: {
    title:{
      type:String,
      value: '我是标题',
      observer:function(newv, oldv){
        console.log(newv, oldv)
      }
    },
    list:{
      type:Array,
      value:[]
    }
  },
  //外借给 组件 传入 class  
  externalClasses:['a'],
  /**
   * 组件的初始数据
   */
  data: {
    // title:'我是标题'
    active_index:0,
    num:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addNum(){
      this.triggerEvent('addNum')
    },
    addNums(v){
      this.setData({
        num:this.data.num + v
      })
    },
    _active(event){
      
      const index = event.currentTarget.dataset.index
      console.log(index)
      this.setData({
        active_index: index
      })

      //通知页面内部点击事件
      this.triggerEvent('itemClick', {index, title:this.properties.list[index]}, {})
    }
  },
  //监听数据改变   没有 old 数据
  observers:{
    num(newv){
      console.log(newv)
    }
  },
  //组件监听生命周期
  //1 监听所在页面生命周期
  pageLifetimes:{
    show(){
      console.log('监听页面显示出来时')
    },
    hide(){
      console.log('监听页面隐藏出来时')
    },
    resize(){
      console.log('监听页面尺寸改变时')
    }
  },
   //2 监听本组件生命周期
   lifetimes:{
     created(){
      console.log('组件被创建时')
     },
     attached(){
      console.log('组件被添加页面时')
     },
     ready(){
      console.log('组件被渲染出来时')
     },
     moved(){
      console.log('组件被移动时')
     },
     detached(){
      console.log('组件被移除掉时')
     }
   }
})
