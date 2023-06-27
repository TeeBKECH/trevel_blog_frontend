import React from 'react'
import Form from '../../components/form'

import styles from './login.module.scss'

const LoginPage = () => {
  return (
    <section className={styles.loginPage}>
      <Form type='login' />
    </section>
  )
}

export default LoginPage
