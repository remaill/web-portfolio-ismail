import React from 'react'
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="p-1 bg-gray-300 text-gray-800 text-center pb-4" id='skills'>
      {/* Skill Section */}
      <h2 className="text-5xl font-bold mt-2">MY SKILLS</h2>
      <p className="mb-4 mt-3 text-gray-800 font-semibold">Basic skills programming</p>

      <div className="flex flex-wrap justify-center items-center gap-3 mx-2 mb-5 ">
        {/* HTML Skill */}
        <div className="flex flex-col justify-center items-center p-3 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md ">
          <Image src="/asset/icon/html.png" alt="HTML" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">HTML</p>
        </div>

        {/* CSS Skill */}
        <div className="flex flex-col justify-center items-center p-3 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/css.png" alt="CSS" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">CSS</p>
        </div>

        {/* JavaScript Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/javascript.png" alt="JavaScript" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">JAVASCRIPT</p>
        </div>

        {/* React.js Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/react.png" alt="React.js" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-4 font-bold text-gray-600">REACT.JS</p>
        </div>
        {/* Next.js Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/nextjs.png" alt="NEXT.JS" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-4 font-bold text-gray-600">NEXT.JS</p>
        </div>

        {/* Node.js Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/node.png" alt="Node.js" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">NODE.JS</p>
        </div>

        {/* NWordpress.js Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/wordpress.png" alt="WORDPRESS" width={60} height={60} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">WORDPRESS</p>
        </div>

        {/* Tailwind Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/tailwind.png" alt="Tailwind" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-3 font-bold text-gray-600">TAILWIND</p>
        </div>

        {/* Bootstrap Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/bootstrap.png" alt="Bootstrap" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-3 font-bold text-gray-600">BOOTSTRAP</p>
        </div>

        {/* Git Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/git.png" alt="Git" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-3 font-bold text-gray-600">GIT</p>
        </div>

        {/* MySQL Skill */}
        <div className="flex flex-col justify-center items-center p-4 w-24 h-28 overflow-hidden bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/mysql.png" alt="MySQL" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-3 font-bold text-gray-600">MYSQL</p>
        </div>
      </div>

      <p className="mb-4 mt-3 text-gray-800 font-semibold">Advertising Experience Expertise</p>

      <div className="flex flex-wrap justify-center items-center gap-3 mx-2 mb-5">
        {/* Google Ads Skill */}
        <div className="flex flex-col justify-center items-center w-24 h-32 overflow-hidden p-4 bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/googleads.png" alt="Google Ads" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">Google Ads</p>
        </div>

        {/* Meta Ads Skill */}
        <div className="flex flex-col justify-center items-center w-24 h-32 overflow-hidden p-4 bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/meta.png" alt="Meta Ads" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-6 font-bold text-gray-600">Meta Ads</p>
        </div>

         {/* Tiktok Ads Skill */}
        <div className="flex flex-col justify-center items-center w-24 h-32 overflow-hidden p-4 bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/tiktok.webp" alt="Meta Ads" width={50} height={50} className="object-fill" />
          <p className="text-sm mt-3 font-bold text-gray-600">Tiktok Ads</p>
        </div>

      </div>
      

      <p className="mb-4 mt-3 text-gray-800 font-semibold">Another Basic Skills</p>

      <div className="flex flex-wrap justify-center items-center gap-3 mx-2 mb-5">
        {/* Google Ads Skill */}
        <div className="flex flex-col justify-center items-center w-24 h-32 overflow-hidden p-4 bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/photo.webp" alt="Photograpy" width={70} height={70} className="object-fill" />
          <p className="text-sm mt-1 font-bold text-gray-600">Photograpy</p>
        </div>

        {/* Meta Ads Skill */}
        <div className="flex flex-col justify-center items-center w-24 h-32 overflow-hidden p-4 bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/adobe.jpg" alt="Adobe Family" width={60} height={60} className="object-fill mt-3" />
          <p className="text-sm mt-4 font-bold text-gray-600">Adobe Family</p>
        </div>

        <div className="flex flex-col justify-center items-center w-24 h-32 overflow-hidden p-4 bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/canva.png" alt="Canva" width={60} height={60} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">Canva</p>
        </div>

        <div className="flex flex-col justify-center items-center w-24 h-32 overflow-hidden p-4 bg-white rounded-lg shadow-md">
          <Image src="/asset/icon/blender.webp" alt="Blender" width={60} height={60} className="object-fill" />
          <p className="text-sm mt-2 font-bold text-gray-600">Blender</p>
        </div>
      </div>
    </div>
  );
}

export default Skills