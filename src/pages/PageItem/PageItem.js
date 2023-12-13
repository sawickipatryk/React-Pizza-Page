import React from 'react'
import PropTypes from 'prop-types'

import { createActionSetInfo } from '../../state/loaders'
import { useSelector, useDispatch } from 'react-redux'
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

export const PageItem = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const [isuserDropDownOpen, setIsuserDropDownOpen] = React.useState(false)
  const {
    className,
    ...otherProps
  } = props

  const dispatch = useDispatch()
  const {
    isUserLoggedIn
  } = useSelector((state) => state.auth)

  const openMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const onClickLogOut = async () => {
    await logOut()
    dispatch(createActionSetInfo('You are logged out!'))
  }

  return (
    <div
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
                  Margherita
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
                    className={classes.button}
                    variant={'contained'}
                  >
                    <span
                      className={classes.sizeSpan}
                    >
                      BIG 42cm
                    </span>
                    <span
                      className={classes.priceSpan}
                    >
                      20$
                    </span>
                  </Button>
                  <Button
                    className={classes.button}
                    variant={'contained'}
                  >
                    <span
                      className={classes.sizeSpan}
                    >
                      MED 32cm
                    </span>
                    <span
                      className={classes.priceSpan}
                    >
                      20$
                    </span>
                  </Button>
                  <Button
                    className={classes.button}
                    variant={'contained'}
                  >
                    <span
                      className={classes.sizeSpan}
                    >
                      SMALL 22cm
                    </span>
                    <span
                      className={classes.priceSpan}
                    >
                      20$
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
                  pastry, tomato sauce, cheese, oregano
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
            <Cart/>
          </div>
      }
      />
    </div>
  )
}

PageItem.propTypes = {
  className: PropTypes.string
}

export default PageItem
