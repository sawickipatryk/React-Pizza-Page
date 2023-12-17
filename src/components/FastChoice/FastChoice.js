import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Container from '../Container'
import Typography from '../Typography'
import Button from '../Button'

export const FastChoice = (props) => {
  const {
    className,
    onClickOrderNow,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.container}
      >
        <div
          className={classes.leftContainer}
        >
          <div
            className={classes.textContainer}
          >
            <Typography
              className={classes.h3}
              variant={'h3'}
            >
              PEPE BIANCO
            </Typography>
            <Button
              onClick={onClickOrderNow}
              className={classes.button}
              variant={'contained'}
            >
              ORDER NOW
            </Button>
          </div>
        </div>
        <div
          className={classes.rightContainer}
        >
          <div
            className={classes.textContainer}
          >
            <Typography
              className={classes.h3}
              variant={'h3'}
            >
              PEPE BIANCO
            </Typography>
            <Button
              onClick={onClickOrderNow}
              className={classes.button}
              variant={'contained'}
            >
              ORDER NOW
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

FastChoice.propTypes = {
  className: PropTypes.string,
  onClickOrderNow: PropTypes.func.isRequired
}

export default FastChoice
