import React from 'react'
import PropTypes from 'prop-types'

import { createActionSetInfo } from '../../state/loaders'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../auth'

import classes from './styles.module.css'
import ItemLayout from '../../layouts/ItemLayout'

import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo'
import Container from '../../components/Container'
import ToggleMenu from '../../components/ToggleMenu'
import UserDropDown from '../../components/UserDropDown'

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
          <>
          </>
        }
        contentRightSide={
          <>
          </>
      }
      />
    </div>
  )
}

PageItem.propTypes = {
  className: PropTypes.string
}

export default PageItem
