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
import Loader from './components/Loader'
import handleAsyncAction from './handleAsyncAction'

export const App = () => {
  const dispatch = useDispatch()
  const menuState = useSelector((state) => state.menu)

  const {
    isLoading,
    data
  } = menuState

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
          <Loader/>
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
      </Routes>

    </>
  )
}

export default App
