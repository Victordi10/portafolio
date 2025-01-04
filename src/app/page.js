'use client';

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Seccion from "./ui/Seccion";
import Boton from "./ui/Boton";
import Parrafo from "./ui/Parrafo";
import Redes from "./ui/Redes";

export default function Home() {
  return (
    <>
      <Seccion className={'h-[70vh] min-h-fit max-h-screen'}>
        <h1 
          className="
            text-4xl 
            text-center 
            text-transparent 
            bg-clip-text 
            m-6
            p-6
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
            hover:shadow-2xl 
            transition-all duration-500 ease-in-out 
            transform hover:scale-[1.01]
            tracking-wide
          "
        >
            Transformando Ideas en Soluciones Digitales, Creando experiencias web únicas y escalables con pasión y tecnologías modernas.
        </h1>
        <div className="flex flex-row justify-between items-center space-x-4 px-6">
          <Redes />
          <Boton  texto={'Contratame'} />
          <div className="text-end mt-8">
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