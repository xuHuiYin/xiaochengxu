export default function request(options){
  return new Promise((resole, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success:resole,
      fail:reject
    })
  })
}


// export default function request(options){
//   return new Promise((resole, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.type || 'get',
//       data: options.data || {},
//       success:function(res){
//         resole(res)
//       },
//       fail:function(err){
//         reject(err)
//       }
//     })
//   })
// }