import {
  Button,
  Card,
  CardFilter,
  Container,
  PeriodFilter,
} from './_components'

export default function Home() {
  return (
    <Container title="Summer Referral Competition" gridColumns={2} gridRows={4}>
      <PeriodFilter />

      <Card
        title="100,000"
        subtitle="Participants"
        columnSpan={2}
        gridColumns={1}
        gridRows={2}
      >
        {' '}
      </Card>
      <Card
        title="ZooTools insights"
        subtitle="Making analytics simple and actionable"
        columnSpan={2}
        gridColumns={1}
        gridRows={2}
      >
        {' '}
      </Card>
      <Card titleSection="User leaderboard" gridColumns={1} gridRows={2}>
        <Button text="See leaderboard" />
      </Card>
      <Card
        titleSection="Traffic"
        gridColumns={1}
        gridRows={2}
        cardFilter={<CardFilter text1="Source" text2="City" />}
      >
        {' '}
        <Button text="See traffic sources" />
      </Card>
      <Card
        titleSection="Signup location"
        gridColumns={1}
        gridRows={2}
        cardFilter={<CardFilter text1="Country" text2="City" />}
      >
        {' '}
        <Button text="See all countries" />
      </Card>
      <Card
        titleSection="Behaviour"
        gridColumns={1}
        gridRows={2}
        cardFilter={<CardFilter text1="Browsers" text2="Decides" />}
      >
        <Button text="See all countries" />
      </Card>
    </Container>
  )
}
