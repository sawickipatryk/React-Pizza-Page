import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Footer = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h1>FOOTER</h1>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
