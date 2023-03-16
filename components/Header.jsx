import React from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'
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
  const List = ['home', 'about', 'contact', 'survices']
  return (
    <>
      <header className='bg-pink-200 flex fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] items-center'>
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between' >
          <Link href={'/'} className="text-[25px] font-semibold" >Logo</Link>
          <nav>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className='hidden lg:flex uppercase'>
              {List.map(e => <motion.li key={e} variants={item} className='px-3 hover:text-black'><Link href={'/'} >{e}</Link></motion.li>)}
            </motion.ul>
          </nav>
        </div>
        <MobileNav />
      </header>
    </>
  )
}

export default Header
