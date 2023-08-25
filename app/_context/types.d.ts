export type PeriodInDays = 30 | 60 | undefined
export type PeriodInHours = 1 | 24 | undefined
export type Region = 'country' | 'city'
export type Behaviour = 'browsers' | 'devices'
export type Traffic = 'source' | 'city'
export type ChartDataStructure = { x: string; y: number }

export interface IParticipantsData {
  id: string
  name: string
  email: string
  phone: string
  country: string
  countryCode: string
  city: string
  friendsInvited: string
  socialMedia: string
  behaviour: string
  dateOfRegistration: Date
}
export interface IUsersPerPeriodData {
  x: string
  y: number
}
export interface IUsersPerPeriodWithFlagData {
  x: string
  y: number
  code: string
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
  handleRegionSelect: (region: Region) => void
  handleBehaviourSelect: (behaviour: Behaviour) => void
  handleTrafficSelect: (traffic: Traffic) => void
  usersLeaderboard: IUsersLeaderboardData[]
  trafficPerPeriod: IUsersPerPeriodData[]
  locationPerPeriod: IUsersSignupsPerPeriodData[]
  behaviourPerPeriod: IUsersSignupsPerPeriodData[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export interface IGlobalContextProviderProps {
  children: React.ReactNode
}
