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
import Loader from './components/Loader'
import handleAsyncAction from './handleAsyncAction'
import FullPageLayout from './components/FullPageLayout'
import Message from './components/Message'

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
          <FullPageLayout>
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
          <FullPageLayout>
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
      </Routes>

    </>
  )
}

export default App
