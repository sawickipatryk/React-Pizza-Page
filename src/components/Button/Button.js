import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Button = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </div>
  )
}

Button.propTypes = {
  className: PropTypes.string
}

export default Button
