import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
   return (
            <nav className="flex flex-row justify-between items-center bg-white h-[35px] border-b border-[#e8e6ff] p-4 sticky top-0 z-50">
        <div className="flex flex-row items-center">
          <span className="material-symbols-rounded text-[20px] text-[#9faeff] cursor-pointer">mail</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-orange-400 font-bold text-lg">
          STHS Oceanography
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Link to="/" title="Home"><span className="material-symbols-rounded text-[20px] text-[#9faeff]">home</span></Link>
          <Link to="/curriculum" title="Curriculum"><span className="material-symbols-rounded text-[20px] text-[#9faeff]">book</span></Link>
          <a href="/startChapter"><span className="material-symbols-rounded text-[20px] text-[#9faeff]">network_node</span></a>
        </div>
      </nav>
   )
}