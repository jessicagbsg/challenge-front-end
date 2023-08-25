'use client'

import { useState } from 'react'

import { Button } from '../Button'
import { StyledCardFilter } from './CardFilter.styles'
import type { ICardFilterProps } from './types'
import { useParticipantsData } from 'app/_hooks/useParticipantsData'

export const CardFilter = ({ text1, text2, type }: ICardFilterProps) => {
  const { handleRegionSelect, handleBehaviourSelect, handleTrafficSelect } =
    useParticipantsData()
  const [pressedButton, setPressedButton] = useState(text1)

  const handleButtonClick = (text: string) => {
    setPressedButton(text.charAt(0).toUpperCase() + text.slice(1))
    if (type === 'location' && (text === 'country' || text === 'city')) {
      handleRegionSelect(text)
    }
    if (type === 'behaviour' && (text === 'browsers' || text === 'devices')) {
      handleBehaviourSelect(text)
    }
    if (type === 'traffic' && (text === 'source' || text === 'city')) {
      handleTrafficSelect(text)
    }
  }
  return (
    <StyledCardFilter>
      <Button
        text={text1}
        onPress={() => handleButtonClick(text1.toLowerCase())}
        isPressed={pressedButton === text1}
      />
      <Button
        text={text2}
        onPress={() => handleButtonClick(text2.toLowerCase())}
        isPressed={pressedButton === text2}
      />
    </StyledCardFilter>
  )
}
