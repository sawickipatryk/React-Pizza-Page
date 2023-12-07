import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import Container from '../Container'
import Button from '../Button'
import MenuItem from '../MenuItem/MenuItem'

import img from './bgcHeader.png'

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
      <img
        className={classes.imgBackGroundMenu}
        src={img}
        alt={'table'}
      />
      <img
        className={classes.imgBackGroundMenuSecond}
        src={img}
        alt={'table'}
      />
      <Container
        className={classes.container}
      >
        <Container
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
        </Container>
        <Container
          className={classes.menuItemsContainer}
        >
          {
            menu && menu.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  price={item.price}
                  description={item.text}
                />
              )
            })
          }
        </Container>
      </Container>
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.array
}

export default Menu
