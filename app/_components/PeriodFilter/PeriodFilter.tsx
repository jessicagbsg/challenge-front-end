'use client'

import { useState } from 'react'

import { Button } from '../Button'
import { StyledPeriodFilter } from './PeriodFilter.styles'

export const PeriodFilter = () => {
  const [pressedButton, setPressedButton] = useState('30d')

  const handleButtonClick = (text: string) => {
    setPressedButton(text)
  }
  return (
    <StyledPeriodFilter>
      <Button
        text="1h"
        onPress={() => handleButtonClick('1h')}
        isPressed={pressedButton === '1h'}
      />
      <Button
        text="24h"
        onPress={() => handleButtonClick('24h')}
        isPressed={pressedButton === '24h'}
      />
      <Button
        text="30d"
        onPress={() => handleButtonClick('30d')}
        isPressed={pressedButton === '30d'}
      />
      <Button
        text="60d"
        onPress={() => handleButtonClick('60d')}
        isPressed={pressedButton === '60d'}
      />
    </StyledPeriodFilter>
  )
}
