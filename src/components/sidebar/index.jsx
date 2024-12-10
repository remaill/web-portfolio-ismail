'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { UserCircle, LinkedinLogo, InstagramLogo, GithubLogo, FacebookLogo, YoutubeLogo, House, BookOpenText, Briefcase, Wrench, EnvelopeSimple, List, EyeSlash } from '@phosphor-icons/react';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false); // Menutup sidebar jika layar besar
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white p-4 transition-transform transform fixed top-0 left-0 z-50 md:static md:w-72 md:h-screen h-full w-64 ${
          isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full'
        } md:translate-x-0 md:sticky`}
      >
        <div className='flex flex-col items-center justify-center mt-5'>
        <Image 
        className='rounded-full outline outline-8 outline-slate-400 mb-5'
        src="/asset/image/profil.jpg"
        alt="background"
        width={120}
        height={120}
        />
        <h2 className="text-2xl font-bold mb-3">Muhamad Ismail</h2>
        </div>

        <div className='flex gap-2 items-center justify-center relative'>
          <a href="https://github.com/remaill" target='_blank'>
          <GithubLogo size={40} weight="fill" className='bg-slate-700 rounded-md p-1 hover:bg-cyan-600 md:p-2'/>
          </a>
          <a href="https://www.linkedin.com/in/remaill/" target='_blank'>
          <LinkedinLogo size={40} weight="fill" className='bg-slate-700 rounded-md p-1 hover:bg-cyan-600 md:p-2'/>
          </a>
          <a href="https://www.instagram.com/re_maill/" target='_blank'>
          <InstagramLogo size={40} weight="fill" className='bg-slate-700 rounded-md p-1 hover:bg-cyan-600 md:p-2'/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006444006658&mibextid=ZbWKwL" target='_blank'>
          <FacebookLogo size={40} weight="fill" className='bg-slate-700 rounded-md p-1 hover:bg-cyan-600 md:p-2'/></a>
          <a href="https://www.youtube.com/@Kita_dimana" target='_blank'>
          <YoutubeLogo size={40} weight="fill" className='bg-slate-700 rounded-md p-1 hover:bg-cyan-600 md:p-2'/>
          </a>
        </div>

        <div className='mt-6'>
        <ul className="sm:space-y-4 space-y-2 text-lg ">
        <li className='flex items-center gap-2 ' ><House size={28} className='text-cyan-400'/>
            <a
              href="#home"
              className="cursor-pointer text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li className='flex items-center gap-2 ' ><UserCircle size={28} className='text-cyan-400'/>
            <a
              href="#about"
              className="cursor-pointer text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li className='flex items-center gap-2 ' ><BookOpenText size={28} className='text-cyan-400'/>
            <a
              href="#skills"
              className="cursor-pointer text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Skills
            </a>
          </li>
          <li className='flex items-center gap-2 ' ><Wrench size={28} className='text-cyan-400'/>
            <a
              href="#service"
              className="cursor-pointer text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Service
            </a>
          </li>
          <li className='flex items-center gap-2 ' ><Briefcase size={28} className='text-cyan-400'/>
            <a
              href="#work"
              className="cursor-pointer text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Work
            </a>
          </li>
          <li className='flex items-center gap-2 ' ><EnvelopeSimple size={28} className='text-cyan-400'/>
            <a
              href="#contact"
              className="cursor-pointer text-gray-300 hover:text-white"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-900 text-white rounded-lg md:hidden shadow-md "
      >
        {isSidebarOpen ? <EyeSlash size={28} /> : <List size={28} />}
      </button>
    </div>
  );
};

export default SideBar;
