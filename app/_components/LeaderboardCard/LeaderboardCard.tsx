'use client'

import { Button } from '../Button'
import {
  StyledLeaderboardContainer,
  StyledLeaderboardGrid,
  StyledText,
  StyledTitleSection,
} from './LeaderboardCard.style'

export const LeaderboardCard = () => {
  const usersLeaderboard = [
    {
      email: 'john.doe@email.com',
      friendsInvited: 100,
      country: 'US',
    },
    {
      email: 'jimmy@google.com',
      friendsInvited: 50,
      country: 'PT',
    },
    {
      email: 'laura.kane@email.com',
      friendsInvited: 25,
      country: 'UK',
    },
    {
      email: 'joshsmith@gmail.com',
      friendsInvited: 120,
      country: 'US',
    },
  ].sort((a, b) => b.friendsInvited - a.friendsInvited)

  return (
    <StyledLeaderboardContainer>
      <StyledTitleSection> User leaderboard</StyledTitleSection>
      <StyledLeaderboardGrid>
        <StyledText>Email</StyledText>
        <StyledText>Friends Invited</StyledText>
        <StyledText>Country</StyledText>
        {usersLeaderboard.map((user, index) => (
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
