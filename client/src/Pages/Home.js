import React from 'react'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Product'
import TopProducts from '../components/TopProducts/TopProducts'
import Banner from '../components/Banner/Banner'
import Electronic_Product from '../components/Products/Electroinc_Product'
import MaleProduct from '../components/Products/MaleProduct'

const Home = () => {
  return (
    <>
    <Hero/>
    <Products/>
    <MaleProduct/>
    <Electronic_Product/>
    <TopProducts/>
    <Banner/>
    </>
  )
}

export default Home
