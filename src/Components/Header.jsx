import React from 'react'
import Logo from '../assets/logo.svg'
import { HiMiniMagnifyingGlassCircle, HiMoon } from "react-icons/hi2";

function Header() {
  return (
    <div className='flex items-center'>
        <img src={Logo} alt="Logo" width={60} />
        <div className='flex bg-slate-200 p-2 w-full
        mx-5 rounded-full items-center'>
            <HiMiniMagnifyingGlassCircle />
            <input type="text" placeholder="Search games..." className='px-5 bg-transparent outline-none'/>
        </div>

        <div>
            <HiMoon/>
        </div>

    </div>
  )
}

export default Header