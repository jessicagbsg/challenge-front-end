import { GlobalContext } from 'app/_context/globalContext'
import { useContext } from 'react'

export const useParticipantsData = () => {
  const context = useContext(GlobalContext)

  return context
}
