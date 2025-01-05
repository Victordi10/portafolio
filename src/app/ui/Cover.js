'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDownWideFill } from "react-icons/ri";
import Seccion from "./Seccion";
import Boton from "./Boton";
import Parrafo from "./Parrafo";
import Redes from "./Redes";


export default function Cover() {
    return (
        <Seccion className="h-[50vh]  relative min-h-fit max-h-screen flex flex-col justify-center items-center">
            <h1
                className="
            text-4xl 
            sm:text-4xl 
            lg:text-5xl 
            text-center 
            text-indigo-500
            bg-clip-text 
            mb-4
            sm:m-4
            px-6 sm:p-6 lg:p-14
            bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 
            hover:shadow-2xl 
            transition-all duration-500 ease-in-out 
            transform hover:scale-[1.01]
            tracking-widest
            leading-relaxed"
            >
                Desarrollador fullstack <br/>
                <span className='text-lg text-gray-50'> Tecnólogo en Análisis y Desarrollo de Software con 2 años de experiencia en desarrollo web fullstack.</span>
                {/* Transformando Ideas en Soluciones Digitales <br/>
            <span className='text-lg text-gray-200'>Creando experiencias web únicas y escalables con pasión y tecnologías modernas.</span> */}
            </h1>

            <div className="flex flex-row-reverse sm:flex-row w-full justify-between items-center p-0 sm:px-6 mt-10">
                <Redes />
                <div className="text-start sm:text-end sm:mt-0 sm:order-2">
                    <p className="text-base sm:text-lg font-semibold text-gray-300">
                        Victor Manuel Cordoba 
                    </p>
                    <p className="text-sm sm:text-base mt-4 text-gray-400">
                        Desarrollador Full Stack
                    </p>
                </div>
            </div>

            <div
                className="
            flex flex-col items-center 
            mt-4 sm:mt-20 mx-auto
            lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-[25%] 
          "
            >
                <Boton texto={'Contratame'} />
                <RiArrowDownWideFill className="text-4xl text-white" size={30} color="#fff" />
            </div>
        </Seccion>
    )
}