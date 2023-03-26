import React from 'react'
import Link from 'next/link'
import { HiArrowRight } from "react-icons/hi";

const Clients = () => {
    return (
        <>
            <div className="container m-auto">
                <div className='relative p-5 lg:py-16 lg:flex lg:justify-between lg:h-screen lg:overflow-y-auto scrollbar-hide'>
                    <div className='lg:relative'>
                        <div className="textPart mb-14 lg:sticky lg:top-0">
                            {/* <h1 className='text-3xl font-bold lg:text-7xl'>What our clints say</h1> */}
                            <div className='p-5'>
                                <span className='text-6xl font-bold text-gray-300 lg:text-8xl'>What our clints say</span>
                                <h2 className='text-3xl -mt-6 lg:-mt-10 text-black lg:text-5xl'>What our clints say</h2>
                            </div>
                            <div className='flex items-center font-bold my-3 text-[20px]'><HiArrowRight /><Link href={'/'} className="ml-2" >View all reviews</Link> </div>
                        </div>
                    </div>
                    <div className="commentSec lg:w-[90%]">
                        <div className='card text-center lg:text-left my-5 lg:flex'>
                            <div className="w-28 h-28 lg:w-[450px] lg:h-48 lg:rounded-none bg-gray-600 rounded-[50%] mx-auto"></div>
                            <div className='h-[100%] lg:ml-10'>
                                <div className="ratingSec">
                                    <span className='font-bold text-lg'>5.0</span>
                                </div>
                                <div className="comment">
                                    <p className='font-bold lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum necessitatibus aliquam hic minima amet animi quos repellendus ex quod.</p>
                                </div>
                                <div className="case_name flex items-center my-3 justify-center lg:justify-start lg:text-[18px]">
                                    <strong>Steve,</strong> <p>Co-Founder at at Paperplanes</p>
                                </div>
                            </div>
                        </div>
                        <div className='card text-center lg:text-left my-5 lg:flex'>
                            <div className="w-28 h-28 lg:w-[450px] lg:h-48 lg:rounded-none bg-gray-600 rounded-[50%] mx-auto"></div>
                            <div className='h-[100%] lg:ml-10'>
                                <div className="ratingSec">
                                    <span className='font-bold text-lg'>5.0</span>
                                </div>
                                <div className="comment">
                                    <p className='font-bold lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum necessitatibus aliquam hic minima amet animi quos repellendus ex quod.</p>
                                </div>
                                <div className="case_name flex items-center my-3 justify-center lg:justify-start lg:text-[18px]">
                                    <strong>Steve,</strong> <p>Co-Founder at at Paperplanes</p>
                                </div>
                            </div>
                        </div>
                        <div className='card text-center lg:text-left my-5 lg:flex'>
                            <div className="w-28 h-28 lg:w-[450px] lg:h-48 lg:rounded-none bg-gray-600 rounded-[50%] mx-auto"></div>
                            <div className='h-[100%] lg:ml-10'>
                                <div className="ratingSec">
                                    <span className='font-bold text-lg'>5.0</span>
                                </div>
                                <div className="comment">
                                    <p className='font-bold lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum necessitatibus aliquam hic minima amet animi quos repellendus ex quod.</p>
                                </div>
                                <div className="case_name flex items-center my-3 justify-center lg:justify-start lg:text-[18px]">
                                    <strong>Steve,</strong> <p>Co-Founder at at Paperplanes</p>
                                </div>
                            </div>
                        </div>
                        <div className='card text-center lg:text-left my-5 lg:flex'>
                            <div className="w-28 h-28 lg:w-[450px] lg:h-48 lg:rounded-none bg-gray-600 rounded-[50%] mx-auto"></div>
                            <div className='h-[100%] lg:ml-10'>
                                <div className="ratingSec">
                                    <span className='font-bold text-lg'>5.0</span>
                                </div>
                                <div className="comment">
                                    <p className='font-bold lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum necessitatibus aliquam hic minima amet animi quos repellendus ex quod.</p>
                                </div>
                                <div className="case_name flex items-center my-3 justify-center lg:justify-start lg:text-[18px]">
                                    <strong>Steve,</strong> <p>Co-Founder at at Paperplanes</p>
                                </div>
                            </div>
                        </div>
                        <div className='card text-center lg:text-left my-5 lg:flex'>
                            <div className="w-28 h-28 lg:w-[450px] lg:h-48 lg:rounded-none bg-gray-600 rounded-[50%] mx-auto"></div>
                            <div className='h-[100%] lg:ml-10'>
                                <div className="ratingSec">
                                    <span className='font-bold text-lg'>5.0</span>
                                </div>
                                <div className="comment">
                                    <p className='font-bold lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum necessitatibus aliquam hic minima amet animi quos repellendus ex quod.</p>
                                </div>
                                <div className="case_name flex items-center my-3 justify-center lg:justify-start lg:text-[18px]">
                                    <strong>Steve,</strong> <p>Co-Founder at at Paperplanes</p>
                                </div>
                            </div>
                        </div>
                        <div className='card text-center lg:text-left my-5 lg:flex'>
                            <div className="w-28 h-28 lg:w-[450px] lg:h-48 lg:rounded-none bg-gray-600 rounded-[50%] mx-auto"></div>
                            <div className='h-[100%] lg:ml-10'>
                                <div className="ratingSec">
                                    <span className='font-bold text-lg'>5.0</span>
                                </div>
                                <div className="comment">
                                    <p className='font-bold lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum necessitatibus aliquam hic minima amet animi quos repellendus ex quod.</p>
                                </div>
                                <div className="case_name flex items-center my-3 justify-center lg:justify-start lg:text-[18px]">
                                    <strong>Steve,</strong> <p>Co-Founder at at Paperplanes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients 
