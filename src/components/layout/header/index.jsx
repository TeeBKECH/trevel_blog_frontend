import React from 'react'

import styles from './header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to={'/'}>Главная</Link>
        <Link to={'/posts'}>Лента</Link>
        <Link to={'/login'}>Вход</Link>
        <Link to={'/registration'}>Регистрация</Link>
      </nav>
    </header>
  )
}

export default Header
