import styled from 'styled-components'

export const StyledPeriodFilter = styled.nav`
  display: flex;
  background-color: var(--white);
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  width: min-content;
  gap: 0.5rem;
  margin-left: auto;
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`
