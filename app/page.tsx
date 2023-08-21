import { Button, Card, Container } from './_components'

export default function Home() {
  return (
    <Container
      columns="1fr 1fr"
      rows="auto repeat(4, 1fr)"
      title="Summer Referral Competition"
    >
      <Card title="100,000" subtitle="Participants" columnSpan="1/-1">
        {' '}
      </Card>
      <Card title="100,000" subtitle="Participants" columnSpan="1/-1">
        {' '}
      </Card>
      <Card title="100,000" subtitle="Participants">
        {' '}
        <Button text="See leaderboard" />
      </Card>
      <Card title="100,000" subtitle="Participants">
        {' '}
        <Button text="See leaderboard" />
      </Card>
      <Card title="100,000" subtitle="Participants">
        {' '}
        <Button text="See leaderboard" />
      </Card>
      <Card title="100,000" subtitle="Participants">
        {' '}
        <Button text="See leaderboard" />
      </Card>
    </Container>
  )
}
