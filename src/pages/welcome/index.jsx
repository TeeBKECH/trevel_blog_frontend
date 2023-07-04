import React from 'react'
import { Link } from 'react-router-dom'

import styles from './welcome.module.scss'

const WelcomePage = () => {
  return (
    <section className={styles.welcome}>
      <nav className={styles.nav}>
        <Link to={'/registration'}>Создать аккаунт</Link>
        <Link to={'/login'}>Войти</Link>
      </nav>
    </section>
  )
}

export default WelcomePage
