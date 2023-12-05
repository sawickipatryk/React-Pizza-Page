import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import MainLayout from '../../layouts/MainLayout'
import NavLink from '../../components/NavLink'

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
          <>
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
          </>
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
