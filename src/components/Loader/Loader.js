import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Spinner from './Spinner'

export const Loader = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Spinner
        className={classes.spinner}
      />
    </div>
  )
}

Loader.propTypes = {
  className: PropTypes.string
}

export default Loader
