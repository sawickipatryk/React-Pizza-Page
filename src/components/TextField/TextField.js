import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const TextField = React.forwardRef((props, ref) => {
  const {
    className,
    errorMessage,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}

    >
      <input
        className={`${classes.input}${errorMessage ? ` ${className}` : ''}`}
        ref={ref}
        {...otherProps}
      />
      {
        (errorMessage)
          ? (
            <div
              className={classes.errorMessage}
            >
              {errorMessage}
            </div>
            )
          : null
      }
    </div>
  )
})

TextField.displayName = 'TextField'

TextField.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string
}

export default TextField
