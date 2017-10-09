//app.js
App({
  onLaunch() {
    //调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo(cb) {
    const that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success() {
          wx.getUserInfo({
            success(res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    ajax(types, index, self) {
      //请求数据
      wx.request({
        url: 'https://route.showapi.com/819-1',
        data: {
          "showapi_appid": "47396",
          "showapi_sign": "6ec6454a1bce417692360003b735e4f8",
          type: types,
          page: index
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: (res) => {
          // success
          if (res && res.data.showapi_res_code == 0) {

            const data = res.data.showapi_res_body;

            self.setData({ dataList: data })
          }

        }
      })


    }
  }
})