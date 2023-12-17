import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()
  const onClickBackToMainPage = React.useCallback(() => navigate('/'), [navigate])
  const onClickSignUp = React.useCallback(() => navigate('/signup'), [navigate])
  const onClickRecoveryPassword = React.useCallback(() => navigate('/recoverypassword'), [navigate])

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
    },
    minLength: {
      value: 6,
      message: 'Password should have 6 characters'
    }
  })

  return (
    <div
      className={classes.formWrapper}
    >
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
            type={'password'}
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
        </div>
      </form>
      <Button
        onClick={onClickSignUp}
        className={classes.button}
        variant={'contained'}
      >
        Create Account
      </Button>
      <Button
        onClick={onClickRecoveryPassword}
        className={classes.button}
        variant={'contained'}
      >
        Recovery Password
      </Button>
      <Button
        onClick={onClickBackToMainPage}
        className={classes.button}
        variant={'text'}
      >
        Back To Main Page
      </Button>
    </div>
  )
}

SignInForm.propTypes = {
  className: PropTypes.string
}

export default SignInForm
