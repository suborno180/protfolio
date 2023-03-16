import React from 'react'
import { ImFacebook, ImInstagram, ImYoutube } from 'react-icons/im'

const SocileMediaLinks = () => {
    return (
        <>
            <div className='hidden xl:flex ml-24'>
                <ul className='flex gap-x-4'>
                    <li className='hover:text-[#5c5b5b]'><a href="https://www.facebook.com/marufsuborno180" target="_blank" rel="noopener noreferrer"><ImFacebook /></a></li>
                    <li className='hover:text-[#5c5b5b]'><a href="http://" target="_blank" rel="noopener noreferrer"><ImInstagram /></a></li>
                    <li className='hover:text-[#5c5b5b]'><a href="http://" target="_blank" rel="noopener noreferrer"><ImYoutube /></a></li>
                </ul>
            </div>
        </>
    )
}

export default SocileMediaLinks
