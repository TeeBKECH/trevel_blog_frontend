import React from 'react'

import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import Button from '../button'

import styles from './form.module.scss'

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.form_title}>
        <h3>Авторизация</h3>
        <p>Введите почту и пароль</p>
      </div>
      <div className={styles.form_control}>
        <input
          type='email'
          placeholder='E-mail'
          {...register('email', { required: 'Email Address is required' })}
        />
        <span>{errors.email?.message}</span>
      </div>
      <div className={styles.form_control}>
        <input
          type='password'
          placeholder='Password (7-16):'
          {...register('password', {
            type: 'password',
            required: 'Password is required',
            maxLength: { value: 16, message: 'Max 16 symbols' },
            minLength: { value: 7, message: 'Min 7 symbols' },
          })}
        />
        <span>{errors.password?.message}</span>
      </div>
      <div className={clsx(styles.form_control, styles.form_control_submit)}>
        <p>
          Еще нет аккаунта? <Link to='/registration'>Регистрация</Link>
        </p>
        <Button type={'submit'}>Отправить</Button>
      </div>
    </form>
  )
}

export default Form
