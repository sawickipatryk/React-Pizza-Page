import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { createActionSetInfo } from '../../state/loaders'

import { useDispatch } from 'react-redux'

import { useForm, FormProvider } from 'react-hook-form'

import { sendPasswordResetEmail, getUserData } from '../../auth'

import AuthLayout from '../../layouts/AuthLayout'
import RecoveryPasswordForm from '../../components/RecoveryPasswordForm'
import handleAsyncAction from '../../handleAsyncAction'

export const RecoveryPasswordPage = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useForm()
  const { handleSubmit } = methods
  const dispatch = useDispatch()

  const onClickLogin = React.useCallback(async (email) => {
    handleAsyncAction(async () => {
      await sendPasswordResetEmail(email)
      dispatch(createActionSetInfo('Check your email box'))
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
            <RecoveryPasswordForm
              onSubmit={handleSubmit((data) => onClickLogin(data.email))}
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
