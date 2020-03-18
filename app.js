App({
  //小程序初始化完成时
  onLaunch:function(){
    console.log(11)
    wx.getUserInfo({
      success: (res) => {
        console.log(res) 
      },
    })
  },
  //小程序显示出来时
  onShow:(options) => {
    console.log(options)
    switch(options.scene) {
      case 1001:
        console.log(1001);
        break;
      case 1005:
        console.log(1005)
    }
  },
  //小程序隐藏时
  onHide:() => {

  },
  //小程序产生一些错误
  onError: () => {

  },
  //全局参数
  globalData:{
    name:"阴旭辉",
    age:18
  }
})