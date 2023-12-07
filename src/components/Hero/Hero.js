import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Logo from './header.png'

import Conatiner from '../Container'
import Typography from '../Typography'
import Button from '../Button'

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
      <div className={classes.gradient}></div>
      <Conatiner
        className={classes.container}
      >
        <div className={classes.leftContainer}>
          <img
            className={classes.pizzaHero}
            src={Logo}
            alt={'pizza'}
          />
        </div>
        <div className={classes.rightContainer}>
          <div
            className={classes.textContainer}
          >
            <Typography
              className={classes.header}
              variant={'h1'}
            >
              Enjoy Your Pizza In Town
            </Typography>
            <Button
              className={classes.button}
              variant={'contained'}
            >
              ORDER NOW
            </Button>
          </div>
        </div>
      </Conatiner>
    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string
}

export default Hero
