import React from 'react'
import homeBackgroundimage from '../assets/homebackgroundimage.png'


const firstPage = () => {
  return (
    <>
      
      <img src={homeBackgroundimage} alt="Logo"  className='h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden'/>
    </>
  )
}

export default firstPage;
