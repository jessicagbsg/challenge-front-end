'use client'

import {
  StyledContainer,
  StyledContent,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContiner,
  StyledTitleSection,
} from './Card.styles'

import Image from 'next/image'

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
      <StyledTitleContiner>
        <StyledTitle>{title}</StyledTitle>
        {subtitle === 'Participants' ? (
          <Image
            src="/images/people.svg"
            height={24}
            width={24}
            alt="People icon"
          />
        ) : null}
      </StyledTitleContiner>

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
