import React from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'

import { patchItem } from '../../api/cart'
import { createActionSetCart } from '../../state/cart'
import { getAllCart as getCart } from '../../api/cart/getAllCart'

import classes from './styles.module.css'

import pizza from './pizza.png'
import Typography from '../Typography'
import Button from '../Button'
import handleAsyncAction from '../../handleAsyncAction'

export const CartItem = (props) => {
  const {
    id,
    className,
    name,
    totalPrice,
    price,
    quantity,
    size,
    text,
    newObject,
    ...otherProps
  } = props

  const dispatch = useDispatch()
  const {
    data
  } = useSelector((state) => state.cart)

  const onClickPlusButton = () => {
    const newQuantity = quantity + 1
    const newPrice = newQuantity * price

    const newItem = {
      totalPrice: newPrice,
      quantity: newQuantity
    }

    handleAsyncAction(async () => {
      await patchItem(newItem, id)
      const data = await getCart()
      dispatch(createActionSetCart(data))
    })
  }

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
            $ {totalPrice}
          </Typography>
        </div>
        <div
          className={classes.buttonContainer}
        >
          <Button
            onClick={() => { onClickPlusButton(data, newObject) }}
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
  totalPrice: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number,
  size: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  newObject: PropTypes.object
}

export default CartItem
