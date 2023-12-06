import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Conatiner from '../Container'
import Logo from './header.png'

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
      <Conatiner>
        <div className={classes.leftContainer}>
          <img
            className={classes.pizzaHero}
            src={Logo}
            alt={'pizza'}
          />
        </div>
        <div className={classes.rightContainer}></div>
      </Conatiner>
    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string
}

export default Hero
