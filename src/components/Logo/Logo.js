import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import logo from './logo.png'

export const Logo = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <img
        className={classes.logo}
        src={logo}
        alt={'logo'}
      />
    </div>
  )
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
