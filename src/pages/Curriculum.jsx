import React from 'react';
import Navbar from  '../components/Navbar';
import Bubbles from '../components/Bubbles';
export default function Curriculum() {
   const modules = [
      {
         unit: "Unit 1",
         title: "Lesson One Title",
         description: "The quick brown fox jumped over the lazy dog",
         links: [
            {
               display: "Link Text",
               url: "https://adalynnisthegoat.com"
            }
         ]
      }
   ]
   return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#e8e6ff_1.5px,transparent_1.5px)] [background-size:30px_30px] font-['Marmelad',sans-serif] text-slate-800 m-0 p-0">      
    <Navbar />
    <main>  
        <section id="aboutUs" className="bg-[#9faeff] h-[50vh] overflow-hidden; background-[#9faeff] py-20 px-6 md:px-12 relative flex flex-col justify-center">
       <h1 className="text-center text-white text-6xl md:text-[100px] m-0 leading-none">Our Curriculum</h1>
        </section>
         <svg 
  className="relative block w-full mt-0 rotate-180"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1440 320"
>
  <path 
    fill="#9faeff" 
    fillOpacity="1" 
    d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
  />
</svg>
      
    </main>
    </div>

   )
}