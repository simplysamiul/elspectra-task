import React from 'react'
import CatList from './CatsList'
import Sidebar from './Header/Sidebar'

const HomeRoot = () => {
  return (
    <>
      {/* cats name */}
      <Sidebar />
      {/* cats list */}
      <CatList />
    </>
  )
}

export default HomeRoot