import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Hero = (props) => {
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

Hero.propTypes = {
  className: PropTypes.string
}

export default Hero
