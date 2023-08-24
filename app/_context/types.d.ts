export type PeriodInDays = 30 | 60 | undefined
export type PeriodInHours = 1 | 24 | undefined

export interface IUsersPerPeriodData {
  x: string
  y: number
}

export interface IUsersPerPeriod {
  [date: string]: number
}

export interface IUsersLeaderboardData {
  email: string
  friendsInvited: string
  country: string
}

export interface IPeriodFilterContext {
  usersPerPeriod: IUsersPerPeriodData[]
  totalUsers: number
  periodInDays: PeriodInDays
  periodInHours: PeriodInHours
  handleDaysSelect: (days: PeriodInDays) => void
  handleHoursSelect: (hours: PeriodInHours) => void
  usersLeaderboard: IUsersLeaderboardData[]
}

export interface IGlobalContextProviderProps {
  children: React.ReactNode
}
