import {
  Container,
  ParticipantsChart,
  PeriodFilter,
  TrafficCard,
  SignupCard,
  BehaviourCard,
  LeaderboardCard,
  InsightsCard,
} from './_components'
import { GlobalContextProvider } from './_context/globalContext'

export default function Home() {
  return (
    <GlobalContextProvider>
      <Container
        title="Summer Referral Competition"
        gridColumns={2}
        gridRows={4}
      >
        <PeriodFilter />

        <ParticipantsChart />

        <InsightsCard />

        <LeaderboardCard />

        <TrafficCard />

        <SignupCard />

        <BehaviourCard />
      </Container>
    </GlobalContextProvider>
  )
}
