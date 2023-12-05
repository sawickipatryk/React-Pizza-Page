import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const NavBar = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>NAVBAR</h1>
    </div>
  )
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar
