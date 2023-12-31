// import React from 'react'
import { useState } from "react"
import { close, greenpearls, menu} from '../assets'
import { navLinks } from "../constants"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-8 justify-between items-center navbar">
      <img src={greenpearls} alt='quantumquid' className="w-[300px] h-[150px] z-[1]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        { navLinks.map((nav, index) => ( 
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
          ))}
      </ul>
      
{/* list for mobile devices */}
      <div className="sm:hidden flex flex-1
      justify-end items-center">
        <img 
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px]
        object-contain"
        // keeps the State up to date
        onClick={() => setToggle((prev) => !prev)}
        />
{/* opens the mobile menu */}
        <div
        className={`${toggle ? "flex" : "hidden" } p-6
        bg-black-gradient absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

{/* new menu */}
      <ul className="list-none flex flex-col justify-end items-center flex-1">
        { navLinks.map((nav, index) => ( 
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
        >
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
          ))}
      </ul>
        </div>
      </div>
 
    </nav >
  )
}

export default Navbar
