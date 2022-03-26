import React, { useState, useEffect } from 'react'
import { commerce } from '../lib/commerce'

import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Product/Products'

const Home = () => {

  const [products, setProducts] = useState([]); 

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
      <div>
        <Announcement />
        <Navbar />
        <Products products={products} />
        <Footer />
      </div>
    
  )
}

export default Home