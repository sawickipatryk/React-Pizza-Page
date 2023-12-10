import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useForm, FormProvider } from 'react-hook-form'

import AuthLayout from '../../layouts/AuthLayout'
import SignUpForm from '../../components/SignUpForm'

export const SignUpPage = (props) => {
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
            <SignUpForm
              onSubmit={onSubmit}
            />
          </FormProvider>
      }
      />
    </div>
  )
}

SignUpPage.propTypes = {
  className: PropTypes.string
}

export default SignUpPage
