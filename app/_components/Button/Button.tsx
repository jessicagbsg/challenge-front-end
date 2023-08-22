'use client'

import { useState } from 'react'

import { StyledButton } from './Button.styles'
import type { IButtonProps } from './types'

export const Button = ({ text, onPress, isPressed }: IButtonProps) => {
  return (
    <StyledButton onClick={onPress} isPressed={isPressed}>
      {text}
    </StyledButton>
  )
}
