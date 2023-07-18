import { addDoc, collection, getFirestore } from "firebase/firestore";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/cards/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const [mainData, setMainData] = useState({
    irst_name: "maruf",
    last_name: "Subonro",
    age: 19,
  });

  const num = [0, 1, 2, 3, 4];
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
        <div className="relative  w-full">
          <div className="absolute top-[25%] -left-32 rounded-full  w-[450px] h-[450px] bg-[#faa1df]"></div>
          <div className="absolute top-[15%] right-32 rounded-full  w-[350px] h-[350px] bg-[#ba95f6]"></div>
          <div className="absolute bottom-[15%] left-[40rem] rounded-full  w-[450px] h-[450px] bg-[#f6ddbf]"></div>
          <div className="backdrop-blur-xl bg-white/80 bsolute top-0 left-0 w-full h-full">
            {/* main content */}
            <div className="container mx-auto">
              <div className="md:h-[100vh] flex flex-col items-center justify-center">
                <div className="md:flex w-full">
                  <div className="w-full  md:h-full flex flex-col justify-center py-24 mt-10 px-5 md:px-0">
                    <motion.h1
                      initial={{ translateX: -250 }}
                      transition={{ duration: 0.5 }}
                      whileInView={{ translateX: 0 }}
                      className="text-6xl md:text-7xl font-bold"
                    >
                      Hy! {`I'm`} <br />{" "}
                      <span className="text-orange-500">Maruf Suborno</span>
                    </motion.h1>
                    <motion.p
                      initial={{ translateX: -250 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileInView={{ translateX: 0 }}
                      className="w-[80%] my-5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel labore quia incidunt! Molestiae nam tempora maiores.
                      Distinctio earum iusto aspernatur!
                    </motion.p>
                    <motion.div
                      initial={{ scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileInView={{ scale: 1 }}
                    >
                      <Link
                        href={"/contact"}
                        className="btn bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-yellow-500/80 hover:scale-105 transition-all cursor-pointer p-2 px-6 rounded-full text-white"
                      >
                        Hire me
                      </Link>
                    </motion.div>
                  </div>
                  <div className="relative w-full md:h-full pt-10 px-5 md:px-0">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileInView={{ scale: 1 }}
                    >
                      {/* hero image */}
                      <Image
                        src="/hero-image.png"
                        alt="hero image"
                        width={700}
                        height={1000}
                        className="h-full"
                      />
                      {/* emoje */}
                      <motion.div
                        initial={{ scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileInView={{ scale: 1 }}
                        className="absolute top-10"
                      >
                        <Image
                          src="/3d-rendering-smile-emoji-side-view-3d-emoji-icon-png.webp"
                          alt="hero image"
                          width={90}
                          height={90}
                        />
                      </motion.div>
                      {/* emoje */}
                      <motion.div
                        initial={{ scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileInView={{ scale: 1 }}
                        className="absolute bottom-10 md:-bottom-10 right-0 md:right-20"
                      >
                        <Image
                          src="/star.png"
                          alt="hero image"
                          width={100}
                          height={100}
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ translateX: 250 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileInView={{ translateX: 0 }}
                      className="absolute -top-[10%] md:-top-[2%] md:-right-10 lg:top-[0%] xl:top-[20%] right-0"
                    >
                      <div className="card flex items-center bg-white shadow-xl scale-75 hover:scale-100 transition-all cursor-pointer p-5 rounded-xl">
                        <div className="w-16 h-16 grid place-content-center rounded-full bg-pink-200">
                          <Image
                            src="/3d-icon-trophy-with-gold-badge-free-png.webp"
                            alt="ui"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex flex-col items-start ml-5">
                          <strong>UI/UX</strong>
                          <p className="w-[200px]">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ translateX: -250 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileInView={{ translateX: 0 }}
                      className="absolute -bottom-[0%] md:-bottom-[2%] md:-left-16 lg:bottom-[0%] xl:bottom-[10%] left-0"
                    >
                      <div className="card flex items-center bg-white shadow-xl scale-75 hover:scale-100 transition-all cursor-pointer p-5 rounded-xl">
                        <div className="w-16 h-16 grid place-content-center rounded-full bg-pink-200">
                          <Image
                            src="/badge-6470076-5431315.webp"
                            alt="badge"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="flex flex-col items-start ml-5">
                          <strong>Best Design</strong>
                          <p className="w-[200px]">Awardr</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="relative  w-ful">
          <div className="absolute top-[25%] -left-32 rounded-full  w-[450px] h-[450px] bg-[#faa1df]"></div>
          <div className="absolute top-[15%] right-32 rounded-full  w-[350px] h-[350px] bg-[#ba95f6]"></div>
          <div className="absolute bottom-[15%] left-[40rem] rounded-full  w-[450px] h-[450px] bg-[#f6ddbf]"></div>
          <div className="backdrop-blur-xl bg-white/70 bsolute top-0 left-0 w-full h-full">
            {/* main content */}
            <div className="container mx-auto">
              <div className="w-full  md:h-full flex flex-col justify-center py-20 mt-10 px-5 md:px-0">
                <motion.h1
                  initial={{ translateX: -250 }}
                  transition={{ duration: 0.5 }}
                  whileInView={{ translateX: 0 }}
                  className="text-6xl md:text-7xl font-bold"
                >
                  My awesome <br />{" "}
                  <span className="text-orange-500">services</span>
                </motion.h1>
                <motion.p
                  initial={{ translateX: -250 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileInView={{ translateX: 0 }}
                  className="max-w-[500px] my-5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  labore quia incidunt! Molestiae nam tempora maiores.
                  Distinctio earum iusto aspernatur!
                </motion.p>
                <motion.div
                  initial={{ scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileInView={{ scale: 1 }}
                >
                  <Link
                    href={"/contact"}
                    className="btn bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-yellow-500/80 hover:scale-105 transition-all cursor-pointer p-2 px-6 rounded-full text-white"
                  >
                    Hire me
                  </Link>
                </motion.div>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center justify-center pb-10">
                <div className="my-5 md:mx-5 md:-translate-x-40 md:-translate-y-20 xl:translate-x-10 ">
                  <Card
                    img={
                      "/3d-rendering-smile-emoji-side-view-3d-emoji-icon-png.webp"
                    }
                    title={"Design"}
                  />
                </div>
                <div className="my-5 md:mx-5 md:absolute -bottom-10 right-[10%]">
                  <Card
                    img={
                      "/3d-rendering-smile-emoji-side-view-3d-emoji-icon-png.webp"
                    }
                    title={"Design"}
                  />
                </div>
                <div className="my-5 lg:mx-5 md:absolute top-10 right-[10%]">
                  <Card
                    img={
                      "/3d-rendering-smile-emoji-side-view-3d-emoji-icon-png.webp"
                    }
                    title={"Design"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="relative  w-ful h-[100vh]">
          <div className="absolute top-[25%] -left-32 rounded-full  w-[450px] h-[450px] bg-[#a1ebfa]"></div>
          <div className="absolute top-[15%] right-32 rounded-full  w-[350px] h-[350px] bg-[#95f6b1]"></div>
          <div className="absolute bottom-[15%] left-[40rem] rounded-full  w-[450px] h-[450px] bg-[#f6c8bf]"></div>
          <div className="backdrop-blur-xl bg-white/80 bsolute top-0 left-0 w-full h-full">
            {/* main content */}
          </div>
        </div>
      </div>
      {/* 
       <Image
                    src="/3d-rendering-smile-emoji-side-view-3d-emoji-icon-png.webp"
                    alt="hero image"
                    width={70}
                    height={70}
                    className="h-full"
                  />
                  <h1 className="my-5">Design</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, mollitia iusto
                  </p>
                  <Link
                    href={"/contact"}
                    className="my-10 btn bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-yellow-500/80 hover:scale-105 transition-all cursor-pointer p-2 px-6 rounded-lg text-white"
                  >
                    Learn more
                  </Link>
      */}
    </>
  );
}
