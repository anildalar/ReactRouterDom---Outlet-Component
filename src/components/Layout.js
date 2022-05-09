import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
       <>
            <Header />
            <Aside />
            <Outlet />
            <Footer />
       </>
  )
}
