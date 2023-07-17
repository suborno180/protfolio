import { addDoc, collection, getFirestore } from "firebase/firestore";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import { app } from "../../components/firebase";

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

  const firebase = getFirestore(app);
  const [mainData, setMainData] = useState({
    irst_name: "maruf",
    last_name: "Subonro",
    age: 19,
  });

  const writeData = async () => {
    addDoc(collection(firebase, "strafs"), mainData);
  };
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
        <div className="relative  w-ful h-[100vh]">
          <div className="absolute top-[25%] -left-32 rounded-full  w-[450px] h-[450px] bg-[#c8a1fa]"></div>
          <div className="absolute top-[15%] right-32 rounded-full  w-[350px] h-[350px] bg-[#95e9f6]"></div>
          <div className="absolute bottom-[15%] left-[40rem] rounded-full  w-[450px] h-[450px] bg-[#bfd9f6]"></div>
          <div className="backdrop-blur-xl bg-white/80 bsolute top-0 left-0 w-full h-full">
            {/* main content */}
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 h-[100vh]">
                <div className="px-5 md:px-0 w-full md:h-full flex flex-col items-start justify-center">
                  <motion.h1
                    initial={{ translateX: -250 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ translateX: 0 }}
                    className="text-6xl md:text-7xl font-bold"
                  >
                    Hy! Am <br />{" "}
                    <span className="text-orange-500">Maruf Subonro</span>
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
                <div className="relative px-5 md:px-0 w-full md:h-full flex flex-col items-start justify-center">
                  <motion.div
                  initial={{ scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileInView={{ scale: 1 }}
                  >
                  <Image src="/hero-image.png" alt="hero image" width={700} height={700} />
                  </motion.div>
                  <div className="absolute top-[20%] right-0">
                  <div className="card flex items-center bg-white shadow-xl scale-75 hover:scale-100 transition-all cursor-pointer p-5 rounded-lg">
                    <div className="w-10 h-10 grid place-content-center rounded-full bg-pink-200">UI</div>
                    <div className="flex flex-col items-start ml-5">
                      <strong>UI/UX</strong>
                      <p className="w-[250px]">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="relative  w-ful h-[100vh]">
          <div className="absolute top-[25%] -left-32 rounded-full  w-[450px] h-[450px] bg-[#faa1df]"></div>
          <div className="absolute top-[15%] right-32 rounded-full  w-[350px] h-[350px] bg-[#ba95f6]"></div>
          <div className="absolute bottom-[15%] left-[40rem] rounded-full  w-[450px] h-[450px] bg-[#f6ddbf]"></div>
          <div className="backdrop-blur-xl bg-white/80 bsolute top-0 left-0 w-full h-full">
            {/* main content */}
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
    </>
  );
}
