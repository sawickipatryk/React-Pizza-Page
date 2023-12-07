import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const AboutPage = (props) => {
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

AboutPage.propTypes = {
  className: PropTypes.string
}

export default AboutPage
