import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useSelector, useDispatch } from 'react-redux'

import { sendItem } from '../../api/cart/sendItem'

import Typography from '../Typography'
import Button from '../Button'
import FullPageLayout from '../FullPageLayout'
import Loader from '../Loader'
import CartItem from '../CartItem'
import handleAsyncAction from '../../handleAsyncAction'

import { createActionSetCart } from '../../state/cart'

import { getAll as getCart } from '../../api/cart/getAll'

export const Cart = (props) => {
  const {
    className,
    currentItem,
    chosenSize,
    chosenPrice,
    ...otherProps
  } = props

  const newObject = { ...currentItem, size: chosenSize, price: chosenPrice }

  const dispatch = useDispatch()
  const {
    isLoading
  } = useSelector((state) => state.loaders)
  const {
    data
  } = useSelector((state) => state.cart)

  const onCliCkAdd = (item) => {
    handleAsyncAction(async () => {
      await sendItem(item)
      const data = await getCart()
      dispatch(createActionSetCart(data))
    })
  }

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
      <ul
        className={classes.cartContainer}
      >
        {
       (
         isLoading
       )
         ? (
           <FullPageLayout
             variant={'loader'}
           >
             <Loader/>
           </FullPageLayout>
           )
         : data && data
           .map((item) => {
             return (
               <CartItem
                 key={item.id}
                 name={item.name}
                 price={item.price}
                 quantity={item.quantity}
                 size={item.size}
                 text={item.text}
               />
             )
           })
      }
      </ul>
      {
        data.length > 0
          ? (
            <Button
              onClick={() => { onCliCkAdd(newObject) }}
              className={classes.button}
              variant={'contained'}
            >
              Buy
            </Button>
            )
          : (
            <Button
              onClick={() => { onCliCkAdd(newObject) }}
              className={classes.button}
              variant={'contained'}
            >
              ADD
            </Button>
            )
      }
    </div>
  )
}

Cart.propTypes = {
  className: PropTypes.string,
  currentItem: PropTypes.object,
  chosenSize: PropTypes.string,
  chosenPrice: PropTypes.number

}

export default Cart
