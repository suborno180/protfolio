import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const card = ({img, title}) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileInView={{ scale: 1 }}
        className="card relative shadow-xl shadow-blue-500/10 w-80 h-full overflow-hidden rounded-xl"
      >
        <div className="bg-white/50 p-7 top-0 left-0 w-full h-full">
          <div className="flex flex-col items-center text-center">
            <Image
              src={img}
              alt="hero image"
              width={70}
              height={70}
              className="h-full"
            />
            <h1 className="my-5 font-bold">{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              mollitia iusto
            </p>
            <Link
              href={"/contact"}
              className="my-10 btn bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-yellow-500/80 hover:scale-105 transition-all cursor-pointer p-2 px-6 rounded-lg text-white"
            >
              Learn more
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default card;
