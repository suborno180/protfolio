import Head from 'next/head'
import Header from '../../components/Header'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion';
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { app } from '../../components/firebase'
import { useState } from 'react';
import Iframe from 'react-iframe';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const motionEffect = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    type: "spring",
    stiffness: 800,
    damping: 30,
  }


  const firebase = getFirestore(app)
  const [mainData, setMainData] = useState({
    irst_name: "maruf",
    last_name: "Subonro",
    age: 19
  })

  const writeData = async () => {
    addDoc(collection(firebase, 'strafs'), mainData)
  }
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
      <div className="section">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center">
            <motion.div
              variants={motionEffect}
              initial="hidden"
              animate="visible"
              className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start lg:top-[35%]">
              <motion.h1
                className='text-[35px] block lg:text-[50px]'>
                Web Designer <br /> & Developer
              </motion.h1>
              <p className='text-[20px] my-2 lg:text-[20px]'>Rajshahi, Bangladesh</p>
              <Link href={'/'} className='py-2 px-4 bg-black text-white my-4 hover:bg-transparent hover:text-black hover:border-x-2 hover:border-black transition' >Hire me</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
