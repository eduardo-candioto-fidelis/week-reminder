import styles from '../styles/components/AddReminderForm.module.css'

import { useState } from 'react'

function AddReminderForm() {
  const [add, setAdd] = useState(false)
  
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.input}>
          <input type="text" placeholder="Nome do lembrete"/>
          <div></div>
        </div>
        <img src="/controlers/close.svg" alt="Fechar janela"/>
        <div className={styles.week}>
          <div>
            <img src="/week-days/do.svg"/>
            {add && <p>teste</p>}
            <img src="/controlers/add.svg" onClick={() => setAdd(true)}/>
          </div>
          <div>
            <img src="/week-days/se.svg"/>
            {add && <p>teste</p>}
            <img src="/controlers/add.svg" onClick={() => setAdd(true)}/>
          </div>
          <div>
            <img src="/week-days/te.svg"/>
            {add && <p>teste</p>}
            <img src="/controlers/add.svg" onClick={() => setAdd(true)}/>
          </div>
          <div>
            <img src="/week-days/qa.svg"/>
            {add && <p>teste</p>}
            <img src="/controlers/add.svg" onClick={() => setAdd(true)}/>
          </div>
          <div>
            <img src="/week-days/qi.svg"/>
            {add && <p>teste</p>}
            <img src="/controlers/add.svg" onClick={() => setAdd(true)}/>
          </div>
          <div>
            <img src="/week-days/sx.svg"/>
            {add && <p>teste</p>}
            <img src="/controlers/add.svg" onClick={() => setAdd(true)}/>
          </div>
          <div>
            <img src="/week-days/sa.svg"/>
            {add && <p>teste</p>}
            <img src="/controlers/add.svg" onClick={() => setAdd(true)}/>
          </div>
        </div>
        <img src="/controlers/ok.svg" alt="Confimar"/>
      </div>
    </div>
  )
}

export default AddReminderForm