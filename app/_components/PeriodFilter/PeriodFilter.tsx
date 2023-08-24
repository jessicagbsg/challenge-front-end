'use client'

import { useParticipantsData } from 'app/_hooks/useParticipantsData'
import { Button } from '../Button'
import { StyledPeriodFilter } from './PeriodFilter.styles'

export const PeriodFilter = () => {
  const { periodInDays, periodInHours, handleDaysSelect, handleHoursSelect } =
    useParticipantsData()

  return (
    <StyledPeriodFilter>
      <Button
        text="1h"
        onPress={() => handleHoursSelect(1)}
        isPressed={periodInHours === 1}
      />
      <Button
        text="24h"
        onPress={() => handleHoursSelect(24)}
        isPressed={periodInHours === 24}
      />
      <Button
        text="30d"
        onPress={() => handleDaysSelect(30)}
        isPressed={periodInDays === 30}
      />
      <Button
        text="60d"
        onPress={() => handleDaysSelect(60)}
        isPressed={periodInDays === 60}
      />
    </StyledPeriodFilter>
  )
}
