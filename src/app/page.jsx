import MainBackground from '@/components/mainbackground';
import SideBar from '@/components/sidebar';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills/Skill';
import Service from '@/components/Service/Service';
import Work from '@/components/Work/Work';
import Footer from '@/components/Footer/Footer';

export default function Home() {

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <SideBar/>
     
      {/* Main Content */}
      <div className="flex-1 min-h-screen w-full">
        <MainBackground/>
        {/* Konten yang akan di-scroll */}
        <AboutMe/>
        <Skills/>
        <Service/>
        <Work/>
        <Footer/>
      </div>

    </div>
  );
}
