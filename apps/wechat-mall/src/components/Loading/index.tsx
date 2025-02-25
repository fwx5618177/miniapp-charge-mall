import { View, Text, Image } from '@tarojs/components'
import { AtActivityIndicator, AtIcon } from 'taro-ui'
import classNames from 'classnames'
import './index.scss'

export interface LoadingProps {
  /** 是否显示加载中 */
  loading?: boolean
  /** 加载类型：page-页面加载, content-内容加载, inline-行内加载 */
  type?: 'page' | 'content' | 'inline'
  /** 加载文案 */
  text?: string
  /** 自定义样式类名 */
  className?: string
  /** 是否显示遮罩 */
  mask?: boolean
  /** 自定义图片 */
  image?: string
  /** 动画类型 */
  animation?: 'spin' | 'pulse' | 'bounce'
  /** 颜色 */
  color?: string
  /** 大小 */
  size?: number
  /** 子元素 */
  children?: React.ReactNode
  /** 自定义渲染内容 */
  renderCustom?: () => React.ReactNode
}

const Loading: React.FC<LoadingProps> = ({
  loading = true,
  type = 'page',
  text = '加载中...',
  className,
  mask = true,
  image,
  animation = 'spin',
  color = '#00C853',
  size = 32,
  children,
  renderCustom
}) => {
  if (!loading) return <>{children}</>

  const loadingClass = classNames(
    'loading',
    `loading--${type}`,
    `loading--${animation}`,
    {
      'loading--mask': mask && type === 'page'
    },
    className
  )

  const renderLoading = () => {
    if (renderCustom) return renderCustom()

    return (
      <View className='loading-content'>
        {image ? (
          <Image 
            src={image} 
            className={`loading-image loading-image--${animation}`} 
            mode='aspectFit' 
          />
        ) : (
          <AtActivityIndicator
            mode='center'
            color={color}
            size={size}
            content={type === 'inline' ? '' : text}
          />
        )}
        {type === 'inline' && text && (
          <Text className='loading-text'>{text}</Text>
        )}
      </View>
    )
  }

  const renderError = () => (
    <View className='loading-error'>
      <AtIcon value='alert-circle' size={48} color='#ff4949' />
      <Text className='loading-error__text'>加载失败，请重试</Text>
    </View>
  )

  const renderEmpty = () => (
    <View className='loading-empty'>
      <AtIcon value='inbox' size={48} color='#666' />
      <Text className='loading-empty__text'>暂无数据</Text>
    </View>
  )

  return (
    <View className={loadingClass}>
      {renderLoading()}
    </View>
  )
}

export default Loading 