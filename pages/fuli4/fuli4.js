//index.js

const ajax = getApp().globalData.ajax;

Page({
  data:{
    dataList:[],  //初始化数组
    index:1,       //请求的页数,
    types:39        //请求类型 
  },
  
  onReady(){
    // 生命周期函数--监听页面初次渲染完成
    const self = this;
    const types = this.data.types;
    const index = this.data.index;
    
    ajax(types,index,self);

    
  },
    
  onPullDownRefresh() {
    // 页面上拉触底事件的处理函数
    console.log("=========================")
    const index = this.data.index++;
    const self = this;
    const types = this.data.types;
    
    
    ajax(types,index,self);

  }

})
