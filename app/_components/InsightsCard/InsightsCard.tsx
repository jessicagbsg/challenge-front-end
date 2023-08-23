'use client'

import { Card } from '../Card'
import {
  StyledImageContainer,
  StyledText,
  StyledTextContainer,
  StyledTitle,
} from './InsightsCard.style'

import Image from 'next/image'

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
          <StyledImageContainer backgroundColor="var(--attention)">
            <Image
              src="/images/arrowDown.svg"
              height={10}
              width={10}
              alt="Alert arrow down"
            />
          </StyledImageContainer>
          <span>Signups are slowing down.</span> -5% new than last week.
        </StyledText>
        <StyledText>
          <StyledImageContainer backgroundColor="var(--success)">
            <Image
              src="/images/arrowUp.svg"
              height={10}
              width={10}
              alt="Alert arrow up"
            />
          </StyledImageContainer>
          <span>80%</span> of your signups were invited by other members.
        </StyledText>
        <StyledText>
          <StyledImageContainer backgroundColor="var(--alert)">
            <Image
              src="/images/lightBulb.svg"
              height={16}
              width={16}
              alt="Alert light bulb"
            />
          </StyledImageContainer>
          <span>80%</span> of your signups were invited by a friend.
        </StyledText>
        <StyledText>
          <StyledImageContainer backgroundColor="var(--alert)">
            <Image
              src="/images/lightBulb.svg"
              height={16}
              width={16}
              alt="Alert light bulb"
            />
          </StyledImageContainer>
          <span>80%</span> of your signups were invited by a friend.
        </StyledText>
      </StyledTextContainer>
      <StyledTextContainer>
        <StyledTitle>Recommendations</StyledTitle>
        <StyledText>
          <span>
            Make sure to promote and <a href="/">share your form</a>
          </span>
        </StyledText>
        <StyledText>
          <span>
            Congrats! This is huge. Keep giving rewards for your users
          </span>
        </StyledText>
      </StyledTextContainer>
    </Card>
  )
}
