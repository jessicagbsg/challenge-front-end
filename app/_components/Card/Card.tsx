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
  gridRows = 1,
  gridColumns = 1,
  columnSpan = 1,
  contentGridRows = 1,
  contentGridColumns = 1,
  contentColumnSpan = 1,
  cardFilter,
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
      {cardFilter}
      <StyledContent
        contentColumnSpan={contentColumnSpan}
        contentGridRows={contentGridRows}
        contentGridColumns={contentGridColumns}
      >
        {children}
      </StyledContent>
    </StyledContainer>
  )
}
