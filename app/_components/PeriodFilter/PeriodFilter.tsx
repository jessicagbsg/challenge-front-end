'use client'

import { Button } from '../Button'
import { StyledPeriodFilter } from './PeriodFilter.styles'

export const PeriodFilter = () => {
  return (
    <StyledPeriodFilter>
      <Button text="1h" />
      <Button text="24h" />
      <Button text="30d" />
      <Button text="60d" />
    </StyledPeriodFilter>
  )
}
