//index.js

const ajax = getApp().globalData.ajax;

Page({
  data:{
    dataList:[],  //初始化数组
    index:1,       //请求的页数,
    types:34,        //请求类型, 
  },
  
  onReady(){
    // 生命周期函数--监听页面初次渲染完成
    const types = this.data.types;
    const index = this.data.index;
    
    ajax(types,index,this);

    
  },
    
  onPullDownRefresh() {
    // 页面上拉触底事件的处理函数
   
    const index = ++this.data.index;
    const types = this.data.types;
    
    
    ajax(types,index,this);

  },
  
  back(){
    const index = --this.data.index;
    const types = this.data.types;

    ajax(types, index, this);
  },
  bindKeyInput1(e){
    this.setData({
      types: e.detail.value
    })
  },
  bindKeyInput2(e) {
    this.setData({
      index: e.detail.value
    })
  },
  confirm1(){
    const index = this.data.index;
    const types = this.data.types;
    ajax(types, index, this);
  },
  confirm2(){
    const index=this.data.index;
    const types = this.data.types;
    ajax(types, index, this);
  }
})
