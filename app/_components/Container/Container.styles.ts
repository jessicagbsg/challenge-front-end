import styled from 'styled-components'
import type { IContainerProps } from './types'

export const StyledContainer = styled.main<IContainerProps>`
  width: 70vw;
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${({ gridColumns }) => gridColumns}, 1fr);
  grid-template-rows: repeat(${({ gridRows }) => gridRows}, auto);
  @media (min-width: 1700px) {
    width: 45vw;
  }
  @media (max-width: 1000px) {
    width: 90vw;
  }
  @media (max-width: 500px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
`
export const StyledTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  align-self: center;
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`
