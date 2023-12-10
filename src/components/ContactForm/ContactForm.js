import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import { useFormContext } from 'react-hook-form'
import isEmail from 'validator/lib/isEmail'

import TextField from '../TextField'
import Textarea from '../Textarea'
import Button from '../Button'

export const ContactForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const methods = useFormContext()

  const {
    register,
    formState: { errors }
  } = methods

  const registeredNameProps = register('name', {
    required: {
      value: true,
      message: 'name is required'
    }
  })
  const registeredEmailProps = register('email', {
    required: {
      value: true,
      message: 'email is required'
    },
    validate: (email) => isEmail(email) || 'Wrong Email'
  })
  const registeredSubjectProps = register('subject', {
    required: {
      value: true,
      message: 'subject is required'
    }
  })
  const registeredTextareaProps = register('textarea', {
    required: {
      value: true,
      message: 'message is required'
    }
  })

  return (
    <form
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.wrapper}
      >
        <TextField
          className={classes.textField}
          placeholder={'Name'}
          errorMessage={errors.name && errors.name.message}
          {...registeredNameProps}
        />
        <TextField
          className={classes.textField}
          placeholder={'E-mail'}
          errorMessage={errors.email && errors.email.message}
          {...registeredEmailProps}
        />
        <TextField
          className={classes.textField}
          placeholder={'Subject'}
          errorMessage={errors.subject && errors.subject.message}
          {...registeredSubjectProps}
        />
        <Textarea
          className={classes.textField}
          placeholder={'Write your message here'}
          errorMessage={errors.textarea && errors.textarea.message}
          {...registeredTextareaProps}
        />
        <Button
          variant={'contained'}
          type={'submit'}
        >
          SEND
        </Button>
      </div>
    </form>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string
}

export default ContactForm
