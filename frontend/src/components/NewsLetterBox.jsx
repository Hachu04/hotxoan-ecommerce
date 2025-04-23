import React from 'react'
import { motion as M } from 'framer-motion';

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <M.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className='text-center'
    >
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Subscribe to our newsletter and get the latest updates on new arrivals, special offers, and exclusive discounts.
        </p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter you email' required />
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>

        </form>
    </M.div>
  )
}

export default NewsLetterBox