import React from 'react'
import Navbar from '../componenets/Shop/Navbar.js'
import Shopping from '../componenets/Shop/Shopping'
import Footer from '../componenets/shared/Footer'
import TopBarStart from '../componenets/shared/topbar_start'

function Main() {
  return (
    <div>
      <TopBarStart />
      <Navbar />
      <Shopping />
      <Footer />
    </div>
  )
}

export default Main
