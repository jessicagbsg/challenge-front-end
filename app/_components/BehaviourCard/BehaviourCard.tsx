'use client'

import { useParticipantsData } from 'app/_hooks/useParticipantsData'
import { Button } from '../Button'
import { Card } from '../Card'
import { CardFilter } from '../CardFilter'
import { HorizontalChart } from '../HorizontalChart'
import { Loader } from '../Loader'

export const BehaviourCard = () => {
  const { behaviourPerPeriod, isLoading } = useParticipantsData()
  return (
    <Card
      titleSection="Behaviour"
      gridColumns={2}
      gridRows={2}
      contentColumnSpan={2}
      cardFilter={
        <CardFilter type="behaviour" text1="Browsers" text2="Devices" />
      }
    >
      <div style={{ gridRow: 1 }}>
        {isLoading ? <Loader /> : <HorizontalChart data={behaviourPerPeriod} />}
      </div>
      <Button text="See all countries" />
    </Card>
  )
}
