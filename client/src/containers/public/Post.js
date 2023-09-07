import React from 'react'
import InfoUser from './InfoUser'
import { Outlet } from 'react-router-dom';
import '../../assets/css/style.css';
const Post = () => {
  return (
    <div className='w-full'>
      <div className='flex '>
      <div className=''><InfoUser/></div>
      <div className='w-full'><Outlet/></div>
      </div>
    </div>
  )
}

export default Post