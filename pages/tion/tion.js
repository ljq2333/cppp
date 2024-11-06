// pages/tion/tion.js
var cai = require('../../data/data.js')
var cp = require('../../data/recipe.js')
var data = require('../../utils/util')
var Time = data.formatTime1(new Date())
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: Time,
    cp: cp.cp,
    cpname: '点我决定',
    mot:1,
    randcp:0
  },
  delay(milSec) {
    return new Promise(resolve => {
      setTimeout(resolve, milSec)
    })
  },
  onrand() {
    var cp = this.data.cp
    var rand = Math.floor(Math.random()*cp.length)
    console.log(rand)
    for (let i = 0; i < cp.length; i++) {
      if (i==rand) {
        this.setData({cpname:cp[rand].name})
        this.setData({randcp:cp[rand]})
        break
      }else{
        this.delay(1000)
        // console.log(i)
        this.setData({cpname:cp[i].name})
        
      }
    }
    
      
    // }
    // cp.forEach(element => {
    //   this.setData({
    //     cpname: element.name
    //   })
    //   this.delay(500)
    // });
    // console.log(cp[rand].name)


  },
  copyText(e) {
    // console.log(e)
    var bv = "https://www.bilibili.com/video/" + e.currentTarget.dataset.text
    wx.setClipboardData({
      data: bv,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})