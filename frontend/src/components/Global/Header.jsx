import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../../logo.svg';

export const Header = () => {
  return (
      <nav className="flex justify-between bg-[#d32f2f] text-white md:px-60">
        <div className="px-5 xl:px-12 py-6 flex w-full justify-between">
          <NavLink className="text-3xl w-1/2 md:w-2/6 font-bold font-heading flex h-13" to="/">
            <img className="h-12 pt-1 mr-1" src={Logo} alt="logo" />
            <div className="border-4 py-1 border-white">Catch the Pokemon!</div>
          </NavLink>
          <ul className="flex flex-col md:w-4/6 md:flex-row md:space-x-12 pt-3 justify-end">
            <li><NavLink className="hover:text-gray-200 text-[20px] tracking-widest" to="/">Explore</NavLink></li>
            <li><NavLink className="hover:text-gray-200 text-[20px] tracking-widest" to="/mine">My Pokemon</NavLink></li>
          </ul>
        </div>
      </nav>
      
  )
}

