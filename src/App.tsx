import { Suspense } from 'react'

import { Link, Route, Routes } from 'react-router'

import { AboutPageLazy } from './pages/AboutPage'
import { MainPageLazy } from './pages/MainPage'

function App() {
  return (
    <>
      <Link className="text-primary " to="/">
        MainPage
      </Link>
      <Link to="/about">About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
