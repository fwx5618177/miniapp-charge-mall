import { View, Text, Input } from '@tarojs/components'
import { useState } from 'react'
import classNames from 'classnames'
import Header from '../../components/Header'
import './index.scss'

interface AmountOption {
  value: number
  face: number
}

export default function Recharge() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'electricity'>('mobile')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [operator, setOperator] = useState<'mobile' | 'unicom' | 'telecom'>('mobile')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const amountOptions: AmountOption[] = [
    { value: 29.8, face: 30 },
    { value: 49.5, face: 50 },
    { value: 99, face: 100 },
    { value: 198, face: 200 },
    { value: 297, face: 300 },
    { value: 495, face: 500 }
  ]

  const handleTabChange = (tab: 'mobile' | 'electricity') => {
    setActiveTab(tab)
  }

  const handleOperatorChange = (op: 'mobile' | 'unicom' | 'telecom') => {
    setOperator(op)
  }

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.detail.value)
    setSelectedAmount(null)
  }

  return (
    <View className='recharge'>
      <Header showBack />
      <View className='recharge-header'>
        <Text className='title'>充值缴费</Text>
        <Text className='subtitle'>便捷支付，一键完成</Text>
      </View>

      <View className='tab-container'>
        <View 
          className={classNames('tab-item', { active: activeTab === 'mobile' })}
          onClick={() => handleTabChange('mobile')}
        >
          话费充值
        </View>
        <View 
          className={classNames('tab-item', { active: activeTab === 'electricity' })}
          onClick={() => handleTabChange('electricity')}
        >
          电费缴纳
        </View>
      </View>

      {activeTab === 'mobile' && (
        <View className='recharge-content'>
          <View className='phone-input'>
            <View className='input-icon'>📱</View>
            <Input
              className='input'
              type='number'
              placeholder='请输入手机号码'
              value={phoneNumber}
              onInput={e => setPhoneNumber(e.detail.value)}
            />
          </View>

          <View className='operator-select'>
            <View 
              className={classNames('operator-item', { active: operator === 'mobile' })}
              onClick={() => handleOperatorChange('mobile')}
            >
              移动
            </View>
            <View 
              className={classNames('operator-item', { active: operator === 'unicom' })}
              onClick={() => handleOperatorChange('unicom')}
            >
              联通
            </View>
            <View 
              className={classNames('operator-item', { active: operator === 'telecom' })}
              onClick={() => handleOperatorChange('telecom')}
            >
              电信
            </View>
          </View>

          <View className='amount-section'>
            <Text className='section-title'>充值金额</Text>
            <View className='amount-grid'>
              {amountOptions.map((option, index) => (
                <View
                  key={index}
                  className={classNames('amount-item', { active: selectedAmount === option.value })}
                  onClick={() => handleAmountSelect(option.value)}
                >
                  <Text className='amount-value'>充值{option.value}元</Text>
                  <Text className='amount-face'>面值{option.face}元</Text>
                </View>
              ))}
            </View>
          </View>

          <View className='custom-amount'>
            <Text className='section-title'>其他金额</Text>
            <Input
              className='custom-input'
              type='number'
              placeholder='请输入充值金额'
              value={customAmount}
              onInput={handleCustomAmountChange}
            />
          </View>

          <View className='submit-button'>
            立即充值
          </View>
        </View>
      )}
    </View>
  )
} 