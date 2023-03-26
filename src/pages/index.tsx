import Head from 'next/head'
import Header from '../../components/Header'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion';
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { app } from '../../components/firebase'
import { useState } from 'react';
import Iframe from 'react-iframe';
import { HiArrowRight } from "react-icons/hi";
import Clients from '../../components/Clients '
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
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {/* Slider Part */}
      <div className="section">
        <div className="container mx-auto">
          <motion.div variants={container} initial="hidden" animate="visible" className='lg:flex lg:justify-between'>
            <div className='pt-32  flex flex-col justify-center items-center lg:items-start lg:w-[60%]'>
              <motion.h1 variants={item} className='text-[45px] font-bold lg:text-[80px]'>Web Designer <br /> & Developer</motion.h1>
              <motion.p variants={item}  className='text-[25px] my-5'>Rajshahi, Bangladesh</motion.p>
              {/* <motion.span variants={item} className="py-5 lg:my-4" ><Link href={'/'} className='py-3 px-7 bg-black text-white my-4 hover:bg-transparent hover:text-black hover:border-x-2 hover:border-black transition' >Hire me</Link></motion.span> */}
          <motion.span variants={item} className="py-5 lg:my-4 flex items-center text-[18px] font-bold" ><HiArrowRight /><Link href={'/'} className="ml-2" >View all reviews</Link> </motion.span>
            </div>
            <div className='w-[100%] lg:h-screen mt-10 lg:my-0 flex justify-center lg:justify-end'>
              <div className='w-[100%] h-96 lg:h-screen bg-purple-500'></div>
            </div>
          </motion.div>
          
        </div>
      </div>
      <div className="section">
        <div className='h-96 bg-gray-900 lg:py-8'>
          <div className="container m-auto">
          <div className='p-5'>
            <span className='text-6xl font-bold text-gray-700 lg:text-8xl'>About</span>
            <h2 className='text-3xl -mt-6 lg:-mt-10 text-gray-50 lg:text-5xl'>About</h2>
          </div>
          <div className='text-3xl p-4 text-gray-500 lg:text-5xl'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, laborum. Quae quam sunt eaque voluptatum!</p>
          </div>
          </div>
        </div>
      </div>
      <div className="section">
        <Clients />
      </div>
    </>
  )
}
