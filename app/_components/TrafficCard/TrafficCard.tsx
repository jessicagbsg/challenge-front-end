'use client'

import { Button } from '../Button'
import { Card } from '../Card'
import { CardFilter } from '../CardFilter'
import { HorizontalChart } from '../HorizontalChart'

export const TrafficCard = () => {
  const arr = [
    { x: 'Google', y: 70 },
    { x: 'Facebook', y: 50 },
    { x: 'Youtube', y: 30 },
    { x: 'Twitter', y: 20 },
    { x: 'LinkedIn', y: 10 },
    { x: 'Other', y: 8 },
  ]
    .sort((a, b) => b.y - a.y)
    .reverse()
  return (
    <Card
      titleSection="Traffic"
      gridColumns={2}
      gridRows={2}
      contentColumnSpan={2}
      cardFilter={<CardFilter text1="Source" text2="City" />}
    >
      <div style={{ gridRow: 1 }}>
        <HorizontalChart data={arr} />
      </div>

      <Button text="See traffic sources" />
    </Card>
  )
}
