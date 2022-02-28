import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Products from '../components/Product/Products'

const Home = () => {
  return (
      <div>
        <Announcement />
        <Navbar />
        <Products />
        <Newsletter />
        <Footer />
      </div>
    
  )
}

export default Home