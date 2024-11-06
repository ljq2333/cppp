// pages/home/home.js
var cai = require('../../data/data.js')
var cp = require('../../data/recipe.js')
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sucai: cai.sucai,
    rou: cai.rou,
    zhushi: cai.zhushi,
    chuju: cai.chuju,
    caipu: cp.cp,
    selcai: [],
    stuff: cp.stuff,
    selsp: [],
    selnum: [],
    msn: 1,
    activeName: '',
    msname: "模糊匹配"
  },
  oncb(e) {
    this.setData({
      selcai: e.detail
    });
  },
  addcai(e) {
    var seln = e.currentTarget.dataset.cn
    var selc = e.currentTarget.dataset.cainame
    var cail = this.data.selcai
    var is = true
    var ison = function (arr) {
      arr.forEach(element => {
        if (selc == element) {
          is = false
        }
      });
    }
    ison(cail)
    // 判断列表中是否已经有该菜
    if (is) {
      cail.push(selc)
    }
    if (is == false) {
      cail.pop(selc)
    }
    this.setData({
      selcai: cail,
      sucai: this.data.sucai
    })
  },
  // 模糊匹配
  viewsp1() {
    var selcai = this.data.selcai
    var selnum = []
    var li = this.data.stuff
    var cnum = []
    for (let l1 = 0; l1 < li.length; l1++) {
      for (let cc = 0; cc < li[l1].length; cc++) {
        for (let sc = 0; sc < selcai.length; sc++) {
          if (selcai[sc] == li[l1][cc]) {
            selnum.push(l1)
            cnum.push(li[l1])
          }
        }
      }
    }
    var nset = Array.from(new Set(selnum))
    var cset = Array.from(new Set(cnum))
    this.setData({
      selsp: cset,
      selnum: nset
    })
  },
  // 求交集
  getMix(arr1, arr2) {
    var arrMix = [];
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          arrMix[arrMix.length] = arr1[i];
        }
      }
    }
    return (arrMix);
  },
  // 严格匹配
  viewsp2() {
    var selcai = this.data.selcai
    this.viewsp1()
    var selsp = this.data.selsp
    var selnum1 = []
    for (let i = 0; i < selsp.length; i++) {
      var sn = this.getMix(selsp[i], selcai)
      if (sn.length === selcai.length) {
        // console.log(selsp[i])
        selnum1.push(selsp[i][0])
      }
    }
    this.setData({
      selnum: selnum1
    })
  },
  mos(e) {
    console.log(e.currentTarget.dataset.m)
    if (e.currentTarget.dataset.m == 1) {
      this.setData({
        msname: "模糊匹配"
      })
    } else {
      this.setData({
        msname: "严格匹配"
      })
    }
    this.setData({
      msn: e.currentTarget.dataset.m
    })
  },
  strd() {
    if (this.data.msn == 1) {
      this.viewsp1()
    }
    if (this.data.msn == 2) {
      this.viewsp2()
    }
    if(this.data.selnum.length==0){
      Notify('没有匹配到食谱，请重新匹配');
    }
  },
  oncoll(e) {
    this.setData({
      activeName: e.detail,
    });
  },
  cr() {
    this.setData({
      selnum: [],
      selcai: []
    })
    this.oncb
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