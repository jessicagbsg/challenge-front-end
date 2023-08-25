'use client'

import { useParticipantsData } from 'app/_hooks/useParticipantsData'
import { Button } from '../Button'
import { Card } from '../Card'
import { CardFilter } from '../CardFilter'
import { HorizontalChart } from '../HorizontalChart'
import { Loader } from '../Loader'

export const SignupCard = () => {
  const { locationPerPeriod, isLoading } = useParticipantsData()

  return (
    <Card
      titleSection="Signup location"
      gridColumns={2}
      gridRows={2}
      contentColumnSpan={2}
      cardFilter={<CardFilter type="location" text1="Country" text2="City" />}
    >
      <div style={{ gridRow: 1 }}>
        {isLoading ? <Loader /> : <HorizontalChart data={locationPerPeriod} />}
      </div>
      <Button text="See all countries" />
    </Card>
  )
}
