import styled from 'styled-components'

import type { IButtonProps } from './types'

export const StyledButton = styled.button<IButtonProps>`
  background-color: ${({ isPressed }) =>
    isPressed ? 'var(--button-primary-hover)' : 'var(--button-primary)'}};
  color: var(--text-primary);
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: none;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  align-self: end;
  &:hover {
    background-color: var(--button-primary-hover);
  }
`
