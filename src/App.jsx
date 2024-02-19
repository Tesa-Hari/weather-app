import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WeatherDetailsPage from './pages/WeatherDetailsPage'
import Weekly from './components/Weekly'
import { Link } from 'react-router-dom'
import CreateWeekly from './components/CreateWeekly'

function App() {
  <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/weekly">Weekly Forecast</Link></li>
    </ul>
  </nav>
  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/about" element={<AboutPage />}>AboutPage</Route>
        <Route path="/weatherdetails/:id" element={<WeatherDetailsPage />}>WeatherDetailsPage</Route>

        <Route path="/createweekly/" element={<CreateWeekly />}>CreateWeekly</Route>

        <Route path="/daily" element={<Weekly />}>Weekly Forecast</Route>
        <Route path="/weekly" element={<Weekly />}>Weekly Forecast</Route>

        <Route path="*" >Error Page</Route>

      </Routes>
    </>
  )
}

export default App
