'use client';

import React from "react";

export default function Titulo({ titulo, className }) {
    return (
        <h2 
            className={`
                ${className}
                text-4xl text-center 
                mb-16
                font-bold text-transparent 
                bg-clip-text 
                 sm:text-transparent
                bg-gradient-to-r  from-gray-100 via-gray-300 to-slate-200
                shadow-lg 
                hover:shadow-xl 
                transition-all duration-500 ease-in-out 
                transform hover:scale-[1.01]`}
        >
            {titulo}
        </h2>
    );
}
