import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { useLoginMutation } from '../../store/slices/auth/authApiSlice'
import { selectCurrentUser, setUser } from '../../store/slices/auth/authSlice'

import Form from '../../components/form'

import styles from './login.module.scss'

const LoginPage = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const location = useLocation()

  const [login, { isLoading, isError, isSuccess }] = useLoginMutation()

  const userData = useSelector(selectCurrentUser)

  const { from } = location.state || '/'

  const loginHandler = async (formData) => {
    const userData = await login(formData)
    const { data } = userData
    dispatch(setUser(data))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(userData)
    if (userData) {
      navigate(from, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData])

  return (
    <section className={styles.loginPage}>
      <Form
        formData={{
          title: 'Авторизация',
          subTitle: 'Введите почту и пароль',
        }}
        handler={loginHandler}
      />
    </section>
  )
}

export default LoginPage
