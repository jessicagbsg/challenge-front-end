'use client'

import { Button } from '../Button'
import { Card } from '../Card'
import { CardFilter } from '../CardFilter'
import { HorizontalChart } from '../HorizontalChart'

export const SignupCard = () => {
  const arr2 = [
    { x: 'United States', y: 40, code: 'US' },
    { x: 'Germany', y: 43, code: 'DE' },
    { x: 'Netherlands', y: 50, code: 'NL' },
    { x: 'India', y: 33, code: 'IN' },
    { x: 'Japan', y: 21, code: 'JP' },
    { x: 'Other', y: 11, code: 'other' },
  ]
    .sort((a, b) => b.y - a.y)
    .reverse()

  return (
    <Card
      titleSection="Signup location"
      gridColumns={2}
      gridRows={2}
      contentColumnSpan={2}
      cardFilter={<CardFilter text1="Country" text2="City" />}
    >
      <div style={{ gridRow: 1 }}>
        <HorizontalChart data={arr2} />
      </div>
      <Button text="See all countries" />
    </Card>
  )
}
