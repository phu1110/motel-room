import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-full h-1100 flex flex-col items-center '>
      <Header/>
      <div className='w-1100 flex flex-col items-center justify-start mt-3'>
        <Outlet/>
      </div>
    </div>
  )
}
export default Home