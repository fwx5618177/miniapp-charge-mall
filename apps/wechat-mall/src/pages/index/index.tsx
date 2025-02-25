import { View, Text, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { AtIcon, AtTabBar } from 'taro-ui'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import './index.scss'

interface ServiceItem {
  icon: string
  text: string
  path: string
}

interface FlashSaleItem {
  id: string
  name: string
  price: number
  image: string
}

export default function Index() {
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(0)

  const services: ServiceItem[] = [
    {
      icon: 'https://img.icons8.com/color/64/000000/phone.png',
      text: '话费充值',
      path: '/pages/recharge/mobile/index'
    },
    {
      icon: 'https://img.icons8.com/color/64/000000/lightning-bolt.png',
      text: '电费缴纳',
      path: '/pages/recharge/electricity/index'
    },
    {
      icon: 'https://img.icons8.com/color/64/000000/wifi.png',
      text: '流量充值',
      path: '/pages/recharge/data/index'
    },
    {
      icon: 'https://img.icons8.com/color/64/000000/vip.png',
      text: '会员充值',
      path: '/pages/recharge/vip/index'
    }
  ]

  const flashSaleItems: FlashSaleItem[] = [
    {
      id: '1',
      name: 'iPhone 14 Pro Max',
      price: 7999,
      image: 'https://img.icons8.com/color/400/000000/iphone-x.png'
    },
    {
      id: '2',
      name: 'AirPods Pro',
      price: 1899,
      image: './assets/samples/phone.png'
    },
    {
      id: '3',
      name: 'MacBook Pro M2',
      price: 14999,
      image: './assets/samples/airpods.png'
    },
    {
      id: '4',
      name: 'iPad Pro',
      price: 6799,
      image: 'https://img.icons8.com/color/400/000000/ipad.png'
    }
  ]

  useLoad(() => {
    setLoading(true)
    // 模拟加载数据
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  const handleServiceClick = (path: string) => {
    Taro.navigateTo({ url: path })
  }

  const handleNewUserCoupon = () => {
    Taro.showToast({
      title: '领取成功',
      icon: 'success'
    })
  }

  const handleTabClick = (value) => {
    setCurrent(value)
  }

  if (loading) {
    return (
      <Loading 
        type='page'
        text='精彩内容加载中...'
        image='https://img.icons8.com/color/96/000000/shopping-cart-loaded.png'
        animation='bounce'
        mask
      />
    )
  }

  return (
    <View className='index'>
      <Header />

      {/* Banner区域 */}
      <View className='banner'>
        <Image 
          className='banner-image' 
          src='./assets/samples/banner.png'
          mode='aspectFill' 
        />
        <View className='banner-text'>
          <Text>新用户注册即送 100 元购物券，限时优惠不要错过！</Text>
        </View>
      </View>

      {/* 服务菜单 */}
      <View className='services'>
        {services.map((service, index) => (
          <View 
            key={index} 
            className='service-item'
            onClick={() => handleServiceClick(service.path)}
          >
            <Image className='service-icon' src={service.icon} />
            <Text className='service-text'>{service.text}</Text>
          </View>
        ))}
      </View>

      {/* 新人专享 */}
      <View className='new-user-card'>
        <View className='new-user-content'>
          <View className='new-user-text'>
            <Text className='title'>新人专享</Text>
            <Text className='subtitle'>首单立减 50 元</Text>
          </View>
          <View className='new-user-button' onClick={handleNewUserCoupon}>
            立即领取
          </View>
        </View>
        <Image className='gift-icon' src='https://img.icons8.com/color/200/000000/gift.png' />
      </View>

      {/* 限时秒杀 */}
      <View className='flash-sale'>
        <View className='section-title'>限时秒杀</View>
        <View className='flash-sale-grid'>
          {flashSaleItems.map(item => (
            <View key={item.id} className='flash-sale-item'>
              <Image className='product-image' src={item.image} mode='aspectFit' />
              <Text className='product-name'>{item.name}</Text>
              <Text className='product-price'>¥ {item.price}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer TabBar */}
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '充值', iconType: 'money' },
          { title: '购物车', iconType: 'shopping-cart' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={handleTabClick}
        current={current}
      />
    </View>
  )
}

