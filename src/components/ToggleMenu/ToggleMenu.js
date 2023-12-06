import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Button from '../Button'

export const ToggleMenu = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Button
        variant={'toggle'}
      >
        <svg
          className={'toggle__icon'}
          xmlns={'http://www.w3.org/2000/svg'}
          width={'35'}
          height={'35'}
          viewBox={'0 0 20 20'}
        >
          <path
            fill={'currentColor'}
            d={'M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z'}
          />
        </svg>
      </Button>
    </div>
  )
}

ToggleMenu.propTypes = {
  className: PropTypes.string
}

export default ToggleMenu
