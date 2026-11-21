import React from 'react';
import { Link } from 'react-router-dom';

export default function Tag({children}) {
   return (
      <span className = "border-1 border-(--blue) rounded inline-block px-3 py-0.5 my-1 text-sm font-medium text-(--blue) text-700 bg-(--blue)/20 rounded-full">
         {children}
      </span>
   )
}