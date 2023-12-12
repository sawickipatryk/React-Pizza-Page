import React from 'react'
import PropTypes from 'prop-types'

import { NavLink as RouterNavLink } from 'react-router-dom'

import classes from './styles.module.css'

export const NavLink = (props) => {
  const {
    className,
    children,
    to,
    onButtonClick,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <RouterNavLink
        onClick={onButtonClick}
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
  to: PropTypes.string,
  onButtonClick: PropTypes.func
}

export default NavLink
