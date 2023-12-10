import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useFormContext } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import TextField from '../TextField'
import Button from '../Button'
import Typography from '../Typography'
import isEmail from 'validator/lib/isEmail'

export const SignUpForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useFormContext()

  const {
    register,
    watch,
    formState: { errors }
  } = methods

  const password = watch('password')

  const registeredEmailProps = register('email', {
    required: {
      value: true,
      message: 'email is required'
    },
    validate: (email) => isEmail(email) || 'Wrong Email'
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
  const registeredReapeatPasswordProps = register('repeatPassword', {
    required: {
      value: true,
      message: 'repeatPassword is required'
    },
    minLength: {
      value: 6,
      message: 'Password should have 6 characters'
    },
    validate: (repeatPassword) => repeatPassword === password || 'repeatPassword shoud be the same like password'
  })

  const navigate = useNavigate()
  const onClickBackToMainPage = React.useCallback(() => navigate('/'), [navigate])
  const onClickSignIn = React.useCallback(() => navigate('/signin'), [navigate])

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
            SIGN UP
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
          <TextField
            className={classes.textField}
            placeholder={'Repeat Password'}
            errorMessage={errors.repeatPassword && errors.repeatPassword.message}
            {... registeredReapeatPasswordProps}
          />
          <Button
            className={classes.button}
            variant={'contained'}
            type={'submit'}
          >
            SIGN UP
          </Button>
        </div>
      </form>
      <Button
        onClick={onClickSignIn}
        className={classes.button}
        variant={'contained'}
      >
        SIGN IN
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

SignUpForm.propTypes = {
  className: PropTypes.string
}

export default SignUpForm
