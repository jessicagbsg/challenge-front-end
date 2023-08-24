'use client'

import { useEffect, useState } from 'react'
import { VictoryChart, VictoryBar, VictoryTooltip, VictoryAxis } from 'victory'

import { generateFakeParticipants } from 'app/_utils/generateFakeParticipants'
import { Card } from '../Card'
import { IParticipantsData, IUsersPerPeriod } from './types'

export const ParticipantsChart = () => {
  const [data, setData] = useState<IParticipantsData[]>([])
  // const [period, setPeriod] = useState([])

  function getUsersPerDay(participants: IParticipantsData[], days?: 30 | 60) {
    // TODO filter by hours
    let startDate: Date
    if (days) {
      startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    }

    const usersPerDay: IUsersPerPeriod = {}
    let totalUsers: number = 0

    participants.forEach((participant) => {
      const registrationDate = new Date(participant.dateOfRegistration)

      if (registrationDate >= startDate) {
        totalUsers++
        const formattedDate = registrationDate.toLocaleDateString()

        if (!usersPerDay[formattedDate]) {
          usersPerDay[formattedDate] = 1
        } else {
          usersPerDay[formattedDate]++
        }
      }
    })

    const usersPerDayArray: { x: string; y: number }[] = []

    Object.entries(usersPerDay).forEach(([date, count]) => {
      usersPerDayArray.push({ x: date.toString(), y: count })
    })

    return { usersPerDay: usersPerDayArray, totalUsers }
  }
  const { usersPerDay, totalUsers } = getUsersPerDay(data, 30)

  useEffect(() => {
    const loadData = generateFakeParticipants(10000)
    setData(loadData)
  }, [])

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
          data={usersPerDay}
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
