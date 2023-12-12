import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Typography from '../Typography'
import Avatar from '../Avatar'
import Button from '../Button'

export const UserDropDown = (props) => {
  const {
    className,
    onClickLogOutButton,
    contentList,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.wrapper}
      >

        <div
          className={classes.avatarContainer}
        >
          <Avatar/>
        </div>
        <div
          className={classes.textContainer}
        >
          <Typography
            className={classes.text}
            variant={'text'}
          >
            Email
          </Typography>
          <Typography
            className={classes.text}
            variant={'text'}
          >
            DisplayName
          </Typography>
        </div>

        <Button
          className={classes.button}
          variant={'menu'}
        >
          Log Out
        </Button>
      </div>
      {
        contentList
          ? (
            <div
              className={classes.contentList}
            >
              {contentList}
            </div>
            )
          : null
      }
    </div>
  )
}

UserDropDown.propTypes = {
  className: PropTypes.string,
  onClickLogOutButton: PropTypes.func.isRequired,
  contentList: PropTypes.node
}

export default UserDropDown
