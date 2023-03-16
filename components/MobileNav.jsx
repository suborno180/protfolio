import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
import Link from 'next/link'

const MobileNav = () => {
    return (
        <>
            <nav className='lg:hidden'>
                <button className="text-3xl cursor-pointer" ><CgMenuRight /></button>
                <div className='bg-white shadow-2xl absolute top-0 right-0 w-full max-w-xs h-screen' >
                    <button className='text-3xl mx-4 my-5'><IoMdClose /></button>
                    <ul className='flex flex-col justify-center items-center h-screen uppercase text-2xl'>
                        <li className='py-3'><Link href={'/'} >home</Link></li>
                        <li className='py-3'><Link href={'/about'} >about</Link></li>
                        <li className='py-3'><Link href={'/contact'} >contact</Link></li>
                        <li className='py-3'><Link href={'/survices'} >Survices</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default MobileNav
