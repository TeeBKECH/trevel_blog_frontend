import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import Button from '../button'

import logoImg from '../../assets/img/svg/logo.svg'
import styles from './form.module.scss'

const Form = ({ formData, handler }) => {
  const { title, subTitle, link, linkText1, linkText2, btnText } = formData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handler)}
    >
      {/* <div className={styles.form_logo}>
        <img
          src={logoImg}
          alt='Trevel Blog'
        />
      </div> */}
      <div className={styles.form_title}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
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
        {/* <p>
          {linkText1} <Link to={link}>{linkText2}</Link>
        </p> */}
        <Button type={'submit'}>{btnText}</Button>
      </div>
    </form>
  )
}

export default Form
