import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { selectCurrentUser } from '../../store/slices/auth/authSlice'

import styles from './auth.module.scss'

const Auth = () => {
  const [authForm, setAuthForm] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userData = useSelector(selectCurrentUser)

  const navigate = useNavigate()
  const location = useLocation()

  const { from } = location.state || '/'

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // useEffect(() => {
  //   if (userData) {
  //     navigate(from, { replace: true })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userData])

  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        {/* {authForm === 'login' ? (
          <LoginForm
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
            from={from}
            setAuthForm={setAuthForm}
          />
        ) : (
          <RegisterForm
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
            from={from}
            setAuthForm={setAuthForm}
          />
        )} */}
      </div>
    </div>
  )
}

export default Auth
