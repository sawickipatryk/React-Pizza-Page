import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const NavBar = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <nav
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
    </nav>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default NavBar
