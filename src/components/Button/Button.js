import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const Button = (props) => {
  const {
    className,
    children,
    variant,
    ...otherProps
  } = props

  const variantClasses = classes[variant]

  return (
    <button
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClasses ? ` ${variantClasses}` : ''}`}
      {...otherProps}
    >
      <Typography
        variant={'button'}
      >
        {children}
      </Typography>

    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['contained', 'toggle', 'menu', 'text'])
}

export default Button
