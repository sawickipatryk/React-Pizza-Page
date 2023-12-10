import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useFormContext } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import TextField from '../TextField'
import Button from '../Button'
import Typography from '../Typography'

export const SignUpForm = (props) => {
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
  const registeredReapeatPasswordProps = register('repeatpassword', {
    required: {
      value: true,
      message: 'repeatpassword is required'
    }
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
            errorMessage={errors.password && errors.password.message}
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
