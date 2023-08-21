'use client'

import {
  StyledContainer,
  StyledContent,
  StyledSubtitle,
  StyledTitle,
  StyledTitleSection,
} from './Card.styles'
import { ICardProps } from './types'

export const Card = ({
  title,
  subtitle,
  titleSection,
  children,
}: ICardProps) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitleSection>{titleSection}</StyledTitleSection>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  )
}
