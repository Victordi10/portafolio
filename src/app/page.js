'use client';

import React, { useEffect, useState } from "react";
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
      <Seccion className="h-[50vh] relative min-h-fit max-h-screen flex flex-col justify-center items-center">
        <h1
          className="
      text-[1.5rem] 
      sm:text-3xl 
      lg:text-4xl 
      text-center 
      text-transparent 
      bg-clip-text 
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

        {/* Redes y Nombre */}
        <div className="flex flex-row-reverse sm:flex-row w-full justify-between items-center p-2 sm:px-6 mt-10">
          <Redes />

          <div className="text-start sm:text-end sm:mt-0 sm:order-2 p-2">
            <p className="text-base sm:text-lg font-semibold text-gray-300">
              Victor Cordoba <span className="text-indigo-600">- Vytor</span>
            </p>
            <p className="text-sm sm:text-base mt-4 text-gray-400">
              Desarrollador Full Stack
            </p>
          </div>
        </div>

        {/* Botón Contrátame */}
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

      <Seccion titulo="Sobre mí">
        <Parrafo>
          Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.
        </Parrafo>
      </Seccion>

      <Seccion titulo="Servicios">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
      </Seccion>

      <Seccion titulo="Portafolio">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
      </Seccion>

      <Seccion titulo="Contacto">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
      </Seccion>
    </>
  );
}