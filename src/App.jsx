import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WeatherDetailsPage from './pages/WeatherDetailsPage'


function App() {
 

  return (
    <>
      <h1 className="text-9xl">Hari and Tesa</h1>
      <Routes >
        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/about" element={<AboutPage />}>AboutPage</Route>
        <Route path="/weatherdetails/:id" element={<WeatherDetailsPage />}>WeatherDetailsPage</Route>
        <Route path="*" >Error Page</Route>

      </Routes>
    </>
  )
}

export default App
