import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import {
  createActionSetMenu,
  createActionStart,
  createActionStop,
  createActionSetError
} from './state/menu'

import { getAll } from './api'

import MainPage from './pages/MainPage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import Loader from './components/Loader'

export const App = () => {
  const dispatch = useDispatch()
  const menuState = useSelector((state) => state.menu)

  const {
    isLoading,
    value
  } = menuState

  const getMenu = React.useCallback(async () => {
    dispatch(createActionStart())
    try {
      const menu = await getAll()
      dispatch(createActionSetMenu(menu))
    } catch (error) {
      dispatch(createActionSetError(error))
    }
    dispatch(createActionStop())
  }, [dispatch])

  React.useEffect(() => {
    getMenu()
  }, [getMenu])

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
              menu={value}
            />
      }
        />
        <Route
          path={'/aboutus'}
          element={
            <AboutPage
              menu={value}
            />
      }
        />
      </Routes>

    </>
  )
}

export default App
