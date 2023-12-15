import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useFormContext } from 'react-hook-form'
import isEmail from 'validator/lib/isEmail'

import TextField from '../TextField'
import Message from '../Message'
import FullPageLayout from '../FullPageLayout'

export const OrderForm = (props) => {
  const {
    className,
    popUp,
    setPopUp,
    ...otherProps
  } = props

  const methods = useFormContext()

  const {
    register,
    formState: { errors }
  } = methods

  const registeredNameProps = register('name', {
    required: {
      value: true,
      message: 'name is required'
    }
  })
  const registeredEmailProps = register('email', {
    required: {
      value: true,
      message: 'email is required'
    },
    validate: (email) => isEmail(email) || 'Wrong Email'
  })
  const registeredSurnnameProps = register('surname', {
    required: {
      value: true,
      message: 'surname is required'
    }
  })
  const registeredPhoneNumberProps = register('phone', {
    required: {
      value: true,
      message: 'phone is required'
    }
  })
  const registeredCityProps = register('city', {
    required: {
      value: true,
      message: 'city is required'
    }
  })
  const registeredStreetProps = register('street', {
    required: {
      value: true,
      message: 'street is required'
    }
  })
  const registeredHouseNumberProps = register('houseNumber', {
    required: {
      value: true,
      message: 'house number is required'
    }
  })
  const registeredFlatNumberProps = register('flatNumber', {
    required: {
      value: true,
      message: 'flat number is required'
    }
  })
  const registeredExtraMessageProps = register('extraMessage', {
    required: {
      value: true,
      message: 'extra message is required'
    }
  })

  const dismissMessage = () => {
    setPopUp(false)
  }

  return (
    <>
      {
  (popUp)
    ? (
      <FullPageLayout
        variant={'info'}
      >
        <Message
          onButtonClick={dismissMessage}
          iconVariant={'error'}
          message={'Check your email box'}
        />
      </FullPageLayout>
      )
    : null
}
      <form
        className={`${classes.root}${className ? ` ${className}` : ''}`}
        {...otherProps}
      >
        <div
          className={classes.wrapper}
        >
          <div
            className={classes.contactDetailUpContainer}
          >
            <TextField
              className={classes.textField}
              placeholder={'Name'}
              errorMessage={errors.name && errors.name.message}
              {...registeredNameProps}
            />
            <TextField
              className={classes.textField}
              placeholder={'Surname'}
              errorMessage={errors.surname && errors.surname.message}
              {...registeredSurnnameProps}
            />
            <TextField
              className={classes.textField}
              placeholder={'Phone Number'}
              errorMessage={errors.number && errors.number.message}
              {...registeredPhoneNumberProps}
            />
            <TextField
              className={classes.textField}
              placeholder={'E-mail'}
              errorMessage={errors.email && errors.email.message}
              {...registeredEmailProps}
            />
          </div>
          <div
            className={classes.contactDetailDownContainer}
          >
            <TextField
              className={classes.textField}
              placeholder={'City'}
              errorMessage={errors.city && errors.city.message}
              {...registeredCityProps}
            />
            <TextField
              className={classes.textField}
              placeholder={'Street'}
              errorMessage={errors.street && errors.street.message}
              {...registeredStreetProps}
            />
            <TextField
              className={classes.textField}
              placeholder={'House Number'}
              errorMessage={errors.houseNumber && errors.houseNumber.message}
              {...registeredHouseNumberProps}
            />
            <TextField
              className={classes.textField}
              placeholder={'Flat Number'}
              errorMessage={errors.flatNumber && errors.flatNumber.message}
              {...registeredFlatNumberProps}
            />
          </div>
          <div
            className={classes.extraMesasgeContainer}
          >
            <TextField
              className={classes.textField}
              placeholder={'Extra Message to Order'}
              errorMessage={errors.extraMessage && errors.extraMessage.message}
              {...registeredExtraMessageProps}
            />
          </div>

        </div>
      </form>
    </>
  )
}

OrderForm.propTypes = {
  className: PropTypes.string,
  popUp: PropTypes.bool,
  setPopUp: PropTypes.func.isRequired
}

export default OrderForm
