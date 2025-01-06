'use client';

import React from "react";

export default function Titulo({ titulo, className, icon }) {
    return (
        <h2 
            className={`
                ${className}
                text-4xl text-center 
                font-bold text-indigo-100 
                hover:shadow-xl 
                transition-all duration-500 ease-in-out 
                transform hover:scale-[1.01]
                sm:m-4
                px-2 sm:p-6 
                flex
                 items-center
                 gap-3
                `}
                
        >
            {icon}
            {titulo}
        </h2>
    );
}
