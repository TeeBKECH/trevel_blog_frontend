import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import { useRegisterMutation } from '../../store/slices/auth/authApiSlice'
import { selectCurrentUser, setUser } from '../../store/slices/auth/authSlice'

import Form from '../../components/form'

import styles from './registration.module.scss'

const RegistrationPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from || '/'

  const [register, { isLoading, isError, isSuccess, data }] = useRegisterMutation()

  const registerHandler = async (formData) => {
    await register(formData)
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
    <section className={styles.registration}>
      <div className={clsx('container', styles.container)}>
        <Form
          inputs={['nickName', 'email', 'password']}
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
      </div>
    </section>
  )
}
export default RegistrationPage
