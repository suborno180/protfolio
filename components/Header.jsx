import React from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'
import SocileMediaLinks from '../components/SocileMediaLinks'
import { motion } from 'framer-motion'

const Header = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const List = [
    {
      name: "home",
      loc: "/"
    },
    {
      name: "about",
      loc: "/about"
    },
    {
      name: "contact",
      loc: "/contact"
    },
    {
      name: "survices",
      loc: "/survices"
    },
  ]
  return (
    <>
      <header className='flex fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] items-center'>
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between' >
          <Link href={'/'} className="text-[25px] font-semibold" >Logo</Link>
          <nav>
            <ul
              variants={container}
              initial="hidden"
              animate="visible"
              className='hidden lg:flex uppercase'>
              {List.map(e => <li key={e} variants={item} className='px-3 hover:text-black'><Link href={`/${e.loc}`} >{e.name}</Link></li>)}
            </ul>
          </nav>
        </div>
        <SocileMediaLinks/>
        <MobileNav />
      </header>
    </>
  )
}

export default Header
