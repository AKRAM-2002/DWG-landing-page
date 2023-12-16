import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white grid lg-grid-cols-3 px-4'>
        <div className='max-w-[1240px] mx-auto lg-grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Subscribe to our Newsletter</h1>
                <p className=''>Get the latest news and updates from DWG.</p>
            </div>

            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your email address'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 md:ml-2 text-black'>Subscribe</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
