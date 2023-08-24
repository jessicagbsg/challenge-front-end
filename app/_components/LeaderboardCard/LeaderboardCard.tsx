'use client'

import { useParticipantsData } from 'app/_hooks/useParticipantsData'
import { Button } from '../Button'
import {
  StyledLeaderboardContainer,
  StyledLeaderboardGrid,
  StyledText,
  StyledTitleSection,
} from './LeaderboardCard.style'

export const LeaderboardCard = () => {
  const { usersLeaderboard } = useParticipantsData()

  return (
    <StyledLeaderboardContainer>
      <StyledTitleSection> User leaderboard</StyledTitleSection>
      <StyledLeaderboardGrid>
        <StyledText>Email</StyledText>
        <StyledText>Friends Invited</StyledText>
        <StyledText>Country</StyledText>
        {usersLeaderboard.map((user) => (
          <>
            <StyledText>{user.email}</StyledText>
            <StyledText>{user.friendsInvited}</StyledText>
            <StyledText>{user.country}</StyledText>
          </>
        ))}
      </StyledLeaderboardGrid>
      <Button text="See leaderboard" />
    </StyledLeaderboardContainer>
  )
}
