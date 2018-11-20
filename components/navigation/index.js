Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    onlyBack: {
      type: Boolean,
      value: false
    }
  },

  data: {
    back: false,
    home: false,
    statusBarHeight: ''
  },

  lifetimes: {
    attached() {
      this._setStatusBarHeight()
      this._showHome()
    }
  },

  methods: {
    // 获取状态栏高度，用于设置 padding-top 值
    _setStatusBarHeight() {
      const {statusBarHeight} = wx.getSystemInfoSync()
      this.setData({statusBarHeight})
    },


    // home back 状态判断
    _showHome() {
      const pageArr = getCurrentPages()
      const isUserCenter = pageArr[0].route === 'pages/user-center/user-center'
      if (pageArr.length === 1) {
        this.setData({
          home: !isUserCenter
        })
      } else {
        this.setData({
          back: true
        })
      }
    },

    // 返回
    _goBack() {
      wx.navigateBack()
    },

    // 到个人中心首页
    _goHome() {
      wx.navigateTo({
        url: '/pages/user-center/user-center'
      })
    }
  }
})
