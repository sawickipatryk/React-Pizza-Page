import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import aboutImg from './aboutUS.jpg'

import Typography from '../Typography'

export const About = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.container}
      >
        <div
          className={classes.leftContainer}
        >
          <img
            className={classes.img}
            src={aboutImg}
            alt={'street with building'}
          />
        </div>
        <div
          className={classes.rightContainer}
        >
          <Typography
            className={classes.h3}
            variant={'h3'}
          >
            ABOUT US
          </Typography>
          <Typography
            className={classes.text}
            variant={'text'}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestias
            consequuntur iusto possimus fugit ab perferendis? Enim dolores nesciunt reprehenderit nobis
            corrupti
            aspernatur beatae quas! Odio saepe illo aut quibusdam cumque! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque, quisquam.
          </Typography>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  className: PropTypes.string
}

export default About
