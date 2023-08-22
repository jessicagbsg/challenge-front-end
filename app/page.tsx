import {
  Button,
  Card,
  CardFilter,
  Container,
  ParticipantsChart,
  PeriodFilter,
  HorizontalChart,
} from './_components'

export default function Home() {
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

  const arr2 = [
    { x: 'United States', y: 40 },
    { x: 'Germany', y: 43 },
    { x: 'Netherlands', y: 50 },
    { x: 'India', y: 33 },
    { x: 'Japan', y: 21 },
    { x: 'Other', y: 11 },
  ]
    .sort((a, b) => b.y - a.y)
    .reverse()

  const arr3 = [
    { x: 'United States', y: 60 },
    { x: 'Germany', y: 43 },
    { x: 'Netherlands', y: 23 },
    { x: 'India', y: 46 },
    { x: 'Japan', y: 12 },
    { x: 'Other', y: 6 },
  ]
    .sort((a, b) => b.y - a.y)
    .reverse()

  return (
    <Container title="Summer Referral Competition" gridColumns={2} gridRows={4}>
      <PeriodFilter />

      <ParticipantsChart />

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

      <Card
        titleSection="User leaderboard"
        gridColumns={1}
        gridRows={1}
        contentGridColumns={1}
        contentGridRows={1}
      >
        <Button text="See leaderboard" />
      </Card>

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

      <Card
        titleSection="Behaviour"
        gridColumns={2}
        gridRows={2}
        contentColumnSpan={2}
        cardFilter={<CardFilter text1="Browsers" text2="Decides" />}
      >
        <div style={{ gridRow: 1 }}>
          <HorizontalChart data={arr3} />
        </div>
        <Button text="See all countries" />
      </Card>
    </Container>
  )
}
