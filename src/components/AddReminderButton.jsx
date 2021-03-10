import styles from '../styles/components/AddReminderButton.module.css'

import { AddReminderContext } from '../contexts/AddReminderContext'

import { useContext } from 'react'

function AddReminderButton() {
  const { setIsAddReminderFormOpen } = useContext(AddReminderContext)
  
  function addReminder() {
    console.log('Add reminder');
  }
  
  return (
    <div className={styles.addReminderButton}>
      <img src="/addButton.svg" alt="Botão para adicionar Lembrete"
        onClick={() => setIsAddReminderFormOpen(true)}
      />
    </div>
  )
}

export default AddReminderButton