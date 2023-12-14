import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import pizza from './pizza.png'
import Typography from '../Typography'
import Button from '../Button'

export const CartItem = (props) => {
  const {
    className,
    name,
    price,
    quantity,
    size,
    text,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.container}
      >
        <div
          className={classes.imgContainer}
        >
          <img
            className={classes.img}
            src={pizza}
            alt={'pizza'}
          />
        </div>
        <div
          className={classes.descriptionContainer}
        >
          <Typography
            className={classes.h4}
            variant={'h4'}
          >
            {name}
          </Typography>
          <Typography
            className={classes.text}
            variant={'text'}
          >
            {text}
          </Typography>
        </div>
        <div
          className={classes.quantityContainer}
        >
          <Typography
            className={classes.h4}
            variant={'h4'}
          >
            Quantity
          </Typography>
          <Typography
            className={classes.text}
            variant={'text'}
          >
            {quantity}
          </Typography>
        </div>
        <div
          className={classes.sizeContainer}
        >
          <Typography
            className={classes.h4}
            variant={'h4'}
          >
            Size
          </Typography>
          <Typography
            className={classes.text}
            variant={'text'}
          >
            {size}
          </Typography>
        </div>
        <div
          className={classes.priceContainer}
        >
          <Typography
            className={classes.h4}
            variant={'h4'}
          >
            Price
          </Typography>
          <Typography
            className={classes.text}
            variant={'text'}
          >
            $ {price}
          </Typography>
        </div>
        <div
          className={classes.buttonContainer}
        >
          <Button
            className={classes.buttonINC}
            variant={'contained'}
          >
            +
          </Button>
          <Button
            className={classes.buttonDEC}
            variant={'contained'}
          >
            -
          </Button>
        </div>
      </div>
    </li>

  )
}

CartItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  size: PropTypes.string,
  text: PropTypes.string
}

export default CartItem
