'use client';

import React, { useState, useEffect } from 'react';
import { RiArrowDownWideFill } from "react-icons/ri";
import Seccion from "./Seccion";
import Boton from "./Boton";
import Parrafo from "./Parrafo";
import Redes from "./Redes";


export default function Cover() {
    const correo = 'cordobav444@gmail.com'


    return (
        <Seccion id={'inicio'} className="h-[50vh] md:h-[60vh] py-10 relative min-h-fit max-h-screen flex flex-col justify-center items-center">
            <h1
                className="
            text-4xl 
            sm:text-4xl 
            lg:text-5xl 
            text-center 
            text-indigo-500
            bg-clip-text 
            sm:p-8 lg:p-14
            bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 
            hover:shadow-2xl 
            transition-all duration-500 ease-in-out 
            transform hover:scale-[1.01]
            tracking-widest
            leading-relaxed"
            >
                Desarrollador fullstack <br />
                <span className='text-lg sm:text-2xl text-gray-50'> Tecnólogo en Análisis y Desarrollo de Software con 2 años de experiencia en desarrollo web fullstack.</span>
            </h1>

            <div className="flex  flex-row-reverse sm:flex-row w-full justify-between items-center p-0 sm:px-6">
                <Redes />
                <div className="text-start sm:text-end sm:order-2">
                    <p className="text-base sm:text-lg font-semibold text-gray-300">
                        Victor Cordoba
                    </p>
                    <p className="text-sm sm:text-bas text-gray-400">
                        Desarrollador Full Stack
                    </p>
                </div>
            </div>

            <div
                className="
            flex flex-col items-center 
            md:mt-32 mx-auto
            md:absolute md:top-1/2 md:left-1/2 lmd:transform md:-translate-x-1/2 md:-translate-y-[25%] 
          "
            >
                <button
                    className={`
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
                mx-auto  
                block     
            `}
                >
                    <a
                        href={`mailto:${correo}?subject=¡Quiero contactarte!&body=Hola, Victor.`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Enviar correo
                    </a>
                </button>
                <RiArrowDownWideFill className="text-4xl text-white" size={30} color="#fff" />
            </div>
        </Seccion>
    )
}