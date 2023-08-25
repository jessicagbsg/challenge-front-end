'use client'

import { useParticipantsData } from 'app/_hooks/useParticipantsData'
import { Button } from '../Button'
import {
  StyledLeaderboardContainer,
  StyledLeaderboardGrid,
  StyledText,
  StyledTitleSection,
} from './LeaderboardCard.style'
import { Loader } from '../Loader'

export const LeaderboardCard = () => {
  const { usersLeaderboard, isLoading } = useParticipantsData()

  return (
    <StyledLeaderboardContainer>
      <StyledTitleSection> User leaderboard</StyledTitleSection>
      <StyledLeaderboardGrid>
        <StyledText>Email</StyledText>
        <StyledText>Friends Invited</StyledText>
        <StyledText>Country</StyledText>
        {isLoading ? (
          <div style={{ gridColumn: 'span 3', gridRow: '2/-1' }}>
            <Loader />
          </div>
        ) : (
          usersLeaderboard.map((user) => (
            <>
              <StyledText>{user.email}</StyledText>
              <StyledText>{user.friendsInvited}</StyledText>
              <StyledText>{user.country}</StyledText>
            </>
          ))
        )}
      </StyledLeaderboardGrid>
      <Button text="See leaderboard" />
    </StyledLeaderboardContainer>
  )
}
