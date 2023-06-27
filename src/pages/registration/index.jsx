import React from 'react'
import Form from '../../components/form'

import styles from './registration.module.scss'

const RegistrationPage = () => {
  return (
    <section className={styles.registrationPage}>
      <Form type='registration' />
    </section>
  )
}

export default RegistrationPage
