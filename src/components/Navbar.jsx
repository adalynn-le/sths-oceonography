import React from 'react';

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
          <a href="#home"><span className="material-symbols-rounded text-[20px] text-[#9faeff]">home</span></a>
          <a href="#aboutUs"><span className="material-symbols-rounded text-[20px] text-[#9faeff]">book</span></a>
          <a href="#whatDoWeDo"><span className="material-symbols-rounded text-[20px] text-[#9faeff]">network_node</span></a>
        </div>
      </nav>
   )
}