'use client'

import { Card } from '../Card'
import {
  StyledText,
  StyledTextContainer,
  StyledTitle,
} from './InsightsCard.style'

export const InsightsCard = () => {
  return (
    <Card
      title="ZooTools insights"
      subtitle="Making analytics simple and actionable"
      columnSpan={2}
      gridColumns={1}
      gridRows={2}
      contentColumnSpan={1}
      contentGridColumns={2}
      contentGridRows={2}
    >
      <StyledTextContainer>
        <StyledTitle>Summary</StyledTitle>
        <StyledText>
          Signups are slowing down. -5% new than last week.
        </StyledText>
        <StyledText>
          80% of your signups were invited by other members.
        </StyledText>
        <StyledText>80% of your signups were invited by a friend.</StyledText>
        <StyledText>80% of your signups were invited by a friend.</StyledText>
      </StyledTextContainer>
      <StyledTextContainer>
        <StyledTitle>Recommendations</StyledTitle>
        <StyledText>
          Make sure to promote and <a href="/">share your form</a>
        </StyledText>
        <StyledText>
          Congrats! This is huge. Keep giving rewards for your users
        </StyledText>
      </StyledTextContainer>
    </Card>
  )
}
