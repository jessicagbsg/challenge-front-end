'use client'

import { VictoryChart, VictoryBar, VictoryTooltip, VictoryAxis } from 'victory'

import { Card } from '../Card'
import { useParticipantsData } from 'app/_hooks/useParticipantsData'

export const ParticipantsChart = () => {
  const { usersPerPeriod, totalUsers } = useParticipantsData()

  return (
    <Card
      title={totalUsers.toString()}
      subtitle="Participants"
      gridColumns={1}
      gridRows={2}
      columnSpan={2}
      contentGridColumns={1}
      contentGridRows={1}
    >
      <VictoryChart
        domainPadding={{ x: 10 }}
        padding={{ top: 0, bottom: 0, right: 0, left: 0 }}
        height={100}
        width={500}
      >
        <VictoryBar
          data={usersPerPeriod}
          labels={({ datum }) => [`${datum.y} signups`, `${datum.x}`]}
          labelComponent={
            <VictoryTooltip
              cornerRadius={3}
              style={{
                fontSize: 10,
                fontWeight: 400,
              }}
              flyoutStyle={{
                stroke: '#000',
                strokeWidth: 0.2,
                fill: '#fff',
              }}
            />
          }
          style={{
            data: {
              fill: '#fed500',
              width: 6,
            },
          }}
          cornerRadius={{ top: 3, bottom: 3 }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            tickLabels: { fill: 'transparent' },
            grid: { stroke: '#f1f1f1', strokeDasharray: '1' },
          }}
        />
      </VictoryChart>
    </Card>
  )
}
