import React from 'react'

const Header = () => {
  return (
    <>
      <div className='h-16 bg-purple-600'></div>
      <div className='bg-white h-11 shadow-lg'>
        {/* Header Part */}
        <div className='container mx-auto ml:mx-4'>
          <div className="py-1 font-thin text-[#000] float-left text-2xl cursor-pointer">
            LOGO
          </div>
          <nav>
            <ul className='flex float-right text-[#6d6c6c] transition-all'>
              <li className='cursor-pointer hover:text-[#000] px-3 py-2 font-bold'>Home</li>
              <li className='cursor-pointer hover:text-[#000] px-3 py-2'>About</li>
              <li className='cursor-pointer hover:text-[#000] px-3 py-2'>Contact</li>
              <li className='cursor-pointer hover:text-[#000] px-3 py-2'>Survices</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
