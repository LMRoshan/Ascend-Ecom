import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import { allCrads } from '../Data/CategoryData'

const Category = () => {
  return (
    <div>
      <Navbar />
      <Categories cards={allCrads} buttonVisibility={false}/>
      <Footer/>
    </div>
  )
}

export default Category
