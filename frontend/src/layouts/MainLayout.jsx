import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import About  from '../components/About'

const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <About />
    </>
  )
}

export default MainLayout