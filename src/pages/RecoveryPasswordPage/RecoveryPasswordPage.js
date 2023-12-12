import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useForm, FormProvider } from 'react-hook-form'

import AuthLayout from '../../layouts/AuthLayout'
import RecoveryPasswordForm from '../../components/RecoveryPasswordForm'

export const RecoveryPasswordPage = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit, reset } = methods

  const onSubmit = handleSubmit(
    (data, e) => {
      reset()
    },
    (errors, e) => {
    }
  )

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

      <AuthLayout
        authContent={
          <FormProvider
            {...methods}
          >
            <RecoveryPasswordForm
              onSubmit={onSubmit}
            />
          </FormProvider>
      }
      />
    </div>
  )
}

RecoveryPasswordPage.propTypes = {
  className: PropTypes.string
}

export default RecoveryPasswordPage
