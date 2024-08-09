import React from 'react'
import Header from './Componenet/Header/Header.jsx'
import Footer from './Componenet/Footer/Footer.jsx'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout