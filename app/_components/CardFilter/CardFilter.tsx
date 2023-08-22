'use client'

import { useState } from 'react'

import { Button } from '../Button'
import { StyledCardFilter } from './CardFilter.styles'
import type { ICardFilterProps } from './types'

export const CardFilter = ({ text1, text2 }: ICardFilterProps) => {
  const [pressedButton, setPressedButton] = useState(text1)

  const handleButtonClick = (text: string) => {
    setPressedButton(text)
  }
  return (
    <StyledCardFilter>
      <Button
        text={text1}
        onPress={() => handleButtonClick(text1)}
        isPressed={pressedButton === text1}
      />
      <Button
        text={text2}
        onPress={() => handleButtonClick(text2)}
        isPressed={pressedButton === text2}
      />
    </StyledCardFilter>
  )
}
