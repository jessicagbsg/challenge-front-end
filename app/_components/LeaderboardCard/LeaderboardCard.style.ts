import styled from 'styled-components'

export const StyledLeaderboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, auto);
  gap: 1rem;
  background-color: var(--white);
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  @media (max-width: 800px) {
    grid-column: span 2;
  }
`

export const StyledLeaderboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 1rem;
`

export const StyledTitleSection = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  grid-row: 1;
`

export const StyledText = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  margin-top: 0.7rem;
  @media (min-width: 1700px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`
