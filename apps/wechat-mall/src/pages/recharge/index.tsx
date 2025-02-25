import { View, Text } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Recharge() {
  const handleNavigate = (path: string) => {
    Taro.navigateTo({ url: path })
  }

  return (
    <View className='recharge'>
      <AtList>
        <AtListItem
          title='话费充值'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/phone.png'
          onClick={() => handleNavigate('/pages/recharge/mobile/index')}
        />
        <AtListItem
          title='电费缴纳'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/lightning-bolt.png'
          onClick={() => handleNavigate('/pages/recharge/electricity/index')}
        />
        <AtListItem
          title='流量充值'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/wifi.png'
          onClick={() => handleNavigate('/pages/recharge/data/index')}
        />
        <AtListItem
          title='会员充值'
          arrow='right'
          thumb='https://img.icons8.com/color/96/000000/vip.png'
          onClick={() => handleNavigate('/pages/recharge/vip/index')}
        />
      </AtList>
    </View>
  )
} 