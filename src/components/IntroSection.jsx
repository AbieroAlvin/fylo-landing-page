import React from 'react'
import illustartion1 from '../images/illustration-1.svg'

const IntroSection = () => {
  return (
    <div className='mt-8 flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col items-center justify-center p-8'>
             <div className='flex flex-col items-center justify-center text-center md:text-left mt-8 gap-4'>
             <h1 className='text-2xl font-semibold lg:text-3xl'>All your files in one secure location, accessible anywhere.</h1>
              <p> 
                Fylo stores your most important files in one secure location. 
                Access them wherever you need, share and collaborate with friends, 
                family, and co-workers.
              </p>
             </div>
             <form className='mt-4 w-full flex flex-col md:flex-row gap-4'>
                <input type="email" placeholder='Enter Your Email...' className='py-2 px-4 border-solid border-[var(--color-Light-Gray)] border-[2px] rounded-md focus:outline-[var(--color-b-blue)]' />
                <button className='bg-[var(--color-b-blue)] text-white rounded-md px-6 md:px-8 py-2 cursor-pointer hover:opacity-90'>Get Started</button>
             </form>
        </div>
        <div className='md:pl-8 p-8'>
            <img src={illustartion1} alt="" />
        </div>
    </div>
  )
}

export default IntroSection