import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

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
      <Typography
        variant={'h1'}
      >
        LOADING
      </Typography>
    </div>
  )
}

Loader.propTypes = {
  className: PropTypes.string
}

export default Loader
