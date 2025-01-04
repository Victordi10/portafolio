'use client';

import React from "react";

const Parrafo = ({ children, className = "" }) => {
    return (
        <p className={`
            ${className}
            text-lg 
            text-gray-300 
            text-justify 
            leading-8 
            my-4 
            font-light 
            transition-all 
            duration-300 
            ease-in-out 
            hover:text-gray-100 
            focus:outline-none
        `}>
            {children}
        </p>
    );
};

export default Parrafo;
