import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="absolute bottom-0 w-full flex items-center justify-between text-white text-sm px-4 py-4 pr-60 ">
        {/* Left side*/}
        <div div className='flex items-center text-[#D9D9D9] text-sm whitespace-nowrap'>
      <p className="text-sm">&copy; c 2026 IT Solution pvt | Powered by Job trackr</p>
      </div>
        {/* Right side */}
        <div className='flex items-center gap-2 text-[#D9D9D9] text-sm'>
          <a href="#" className="hover:text-white">Legal Link</a>
        <span className="text-gray-500">|</span>
        <a href="#" className="hover:text-white">Privacy</a>
        <span className="text-gray-500">|</span>
        <a href="#" className="hover:text-white">Contact Us</a>  
        </div>
    </footer>
    </>
  )
}

export default Footer