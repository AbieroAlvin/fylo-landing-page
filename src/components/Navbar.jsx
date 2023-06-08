import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <div className='mx-auto p-8'>
      <nav className='flex justify-between'>
       <img src={logo} alt="/" className='h-[35px] w-[90px]'/>
        <ul className='flex justify-between gap-5 items-center'>
            <li className='text-[var( --color-Light-Gray)] opacity-80 cursor-pointer'>Features</li>
            <li className='text-[var( --color-Light-Gray)] opacity-80 cursor-pointer'>Team</li>
            <li className='text-[var( --color-Light-Gray)] opacity-80 cursor-pointer'>Sign in</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar