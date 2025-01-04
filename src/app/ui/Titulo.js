'use client';

import React from "react";

export default function Titulo({ titulo }) {
    return (
        <h2 
            className="
                text-4xl text-center 
                font-bold text-transparent 
                bg-clip-text 
                bg-gradient-to-r from-gray-500 via-slate-500 to-white-500 
                shadow-lg 
                hover:shadow-xl 
                transition-all duration-500 ease-in-out 
                transform hover:scale-[1.01]"
        >
            {titulo}
        </h2>
    );
}
