// pages/about/about.js
Page({
  mixins: [require('./themeChanged')],
  /**
   * 页面的初始数据
   */
  data: { 
    imageList:[],
    inputShowed: false,
    list:['衣服', '裤子', '鞋子'],
    inputVal: "",
    age:20,
    num:0,
    nowTime: new Date().toLocaleString(),
    isactive:false,
  },
  clickUpdata(){
    const list_el = this.selectComponent('#list_el')
    console.log(list_el)

    //(不太合理)
    // list_el.setData({
    //   num:list_el.data.num+1
    // })
    //推荐 在内部组件暴露方法 执行
    list_el.addNums(10)
  },
  _itemClick(e){
    console.log(e)
  },
  toggleColor(){
    this.setData({
      isactive:!this.data.isactive
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setInterval(() => {
    //   this.setData({
    //     nowTime: new Date().toLocaleString()
    //   })
    // }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleChooseAlbum(){
    wx.chooseImage({
      complete: (res) => {
        console.log(res)
        this.setData({
          imageList:res.tempFilePaths
        })
      },
    })
  },
  _bindload(){
    console.log("图片加载完成")
  },
  _bindinput(event){
    console.log(event)
  },
  _bindscroll(event){
    console.log(event)
  },
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
  item3click(event){
    console.log(event)
  },
  _addNum(){
    this.setData({
      num:this.data.num +=1
    })
  }
})