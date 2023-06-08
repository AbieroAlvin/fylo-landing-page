import React from 'react'

const Signup = () => {
  return (
    <div className='bg-[var(--color-d-blue)] text-[var(--color-L-grayish-blue)]'>
        <div className='px-8 py-10 grid sm:grid-cols-2 gap-4 md:gap-12 items-center text-center sm:text-left'>
        <div>
            <h1 className='text-2xl md:text-3xl'>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. 
              If you have any questions, our support team would be happy to help you.
            </p>
        </div>
        <form className='flex flex-col w-full gap-4'>
           <input type="email" placeholder='email@example.com' className='py-2 px-4 border-solid border-[var(--color-Light-Gray)] border-[2px] rounded-md focus:outline-[var(--color-b-blue)] w-full'/> 
           <button type="submit" className='bg-[var(--color-b-blue)] text-white rounded-md px-6 md:px-8 py-2 cursor-pointer hover:opacity-90 sm:w-1/2'>Get Started For Free</button>
        </form>
        </div>
    </div>
  )
}

export default Signup