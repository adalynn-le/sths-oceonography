import React from 'react';
import Bubbles from './components/Bubbles';
import Navbar from './components/Navbar';
export default function App() {
  const leaders = [
    { name: "Seon R.", position: "President", img: "/seon.jpg" },
    { name: "Riya K.", position: "Vice President", img: "/riya.jpg" },
    { name: "Nayan C.", position: "Secretary", img: "/nayan.jpg" },
    { name: "Adalynn L.", position: "Treasurer", img: "/adalynn.jpeg" },
    { name: "Jason A.", position: "Event Coordinator", img: "/jason.jpg" },
    { name: "Faris A.", position: "Event Coordinator", img: "/faris.jpg" },
    { name: "Ryan C.", position: "Publicist", img: "/ryan.jpg" },
    { name: "Regan P.", position: "Publicist", img: "/regan.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#e8e6ff_1.5px,transparent_1.5px)] [background-size:30px_30px] font-['Marmelad',sans-serif] text-slate-800 m-0 p-0">
      <Navbar />
      <main>
        {/* Title Page */}
        <section id="home" className="flex flex-col justify-between items-center h-[calc(100vh-35px)] relative overflow-hidden pt-10">
          <Bubbles color="bg-[#9faeff]/25"></Bubbles>
          <div className="text-center z-10 mt-12">
            <h1 className="text-[#9faeff] text-6xl md:text-[100px] m-0 leading-none">Santa Teresa</h1>
            <h1 className="text-[#9faeff] text-6xl md:text-[100px] m-0 leading-none">Oceanography Club</h1>
          </div>

          <a href="#aboutUs" className="w-[50px] h-[50px] rounded-full border-2 border-[#9faeff] text-[#9faeff] bg-white flex items-center justify-center no-underline z-10 mb-10 hover:bg-[#9faeff] hover:text-white transition-colors">
            <span className="material-symbols-rounded text-[30px]">arrow_downward</span>
          </a>

          {/* Waves Background Elements */}
          <div className="absolute bottom-0 w-full overflow-hidden leading-none pointer-events-none">
            <svg className="relative block w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#9faeff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* About Us Section */}
        <section id="aboutUs" className="bg-[#9faeff] min-h-screen py-20 px-6 md:px-12 relative flex flex-col justify-center">
          <Bubbles color="bg-white/20"></Bubbles>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-6xl mx-auto z-10">
            <div className="flex-1">
              <h2 className="text-white text-5xl underline decoration-wavy decoration-2 underline-offset-8 mb-6">Who Are We?</h2>
              <p className="text-white text-lg md:text-2xl leading-relaxed">
                We are Santa Teresa High School Oceanography club, based in Southern San Jose, California. A group of high schoolers who want to spread awareness, that our Oceans are not just fish and facts! 
                We have one solid goal, to educate the public about our world’s oceans through not only direct hands-on work, but online education tools and resources. 
                Not only covering almost 75% of our planet, the Oceans have hundreds of thousands of species that are yet to be discovered, and hide biological mechanisms that are still not fully understood today.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="img" alt="Oceanography" className="rounded-xl shadow-lg max-w-full h-auto bg-white/20 p-4 min-h-[200px] min-w-[250px]" />
            </div>
          </div>

        </section>

        {/* What Do We Do & Leadership Section */}
        <section id="whatDoWeDo" className="bg-white">
          <div>
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
</div>
         <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-6xl mx-auto mb-24">
            <img src="img2" alt="Activities" className="flex-1 rounded-xl shadow-lg max-w-full h-auto bg-slate-100 p-4 min-h-[200px] min-w-[250px]" />
            <div className="flex-1">
              <h2 className="text-[#9faeff] text-5xl underline decoration-wavy decoration-2 underline-offset-8 mb-6">What Do We Do?</h2>
              <p className="text-[#9faeff] text-lg md:text-2xl leading-relaxed">
                Our club strives to spread knowledge to not only aspiring Marine scientists, but also inspire people who simply have an interest to learn about it, through presentations, videos, research projects, etc. 
                It doesn’t stop there, we hold simple hands-on activities in our club’s meeting dates to simplify larger modern-day issues or complex fundamental oceanography concepts.
              </p>
            </div>
          </div>

          {/* Student Leaders */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#9faeff] text-4xl md:text-5xl underline decoration-wavy decoration-2 underline-offset-8 text-center mb-12">
              Our Student Leaders
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl border border-[#e8e6ff] shadow-sm">
                  <img src={leader.img} alt={leader.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-orange-400" />
                  <h3 className="text-orange-400 font-bold text-xl mb-1">{leader.name}</h3>
                  <h4 className="text-orange-400/80 text-sm md:text-base m-0">{leader.position}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
