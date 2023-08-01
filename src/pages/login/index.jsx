import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import { useLoginMutation } from '../../store/slices/auth/authApiSlice'
import { selectCurrentUser, setUser, selectAccessToken } from '../../store/slices/auth/authSlice'

import Form from '../../components/form'

import styles from './login.module.scss'

const LoginPage = () => {
  const [login, { isLoading, isError, isSuccess, data }] = useLoginMutation()
  const user = useSelector(selectCurrentUser)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from || '/'

  const loginHandler = async (formData) => {
    await login(formData)
  }

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('accessToken', data.accessToken)
      dispatch(setUser(data))
      navigate(from, { replace: true })
    }
  }, [isSuccess])

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.login}>
      <div className={clsx('container', styles.container)}>
        <Form
          inputs={['email', 'password']}
          formData={{
            title: 'Добро пожаловать!',
            subTitle: 'Для продолжения вам необходимо авторизоваться на нашем сервисе',
            link: '/registration',
            linkText1: 'Еще нет аккаунта?',
            linkText2: 'Регистрация',
            btnText: 'Авторизация',
          }}
          handler={loginHandler}
        />
      </div>
    </section>
  )
}

export default LoginPage
