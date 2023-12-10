import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const FullPageLayout = (props) => {
  const {
    className,
    children,
    variant,
    ...otherProps
  } = props

  const variantClasses = classes[variant]

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}
      ${variantClasses ? ` ${variantClasses}` : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

FullPageLayout.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['loader', 'info']),
  children: PropTypes.node
}

export default FullPageLayout
