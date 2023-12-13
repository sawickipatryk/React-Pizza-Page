import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import NavBar from '../../components/NavBar'

export const ItemLayout = (props) => {
  const {
    className,
    contentNavBar,
    contentLeftSide,
    contentRightSide,
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
        className={classes.wrapper}
      >
        {contentLeftSide}
        {contentRightSide}
      </div>

    </div>
  )
}

ItemLayout.propTypes = {
  className: PropTypes.string,
  contentNavBar: PropTypes.node,
  contentLeftSide: PropTypes.node,
  contentRightSide: PropTypes.node
}

export default ItemLayout
