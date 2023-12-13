import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Typography from '../Typography'
import Button from '../Button'

export const Cart = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.headerContainer}
      >
        <Typography
          className={classes.h4}
          variant={'h4'}
        >
          My Order
        </Typography>
      </div>
      <div
        className={classes.cartContainer}
      >
        <Typography
          variant={'text'}
        >
          Cart is Empty
        </Typography>
      </div>
      <Button
        className={classes.button}
        variant={'contained'}
      >
        Buy
        <span>
          $ 0.00
        </span>
      </Button>
    </div>
  )
}

Cart.propTypes = {
  className: PropTypes.string
}

export default Cart
