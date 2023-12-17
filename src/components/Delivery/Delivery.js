import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import delivery from './delivery.png'

import Container from '../Container'
import Typography from '../Typography'
import Button from '../Button'

export const Delivery = (props) => {
  const {
    className,
    onClickCheckButton,
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
          <Typography
            className={classes.h4}
            variant={'h4'}
          >
            Delivery from $5
          </Typography>
          <Typography
            className={classes.h3}
            variant={'h3'}
          >
            Delivery as soon as possible
          </Typography>
          <Typography
            className={classes.text}
            variant={'text'}
          >
            Check available delivery&apos;s and order&apos;s options
          </Typography>
          <Button
            onClick={onClickCheckButton}
            className={classes.button}
            variant={'contained'}
          >
            CHECK
          </Button>
        </div>
        <div
          className={classes.rightContainer}
        >
          <img
            className={classes.img}
            src={delivery}
            alt={'guy on scooter'}
          />
        </div>
      </Container>
    </div>
  )
}

Delivery.propTypes = {
  className: PropTypes.string,
  onClickCheckButton: PropTypes.func.isRequired
}

export default Delivery
