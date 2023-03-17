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


  const firebase = getFirestore(app)
  const [mainData, setMainData] = useState({
    irst_name: "maruf",
    last_name: "Subonro",
    age: 19
  })

  const writeData = async () => {
    addDoc(collection(firebase, 'strafs'), mainData)
  }
  const num = [0, 1, 2, 3, 4]
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
              variants={container}
              initial="hidden"
              animate="visible"
              className="w-full pt-36 pb-14 lg:py-[1000px] lg:pb-0 lg:w-auto z-10 flex lg:absolute flex-col justify-center items-center lg:items-start">
              <motion.h1 variants={item} className='text-[45px] block lg:text-[100px] font-bold'>
                Web Designer <br /> & Developer
              </motion.h1>
              <motion.p variants={item} className='text-[26px] my-0 lg:text-[36px]'>Rajshahi, Bangladesh</motion.p>
              <motion.span variants={item} className="py-5 lg:my-4" ><Link href={'/'} className='py-3 px-7 bg-black text-white my-4 hover:bg-transparent hover:text-black hover:border-x-2 hover:border-black transition' >Hire me</Link></motion.span>
            </motion.div>
          </div>
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-40 bg-blue-500 overflow-hidden'></div>
          </div>
        </div>
      </div>
    </>
  )
}
