import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const ContactPage = (props) => {
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

ContactPage.propTypes = {
  className: PropTypes.string
}

export default ContactPage
