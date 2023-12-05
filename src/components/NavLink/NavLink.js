import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const NavLink = (props) => {
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

NavLink.propTypes = {
  className: PropTypes.string
}

export default NavLink
