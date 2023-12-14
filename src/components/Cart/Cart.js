import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { getAll as getCart } from '../../api/cart/getAll'

import { createActionSetCart } from '../../state/cart'

import { useSelector, useDispatch } from 'react-redux'

import handleAsyncAction from '../../handleAsyncAction'
import Typography from '../Typography'
import Button from '../Button'
import FullPageLayout from '../FullPageLayout'
import Loader from '../Loader'

export const Cart = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const {
    isLoading
  } = useSelector((state) => state.loaders)
  const {
    data
  } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const onClickAddButton = () => {
    handleAsyncAction(async () => {
      const data = await getCart()
      console.log(data)
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
      <div
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
             console.log(item)
             return (
               <div
                 key={item.id}
               >
                 {item.name}
               </div>
             )
           })
      }
      </div>
      <Button
        onClick={onClickAddButton}
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
