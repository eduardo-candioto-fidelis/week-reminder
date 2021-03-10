import styles from '../styles/components/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <img src="/favicon.png" alt="Logo"/>
      <h1>Week Reminder</h1>
      <hr/>
    </header>
  )
}

export default Header