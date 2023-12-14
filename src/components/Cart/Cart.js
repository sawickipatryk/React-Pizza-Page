import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useSelector, useDispatch } from 'react-redux'

import { sendItem } from '../../api/cart/sendItem'

import Typography from '../Typography'
import Button from '../Button'
import FullPageLayout from '../FullPageLayout'
import Loader from '../Loader'
import handleAsyncAction from '../../handleAsyncAction'

import { createActionSetCart } from '../../state/cart'

import { getAll as getCart } from '../../api/cart/getAll'

export const Cart = (props) => {
  const {
    className,
    currentItem,
    ...otherProps
  } = props

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
             return (
               <div
                 key={item.id}
               >
                 <Typography
                   variant={'text'}
                 >
                   <br/>
                   {item.name}
                 </Typography>
                 <Typography
                   variant={'text'}
                 >
                   <br/>
                   {item.quantity}
                 </Typography>
                 <Typography
                   variant={'text'}
                 >
                   <br/>
                   {item.text}
                 </Typography>

               </div>
             )
           })
      }
      </div>
      <Button
        onClick={() => { onCliCkAdd(currentItem) }}
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
  className: PropTypes.string,
  currentItem: PropTypes.object

}

export default Cart
