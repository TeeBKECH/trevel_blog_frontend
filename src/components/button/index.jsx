import React from 'react'
import clsx from 'clsx'

import styles from './button.module.scss'

const Button = ({ variant = 1, link = false, children, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, `${styles[`button_${variant}`]}`)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
