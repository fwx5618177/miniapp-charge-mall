export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/recharge/index',
    'pages/cart/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#2B4ACB',
    navigationBarTitleText: '充值商城',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#666666',
    selectedColor: '#2B4ACB',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/icons/home.png',
        selectedIconPath: './assets/icons/home-active.png'
      },
      {
        pagePath: 'pages/recharge/index',
        text: '充值',
        iconPath: './assets/icons/recharge.png',
        selectedIconPath: './assets/icons/recharge-active.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: './assets/icons/cart.png',
        selectedIconPath: './assets/icons/cart-active.png'
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: './assets/icons/user.png',
        selectedIconPath: './assets/icons/user-active.png'
      }
    ]
  }
})
