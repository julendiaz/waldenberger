import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Product/Products'

const Home = () => {
  return (
      <div>
        <Announcement />
        <Navbar />
        <Products />
        <Footer />
      </div>
    
  )
}

export default Home