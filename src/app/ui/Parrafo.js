'use client';

import React from "react";

const Parrafo = ({ children, className = "" }) => {
    return (
        <p className={`
            ${className}
            text-base
            sm:text-lg
            text-gray-300 
            text-justify 
            leading-8 
            my-4 
            font-light 
            transition-all 
            duration-300 
            ease-in-out 
            hover:text-white 
            focus:outline-none
            w-full
        `}>
            {children}
        </p>
    );
};

export default Parrafo;
