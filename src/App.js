import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

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

export const App = () => {
  const {
    data
  } = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  const {
    isLoading,
    isInfoDisplayed,
    infoMessage
  } = useSelector((state) => state.loaders)

  React.useEffect(() => {
    handleAsyncAction(async () => {
      const menu = await getAll()
      dispatch(createActionSetMenu(menu))
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
              iconVariant={'info'}
              message={infoMessage}
            />
          </FullPageLayout>

          )
        : null
      }

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
      </Routes>

    </>
  )
}

export default App
