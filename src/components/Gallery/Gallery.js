import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

import img from './gallery.jpg'
import img1 from './gallery1.jpg'

import Container from '../Container'

export const Gallery = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.container}
      >
        <div
          className={classes.imgContainer}
        >
          <img
            className={classes.imgContainer}
            src={img}
            alt={'from restuarant inside'}
          />
        </div>
        <div
          className={classes.imgContainer}
        >
          <img
            className={classes.imgContainer}
            src={img1}
            alt={'from restuarant inside'}
          />
        </div>
        <div
          className={classes.imgContainer}
        >
          <img
            className={classes.imgContainer}
            src={img}
            alt={'from restuarant inside'}
          />
        </div>
        <div
          className={classes.imgContainer}
        >
          <img
            className={classes.imgContainer}
            src={img1}
            alt={'from restuarant inside'}
          />
        </div>
        <div
          className={classes.imgContainer}
        >
          <img
            className={classes.imgContainer}
            src={img}
            alt={'from restuarant inside'}
          />
        </div>
        <div
          className={classes.imgContainer}
        >
          <img
            className={classes.img}
            src={img1}
            alt={'from restuarant inside'}
          />
        </div>
      </Container>
    </div>
  )
}

Gallery.propTypes = {
  className: PropTypes.string
}

export default Gallery
