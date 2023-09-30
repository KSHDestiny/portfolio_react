import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./assets/css/style.css"

const Layout = ({children}) => {
  return (
    <main>
        <Header/>
        <main id='content' className='min-vh-100'>{children}</main>
        <Footer/>
    </main>
  )
}

export default Layout