import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import pizzaHero from './header.png'

import MainLayout from '../../layouts/MainLayout'
import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo'
import Container from '../../components/Container'
import ToggleMenu from '../../components/ToggleMenu'
import Hero from '../../components/Hero'
import FastChoice from '../../components/FastChoice'
import BestPizza from '../../components/BestPizza'
import Delivery from '../../components/Delivery'
import Typography from '../../components/Typography'
import Button from '../../components/Button'

export const MainPage = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  const openMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <MainLayout
        contentNavBar={
          <Container
            className={classes.navContainer}
          >
            <NavLink
              className={classes.navLinkLogo}
              to={'/'}
            >
              <Logo
                className={classes.logo}
              />
            </NavLink>

            <ul
              className={`${toggleMenu ? ` ${classes.open}` : classes.navLinks}`}
            >
              <NavLink
                className={classes.navLink}
                to={'/'}
              >
                HOME
              </NavLink>
              <NavLink
                className={classes.navLink}
                to={'/menu'}
              >
                MENU
              </NavLink>
              <NavLink
                className={classes.navLink}
                to={'/aboutus'}
              >
                ABOUT US
              </NavLink>
              <NavLink
                className={classes.navLink}
                to={'/gallery'}
              >
                GALLERY
              </NavLink>
              <NavLink
                className={classes.navLink}
                to={'/contact'}
              >
                CONTACT
              </NavLink>
              <NavLink
                className={classes.navLink}
                to={'/signin'}
              >
                SIGN IN
              </NavLink>
            </ul>
            <ToggleMenu
              openMenu={openMenu}
              className={classes.toggle}
            />
          </Container>
          }
        contentMain={
          <>
            <Hero
              contentHero={
                <div
                  className={classes.background}
                >
                  <div className={classes.gradient}></div>
                  <Container
                    className={classes.container}
                  >
                    <div className={classes.leftContainer}>
                      <img
                        className={classes.pizzaHero}
                        src={pizzaHero}
                        alt={'pizza'}
                      />
                    </div>
                    <div className={classes.rightContainer}>
                      <div
                        className={classes.textContainer}
                      >
                        <Typography
                          className={classes.header}
                          variant={'h1'}
                        >
                          Enjoy Your Pizza In Town
                        </Typography>
                        <Button
                          className={classes.button}
                          variant={'contained'}
                        >
                          ORDER NOW
                        </Button>
                      </div>
                    </div>
                  </Container>
                </div>
            }
            />
            <FastChoice/>
            <BestPizza/>
            <Delivery/>
          </>
          }
        contentFooter={
          <>
            <Container
              className={classes.footerContainer}
            >
              <Container
                className={classes.socialsContainer}
              >
                <Typography
                  className={classes.h4}
                  variant={'h4'}
                >
                  Socials
                </Typography>
                <div>
                  <a
                    className= {classes.linkSocials}
                    href={'/'}
                  >
                    <svg
                      xmlns={'http://www.w3.org/2000/svg'}
                      width={'30'}
                      height={'30'}
                      viewBox={'0 0 24 24'}
                    >
                      <path
                        fill={'currentColor'}
                        d={'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z'}
                      />
                    </svg>
                  </a>
                  <a
                    className= {classes.linkSocials}
                    href={'/'}
                  >
                    <svg
                      xmlns={'http://www.w3.org/2000/svg'}
                      width={'30'}
                      height={'30'}
                      viewBox={'0 0 24 24'}
                    >
                      <path
                        fill={'currentColor'}
                        d={'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z'}
                      />
                    </svg>
                  </a>
                  <a
                    className= {classes.linkSocials}
                    href={'/'}
                  >
                    <svg
                      xmlns={'http://www.w3.org/2000/svg'}
                      width={'30'}
                      height={'30'}
                      viewBox={'0 0 16 16'}
                    >
                      <path
                        fill={'currentColor'}
                        d={'M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05L9.294 6.928ZM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843l-3.664-5.28Z'}
                      />
                    </svg>
                  </a>
                </div>

              </Container>
              <Container
                className={classes.contactContainer}
              >
                <Typography
                  className={classes.h4}
                  variant={'h4'}
                >
                  Contact
                </Typography>
                <Typography
                  className={classes.text}
                  variant={'text'}
                >
                  Tel: 999-999-999
                </Typography>
                <Typography
                  className={classes.text}
                  variant={'text'}
                >
                  Adress: 99-999 Warsaw
                </Typography>
                <Typography
                  className={classes.text}
                  variant={'text'}
                >
                  Email: Example@example.com
                </Typography>
              </Container>
              <Container
                className={classes.openingHoursContainer}
              >
                <Typography
                  className={classes.h4}
                  variant={'h4'}
                >
                  Opening Hours
                </Typography>
                <Typography
                  className={classes.text}
                  variant={'text'}
                >
                  Mon-Fri: 14:00 - 24:00
                </Typography>
                <Typography
                  className={classes.text}
                  variant={'text'}
                >
                  Sat: 14:00 - 24:00
                </Typography>
                <Typography
                  className={classes.text}
                  variant={'text'}
                >
                  Sun: 14:00 - 24:00
                </Typography>
              </Container>
            </Container>
          </>
          }
      />
    </div>
  )
}

MainPage.propTypes = {
  className: PropTypes.string
}

export default MainPage
