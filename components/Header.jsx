import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import SocileMediaLinks from "../components/SocileMediaLinks";
import { motion } from "framer-motion";

const Header = () => {
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
  const List = [
    {
      name: "home",
      loc: "/",
    },
    {
      name: "about",
      loc: "/about",
    },
    {
      name: "survices",
      loc: "/survices",
    },
  ];
  return (
    <>
      <header className="flex fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
            <Link
              href={"/"}
              className="text-[25px] font-semibold flex items-center"
            >
              <img src="/logo.svg" alt="logo" className="h-10 mr-1" />
            </Link>
            <nav>
              <ul
                variants={container}
                initial="hidden"
                animate="visible"
                className="hidden lg:flex uppercase items-center"
              >
                {List.map((e) => (
                  <li
                    key={e.id}
                    variants={item}
                    className="px-3 hover:text-black"
                  >
                    <Link href={`/${e.loc}`}>{e.name}</Link>
                  </li>
                ))}
                <li className="btn bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-yellow-500/80 hover:scale-105 transition-all cursor-pointer p-2 px-6 rounded-full text-white ml-14" >
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <SocileMediaLinks /> */}
        <MobileNav />
      </header>
    </>
  );
};

export default Header;
