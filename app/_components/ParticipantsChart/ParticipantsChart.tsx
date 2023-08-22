'use client'

import { VictoryChart, VictoryBar, VictoryTooltip, VictoryAxis } from 'victory'
import { Card } from '../Card'

export const ParticipantsChart = () => {
  const period = []
  for (let i = 0; i <= 30; i++) {
    period.push(`${i}`)
  }

  const arr = []
  for (let i = 0; i <= 30; i++) {
    arr.push({ x: `${i}`, y: Math.floor(Math.random() * 1000) })
  }

  return (
    <Card
      title="100,000"
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
          categories={{
            x: period,
          }}
          data={arr}
          labels={({ datum }) => [`${datum.y} signups`, 'Month, day']}
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
              width: 8,
            },
          }}
          cornerRadius={{ top: 4, bottom: 4 }}
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
