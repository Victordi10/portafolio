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