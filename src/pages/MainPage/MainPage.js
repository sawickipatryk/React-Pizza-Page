import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import MainLayout from '../../layouts/MainLayout'
import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo'
import Conatiner from '../../components/Container'
import ToggleMenu from '../../components/ToggleMenu'

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
              to={'/'}
            >
              <Logo
                className={classes.logo}
              />
            </NavLink>

            <ul>
              <NavLink
                to={'/'}
              >
                HOME
              </NavLink>
              <NavLink
                to={'/menu'}
              >
                MENU
              </NavLink>
              <NavLink
                to={'/aboutus'}
              >
                ABOUT US
              </NavLink>
              <NavLink
                to={'/gallery'}
              >
                GALLERY
              </NavLink>
              <NavLink
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
            <h1>MAIN</h1>
          </>}
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
