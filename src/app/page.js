'use client';

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Seccion from "./ui/Seccion";
import Boton from "./ui/Boton";
import Parrafo from "./ui/Parrafo";
import Redes from "./ui/Redes";
import { FaAngleDown } from 'react-icons/fa';
import { RiArrowDownWideFill } from "react-icons/ri";



export default function Home() {
  return (
    <>
      <Seccion className="h-[80vh] min-h-fit max-h-screen flex flex-col justify-center items-center">
      <h1 
        className="
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            text-center 
            text-transparent 
            bg-clip-text 
            m-2 sm:m-4
            p-4 sm:p-2
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
            hover:shadow-2xl 
            transition-all duration-500 ease-in-out 
            transform hover:scale-[1.01]
            tracking-widest
            leading-normal
        "
      >
          Transformando Ideas en Soluciones Digitales, Creando experiencias web únicas y escalables con pasión y tecnologías modernas.
      </h1>

        
      <div className="flex flex-col sm:flex-row justify-between items-center space-x-4 px-6 sm:px-12 mt-8">
    <Redes />
    
    <div className="flex flex-col items-center space-y-4 mt-6 sm:mt-0 sm:order-last md:order-1">
        <Boton texto={'Contratame'} />
        <RiArrowDownWideFill className="text-4xl text-white" size={30} color="#fff" />
    </div>
    
    <div className="text-center sm:text-end mt-4 sm:mt-0 sm:order-first md:order-2">
        <p className="text-lg font-semibold text-gray-300 mb-2">
            Victor Cordoba - <span className="text-indigo-600">Vytor</span>
        </p>
        <p className="text-base text-gray-400">
            Desarrollador Full Stack
        </p>
    </div>
</div>

    </Seccion>



      <Seccion titulo="Sobre mí">
      <Parrafo> 
        Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.
      </Parrafo>
        <Image src="/images/developer.svg" alt="Desarrollador de software" width={400} height={400} />
      </Seccion>

      <Seccion titulo="Servicios">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
        <Image src="/images/developer.svg" alt="Desarrollador de software" width={400} height={400} />
      </Seccion>

      <Seccion titulo="Portafolio">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
        <Image src="/images/developer.svg" alt="Desarrollador de software" width={400} height={400} />
      </Seccion>

      <Seccion titulo="Contacto">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
        <Image src="/images/developer.svg" alt="Desarrollador de software" width={400} height={400} />
      </Seccion>
    </>
  );
}