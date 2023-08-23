'use client'

import { Button } from '../Button'
import { Card } from '../Card'

export const LeaderboardCard = () => {
  return (
    <Card
      titleSection="User leaderboard"
      gridColumns={1}
      gridRows={1}
      contentGridColumns={1}
      contentGridRows={1}
    >
      <Button text="See leaderboard" />
    </Card>
  )
}
