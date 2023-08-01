import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import Button from '../button'

import logoImg from '../../assets/img/svg/logo.svg'
import styles from './form.module.scss'

const initialInputs = [
  {
    type: 'text',
    name: 'nickName',
    placeholder: 'Nickname',
    required: {
      value: true,
      message: 'Укажите Ваш никнейм',
    },
    minLength: { value: 3, message: 'Минимум 3 символа' },
    maxLength: { value: 35, message: 'Максимум 35 символов' },
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'E-mail',
    required: {
      value: true,
      message: 'Укажите свою почту',
    },
    minLength: { value: 5, message: 'Минимум 5 символов' },
    maxLength: { value: 30, message: 'Максимум 30 символов' },
    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Некорректная почта' },
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password (7-16)',
    required: {
      value: true,
      message: 'Пароль обязателен',
    },
    minLength: { value: 7, message: 'Минимум 7 символов' },
    maxLength: { value: 16, message: 'Максимум 16 символов' },
  },
]

const Form = ({ formData, handler, inputs }) => {
  const { title, subTitle, link, linkText1, linkText2, btnText } = formData
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
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
      <div className={styles.form_inputs}>
        {inputs.map((item, i) => {
          const input = initialInputs.find((el) => el.name === item)
          if (input) {
            return (
              <div
                className={styles.form_control}
                key={i}
              >
                <input
                  {...register(input.name, {
                    required: input.required,
                    minLength: input.minLength,
                    maxLength: input.maxLength,
                    pattern: input.pattern,
                  })}
                  type={input.type}
                  placeholder={input.placeholder}
                />
                <span>{errors[input.name]?.message}</span>
              </div>
            )
          }
        })}
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
