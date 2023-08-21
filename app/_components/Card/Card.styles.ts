import styled from 'styled-components'
import { ICardProps } from './types'

export const StyledContainer = styled.div<ICardProps>`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  grid-column: ${({ columnSpan }) => columnSpan};
`

export const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`

export const StyledSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`

export const StyledTitleSection = styled.h4`
  font-size: 1rem;
  font-weight: 500;
`

export const StyledContent = styled.div<ICardProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  margin-top: 1rem;
`
