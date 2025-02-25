import { View, Text, Image } from '@tarojs/components'
import { useState, useEffect } from 'react'
import { AtList, AtListItem, AtAvatar } from 'taro-ui'
import Loading from '../../components/Loading'
import './index.scss'

export default function User() {
  const [loading, setLoading] = useState(true)

  // 模拟加载数据
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <Loading 
        type='page'
        text='加载中...'
        image='https://img.icons8.com/color/96/000000/user.png'
        animation='bounce'
      />
    )
  }

  return (
    <View className='user'>
      <View className='user-header'>
        <AtAvatar
          circle
          image='https://img.icons8.com/color/96/000000/user.png'
          size='large'
        />
        <Text className='user-nickname'>未登录</Text>
      </View>

      <AtList>
        <AtListItem
          title='我的订单'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/purchase-order.png'
        />
        <AtListItem
          title='充值记录'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/time-card.png'
        />
        <AtListItem
          title='我的优惠券'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/coupon.png'
        />
        <AtListItem
          title='联系客服'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/online-support.png'
        />
      </AtList>
    </View>
  )
} 