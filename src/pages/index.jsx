import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

import AddReminderButton from '../components/AddReminderButton'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Week Reminder</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <AddReminderButton />
    </div>
  )
}
