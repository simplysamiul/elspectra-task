import React from 'react'
import CatList from './CatsList'
import Header from './Header/Header'
import Sidebar from './Header/Sidebar'

const HomeRoot = () => {
  return (
    <>
      {/* cats name */}
      <Header />
      {/* cats list */}
      <CatList />
    </>
  )
}

export default HomeRoot