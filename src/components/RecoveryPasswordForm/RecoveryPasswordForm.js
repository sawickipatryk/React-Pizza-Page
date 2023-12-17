import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useNavigate } from 'react-router-dom'

import { useFormContext } from 'react-hook-form'

import TextField from '../TextField'
import Button from '../Button'
import Typography from '../Typography'

export const RecoveryPasswordForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useFormContext()

  const navigate = useNavigate()
  const onClickBackToMainPage = React.useCallback(() => {
    navigate('/')
    window.scrollTo(0, 0)
  }, [navigate])

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
            RECOVERY PASSWORD
          </Typography>
          <TextField
            className={classes.textField}
            placeholder={'E-mail'}
            errorMessage={errors.email && errors.email.message}
            {...registeredEmailProps}
          />
          <Button
            className={classes.button}
            variant={'contained'}
            type={'submit'}
          >
            RECOVERY PASSWORD
          </Button>
        </div>
      </form>
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

RecoveryPasswordForm.propTypes = {
  className: PropTypes.string
}

export default RecoveryPasswordForm
