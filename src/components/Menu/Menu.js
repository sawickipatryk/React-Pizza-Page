import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Container from '../Container'
import Button from '../Button'

export const Menu = (props) => {
  const {
    className,
    menu,
    ...otherProps
  } = props
  console.log(menu)
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.container}
      >
        <div
          className={classes.buttonContainer}
        >
          <Button
            variant={'menu'}
          >
            ALL
          </Button>
          <Button
            variant={'menu'}
          >
            DRINK
          </Button>
          <Button
            variant={'menu'}
          >
            PIZZA
          </Button>
        </div>
        <div>

        </div>
      </Container>
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.array
}

export default Menu
