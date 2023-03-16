import React from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <>
      <header className='bg-pink-200 flex fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] items-center'>
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between' >
          <Link href={'/'} className="text-[25px] font-semibold" >Logo</Link>
          <nav className='hidden lg:flex'>
              <Link className='hover:text-black px-5 text-[#222222] hover:text-primary transition' href={'/'}>Home</Link>
              <Link className='hover:text-black px-5 text-[#696c6d] hover:text-primary transition' href={'/about'}>About</Link>
              <Link className='hover:text-black px-5 text-[#696c6d] hover:text-primary transition' href={'/contsct'}>contact</Link>
          </nav>
        </div>
          <MobileNav/>
      </header>
    </>
  )
}

export default Header
