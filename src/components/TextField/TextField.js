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
      className={classes.wrapperTextField}
    >
      <input
        className={`${classes.input}${errorMessage ? ` ${classes.hasError}` : ''}`}
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
  errorMessage: PropTypes.string,
  className: PropTypes.string
}

export default TextField
