import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: var(--button-primary);
  color: var(--text-primary);
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: none;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: var(--button-primary-hover);
  }
`
