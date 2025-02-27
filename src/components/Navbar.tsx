import React from 'react'
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='bg-pink-400 pt-6 fixed right-0 left-0 z-10'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium pl-5'>Kinza</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex '>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="/">Home</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#about">About</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#projects">Projects</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold'><a href="#skills">Skills</a></li>
           <li className='menuLink hover:text-blue-600 hover:font-semibold pr-5'><a href="#contact">Contact</a></li>
        </ul>

        <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <MdOutlineClose size={30}/> :
          <MdOutlineMenu size={30}/>
          }
        </div>
      </div>

       {isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'>
              <a href="/" onClick={toggleMenu}>Home</a>
              </li>
            <li className='menuLink'>
              <a href="#about" onClick={toggleMenu}>About</a>
              </li>
            <li className='menuLink'>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
              </li>
            <li className='menuLink'>
              <a href="#skills" onClick={toggleMenu}>Skills</a>
              </li>
            <li className='menuLink'>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
              </li>
          </ul>
       )
       }

    </div>
  )
}

export default Navbar
