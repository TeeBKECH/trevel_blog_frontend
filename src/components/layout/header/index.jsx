import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectCurrentUser } from '../../../store/slices/auth/authSlice'

import Button from '../../button'

import styles from './header.module.scss'
import ButtonSkeleton from '../../button/ButtonSkeleton'

const Header = ({ userStatus }) => {
  const user = useSelector(selectCurrentUser)

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.logo}>
          <Link to='/'>
            Trevel<span>Blog</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          {userStatus ? (
            <>
              <ButtonSkeleton
                width={160}
                height={40}
              />
              <ButtonSkeleton
                width={200}
                height={40}
              />
            </>
          ) : !user ? (
            <>
              <Link
                className={styles.navLink}
                to={'/login'}
              >
                Войти
              </Link>
              <Link
                className={styles.navLink}
                to={'/registration'}
              >
                Создать аккаунт
              </Link>
            </>
          ) : (
            <>
              <Link
                className={styles.navLink}
                to={'/profile/add'}
              >
                Добавить пост
              </Link>
              <Link
                className={styles.navLink}
                to={'/profile'}
              >
                Профиль
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
