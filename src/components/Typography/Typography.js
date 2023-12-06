import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Typography = (props) => {
  const {
    children,
    className,
    variant,
    ...otherProps
  } = props

  const variantClasses = classes[variant]

  return (
    <span
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClasses ? ` ${variantClasses}` : ''}`}
      {...otherProps}
    >
      {children}
    </span>
  )
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'text', 'button'])

}

export default Typography
