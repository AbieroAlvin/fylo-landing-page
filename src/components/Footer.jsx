import React from 'react'
import logo from '../images/logo.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[var(--color-vd-blue)] text-white ' >
       <div className='px-8 py-12 '>

       <img src={logo} alt="" className='filter brightness-0 invert-[1] h-[40px] w-[100px]'/>

       <div id="content " className='grid grid-cols-1 sm:grid-cols-4 items-center'>
       <div className='flex flex-col gap-4 '>
          <div className='flex gap-2 mt-2'>
              <img src={phone} alt="/" className='h-[20px]'/>
              <p>Phone: +1-543-123-4567</p>
          </div>
          <div className='flex gap-2'>
              <img src={email} alt="/" className='h-[20px]'/>
              <p>example@fylo.com</p>
          </div>
          
       </div>
       <div className='mt-6 flex flex-col justify-center'>
          <p className='cursor-pointer hover:text-[var(--color-b-blue)]'>About Us</p>
          <p className='cursor-pointer hover:text-[var(--color-b-blue)]'>Jobs</p>
          <p className='cursor-pointer hover:text-[var(--color-b-blue)]'>Press</p>
          <p className='cursor-pointer hover:text-[var(--color-b-blue)]'>Blog</p>
       </div>
       <div className='mt-6'>
         <p className='cursor-pointer hover:text-[var(--color-b-blue)]'>Contact Us</p>
         <p className='cursor-pointer hover:text-[var(--color-b-blue)]'>Terms</p>
         <p className='cursor-pointer hover:text-[var(--color-b-blue)]'>Privacy</p>
       </div>
       <div className='flex gap-3 mt-3'>
         <FaFacebook size={27} className='border-[1px] border-white p-[4px] rounded-full hover:scale-105 cursor-pointer'/>
         <FaTwitter size={25} className='border-[1px] border-white p-[4px] rounded-full hover:scale-105 cursor-pointer'/>
         <FaInstagram size={25} className='border-[1px] border-white p-[4px] rounded-full hover:scale-105 cursor-pointer'/>
       </div>
       </div>
       
       
       </div>
    </div>
  )
}

export default Footer