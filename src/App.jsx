import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      {/* header */}
      <Header></Header>
      {/* main body */}
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>

    </div>
  )
}

export default App
