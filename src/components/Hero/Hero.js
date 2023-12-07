import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Hero = (props) => {
  const {
    className,
    contentHero,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {contentHero}
    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string,
  contentHero: PropTypes.node
}

export default Hero
