import React from 'react'
import PropTypes from 'prop-types'

import { NavLink as RouterNavLink } from 'react-router-dom'

import classes from './styles.module.css'

export const NavLink = (props) => {
  const {
    className,
    children,
    to,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <RouterNavLink
        className={classes.navLink}
        to={to}
      >
        {children}
      </RouterNavLink>
    </li>
  )
}

NavLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string.isRequired
}

export default NavLink
