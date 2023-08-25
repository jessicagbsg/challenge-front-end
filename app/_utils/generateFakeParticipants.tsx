import { faker } from '@faker-js/faker'

type SocialMedia =
  | 'Google'
  | 'Facebook'
  | 'Youtube'
  | 'Linkedin'
  | 'Twitter'
  | 'Others'

function getRandomSocialMedia(): SocialMedia {
  const socialMediaOptions: SocialMedia[] = [
    'Google',
    'Facebook',
    'Youtube',
    'Linkedin',
    'Twitter',
    'Others',
  ]
  const randomIndex = Math.floor(Math.random() * socialMediaOptions.length)
  return socialMediaOptions[randomIndex]
}

type Behaviour = 'browsers' | 'devices'

function getRandomBehaviour(): Behaviour {
  const behaviourOptions: Behaviour[] = ['browsers', 'devices']
  const randomIndex = Math.floor(Math.random() * behaviourOptions.length)
  return behaviourOptions[randomIndex]
}

export const generateFakeParticipants = (count: number) => {
  const participants = []
  for (let i = 0; i < count; i++) {
    participants.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      country: faker.location.country(),
      countryCode: faker.location.countryCode(), // this will be different from country
      city: faker.location.city(),
      friendsInvited: faker.string.numeric({ length: { min: 2, max: 5 } }),
      socialMedia: getRandomSocialMedia(),
      behaviour: getRandomBehaviour(),
      dateOfRegistration: faker.date.recent({
        days: 60,
        refDate: new Date(Date.now()),
      }),
    })
  }
  return participants
}
