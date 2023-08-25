'use client'

import { useParticipantsData } from 'app/_hooks/useParticipantsData'
import { Button } from '../Button'
import { Card } from '../Card'
import { CardFilter } from '../CardFilter'
import { HorizontalChart } from '../HorizontalChart'

export const TrafficCard = () => {
  const { trafficPerPeriod } = useParticipantsData()

  return (
    <Card
      titleSection="Traffic"
      gridColumns={2}
      gridRows={2}
      contentColumnSpan={2}
      cardFilter={<CardFilter type="traffic" text1="Source" text2="City" />}
    >
      <div style={{ gridRow: 1 }}>
        <HorizontalChart data={trafficPerPeriod} />
      </div>

      <Button text="See traffic sources" />
    </Card>
  )
}
