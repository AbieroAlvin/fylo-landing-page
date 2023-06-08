import React from 'react'
import illustration2 from '../images/illustration-2.svg'
import arrow from '../images/icon-arrow.svg'
import quotes from '../images/icon-quotes.svg'
import avatar from '../images/avatar-testimonial.jpg'

const BodySection = () => {
  return (
    <div className='mt-24 md:mt-36 flex flex-col-reverse md:flex-row  bg-[var(--color-L-grayish-blue)]'>
        <div className='flex flex-col items-center justify-center px-8 py-8 md:mr-12'>
            <div className='flex flex-col items-center justify-center text-center md:text-left mt-8 gap-4'>
                <h1 className='text-2xl font-semibold lg:text-[2rem]'>Stay productive, wherever you are</h1>
                <p >Never let location be an issue when accessing your files. Fylo has you 
                 covered for all of your file storage needs.
               </p>
               {/* <br /> */}
               <p >Securely share files and folders with friends, family and colleagues for 
                live collaboration. No email attachments required!
               </p>
               <span className='flex border-b-2 border-b-[var(--color-mod-cyan)] gap-2 text-[var(--color-mod-cyan)] md:translate-x-[-11rem] cursor-pointer hover:opacity-70'>See how Fylo works <img src={arrow} alt="/" /></span>
               <div className='w-[350px] h-[230px] shadow-xl bg-white p-6 rounded-sm md:translate-x-[-6rem] mt-6'>
                  <img src={quotes} alt="/" className='h-[20px]'/>
                  <p className='text-left mt-2'>  Fylo has improved our team productivity by an order of magnitude. Since 
                  making the switch our team has become a well-oiled collaboration machine.
                 </p>
                 <div className='flex mt-4 gap-4'>
                    <img src={avatar} alt="/" className='h-[40px] rounded-full'/>
                    <div className='text-left'>
                        <h1 className='font-semibold'>Kyle Burton</h1>
                        <p className='text-sm'>Founder & CEO, Huddle</p>
                    </div>
                 </div>
               </div>
               
            </div>
        </div>
        <div className='md:pl-8 p-8'>
            <img src={illustration2} alt="/" />
        </div>
    </div>
  )
}

export default BodySection