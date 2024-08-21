import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="text-white text-2xl flex flex-shrink-0 items-center ml-10">
            <h2 className='mx-2 w-10'>Rd</h2>
        </div>
        <div className="text-white m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagramSquare  />
        </div>
      </nav>
    </>
  )
}

export default Navbar
