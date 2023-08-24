'use client'
import React, {
  FunctionComponent,
  createContext,
  useEffect,
  useState,
} from 'react'

import { generateFakeParticipants } from 'app/_utils/generateFakeParticipants'
import type { IParticipantsData } from 'app/_components/ParticipantsChart/types'
import type {
  IPeriodFilterContext,
  IGlobalContextProviderProps,
  IUsersPerPeriodData,
  PeriodInDays,
  PeriodInHours,
  IUsersPerPeriod,
  IUsersLeaderboardData,
} from './types'

export const GlobalContext = createContext({} as IPeriodFilterContext)

export const GlobalContextProvider: FunctionComponent<
  IGlobalContextProviderProps
> = ({ children }) => {
  const [data, setData] = useState<IParticipantsData[]>([])

  const getUsersPerDay = (days?: 30 | 60, hours?: 1 | 24) => {
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

    const usersPerPeriod: IUsersPerPeriod = {}
    const allUsersLeaderboard: IUsersLeaderboardData[] = []
    let totalUsers: number = 0

    participants.forEach((participant) => {
      const registrationDate = new Date(participant.dateOfRegistration)

      if (startDate && registrationDate >= startDate) {
        allUsersLeaderboard.push({
          email: participant.email,
          friendsInvited: participant.friendsInvited,
          country: participant.country,
        })

        totalUsers++
        const formattedDate = registrationDate.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
        })

        if (!usersPerPeriod[formattedDate]) {
          usersPerPeriod[formattedDate] = 1
        } else {
          usersPerPeriod[formattedDate]++
        }
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

    const usersLeaderboard = allUsersLeaderboard
      .sort((a, b) => +b.friendsInvited - +a.friendsInvited)
      .slice(0, 4)

    return { usersPerPeriod: usersPerPeriodArray, totalUsers, usersLeaderboard }
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

  const [usersPerPeriod, setUsersPerPeriod] = useState<
    { x: string; y: number }[]
  >([])
  const [totalUsers, setTotalUsers] = useState<number>(0)

  const [usersLeaderboard, setUsersLeaderboard] = useState<
    IUsersLeaderboardData[]
  >([])

  useEffect(() => {
    const loadData = generateFakeParticipants(10000)
    setData(loadData)
  }, [])

  useEffect(() => {
    if (periodInDays !== undefined) {
      const { usersPerPeriod, totalUsers, usersLeaderboard } =
        getUsersPerDay(periodInDays)
      setUsersPerPeriod(usersPerPeriod)
      setTotalUsers(totalUsers)
      setUsersLeaderboard(usersLeaderboard)
    } else if (periodInHours !== undefined) {
      const { usersPerPeriod, totalUsers, usersLeaderboard } = getUsersPerDay(
        undefined,
        periodInHours,
      )
      setUsersPerPeriod(usersPerPeriod)
      setTotalUsers(totalUsers)
      setUsersLeaderboard(usersLeaderboard)
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
