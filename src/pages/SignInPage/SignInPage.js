import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { createActionSetInfo } from '../../state/loaders'

import { useDispatch } from 'react-redux'

import { useForm, FormProvider } from 'react-hook-form'

import { signIn, getUserData } from '../../auth'

import handleAsyncAction from '../../handleAsyncAction'
import AuthLayout from '../../layouts/AuthLayout'
import SignInForm from '../../components/SignInForm/SignInForm'

export const SignInPage = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods
  const dispatch = useDispatch()

  const onClickLogin = React.useCallback(async (email, password) => {
    handleAsyncAction(async () => {
      await signIn(email, password)
      dispatch(createActionSetInfo('You are logged in!'))
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
            <SignInForm
              onSubmit={handleSubmit((data) => onClickLogin(data.email, data.password))}
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
