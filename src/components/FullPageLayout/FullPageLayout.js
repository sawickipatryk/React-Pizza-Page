import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const FullPageLayout = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

FullPageLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default FullPageLayout
