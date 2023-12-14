import React from 'react'
import PropTypes from 'prop-types'

import { createActionSetInfo, createActionRemoveError } from '../../state/loaders'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { logOut } from '../../auth'

import pizza from './pizza.png'

import classes from './styles.module.css'

import ItemLayout from '../../layouts/ItemLayout'

import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo'
import Container from '../../components/Container'
import ToggleMenu from '../../components/ToggleMenu'
import UserDropDown from '../../components/UserDropDown'
import Typography from '../../components/Typography'
import Button from '../../components/Button'
import Cart from '../../components/Cart'
import FullPageLayout from '../../components/FullPageLayout'
import Loader from '../../components/Loader'
import Message from '../../components/Message'

export const PageItem = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const [isuserDropDownOpen, setIsuserDropDownOpen] = React.useState(false)
  const [chosenSize, setChosenSize] = React.useState('')

  const {
    className,
    menu,
    ...otherProps
  } = props

  const dispatch = useDispatch()

  const { itemId } = useParams()

  const {
    isLoading,
    hasError,
    errorMessage
  } = useSelector((state) => state.loaders)

  const {
    isUserLoggedIn
  } = useSelector((state) => state.auth)

  const currentItem = menu && menu.find((item) => {
    return item.id === itemId
  })

  const openMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const dismissMessage = React.useCallback(() => {
    dispatch(createActionRemoveError())
  }, [dispatch])

  const onClickLogOut = async () => {
    await logOut()
    dispatch(createActionSetInfo('You are logged out!'))
  }

  const onClickSmallSizeButton = () => {
    setChosenSize('small')
  }
  const onClickMediumSizeButton = () => {
    setChosenSize('medium')
  }
  const onClickLargeSizeButton = () => {
    setChosenSize('large')
  }

  return (

    <>
      {
        (hasError)
          ? (
            <FullPageLayout
              variant={'info'}
            >
              <Message
                onButtonClick={dismissMessage}
                iconVariant={'error'}
                message={errorMessage}
              />
            </FullPageLayout>
            )
          : null
      }
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
         : <div
             className={`${classes.root}${className ? ` ${className}` : ''}`}
             {...otherProps}
           >
           <ItemLayout
             contentNavBar={
               <Container
                 className={classes.navContainer}
               >
                 <NavLink
                   className={classes.navLinkLogo}
                   to={'/'}
                 >
                   <Logo
                     className={classes.logo}
                   />
                 </NavLink>

                 <ul
                   className={`${toggleMenu ? ` ${classes.open}` : classes.navLinks}`}
                 >
                   <NavLink
                     className={classes.navLink}
                     to={'/'}
                   >
                     HOME
                   </NavLink>
                   <NavLink
                     className={classes.navLink}
                     to={'/menu'}
                   >
                     MENU
                   </NavLink>
                   <NavLink
                     className={classes.navLink}
                     to={'/aboutus'}
                   >
                     ABOUT US
                   </NavLink>
                   <NavLink
                     className={classes.navLink}
                     to={'/gallery'}
                   >
                     GALLERY
                   </NavLink>
                   <NavLink
                     className={classes.navLink}
                     to={'/contact'}
                   >
                     CONTACT
                   </NavLink>
                   {
      (
        isUserLoggedIn
      )
        ? (
          <UserDropDown
            onClickLogOutButton={onClickLogOut}
            onClick = {() => { setIsuserDropDownOpen(!isuserDropDownOpen) }}
            contentList={
              isuserDropDownOpen
                ? (
                  <ul
                    className={classes.navLinksDropDown}
                  >
                    <NavLink
                      className={classes.navLinkDropDown}
                      onButtonClick={onClickLogOut}
                    >
                      Log Out
                    </NavLink>
                  </ul>
                  )
                : null}
          />
          )
        : (
          <NavLink
            className={classes.navLink}
            to={'/signin'}
          >
            SIGN IN
          </NavLink>
          )
      }

                 </ul>
                 <ToggleMenu
                   openMenu={openMenu}
                   className={classes.toggle}
                 />
               </Container>
        }
             contentLeftSide={
               <div
                 className={classes.container}
               >
                 <div
                   className={classes.infoContainer}
                 >
                   <div
                     className={classes.nameContainer}
                   >
                     <Typography
                       className={classes.name}
                       variant={'h3'}
                     >
                       {currentItem.name}
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
                     <div
                       className={classes.buttonsContainer}
                     >
                       <Button
                         onClick={onClickLargeSizeButton}
                         className={`${classes.button}${chosenSize === 'large' ? ` ${classes.active}` : ''}`}
                         variant={'contained'}
                       >
                         <span
                           className={classes.sizeSpan}
                         >
                           {currentItem.prices.large.liter ? `${currentItem.prices.large.liter} L` : `${currentItem.prices.large.cm} CM`}
                         </span>
                         <span
                           className={classes.priceSpan}
                         >
                           {currentItem.prices.large.price}
                         </span>
                       </Button>
                       <Button
                         onClick={onClickMediumSizeButton}
                         className={`${classes.button}${chosenSize === 'medium' ? ` ${classes.active}` : ''}`}
                         variant={'contained'}
                       >
                         <span
                           className={classes.sizeSpan}
                         >
                           {currentItem.prices.medium.liter ? `${currentItem.prices.medium.liter} L` : `${currentItem.prices.medium.cm} CM`}
                         </span>
                         <span
                           className={classes.priceSpan}
                         >
                           {currentItem.prices.medium.price}
                         </span>
                       </Button>
                       <Button
                         onClick={onClickSmallSizeButton}
                         className={`${classes.button}${chosenSize === 'small' ? ` ${classes.active}` : ''}`}
                         variant={'contained'}
                       >
                         <span
                           className={classes.sizeSpan}
                         >
                           {currentItem.prices.small.liter ? `${currentItem.prices.small.liter} L` : `${currentItem.prices.small.cm} CM`}
                         </span>
                         <span
                           className={classes.priceSpan}
                         >
                           {currentItem.prices.small.price}
                         </span>
                       </Button>
                     </div>
                   </div>
                   <div
                     className={classes.ingredientContainer}
                   >
                     <Typography
                       variant={'h4'}
                       className={classes.h4}
                     >
                       Default Ingredient
                     </Typography>
                     <Typography
                       variant={'text'}
                       className={classes.ingredientText}
                     >
                       {currentItem.text}
                     </Typography>
                   </div>
                 </div>
                 <div
                   className={classes.imgContainer}
                 >
                   <img
                     className={classes.img}
                     src={pizza}
                     alt={'pizza'}
                   />
                 </div>
               </div>
          }
             contentRightSide={
               <div
                 className={classes.containerCart}
               >
                 <Cart />
               </div>
        }
           />
           </div>
      }
    </>

  )
}

PageItem.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.array
}

export default PageItem
