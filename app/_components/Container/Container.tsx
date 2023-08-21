'use client'

import { StyledContainer, StyledTitle } from './Container.styles'
import type { IContainerProps } from './types'

export const Container = ({
  columns,
  rows,
  title,
  children,
}: IContainerProps) => {
  return (
    <StyledContainer columns={columns} rows={rows}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  )
}
