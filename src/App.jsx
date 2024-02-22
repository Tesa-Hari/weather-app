import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Weekly from './components/Weekly'
import { Link } from 'react-router-dom'
import CreateWeekly from './components/CreateWeekly'
import UpdateWeekly from './components/UpdateWeekly'
import Footer from './pages/Footer'

function App() {
  
  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/about" element={<AboutPage />}>AboutPage</Route>

        <Route path="/createweekly/" element={<CreateWeekly />}>CreateWeekly</Route>
        <Route path="/updateweekly/" element={<UpdateWeekly />}>Update Weekly</Route>

        <Route path="/daily" element={<Weekly />}>Weekly Forecast</Route>
        <Route path="/weekly" element={<Weekly />}>Weekly Forecast</Route>

        <Route path="*" >Error Page</Route>

      </Routes>

      <Footer />
    </>
  )
}

export default App
