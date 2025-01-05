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
      <Seccion className="h-[80vh] min-h-fit max-h-screen flex flex-col justify-center items-center">
        <h1
          className="
            text-[1.5rem] 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            text-center 
            text-transparent 
            bg-clip-text 
            sm:m-4
            p-2 sm:p-4
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


        <div className="flex flex-col sm:flex-row justify-between items-center sm:px-12 mt-8">
          <Redes />

          <div className="text-center sm:text-end mt-4 sm:mt-0 sm:order-first md:order-2">
            <p className="text-lg font-semibold text-gray-300 mb-2">
              Victor Cordoba - <span className="text-indigo-600">Vytor</span>
            </p>
            <p className="text-base text-gray-400">
              Desarrollador Full Stack
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 mt-6 sm:mt-0 sm:order-last md:order-1">
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