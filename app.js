import request from './service/network'

const TOKEN = 'token'

App({
  //全局参数
  globalData:{
    name:"阴旭辉",
    age:18,
    token:null
  },
  //小程序初始化完成时
  onLaunch:function(){
    // wx.getUserInfo({
    //   success: (res) => {
    //     console.log(res) 
    //   },
    // })
    this.check_token()
    // 1 先从本地缓存 取出token
    const token = wx.getStorageSync(TOKEN)
    // 2 验证token 是否有值
    if(token && token.length !== 0){
      //有token 验证token是否过期
      this.check_token(token)
    }else{        // 没有 token 进行登录
      this.login()
    }
    //登录
    
  },
  check_token(token){
    console.log(111)
    //验证token是否过期 请求
    // request({
    //   url:"http://localhost:3000/api/addUser",
    //   method:'POST',
    //   header: {  
    //     'content-type': 'application/x-www-form-urlencoded' ,
    //     token 
    //   },  
    //   data:{} 
    // }).then(res => { 
    //  console.log(res)
    //   if(res.data.errCode){   //token  没有过期
    //     this.globalData.token = token
    //   }else{
    //     this.login()        //token 过期 重新登录
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
  },
  login(){
    // wx.login({
    //   success:(res) => {
    //     //1 获取code  code 5分钟过期
    //     const code = res.code
    //     console.log(code)
    //     //2 将code 发送给我们服务器
    //     request({
    //       url:"http://hrtest2.dev.cn2.corp.agrant.cn/biztest/biz/api/loginCheck",
    //       method:'POST',
    //       header: {
    //         'contentType': 'application/json',
    //         'Authorization':null
    //       },
    //       data:{
    //         username: "yonggang.wang@agrant.cn", 
    //         password: "11111111",
    //         code
    //       }
    //     }).then(res => {
    //       //3 取我们服务器返回来的 token
    //       console.log(res)
    //       const token = res.token
    //       this.globalData.token = token
    //       console.log(token)
    //       //4 进行本地存储 token 以便于 验证token是否过期 如果过期需要重新登录， 没有过期 则不需要重新登录
    //       // setStorageSync 同步 会依次往下执行代码 
    //       // setStorage 异步 不影响执行以下代码 
    //       wx.setStorageSync(TOKEN, token)
    //       // wx.setStorage({
    //       //   data: data,
    //       //   key: 'key',
    //       // })
          
    //     })
    //   }
    // })
  },
  //小程序显示出来时
  onShow:(options) => {
    // console.log(options)
    // switch(options.scene) {
    //   case 1001:
    //     console.log(1001);
    //     break;
    //   case 1005:
    //     console.log(1005)
    // }
  },
  //小程序隐藏时
  onHide:() => {

  },
  //小程序产生一些错误
  onError: () => {

  },
  
})