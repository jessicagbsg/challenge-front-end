'use client'

import { Button } from '../Button'
import { Card } from '../Card'
import { CardFilter } from '../CardFilter'
import { HorizontalChart } from '../HorizontalChart'

export const BehaviourCard = () => {
  const arr3 = [
    { x: 'United States', y: 60 },
    { x: 'Germany', y: 43 },
    { x: 'Netherlands', y: 23 },
    { x: 'India', y: 46 },
    { x: 'Japan', y: 12 },
    { x: 'Other', y: 6 },
  ]
    .sort((a, b) => b.y - a.y)
    .reverse()
  return (
    <Card
      titleSection="Behaviour"
      gridColumns={2}
      gridRows={2}
      contentColumnSpan={2}
      cardFilter={<CardFilter text1="Browsers" text2="Decides" />}
    >
      <div style={{ gridRow: 1 }}>
        <HorizontalChart data={arr3} />
      </div>
      <Button text="See all countries" />
    </Card>
  )
}
