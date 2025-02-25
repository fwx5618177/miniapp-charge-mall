import Taro from '@tarojs/taro';

// 创建请求实例
const request = (options) => {
  const { url, method = 'GET', data, header = {} } = options;
  
  // 请求拦截
  Taro.addInterceptor((chain) => {
    const requestParams = chain.requestParams;
    
    // 添加全局请求头
    requestParams.header = {
      ...requestParams.header,
      'Content-Type': 'application/json',
      ...header
    };
    
    // 显示加载提示
    Taro.showLoading({
      title: '加载中...'
    });
    
    return chain.proceed(requestParams)
      .then(res => {
        // 隐藏加载提示
        Taro.hideLoading();
        
        // 响应拦截
        if (res.statusCode !== 200) {
          Taro.showToast({
            title: '请求失败',
            icon: 'none'
          });
          return Promise.reject(res);
        }
        
        return res.data;
      })
      .catch(err => {
        Taro.hideLoading();
        Taro.showToast({
          title: '网络错误',
          icon: 'none'
        });
        return Promise.reject(err);
      });
  });

  return Taro.request({
    url,
    method,
    data
  });
};

export default request;
