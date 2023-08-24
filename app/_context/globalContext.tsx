'use client'
import React, {
  FunctionComponent,
  createContext,
  useEffect,
  useState,
} from 'react'

import { generateFakeParticipants } from 'app/_utils/generateFakeParticipants'
import type {
  IPeriodFilterContext,
  IGlobalContextProviderProps,
  IUsersPerPeriodData,
  PeriodInDays,
  PeriodInHours,
  IUsersPerPeriod,
  IUsersLeaderboardData,
  IParticipantsData,
  ChartDataStructure,
  IUsersPerPeriodWithFlagData,
} from './types'

export const GlobalContext = createContext({} as IPeriodFilterContext)

export const GlobalContextProvider: FunctionComponent<
  IGlobalContextProviderProps
> = ({ children }) => {
  const [data, setData] = useState<IParticipantsData[]>([])

  const getUsersPerPeriod = (days?: 30 | 60, hours?: 1 | 24) => {
    if (
      (days !== undefined && hours !== undefined) ||
      (days === undefined && hours === undefined)
    ) {
      throw new Error(
        'You can only pass either "days" or "hours", not both or none.',
      )
    }
    const participants = data
    let startDate: Date
    if (days) {
      startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    } else if (hours) {
      startDate = new Date(Date.now() - hours * 60 * 60 * 1000)
    }

    let totalUsers: number = 0

    const participantsInPeriod: IParticipantsData[] = participants
      .filter((participant) => {
        const registrationDate = new Date(participant.dateOfRegistration)
        return startDate && registrationDate >= startDate
      })
      .map((participant) => {
        totalUsers++
        return participant
      })

    return { participantsInPeriod, totalUsers }
  }

  const amountOfSignups = (participants: IParticipantsData[]) => {
    const usersPerPeriod: IUsersPerPeriod = {}

    participants.forEach((participant) => {
      const registrationDate = new Date(participant.dateOfRegistration)

      const formattedDate = registrationDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      })

      if (!usersPerPeriod[formattedDate]) {
        usersPerPeriod[formattedDate] = 1
      } else {
        usersPerPeriod[formattedDate]++
      }
    })

    const usersPerPeriodArray: IUsersPerPeriodData[] = []

    Object.entries(usersPerPeriod).forEach(([date, count]) => {
      usersPerPeriodArray.push({ x: date.toString(), y: count })
    })

    usersPerPeriodArray.sort((a, b) => {
      const dateA = new Date(a.x)
      const dateB = new Date(b.x)
      return dateA.getTime() - dateB.getTime()
    })

    return usersPerPeriodArray
  }

  const usersLeaderboardPerPeriod = (participants: IParticipantsData[]) => {
    const allUsersLeaderboard: IUsersLeaderboardData[] = []

    participants.forEach((participant) => {
      allUsersLeaderboard.push({
        email: participant.email,
        friendsInvited: participant.friendsInvited,
        country: participant.country,
      })
    })

    const usersLeaderboard = allUsersLeaderboard
      .sort((a, b) => +b.friendsInvited - +a.friendsInvited)
      .slice(0, 5)

    return usersLeaderboard
  }

  const usersTrafficPerPeriod = (participants: IParticipantsData[]) => {
    const socialMediaCounts: Record<string, number> = participants.reduce(
      (counts, participant) => {
        const socialMedia = participant.socialMedia

        counts[socialMedia] = (counts[socialMedia] || 0) + 1

        return counts
      },
      {} as Record<string, number>,
    )

    const usersTraffictPerPeriod = Object.entries(socialMediaCounts)
      .map(([socialMedia, count]) => ({
        x: socialMedia,
        y: count,
      }))
      .sort((a, b) => a.y - b.y)

    return usersTraffictPerPeriod
  }

  const usersLocationPerPeriod = (participants: IParticipantsData[]) => {
    const countryCounts: Record<string, number> = participants.reduce(
      (counts, participant) => {
        const country = participant.country
        counts[country] = (counts[country] || 0) + 1
        return counts
      },
      {} as Record<string, number>,
    )

    const countryData = Object.entries(countryCounts)
      .map(([country, count]) => ({
        x: country,
        y: count,
        code:
          participants.find((participant) => participant.country === country)
            ?.countryCode || 'other', // this will be different from country so the flag will be different
      }))
      .sort((a, b) => a.y - b.y)

    const locationPerPeriod = countryData.slice(0, 6)

    // this works, but since the amount of countries is big, the 'Other' category will be too big
    // const otherCountriesCount = countryData
    //   .slice(5)
    //   .reduce((sum, entry) => sum + entry.y, 0)

    // const usersSingupPerPeriod = [
    //   ...topCountries,
    //   {
    //     x: 'Other',
    //     y: otherCountriesCount,
    //     code: 'other',
    //   },
    // ]

    return locationPerPeriod
  }

  const usersBehaviourPerPeriod = (participants: IParticipantsData[]) => {
    const browserParticipants = participants.filter(
      (participant) => participant.behaviour === 'Browser',
    )

    const countryCounts: Record<string, number> = browserParticipants.reduce(
      (counts, participant) => {
        const country = participant.country
        counts[country] = (counts[country] || 0) + 1
        return counts
      },
      {} as Record<string, number>,
    )

    const countryData = Object.entries(countryCounts)
      .map(([country, count]) => ({
        x: country,
        y: count,
        code:
          browserParticipants.find(
            (participant) => participant.country === country,
          )?.countryCode || 'other',
      }))
      .sort((a, b) => a.y - b.y)

    const behaviourPerPeriod = countryData.slice(0, 6)

    return behaviourPerPeriod
  }

  const [periodInDays, setPeriodInDays] = useState<PeriodInDays>(30)
  const [periodInHours, setPeriodInHours] = useState<PeriodInHours>(undefined)

  const handleDaysSelect = (days: PeriodInDays) => {
    setPeriodInDays(days)
    setPeriodInHours(undefined)
  }

  const handleHoursSelect = (hours: PeriodInHours) => {
    setPeriodInHours(hours)
    setPeriodInDays(undefined)
  }

  const [usersPerPeriod, setUsersPerPeriod] = useState<ChartDataStructure[]>([])
  const [totalUsers, setTotalUsers] = useState<number>(0)

  const [usersLeaderboard, setUsersLeaderboard] = useState<
    IUsersLeaderboardData[]
  >([])

  const [trafficPerPeriod, setTrafficPerPeriod] = useState<
    ChartDataStructure[]
  >([])

  const [locationPerPeriod, setLocationPerPeriod] = useState<
    IUsersPerPeriodWithFlagData[]
  >([])

  const [behaviourPerPeriod, setBehaviourPerPeriod] = useState<
    IUsersPerPeriodWithFlagData[]
  >([])

  useEffect(() => {
    const loadData = generateFakeParticipants(10000)
    setData(loadData)
  }, [])

  useEffect(() => {
    if (periodInDays !== undefined) {
      const { participantsInPeriod, totalUsers } =
        getUsersPerPeriod(periodInDays)
      const usersPerPeriod = amountOfSignups(participantsInPeriod)
      const usersLeaderboard = usersLeaderboardPerPeriod(participantsInPeriod)
      const trafficPerPeriod = usersTrafficPerPeriod(participantsInPeriod)
      const locationPerPeriod = usersLocationPerPeriod(participantsInPeriod)
      const behaviourPerPeriod = usersBehaviourPerPeriod(participantsInPeriod)
      setUsersPerPeriod(usersPerPeriod)
      setTotalUsers(totalUsers)
      setUsersLeaderboard(usersLeaderboard)
      setTrafficPerPeriod(trafficPerPeriod)
      setLocationPerPeriod(locationPerPeriod)
      setBehaviourPerPeriod(behaviourPerPeriod)
    } else if (periodInHours !== undefined) {
      const { participantsInPeriod, totalUsers } = getUsersPerPeriod(
        undefined,
        periodInHours,
      )
      const usersPerPeriod = amountOfSignups(participantsInPeriod)
      const usersLeaderboard = usersLeaderboardPerPeriod(participantsInPeriod)
      const trafficPerPeriod = usersTrafficPerPeriod(participantsInPeriod)
      const locationPerPeriod = usersLocationPerPeriod(participantsInPeriod)
      const behaviourPerPeriod = usersBehaviourPerPeriod(participantsInPeriod)
      setUsersPerPeriod(usersPerPeriod)
      setTotalUsers(totalUsers)
      setUsersLeaderboard(usersLeaderboard)
      setTrafficPerPeriod(trafficPerPeriod)
      setLocationPerPeriod(locationPerPeriod)
      setBehaviourPerPeriod(behaviourPerPeriod)
    }
  }, [data, periodInDays, periodInHours])

  return (
    <GlobalContext.Provider
      value={{
        usersPerPeriod,
        totalUsers,
        periodInDays,
        periodInHours,
        handleDaysSelect,
        handleHoursSelect,
        usersLeaderboard,
        trafficPerPeriod,
        locationPerPeriod,
        behaviourPerPeriod,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}