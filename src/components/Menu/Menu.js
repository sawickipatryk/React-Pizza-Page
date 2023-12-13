import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useSelector } from 'react-redux'

import Container from '../Container'
import Button from '../Button'
import FullPageLayout from '../FullPageLayout'
import Message from '../Message'
import MenuItem from '../MenuItem/MenuItem'

import img from './bgcHeader.png'

export const Menu = (props) => {
  const {
    className,
    menu,
    dismissMessage,
    onClickAllButton,
    onClickDrinkButton,
    onClickPizzaButton,
    activeButton,
    onClickViewItem,
    ...otherProps
  } = props

  const {
    hasError,
    errorMessage
  } = useSelector((state) => state.loaders)

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
            onClick={onClickAllButton}
            className={`${classes.button}${activeButton === 'all' ? ` ${classes.active}` : ''}`}
            variant={'menu'}
          >
            ALL
          </Button>
          <Button
            onClick={onClickDrinkButton}
            className={`${classes.button}${activeButton === 'drink' ? ` ${classes.active}` : ''}`}
            variant={'menu'}
          >
            DRINK
          </Button>
          <Button
            onClick={onClickPizzaButton}
            className={`${classes.button}${activeButton === 'pizza' ? ` ${classes.active}` : ''}`}
            variant={'menu'}
          >
            PIZZA
          </Button>
        </Container>
        <Container
          className={classes.menuItemsContainer}
        >
          {
      (
        hasError
      )
        ? (
          <FullPageLayout
            variant={'info'}
          >
            <Message
              onButtonClick={dismissMessage}
              iconVariant={'error'}
              message={errorMessage}
            />
          </FullPageLayout>
          )
        : menu && menu
          .map((item) => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                type={item.type}
                prices={item.prices}
                description={item.text}
                onClickViewItem={() => { onClickViewItem(item.id) }}
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
  activeButton: PropTypes.string,
  menu: PropTypes.array,
  dismissMessage: PropTypes.func.isRequired,
  onClickAllButton: PropTypes.func.isRequired,
  onClickDrinkButton: PropTypes.func.isRequired,
  onClickPizzaButton: PropTypes.func.isRequired,
  onClickViewItem: PropTypes.func.isRequired
}

export default Menu
