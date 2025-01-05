'use client';

import React from "react";

export default function Titulo({ titulo, className }) {
    return (
        <h2 
            className={`
                ${className}
                text-4xl text-center 
                font-bold text-indigo-100 
                hover:shadow-xl 
                m-auto
                transition-all duration-500 ease-in-out 
                transform hover:scale-[1.01]`}
        >
            {titulo}
        </h2>
    );
}
