import React, { useState } from 'react';
import Navbar from  '../components/Navbar';
import Bubbles from '../components/Bubbles';
export default function Curriculum() {
   const [viewMode, setViewMode] = useState('search')
   const [searchQuery, setSearchQuery] = useState('')
   const lessons = [
      {
         id: 1,
         title: "Lesson One Title",
         description: "The quick brown fox jumped over the lazy dog",
         link: "/curriculum/lesson-one",
         resources: [
            {
               name: "",
               url: ""
            }
         ],
         tags: ["Lesson"]
      },
      {
         id: 2,
         title: "Lesson Two Title",
         description: "The quick brown fox jumped over the lazy dog",
         link: "/curriculum/lesson-two",
         resources: [
            {
               name: "",
               url: ""
            }
         ],
         tags: ["Lesson"]
      },
      {
         id: 3,
         title: "Lesson Three Title",
         description: "The quick brown fox jumped over the lazy dog",
         link: "/curriculum/lesson-three",
         resources: [
            {
               name: "",
               url: ""
            }
         ],
         tags: ["Lesson"]
      },
   ]
   const filteredLessons = lessons.filter(lesson => 
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) || lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) || lesson.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
   )
   return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#e8e6ff_1.5px,transparent_1.5px)] [background-size:30px_30px] font-['Marmelad',sans-serif] text-slate-800 m-0 p-0">      
    <Navbar />
    <main>  
        <section id="aboutUs" className="bg-[#9faeff] h-[35vh] overflow-hidden; background-[#9faeff] py-20 px-6 md:px-12 relative flex flex-col justify-center">
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
<div className="flex flex-col px-[50px] gap-[10px]">
         <div className="flex gap-2 w-min bg-(--border) rounded-full h-min items-center px-2 py-2">
            <button onClick={() => setViewMode('search')} className={`font-bold h-[40px] w-[120px] rounded-full text-[15px] text-center items-center justify-center py-[7px] ${viewMode === 'search' ? 'bg-(--blue) text-white' : 'text-(--text)'}`}>
              Search
            </button>
             <button onClick={() => setViewMode('path')} className={`font-bold h-[40px] w-[120px] rounded-full text-[15px] text-center items-center justify-center py-[7px] ${viewMode === 'path' ? 'bg-(--blue) text-white' : 'text-(--text)'}`}>
               Path
             </button>
         </div>
         { viewMode === 'search' ? (
            <div className="flex flex-col gap-[10px] py-[20px] px-[20px]">
               <h2 className="font-bold" style={{ color: 'var(--blue)', fontSize: 'var(--h2size)' }}>Search Our Lessons</h2>
               <p style={{ color: 'var(--text)', fontSize: 'var(--parSize)' }}>Search through our lessons to find the perfect activity for your organization!</p>
               <input type="text" placeholder="Search lessons, keywords, tags, and more..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border-2 border-(--border) rounded-full h-[40px] w-[1000px] px-[20px] py-[5px] bg-white hover:border-(--blue) focus: outline-(--blue) focus:ring-2 focus:ring-(--blue)/70 focus: text-(--blue)" style={{ fontSize: 'var(--parSize)' }}/>
            </div>
         ) : (
            <div>
            </div>
         )}
         </div>

    </main>
    </div>

   )
}