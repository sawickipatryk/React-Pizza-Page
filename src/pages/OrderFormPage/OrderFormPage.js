import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useForm, FormProvider } from 'react-hook-form'

import ItemLayout from '../../layouts/ItemLayout'
import OrderForm from '../../components/OrderForm'
import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo'
import Container from '../../components/Container'
import ToggleMenu from '../../components/ToggleMenu'
import Cart from '../../components/Cart'

export const OrderFormPage = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const [popUp, setPopUp] = React.useState(false)
  const {
    className,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit, reset } = methods

  const onSubmit = handleSubmit(
    (data, e) => {
      setPopUp(true)
      reset()
    },
    (errors, e) => {
    }
  )

  const openMenu = () => {
    setToggleMenu(!toggleMenu)
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
            </ul>
            <ToggleMenu
              openMenu={openMenu}
              className={classes.toggle}
            />
          </Container>
      }
        contentLeftSide={
          < >
            <FormProvider
              {...methods}
            >
              <OrderForm
                popUp={popUp}
                setPopUp={setPopUp}
                onSubmit={onSubmit}
              />
            </FormProvider>
          </>
          }
        contentRightSide={
          <div>
            <Cart/>
          </div>
          }
      />
    </div>
  )
}

OrderFormPage.propTypes = {
  className: PropTypes.string
}

export default OrderFormPage
