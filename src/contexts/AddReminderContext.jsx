import { createContext, useState } from 'react'

import AddReminderForm from '../components/AddReminderForm'

export const AddReminderContext = createContext({})

export function AddReminderProvider({ children }) {
  const [isAddReminderFormOpen, setIsAddReminderFormOpen] = useState(false)
  
  return (
    <AddReminderContext.Provider
      value={{
        setIsAddReminderFormOpen
      }}
    >
      {children}
      {isAddReminderFormOpen && <AddReminderForm />}
    </AddReminderContext.Provider>
  )
}
