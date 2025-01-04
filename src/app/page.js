'use client';

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Seccion from "./ui/Seccion";

export default function Home() {
  return (
    <>
      <Seccion>
        <h1 
          className="
            text-5xl 
            text-center font-bold text-transparent 
            bg-clip-text 
            bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
            shadow-lg 
            hover:shadow-xl 
            transition-all duration-500 ease-in-out 
            transform hover:scale-110"
          >
          Vytor - mi portafolio
        </h1>
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
        <Image src="/images/developer.svg" alt="Desarrollador de software" width={400} height={400} />
      </Seccion>

      <Seccion titulo="Sobre mí">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
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