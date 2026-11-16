import React from 'react';

export default function Bubbles({ color = "bg-[#9faeff]/20"}) {
   const bubbles = [
      {size: "w-6 h-6", left: "10%", duration: "8s", delay: "0s"},
      { size: "w-10 h-10", left: "25%", duration: "12s", delay: "2s"},
      { size: "w-4 h-4", left: "40%", duration: "7s", delay: "4s" },
    { size: "w-12 h-12", left: "60%", duration: "14s", delay: "1s" },
    { size: "w-8 h-8", left: "75%", duration: "10s", delay: "3s" },
    { size: "w-5 h-5", left: "88%", duration: "9s", delay: "5s" },
   ];
   return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         {bubbles.map((b, i) => (
            <span
               key={i}
               style={{
                  left: b.left,
                  "--duration": b.duration,
                  "--delay": b.delay,
               }}
               className={`absolute -bottom-16 rounded-full border border-white/40 backdrop-blur-[1px] animate-bubble ${b.size} ${color}`}
            />
         ))}
      </div>
   )
}