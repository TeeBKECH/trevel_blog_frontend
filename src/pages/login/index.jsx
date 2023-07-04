import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { useLoginMutation } from '../../store/slices/auth/authApiSlice'
import { selectCurrentUser, setUser, selectAccessToken } from '../../store/slices/auth/authSlice'

import Form from '../../components/form'

import styles from './login.module.scss'

const LoginPage = () => {
  const dispatch = useDispatch()

  const [login, { isLoading, isError, isSuccess }] = useLoginMutation()

  const loginHandler = async (formData) => {
    const userData = await login(formData)
    const { data } = userData
    localStorage.setItem('accessToken', data.accessToken)
    dispatch(setUser(data))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.loginPage}>
      <Form
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
    </section>
  )
}

export default LoginPage
