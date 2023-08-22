'use client'

import {
  StyledContainer,
  StyledContent,
  StyledSubtitle,
  StyledTitle,
  StyledTitleSection,
} from './Card.styles'
import type { ICardProps } from './types'

export const Card = ({
  title,
  subtitle,
  titleSection,
  columnSpan = 1,
  gridRows = 1,
  gridColumns = 1,
  children,
}: ICardProps) => {
  return (
    <StyledContainer
      columnSpan={columnSpan}
      gridColumns={gridColumns}
      gridRows={gridRows}
    >
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitleSection>{titleSection}</StyledTitleSection>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  )
}
