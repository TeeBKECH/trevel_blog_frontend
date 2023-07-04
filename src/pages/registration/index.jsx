import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { useRegisterMutation } from '../../store/slices/auth/authApiSlice'
import { selectCurrentUser, setUser } from '../../store/slices/auth/authSlice'

import Form from '../../components/form'

import styles from './registration.module.scss'

const RegistrationPage = () => {
  const dispatch = useDispatch()

  const [register, { isLoading, isError, isSuccess }] = useRegisterMutation()

  const registerHandler = async (formData) => {
    const userData = await register(formData)
    const { data } = userData
    localStorage.setItem('accessToken', data.accessToken)
    dispatch(setUser(data))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.registrationPage}>
      <Form
        formData={{
          title: 'Добро пожаловать!',
          subTitle: 'Для продолжения вам необходимо Зарегистрироваться на нашем сервисе',
          link: '/login',
          linkText1: 'Уже есть аккаунт?',
          linkText2: 'Авторизация',
          btnText: 'Регистрация',
        }}
        handler={registerHandler}
      />
    </section>
  )
}

export default RegistrationPage
