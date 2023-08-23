'use client'

import { Card } from '../Card'

export const InsightsCard = () => {
  return (
    <Card
      title="ZooTools insights"
      subtitle="Making analytics simple and actionable"
      columnSpan={2}
      gridColumns={1}
      gridRows={2}
      contentColumnSpan={1}
      contentGridColumns={2}
      contentGridRows={2}
    >
      <div>
        <p>Summary</p>
      </div>
      <div>
        <p>Recommendations</p>
      </div>
    </Card>
  )
}
