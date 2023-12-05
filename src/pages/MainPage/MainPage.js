import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import MainLayout from '../../layouts/MainLayout/MainLayout'

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

          </>}
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
