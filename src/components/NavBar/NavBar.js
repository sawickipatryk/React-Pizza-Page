import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Logo from '../Logo'

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
      <div>
        <Logo/>
        <ul>
          {children}
        </ul>
      </div>

    </nav>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default NavBar
