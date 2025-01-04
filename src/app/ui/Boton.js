'use client';

import React from "react";

export default function Boton({ texto, className }) {
    return (
        <button
            className={`
                ${className}
                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                text-white 
                font-bold 
                py-3 px-6 
                rounded-lg 
                shadow-md 
                hover:shadow-xl 
                hover:scale-105 
                transition-all 
                duration-300 
                ease-in-out 
                focus:outline-none 
                focus:ring-2 
                focus:ring-purple-500
                focus:ring-offset-2
                place-items-center
                my-6
                mx-auto  // Esto centra el botón horizontalmente
                block     
            `}
        >
            {texto}
        </button>
    );
}
