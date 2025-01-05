'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Seccion from "./ui/Seccion";
import Boton from "./ui/Boton";
import Parrafo from "./ui/Parrafo";
import Redes from "./ui/Redes";
import { FaAngleDown } from 'react-icons/fa';
import { RiArrowDownWideFill } from "react-icons/ri";
import Servicio from "./ui/Servicio";


export default function Home() {
  return (
    <>
      <Seccion titulo="Sobre mí" classTitulo={'text-black mb-8 sm:mb-10'} className={`relative bg-[url('/foto.jpeg')] bg-cover bg-center bg-no-repeat sm:bg-gray-950 sm:bg-[url('')]`}>
        <div className=' inset-0 bg-gradient-to-b from-[rgba(3,7,18,0.5)]  via-[rgba(3,7,18,0.6)] to-[rgba(3,7,18,0.7)] p-3 flex flex-col sm:flex-row items-center justify-center sm:space-x-16
        '>
          <Image
            src="/foto.jpeg"
            alt="foto sobre mi"
            width={280}
            height={280}
            className="rounded-full border-4 border-white p-2 py-3 sm:block hidden"
          />
          <Parrafo>
            Soy tecnólogo en Análisis y Desarrollo de Software con 2 años de experiencia en desarrollo web fullstack. Me apasiona el desarrollo y, a lo largo de mi carrera, he trabajado en varios proyectos, tanto personales como para instituciones como el SENA, donde he contribuido al desarrollo de la plataforma Boricue. Mi enfoque siempre ha sido crear soluciones tecnológicas innovadoras y de calidad.
          </Parrafo>
        </div>
      </Seccion>

      <Seccion titulo="Portafolio">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
      </Seccion>

      <Seccion titulo="Servicios" classTitulo={'mb-4'}>
        <p className="text-lg sm:text-xl text-center text-gray-300 mb-6">
          Estos son algunos de los servicios que ofrezco:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Servicio titulo={'Aplicaciones Web'}/>
          <Servicio titulo={'Sitios Responsivos'}/>
          <Servicio titulo={'Tiendas Online'}/>
          <Servicio titulo={'Portafolios Digitales'}/>
          <Servicio titulo={'Apps Móviles'}/>
        </div>
      </Seccion>

      <Seccion titulo="Contacto">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
      </Seccion>
    </>
  );
}