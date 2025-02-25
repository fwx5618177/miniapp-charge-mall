import { View, Text } from '@tarojs/components'
import Taro, { getApp } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { AiOutlineHome, AiFillHome, AiOutlineWallet, AiFillWallet } from 'react-icons/ai'
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { RiUserFill } from 'react-icons/ri'
import './index.scss'

interface TabBarConfig {
  color: string
  selectedColor: string
  list: Array<{
    pagePath: string
    text: string
  }>
}

export default function CustomTabBar() {
  const [selected, setSelected] = useState(0)
  const [color, setColor] = useState('#666666')
  const [selectedColor, setSelectedColor] = useState('#2B4ACB')

  useEffect(() => {
    const app = getApp<{config: {tabBar: TabBarConfig}}>()
    if (app?.config?.tabBar) {
      setColor(app.config.tabBar.color)
      setSelectedColor(app.config.tabBar.selectedColor)
    }
  }, [])

  const switchTab = (url: string, index: number) => {
    setSelected(index)
    Taro.switchTab({ url })
  }

  const tabs = [
    {
      pagePath: '/pages/index/index',
      text: '首页',
      icon: <AiOutlineHome size={24} />,
      selectedIcon: <AiFillHome size={24} />
    },
    {
      pagePath: '/pages/recharge/index',
      text: '充值',
      icon: <AiOutlineWallet size={24} />,
      selectedIcon: <AiFillWallet size={24} />
    },
    {
      pagePath: '/pages/cart/index',
      text: '购物车',
      icon: <HiOutlineShoppingCart size={24} />,
      selectedIcon: <HiShoppingCart size={24} />
    },
    {
      pagePath: '/pages/user/index',
      text: '我的',
      icon: <CgProfile size={24} />,
      selectedIcon: <RiUserFill size={24} />
    }
  ]

  return (
    <View className='tab-bar'>
      {tabs.map((item, index) => {
        const isSelected = selected === index
        return (
          <View
            key={index}
            className='tab-bar-item'
            onClick={() => switchTab(item.pagePath, index)}
          >
            <View className='icon' style={{ color: isSelected ? selectedColor : color }}>
              {isSelected ? item.selectedIcon : item.icon}
            </View>
            <Text
              className='text'
              style={{ color: isSelected ? selectedColor : color }}
            >
              {item.text}
            </Text>
          </View>
        )
      })}
    </View>
  )
} 