import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageItem = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PAGEITEM
    </div>
  )
}

PageItem.propTypes = {
  className: PropTypes.string
}

export default PageItem
