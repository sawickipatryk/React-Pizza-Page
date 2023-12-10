import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const AuthLayout = (props) => {
  const {
    className,
    authContent,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {authContent}
    </div>
  )
}

AuthLayout.propTypes = {
  className: PropTypes.string,
  authContent: PropTypes.node
}

export default AuthLayout
