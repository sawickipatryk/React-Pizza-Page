import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import Button from '../Button'

import pizza from './pizza.png'

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
          <div
            className={classes.imgContainer}
          >
            {name}
            <img
              className={classes.pizzaImg}
              src={pizza}
              alt={'pizza'}
            />

          </div>
        </Button>
        <div
          className={classes.pricesContainer}
        >
          <div
            className={classes.spansTitle}
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
          <div
            className={classes.buttonsContainer}
          >
            <Button
              variant={'contained'}
              className={classes.button}
            >
              Add
            </Button>
            <Button
              variant={'contained'}
              onClick={onClickViewItem}
              className={classes.button}
            >
              View
            </Button>
          </div>
        </div>

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
