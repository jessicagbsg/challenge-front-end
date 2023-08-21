import { Button, Card, Container, PeriodFilter } from './_components'

export default function Home() {
  return (
    <Container title="Summer Referral Competition" gridColumns={2} gridRows={4}>
      <PeriodFilter />

      <Card title="100,000" subtitle="Participants" columnSpan={2}>
        {' '}
      </Card>
      <Card
        title="ZooTools insights"
        subtitle="Making analytics simple and actionable"
        columnSpan={2}
      >
        {' '}
      </Card>
      <Card titleSection="User leaderboard">
        {' '}
        <Button text="See leaderboard" />
      </Card>
      <Card titleSection="Traffic">
        {' '}
        <Button text="See traffic sources" />
      </Card>
      <Card titleSection="Signup location">
        {' '}
        <Button text="See all countries" />
      </Card>
      <Card titleSection="Behaviour">
        {' '}
        <Button text="See all countries" />
      </Card>
    </Container>
  )
}
