import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  return (
    <div className={styles.error_page}>
      <h1>Упс! 404</h1>
      <p>Страница не найдена!</p>
      <Link
        to='/'
        className='btn'
      >
        На главную
      </Link>
    </div>
  )
}

export default ErrorPage
