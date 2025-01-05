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
            text-[1.5rem] 
            sm:text-3xl 
            lg:text-4xl 
            text-center 
            text-transparent 
            bg-clip-text 
            mb-4
            sm:m-4
            p-2 sm:p-4 lg:p-14
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            hover:shadow-2xl 
            transition-all duration-500 ease-in-out 
            transform hover:scale-[1.01]
            tracking-widest
            leading-relaxed
          "
            >
                Transformando Ideas en Soluciones Digitales, Creando experiencias web únicas y escalables con pasión y tecnologías modernas.
            </h1>

            <div className="flex flex-row-reverse sm:flex-row w-full justify-between items-center p-2 sm:px-6 mt-10">
                <Redes />
                <div className="text-start sm:text-end sm:mt-0 sm:order-2">
                    <p className="text-base sm:text-lg font-semibold text-gray-300">
                        Victor Cordoba 
                    </p>
                    <p className="text-sm sm:text-base mt-4 text-gray-400">
                        Desarrollador Full Stack
                    </p>
                </div>
            </div>

            <div
                className="
            flex flex-col items-center 
            mt-4 sm:mt-10 
            lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-[25%] 
          "
            >
                <Boton texto={'Contratame'} />
                <RiArrowDownWideFill className="text-4xl text-white" size={30} color="#fff" />
            </div>
        </Seccion>
    )
}