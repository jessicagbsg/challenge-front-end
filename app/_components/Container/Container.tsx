'use client'

import { StyledContainer, StyledTitle } from './Container.styles'
import type { IContainerProps } from './types'

export const Container = ({
  gridColumns = 1,
  gridRows = 1,
  title,
  children,
}: IContainerProps) => {
  return (
    <StyledContainer gridColumns={gridColumns} gridRows={gridRows}>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledContainer>
  )
}
