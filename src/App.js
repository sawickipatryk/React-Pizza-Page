import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import MenuPage from './pages/MenuPage/MenuPage'

export const App = () => {
  return (
    <Routes>
      <Route
        path={'*'}
        element={<MainPage/>}
      />
      <Route
        path={'/menu'}
        element={<MenuPage/>}
      />
    </Routes>
  )
}

export default App
