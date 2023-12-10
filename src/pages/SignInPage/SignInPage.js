import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useForm, FormProvider } from 'react-hook-form'

import AuthLayout from '../../layouts/AuthLayout'
import SignInForm from '../../components/SignInForm/SignInForm'

export const SignInPage = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit, reset } = methods

  const onSubmit = handleSubmit(
    (data, e) => {
      console.log('valid', data)
      reset()
    },
    (errors, e) => {
      console.log('Error', errors)
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
            <SignInForm
              onSubmit={onSubmit}
            />
          </FormProvider>
      }
      />
    </div>
  )
}

SignInPage.propTypes = {
  className: PropTypes.string
}

export default SignInPage
