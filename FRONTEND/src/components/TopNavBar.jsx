import React from 'react'
import Logo from '../assets/JobTrackr_logo-1 remove.png'
import { motion } from 'framer-motion'

const TopNavBar = () => {
  return (
    <motion.nav className="flex items-center justify-center bg-transparent p-4 px-10"
    initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <ul className="flex items-center space-x-20 font-body text-2xl font-bold">
        <li><img src={Logo} alt="Logo" className='h-10 w-auto' /></li>
        <li><a href="#" className="text-white hover:text-gray-300 text-xl">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 text-xl">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 text-xl">Services</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 text-xl">Contact</a></li>
        <li><button className="bg-[#d9d9d933] hover:bg-[#B0B0B0] text-white py-1 px-2 rounded-2xl text-xl">Sign In</button></li>
      </ul>
    </motion.nav>
  )
}

export default TopNavBar