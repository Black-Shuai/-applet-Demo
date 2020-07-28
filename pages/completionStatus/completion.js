// pages/completionStatus/completion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeArr: {nickName: '昵称', age: '年龄', tell: '电话', address: '住址'},
    itemArr: [
    {nickName: 'Anna', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Tina', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Tom', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Alex', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Hallen', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Lucy', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Tina', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Tom', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Alex', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Hallen', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Lucy', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Tina', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Tom', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Alex', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Hallen', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    {nickName: 'Lucy', age: 25, tell: 121243423424, address: 'tianfuStreet'},
    ],
    navbar: ['未完成', '已完成', '全部'],
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle: '新标题',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
    console.log('test is loaded');
  },
  /**
   * 页面显示转换
   */
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    if(this.data.currentTab==0){
      this.setData({
        themeArr: {nickName: '昵称', age: '年龄', tell: '电话', address: '住址'},
        itemArr: [
        {nickName: 'Anna', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        ]
      })
    }else if(this.data.currentTab==1){
      this.setData({
        themeArr: {nickName: '昵称', age: '年龄', tell: '电话', address: '住址'},
        itemArr: [
        {nickName: 'Anna', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Tina', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Tom', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Alex', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Hallen', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Lucy', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Tina', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        ]
      })
    }else{
      this.setData({
        themeArr: {nickName: '昵称', age: '年龄', tell: '电话', address: '住址'},
        itemArr: [
        {nickName: 'Alex', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Hallen', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        {nickName: 'Lucy', age: 25, tell: 121243423424, address: 'tianfuStreet'},
        ]
      })
    }
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

  }
})