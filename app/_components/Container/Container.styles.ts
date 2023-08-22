import styled from 'styled-components'
import type { IContainerProps } from './types'

export const StyledContainer = styled.main<IContainerProps>`
  width: 60vw;
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${({ gridColumns }) => gridColumns}, 1fr);
  grid-template-rows: repeat(${({ gridRows }) => gridRows}, auto);
`
export const StyledTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
`
