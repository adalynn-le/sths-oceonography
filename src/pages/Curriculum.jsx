import React, { useState } from 'react';
import Navbar from  '../components/Navbar';
import Bubbles from '../components/Bubbles';
export default function Curriculum() {
   const [viewMode, setViewMode] = useState('search')
   const [searchQuery, setSearchQuery] = useState('')
const units = [
   {
      index: 1,
      title: "Introduction to The Ocean",
      description: "Fundamental chemistry and geological history of the world's oceans."
   },
   {
      index: 2,
      title: "Currents and Waves",
      description: "Physical oceanography covering water movement, wave anatomy, and coastal dynamics."
   },
   {
      index: 3,
      title: "Climate and the Ocean",
      description: "Atmospheric and oceanic interactions, including global wind patterns and climate oscillations."
   },
   {
      index: 4,
      title: "Ocean Habitats",
      description: "Exploration of marine biomes ranging from polar seas to coral reefs and intertidal zones."
   },
   {
      index: 5,
      title: "Introduction to Life in The Ocean",
      description: "Core biological principles including cladistics, evolution, and marine ecology."
   },
   {
      index: 6,
      title: "Plants",
      description: "Study of marine flora, coastal vegetation, kelps, and seagrasses."
   },
   {
      index: 7,
      title: "Animals",
      description: "Comprehensive survey of marine fauna from fish and invertebrates to marine mammals."
   }
];

const lessons = [
   // Unit 1: Introduction to The Ocean
   {
      index: 101,
      title: "Chemistry of The Ocean",
      unit: "Introduction to The Ocean",
      description: "Examine the chemical composition of seawater, salinity, and dissolved gases.",
      resources: []
   },
   {
      index: 102,
      title: "Evolution of The Ocean",
      unit: "Introduction to The Ocean",
      description: "Trace the geological origins and historical formation of Earth's oceans.",
      resources: []
   },

   // Unit 2: Currents and Waves
   {
      index: 201,
      title: "Ekman Spiral",
      unit: "Currents",
      description: "Understand how wind-driven water currents change direction with depth.",
      resources: []
   },
   {
      index: 202,
      title: "The Anatomy of a Wave",
      unit: "Currents",
      description: "Explore wave structures, crests, troughs, and wave mechanics.",
      resources: []
   },
   {
      index: 203,
      title: "The Shore",
      unit: "Currents",
      description: "Examine coastal landforms and the energy dynamics impacting shorelines.",
      resources: []
   },
   {
      index: 204,
      title: "Upwelling and Downwelling",
      unit: "Currents",
      description: "Learn how vertical water movements cycle nutrients and regulate ecosystems.",
      resources: []
   },

   // Unit 3: Climate
   {
      index: 301,
      title: "Coriolis Effect",
      unit: "Climate",
      description: "Analyze how Earth's rotation deflects winds and ocean currents globally.",
      resources: []
   },
   {
      index: 302,
      title: "El Niño and La Niña",
      unit: "Climate",
      description: "Study cyclical climate patterns in the Pacific Ocean and their global impacts.",
      resources: []
   },

   // Unit 4: Ocean Habitats
   {
      index: 401,
      title: "Polar Seas",
      unit: "Ocean Habitats",
      description: "Discover life and environmental conditions in the Arctic and Antarctic oceans.",
      resources: []
   },
   {
      index: 402,
      title: "Deep Seas",
      unit: "Ocean Habitats",
      description: "Explore the extreme pressures, darkness, and unique adaptations of the deep ocean.",
      resources: []
   },
   {
      index: 403,
      title: "The Pelagic Zone and its Layers",
      unit: "Ocean Habitats",
      description: "Journey through the open water column from the epipelagic down to the abyss.",
      resources: []
   },
   {
      index: 404,
      title: "The Benthic Zone",
      unit: "Ocean Habitats",
      description: "Examine the ecological zone at the very bottom of the ocean.",
      resources: []
   },
   {
      index: 405,
      title: "The Coral Reef",
      unit: "Ocean Habitats",
      description: "Explore biodiversity, symbiosis, and threats within tropical coral reef ecosystems.",
      resources: []
   },
   {
      index: 406,
      title: "Estuaries, Mangroves, and Marshes",
      unit: "Ocean Habitats",
      description: "Understand the vital nurseries and transitional coastal wetlands where fresh and salt water meet.",
      resources: []
   },
   {
      index: 407,
      title: "Seagrass and Kelp Forests",
      unit: "Ocean Habitats",
      description: "Study highly productive underwater marine forests and meadows.",
      resources: []
   },
   {
      index: 408,
      title: "The Intertidal Zone",
      unit: "Ocean Habitats",
      description: "Examine organisms adapted to areas exposed between high and low tides.",
      resources: []
   },
   {
      index: 409,
      title: "Sandy Beaches and Mudflats",
      unit: "Ocean Habitats",
      description: "Investigate infauna and ecological interactions in soft-bottom coastal environments.",
      resources: []
   },

   // Unit 5: Introduction to Life in The Ocean
   {
      index: 501,
      title: "Cladistics",
      unit: "Introduction to Life in The Ocean",
      description: "Learn how to classify marine organisms based on evolutionary ancestry.",
      resources: []
   },
   {
      index: 502,
      title: "Evolution in Marine Environments",
      unit: "Introduction to Life in The Ocean",
      description: "Explore evolutionary adaptations specific to life in water.",
      resources: []
   },
   {
      index: 503,
      title: "Marine Ecology",
      unit: "Introduction to Life in The Ocean",
      description: "Analyze energy flow, food webs, and nutrient cycles in the ocean.",
      resources: []
   },

   // Unit 6: Plants
   {
      index: 601,
      title: "Coastal Flora",
      unit: "Plants",
      description: "Study plants adapted to high-salinity coastal terrestrial boundaries.",
      resources: []
   },
   {
      index: 602,
      title: "Sea Kelps",
      unit: "Plants",
      description: "Examine large brown algae and their structural adaptations.",
      resources: []
   },
   {
      index: 603,
      title: "Seagrasses",
      unit: "Plants",
      description: "Explore true flowering plants that grow completely submerged in shallow marine waters.",
      resources: []
   },

   // Unit 7: Animals
   {
      index: 701,
      title: "Bony Fish",
      unit: "Animals",
      description: "Study Osteichthyes, characterized by their bony skeletons and swim bladders.",
      resources: []
   },
   {
      index: 702,
      title: "Cartilaginous Fish",
      unit: "Animals",
      description: "Explore sharks, rays, and skates with skeletons made of cartilage.",
      resources: []
   },
   {
      index: 703,
      title: "Jawless Fish",
      unit: "Animals",
      description: "Examine primitive fish like hagfish and lampreys.",
      resources: []
   },
   {
      index: 704,
      title: "Lobe-finned Fish",
      unit: "Animals",
      description: "Study sarcopterygians, including coelacanths and lungfish.",
      resources: []
   },
   {
      index: 705,
      title: "Marine Invertebrates: Cnidarians and Echinoderms",
      unit: "Animals",
      description: "Explore radial animals like jellyfish, corals, sea stars, and urchins.",
      resources: []
   },
   {
      index: 706,
      title: "Crustaceans",
      unit: "Animals",
      description: "Study crabs, lobsters, shrimp, and other arthropods of the sea.",
      resources: []
   },
   {
      index: 707,
      title: "Cetaceans",
      unit: "Animals",
      description: "Examine whales, dolphins, and porpoises.",
      resources: []
   },
   {
      index: 708,
      title: "Pinnipeds",
      unit: "Animals",
      description: "Study seals, sea lions, and walruses.",
      resources: []
   }
];
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