'use client'

import { StyledButton } from './Button.styles'
import type { IButtonProps } from './types'

export const Button = ({ text }: IButtonProps) => {
  return <StyledButton>{text}</StyledButton>
}
