import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import pizza from './theBestPizza.png'

import Contianer from '../Container'
import Typography from '../Typography'

export const BestPizza = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Contianer>
        <div
          className={classes.leftContainer}
        >
          <img
            src={pizza}
            alt={'pizza'}
          />
        </div>
        <div
          className={classes.rightContainer}
        >
          <div
            className={classes.textContainer}
          >
            <Typography
              className={classes.h2}
              variant={'h2'}
            >
              THE BEST
            </Typography>
            <Typography
              className={classes.span}
            >
              PIZZA
            </Typography>
            <Typography
              className={classes.h2}
              variant={'h2'}
            >
              AROUND
            </Typography>
            <Typography
              className={classes.text}
              variant={'text'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit quidem in odio itaque.
              Dolores iusto hic itaque qui nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, commodi.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, vero!
            </Typography>
          </div>
        </div>
      </Contianer>
    </div>
  )
}

BestPizza.propTypes = {
  className: PropTypes.string
}

export default BestPizza
