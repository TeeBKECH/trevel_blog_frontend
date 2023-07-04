import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.logo}>
          <p>
            Trevel<span>Blog</span>
          </p>
        </div>
        <nav className={styles.nav}>
          <Link to={'/login'}>Вход</Link>
          <Link to={'/registration'}>Регистрация</Link>
          <Link to={'/profile'}>Профиль</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
