import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './footer/footer'


function Layout({ children }) {
  return (
    <div>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout