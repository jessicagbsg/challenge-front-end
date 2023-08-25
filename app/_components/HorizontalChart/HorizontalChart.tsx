'use client'

import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from 'victory'

import type { IHorizontalChartProps } from './types'

export const HorizontalChart = ({ data }: IHorizontalChartProps) => {
  const getFlagEmoji = (countryCode: string) => {
    if (countryCode === 'other') {
      return '🌍'
    }
    return String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt(0)),
    )
  }

  data = data.map((item) => ({
    ...item,
    x: item.code ? `${getFlagEmoji(item.code)} ${item.x}` : item.x,
  }))

  return (
    <VictoryChart
      domainPadding={{ x: 0, y: 0 }}
      padding={{ top: 10, bottom: 10, right: 100, left: 0 }}
      height={120}
      width={200}
    >
      <VictoryBar
        horizontal={true}
        categories={{
          x: data.map((item) => item.x),
        }}
        data={data}
        style={{
          data: {
            fill: '#fff5c2',
            width: 15,
          },
        }}
        cornerRadius={{ top: 4, bottom: 4 }}
      />
      <VictoryAxis
        crossAxis
        offsetX={205}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: {
            fill: '#333',
            fontSize: 8,
          },
          axisLabel: { fill: 'transparent' },
        }}
        orientation="right"
      />

      {data.reverse().map((item, index) => (
        <VictoryLabel
          key={index}
          textAnchor="end"
          verticalAnchor="middle"
          x={190}
          y={index * 20 + 10}
          text={`${item.y}`}
          style={{
            fontSize: 8,
            fill: '#333',
          }}
        />
      ))}
    </VictoryChart>
  )
}
