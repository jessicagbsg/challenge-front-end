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
  columnSpan,
  children,
}: ICardProps) => {
  return (
    <StyledContainer columnSpan={columnSpan}>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitleSection>{titleSection}</StyledTitleSection>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  )
}
