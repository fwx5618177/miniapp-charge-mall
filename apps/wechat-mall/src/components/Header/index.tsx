import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

interface HeaderProps {  
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: React.CSSProperties
}

export default function Header({ className = '', style = {} }: HeaderProps) {
  return (
    <View className={`header ${className}`} style={style}>
      <Image 
        className='logo' 
        src='../../assets/icons/logo.svg'
        mode='aspectFit'
      />
      <View className='header-right'>
        <AtIcon value='bell' size='18' color='#333' />
        <AtIcon value='user' size='18' color='#333' />
      </View>
    </View>
  )
} 