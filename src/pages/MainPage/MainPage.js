import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import MainLayout from '../../layouts/MainLayout'
import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo'
import Conatiner from '../../components/Container'
import ToggleMenu from '../../components/ToggleMenu'
import Hero from '../../components/Hero'

export const MainPage = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <MainLayout
        contentNavBar={
          <Conatiner
            className={classes.container}
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
              className={classes.navLinks}
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
              className={classes.togglem}
            />
          </Conatiner>
          }
        contentMain={
          <>
            <Hero/>
          </>
          }
        contentFooter={
          <>

          </>}
      />
    </div>
  )
}

MainPage.propTypes = {
  className: PropTypes.string
}

export default MainPage
