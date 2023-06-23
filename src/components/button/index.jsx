import React from 'react'
import clsx from 'clsx'

import styles from './button.module.scss'

const Button = ({ variant = 1, link = false, children, onClick }) => {
  return (
    <button
      className={clsx(styles.button, `${styles[`button_${variant}`]}`)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
