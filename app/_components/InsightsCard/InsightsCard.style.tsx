import styled from 'styled-components'
import type { StyledImageContainerProps } from './types'

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 1rem;
  @media (max-width: 900px) {
    grid-column: span 2;
  }
`

export const StyledTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

export const StyledText = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  line-height: 3;

  span {
    font-weight: 600;
    margin-right: 0.2rem;
  }
  a {
    color: var(--primary);
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    font-size: 0.65rem;
    margin-top: 0.5rem;
    line-height: 2;
  }
`

export const StyledImageContainer = styled.div<StyledImageContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  margin-right: 0.5rem;
  @media (max-width: 500px) {
    height: 1.8rem;
    width: 1.8rem;
  }
`
