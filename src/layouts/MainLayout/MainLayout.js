import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export const MainLayout = (props) => {
  const {
    className,
    contentNavBar,
    contentMain,
    contentFooter,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <NavBar>
        {contentNavBar}
      </NavBar>
      <div
        className={classes.main}
      >
        {contentMain}
      </div>
      <Footer>
        {contentFooter}
      </Footer>
    </div>
  )
}

MainLayout.propTypes = {
  className: PropTypes.string,
  contentNavBar: PropTypes.node,
  contentMain: PropTypes.node,
  contentFooter: PropTypes.node
}

export default MainLayout
