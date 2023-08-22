import styled from 'styled-components'
import type { ICardProps } from './types'

export const StyledContainer = styled.div<ICardProps>`
  display: grid;
  grid-template-columns: repeat(${({ gridColumns }) => gridColumns}, 1fr);
  grid-template-rows: auto repeat(${({ gridRows }) => gridRows}, 1fr);
  grid-column: span ${({ columnSpan }) => columnSpan};
  background-color: var(--white);
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
`

export const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`

export const StyledSubtitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
`

export const StyledTitleSection = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  grid-row: 1;
`

export const StyledContent = styled.div<ICardProps>`
  display: grid;
  grid-template-columns: repeat(${({ gridColumns }) => gridColumns}, 1fr);
  grid-template-rows: auto repeat(${({ gridRows }) => gridRows}, 1fr);
  margin-top: 1rem;
`
