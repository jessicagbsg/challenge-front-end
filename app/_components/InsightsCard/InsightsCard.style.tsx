import styled from 'styled-components'
import type { StyledImageContainerProps } from './types'

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 1rem;
`

export const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
`

export const StyledText = styled.p`
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
`
