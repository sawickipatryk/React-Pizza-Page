import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

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
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['contained', 'toogle'])
}

export default Button
