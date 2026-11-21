import React from 'react';

export default function InteractiveTag({ children, selected, onClick }) {
   const activeClasses = selected
      ? "border-amber-500 text-amber-600 bg-amber-500/20"
      : "border-(--blue) text-(--blue) bg-(--blue)/20";

   return (
      <span 
         onClick={onClick}
         className={`border-1 rounded-full inline-block px-3 py-0.5 my-1 text-sm font-medium cursor-pointer transition-colors duration-200 ${activeClasses}`}
      >
         {children}
      </span>
   );
}