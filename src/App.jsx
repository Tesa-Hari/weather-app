import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hari and Tesa</h1>
      <Routes >
        <Route path="/">HomePage</Route>
        <Route path="/about">AboutPage</Route>
        <Route path="/weatherdetails/:id">WeatherDetailsPage</Route>
        <Route path="*">Error Page</Route>

      </Routes>
    </>
  )
}

export default App
