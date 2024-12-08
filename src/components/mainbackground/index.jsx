import React from 'react'
import Image from 'next/image'
import TypedText from './TypedText'

const MainBackground = () => {
  return (
    <section className="relative w-full h-screen" id='home'>
          <Image
            src="/asset/image/image_background.jpg"
            alt="background"
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start mx-7">
            <div className=''>
            <h1 className="text-white text-lg sm:text-xl font-bold">Hi, my name</h1>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Muhamad Ismail</h1>
            <h1 className="text-white text-xl sm:text-3xl font-bold flex gap-2">I'm A <TypedText/></h1>
            <a href="#about"><button type="button"
                        className="mt-5 font-semibold text-white bg-gradient-to-r from-cyan-700 via-8yan-700 to-cyan-900 hover:bg-gradient-to-br rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">See
                        more about me →</button></a>
            </div>
          </div>
        </section>

        
  )
}

export default MainBackground