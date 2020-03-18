const app = getApp()
console.log(app.globalData.name)
Page({
  data:{
    name:"accca",
    num:0
  },
  _num(){
    wx.request({
      url:'http://hrtest2.dev.cn2.corp.agrant.cn/biztest/biz/api/loginCheck',
      method:'POST',
      header: {
        'contentType': 'application/json',
        'Authorization':null
      },
      data:{username: "yonggang.wang@agrant.cn", password: "11111111"},
      success: (res) => {
        console.log(res)
      }
    })
  },
  getuserInfo(event){
    console.log(event)
  },
  onLoad(){
    
  },

  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log(1)
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})