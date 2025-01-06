'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Seccion from "./ui/Seccion";
import Parrafo from "./ui/Parrafo";
import Contacto from "./ui/Contacto";
import Cover from "./ui/Cover";
import Servicio from "./ui/Servicio";
import Portafolio from "./ui/Portafolio";
import Sobremi from "./ui/Sobremi";
import { PiBagFill } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

  // Alternar modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Cover />

      <Sobremi />

      <Portafolio  isModalOpen={isModalOpen}  toggleModal={toggleModal} />

      <Seccion id={'servicios'} icon={<PiBagFill className='h-10 w-10'/>} titulo="Servicios" classTitulo={'mb-4'}>
        <div className="flex flex-wrap items-center w-full justify-center gap-6">
          <Servicio titulo={'Aplicaciones Web'} />
          <Servicio titulo={'Sitios Responsivos'} />
          <Servicio titulo={'Tiendas Online'} />
          <Servicio titulo={'Portafolios Digitales'} />
          <Servicio titulo={'Apps Móviles'} />
        </div>
      </Seccion>

      <Contacto />
    </>
  );
}