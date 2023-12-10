import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useFormContext } from 'react-hook-form'

import TextField from '../TextField'
import Button from '../Button'
import Typography from '../Typography'

export const SignInForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useFormContext()

  const {
    register,
    formState: { errors }
  } = methods

  const registeredEmailProps = register('email', {
    required: {
      value: true,
      message: 'email is required'
    }
  })
  const registeredPasswordProps = register('password', {
    required: {
      value: true,
      message: 'password is required'
    }
  })

  return (
    <form
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.wrapper}
      >
        <Typography
          className={classes.h2}
          variant={'h2'}
        >
          SIGN IN
        </Typography>
        <TextField
          className={classes.textField}
          placeholder={'E-mail'}
          errorMessage={errors.email && errors.email.message}
          {...registeredEmailProps}
        />
        <TextField
          className={classes.textField}
          placeholder={'Password'}
          errorMessage={errors.password && errors.password.message}
          {...registeredPasswordProps}
        />
        <Button
          className={classes.button}
          variant={'contained'}
          type={'submit'}
        >
          Sign In
        </Button>
        <Button
          className={classes.button}
          variant={'contained'}
          type={'submit'}
        >
          Create Account
        </Button>
        <Button
          className={classes.button}
          variant={'text'}
          type={'submit'}
        >
          Back To Main Page
        </Button>
      </div>
    </form>
  )
}

SignInForm.propTypes = {
  className: PropTypes.string
}

export default SignInForm
