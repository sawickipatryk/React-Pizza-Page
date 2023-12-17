import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { sendItem } from '../../api/cart/sendItem'

import Typography from '../Typography'
import Button from '../Button'
import FullPageLayout from '../FullPageLayout'
import Loader from '../Loader'
import CartItem from '../CartItem'
import handleAsyncAction from '../../handleAsyncAction'

import { createActionSetCart } from '../../state/cart'

import { getAllCart as getCart } from '../../api/cart/getAllCart'

export const Cart = (props) => {
  const {
    className,
    currentItem,
    chosenSize,
    chosenPrice,
    setChosenSize,
    ...otherProps
  } = props

  const newObject = { ...currentItem, size: chosenSize, price: chosenPrice, totalPrice: chosenPrice }

  const navigate = useNavigate()
  const onClickBuyButton = React.useCallback(() => {
    window.scrollTo(0, 0)
    navigate('/orderform')
  }, [navigate])

  const dispatch = useDispatch()
  const {
    isLoading
  } = useSelector((state) => state.loaders)
  const {
    data
  } = useSelector((state) => state.cart)

  const onCliCkAdd = (item) => {
    localStorage.setItem('pizzaID', item.id)
    handleAsyncAction(async () => {
      await sendItem(item)
      const data = await getCart()
      dispatch(createActionSetCart(data))
    })
    setChosenSize('')
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
                 id={item.id}
                 name={item.name}
                 totalPrice={item.totalPrice}
                 price={item.price}
                 quantity={item.quantity}
                 size={item.size}
                 text={item.text}
                 newObject={newObject}
               />
             )
           })
      }
      </ul>
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
         : data.length > 0 && !chosenSize
           ? (
             <Button
               onClick={onClickBuyButton}
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
  setChosenSize: PropTypes.func,
  chosenPrice: PropTypes.number

}

export default Cart
