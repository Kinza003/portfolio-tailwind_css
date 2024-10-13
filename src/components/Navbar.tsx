import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='bg-pink-400 container pt-8'>
      <div className='flex justify-between items-center '>
        <div className='text-xl font-medium'>Kinza</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex '>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#home">Home</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#about">About</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#projects">Projects</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#skills">Skills</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#contact">Contact</a></li>
        </ul>
        <MdOutlineMenu className='md:hidden' size={30} />
      </div>
    </div>
  )
}

export default Navbar
