import { View, Text } from '@tarojs/components'
import { useState, useEffect } from 'react'
import { AtList, AtListItem } from 'taro-ui'
import Loading from '../../components/Loading'
import './index.scss'

export default function Cart() {
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
        text='购物车加载中...'
        image='https://img.icons8.com/color/96/000000/shopping-cart.png'
        animation='pulse'
      />
    )
  }

  return (
    <View className='cart'>
      <AtList>
        <AtListItem
          title='暂无商品'
          note='快去选购商品吧'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/shopping-cart.png'
        />
      </AtList>
    </View>
  )
} 