import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MobileNav = () => {

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
      const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <nav className='lg:hidden'>
                <button className="text-3xl cursor-pointer" onClick={()=>setOpenMenu(true)} ><CgMenuRight /></button>
                <motion.div 
                variants={container}
                initial={{x: "100%"}}
                animate={openMenu ? {x: 0} : ""}
                className='bg-white shadow-2xl absolute top-0 right-0 w-full max-w-xs h-screen' >
                    <button className='text-3xl mx-4 my-5' onClick={()=>setOpenMenu(false)}><IoMdClose /></button>
                    <motion.ul 
                    variants={container}
                    initial="hidden"
                    animate={openMenu ? "visible" : ""}
                    className='flex flex-col justify-center items-center h-screen uppercase text-2xl font-bold text-[#5f5f5f]'>
                        {List.map(e=><motion.li key={e} variants={item} className='py-3 hover:text-black'><Link href={`/${e}`} >{e}</Link></motion.li>)}
                    </motion.ul>
                </motion.div>
            </nav>
        </>
    )
}

export default MobileNav
