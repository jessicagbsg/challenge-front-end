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

export interface IUsersPerPeriod {
  [date: string]: number
}
