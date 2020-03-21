import request from '../../service/network.js'

const app = getApp()
console.log(app.globalData.name)
console.log(app)
Page({
  data:{
    name:"accca",
    num:0
  },
  _num(){
    // wx.request({
    //   url:'http://hrtest2.dev.cn2.corp.agrant.cn/biztest/biz/api/loginCheck',
    //   method:'POST',
    //   header: {
    //     'contentType': 'application/json',
    //     'Authorization':null
    //   },
    //   data:{username: "yonggang.wang@agrant.cn", password: "11111111"},
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    console.log(11)
    // request({
    //   url:"http://hrtest2.dev.cn2.corp.agrant.cn/biztest/biz/api/loginCheck",
    //   method:'POST',
    //   header: {
    //     'contentType': 'application/json',
    //     'Authorization':null
    //   },
    //   data:{username: "yonggang.wang@agrant.cn", password: "11111111"}
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },
  getuserInfo(event){
    console.log(event)
  },
  onLoad(){
    //this._num()
  },

  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log(1)
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  },
  showToast(){
    wx.showToast({
      title: '加载中',
      duration:3000,
      icon:'loading'
    })
  },
  showmodal(){
    wx.showModal({
      title:'标题',
      showCancel:true,
      cancelText:'取消',
      success(res){
        console.log(res)
      }
    })
  },
  showloading(){
    wx.showLoading({
      title: '加载中ing',
      mask:true
    })

    setTimeout(() => {
      wx.hideLoading({
        complete: (res) => {},
      })
    }, 1000)
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success:(res) => {
        console.log(res)
        switch(res.tapIndex){
          case 0:
            console.log(0);
            break;
          case 1:
            console.log(1)
            break;
        }
      }
    })
  },
  onShareAppMessage(options){
    return {
      title:'nihao xiao chengxu',
      path:'/pages/about/about',   //分享后打开显示的页面  默认首页
      imageUrl:'/assets/imgs/gongzuotai.png'
    }
  }
})