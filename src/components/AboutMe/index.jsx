import React from 'react'
import Image from 'next/image'
import Age from './Age'
import ResumeDownload from './ResumeDownload'

const AboutMe = () => {
  return (
    <div id="about" className="p-2 md:p-5 bg-gray-300 text-gray-800">
     <section className="p-5 bg-white rounded-lg shadow-xl mb-10">
      <h1 className="text-4xl font-bold mb-4">About me</h1>
      <p className="text-gray-600 mb-8 md:pr-5">
      I am an experienced advertiser with a strong interest in programming web development & photography. Proficient in basic graphic design (Photoshop, Illustrator, Canva) and video editing (Premiere Pro, After Effects, CapCut) to create marketing strategies that are both creative and effective.
      </p>

      <div className="flex flex-col md:flex-row gap-8 justify-start ">
        {/* Gambar */}
        <div className="w-full md:w-96">
        
          <Image
            src="/asset/image/profil.jpg" // Ganti dengan path gambar yang sesuai
            alt="Profile"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Informasi Personal */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Muhamad Ismail</h2>
          <p className="text-gray-700 mb-5">
          My main skills are Web Developer, Paid Advertising, Photography and Content Creation.
          </p>

          <div className="flex flex-col gap-3 text-gray-700 text-sm">
            <p><strong>Birthday:</strong> 8 February 2002</p>
            <span className='flex gap-1'><strong>Age:</strong><Age/></span>
            <p><strong>Phone:</strong> +62 858 1971 7587</p>
            <p><strong>Email:</strong> ismail.est2002@gmail.com</p>
            <p><strong>City:</strong> Bogor, Indonesia</p>
            <p><strong>Language:</strong> English, Indonesia</p>
            <p><strong>Hobby:</strong> Learn something new</p>
            <ResumeDownload/>
          </div>
          
        </div>
      </div>
    </section>
  </div>
  )
}

export default AboutMe