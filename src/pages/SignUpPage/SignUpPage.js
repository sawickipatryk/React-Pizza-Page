import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { createActionSetInfo } from '../../state/loaders'
import { useDispatch } from 'react-redux'

import { useForm, FormProvider } from 'react-hook-form'

import AuthLayout from '../../layouts/AuthLayout'
import SignUpForm from '../../components/SignUpForm'

import { signUp, getUserData } from '../../auth'

import handleAsyncAction from '../../handleAsyncAction'

export const SignUpPage = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods
  const dispatch = useDispatch()

  const onClickCreateAccount = React.useCallback(async (email, password) => {
    handleAsyncAction(async () => {
      await signUp(email, password)
      dispatch(createActionSetInfo('User account created. User is logged in!'))
      await getUserData()
    })
  }, [dispatch])

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
              onSubmit={handleSubmit((data) => onClickCreateAccount(data.email, data.password))}
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
