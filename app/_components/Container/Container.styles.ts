import styled from 'styled-components'
import type { IContainerProps } from './types'

export const StyledContainer = styled.main<IContainerProps>`
  width: 60vw;
  height: 100vh;
  padding: 2rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
`
export const StyledTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
`
