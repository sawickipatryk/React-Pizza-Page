import React from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { createActionRemoveInfo } from './state/loaders'

import { getAllCart as getCart } from './api/cart/getAllCart'

import { createActionSetCart } from './state/cart'

import {
  createActionSetMenu
}
  from './state/menu'

import { getAll } from './api'

import MainPage from './pages/MainPage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import Loader from './components/Loader'
import handleAsyncAction from './handleAsyncAction'
import FullPageLayout from './components/FullPageLayout'
import Message from './components/Message'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import PageItem from './pages/PageItem'
import RecoveryPasswordPage from './pages/RecoveryPasswordPage'
import OrderFormPage from './pages/OrderFormPage'
import { checkIfUserIsLoggedIn, getUserData } from './auth'

export const App = () => {
  const {
    data
  } = useSelector((state) => state.menu)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    isUserLoggedIn
  } = useSelector((state) => state.auth)

  const {
    isLoading,
    isInfoDisplayed,
    infoMessage
  } = useSelector((state) => state.loaders)

  const dismissMessage = React.useCallback(() => {
    dispatch(createActionRemoveInfo())
    navigate('/')
    window.scrollTo(0, 0)
  }, [dispatch, navigate])

  React.useEffect(() => {
    handleAsyncAction(async () => {
      const userIsLoggedIn = await checkIfUserIsLoggedIn()
      if (userIsLoggedIn) {
        await getUserData()
      }
      const menu = await getAll()
      dispatch(createActionSetMenu(menu))

      const data = await getCart()
      dispatch(createActionSetCart(data))
    })
  }, [dispatch])

  return (
    <>
      {
      (
        isLoading
      )
        ? (
          <FullPageLayout
            variant={'loader'}
          >
            <Loader/>
          </FullPageLayout>
          )
        : null
      }

      {
      (
        isInfoDisplayed
      )
        ? (
          <FullPageLayout
            variant={'info'}
          >
            <Message
              onButtonClick={dismissMessage}
              iconVariant={'info'}
              message={infoMessage}
            />
          </FullPageLayout>

          )
        : null
      }
      {
          (!isUserLoggedIn)
            ? (
              <Routes>
                <Route
                  path={'*'}
                  element={
                    <MainPage/>
          }
                />
                <Route
                  path={'/menu'}
                  element={
                    <MenuPage
                      menu={data}
                    />
          }
                />
                <Route
                  path={'/menu/:itemId'}
                  element={
                    <PageItem
                      menu={data}
                    />
                  }
                />
                <Route
                  path={'/aboutus'}
                  element={
                    <AboutPage />
          }
                />
                <Route
                  path={'/gallery'}
                  element={
                    <GalleryPage />
          }
                />
                <Route
                  path={'/contact'}
                  element={
                    <ContactPage />
          }
                />
                <Route
                  path={'/signin'}
                  element={
                    <SignInPage />
          }
                />
                <Route
                  path={'/signup'}
                  element={
                    <SignUpPage />
          }
                />
                <Route
                  path={'/recoverypassword'}
                  element={
                    <RecoveryPasswordPage />
          }
                />
                <Route
                  path={'/orderform'}
                  element={
                    <OrderFormPage />
          }
                />
              </Routes>
              )
            : null
}
      {
        (isUserLoggedIn)
          ? (
            <Routes>
              <Route
                path={'*'}
                element={
                  <MainPage/>
        }
              />
              <Route
                path={'/menu'}
                element={
                  <MenuPage
                    menu={data}
                  />
        }
              />
              <Route
                path={'/menu/:itemId'}
                element={
                  <PageItem
                    menu={data}
                  />
                  }
              />
              <Route
                path={'/aboutus'}
                element={
                  <AboutPage />
        }
              />
              <Route
                path={'/gallery'}
                element={
                  <GalleryPage />
        }
              />
              <Route
                path={'/contact'}
                element={
                  <ContactPage />
        }
              />
              <Route
                path={'/orderform'}
                element={
                  <OrderFormPage />
          }
              />
            </Routes>
            )
          : null
      }

    </>
  )
}

export default App
