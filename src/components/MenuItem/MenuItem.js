import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'

export const MenuItem = (props) => {
  const {
    className,
    name,
    id,
    type,
    price,
    description,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.headerContainer}
      >
        <Typography
          variant={'h4'}
          className={classes.header}
        >
          {name}
        </Typography>
        <Typography
          variant={'h4'}
          className={classes.price}
        >
          {price}
        </Typography>
      </div>
      <div
        className={classes.descriptionContainer}
      >
        <Typography
          variant={'text'}
          className={classes.description}
        >
          {description}
        </Typography>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
}

export default MenuItem
