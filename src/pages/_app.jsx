import '../styles/globals.css'

import { AddReminderProvider } from '../contexts/AddReminderContext'

function MyApp({ Component, pageProps }) {
  return (
    <AddReminderProvider>
      <Component {...pageProps} />
    </AddReminderProvider>
  )
}

export default MyApp
