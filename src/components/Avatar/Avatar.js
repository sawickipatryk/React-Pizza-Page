import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import defaultAvatar from './defaultAvatar.svg'

export const Avatar = (props) => {
  const {
    className,
    src,
    ...otherProps
  } = props

  return (
    <img
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      src={src || defaultAvatar}
      alt={'avatar'}
      {...otherProps}
    />
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string
}

export default Avatar
