import { useState } from 'react'
import Header from './components/header'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import AccommodationPage from './pages/AccommodationPage'
import SignInSignUp from './pages/SignIn-SignUp'

function App() {
  return (
    <>
    <Routes>
      <Route path='/sign-in' element={<SignInSignUp />} />
      <Route path='/' element={<Homepage />} />
      <Route path='/accommodation/:id' element={<AccommodationPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
