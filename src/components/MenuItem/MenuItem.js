import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import Button from '../Button'

export const MenuItem = (props) => {
  const {
    className,
    name,
    id,
    type,
    prices,
    description,
    onClickViewItem,
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
        <Button
          onClick={onClickViewItem}
          variant={'text'}
          className={classes.header}
        >
          <span
            className={classes.spanTitle}
          >NAME
          </span>
          <div>
            {name}
          </div>
        </Button>
        <div
          className={classes.pricesContainer}
        >
          <Typography
            variant={'text'}
            className={classes.price}
          >
            <span
              className={classes.spanTitle}
            >SMALL
            </span>
            <div>
              { prices.small.price }
            </div>

          </Typography>
          <Typography
            className={classes.price}
            variant={'text'}
          >
            <span
              className={classes.spanTitle}
            >MED
            </span>
            <div>
              { prices.medium.price }
            </div>

          </Typography>
          <Typography
            className={classes.price}
            variant={'text'}
          >
            <span
              className={classes.spanTitle}
            >LARGE
            </span>
            <div>
              { prices.large.price }
            </div>

          </Typography>
        </div>
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
  prices: PropTypes.object,
  description: PropTypes.string,
  onClickViewItem: PropTypes.func.isRequired
}

export default MenuItem
