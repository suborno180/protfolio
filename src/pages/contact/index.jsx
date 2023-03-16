import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../../../components/Header'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Slider Part */}
      <div className="slider h-96 bg-purple-600">
       
        <div className='container mx-10 pt-[100px]'>
          <h1 className='font-medium' >Protfolio</h1>
        <motion.h1 initial={{x: "100%"}} animate={{x: 0}} transition={{duration: 1}}>Contact Page</motion.h1>
        </div>
      </div>
    </>
  )
}

export default Contact
