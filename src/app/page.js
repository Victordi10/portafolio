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
import Portafolio from "./ui/Portafolio";


export default function Home() {
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0); // Proyecto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

  const portafolioGalery = [
    {
      title: 'Bysite Pro',
      images: ['bysite4.png', 'bysite3.mp4', 'bysite.jpeg', 'bysite2.jpeg'],
    },
    {
      title: 'Boricue',
      images: ['boricue1.png', 'boricue2.png'],
    },
  ];

  const images = portafolioGalery[selectedProject].images;

  // Cambiar slide automáticamente
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [images, isPaused]);

  // Cambiar proyecto y reiniciar slide
  const handleProjectClick = (index) => {
    setSelectedProject(index);
    setSlide(0);
  };

  // Alternar modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


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

      <Portafolio setIsPaused={setIsPaused} isModalOpen={isModalOpen} slide={slide} images={images} portafolioGalery={portafolioGalery} toggleModal={toggleModal} isPaused={isPaused} setSlide={setSlide} selectedProject={selectedProject} handleProjectClick={handleProjectClick}/>

      <Seccion titulo="Servicios" classTitulo={'mb-4'}>
        <p className="text-lg sm:text-xl text-center text-gray-300 mb-6">
          Estos son algunos de los servicios que ofrezco:
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Servicio titulo={'Aplicaciones Web'} />
          <Servicio titulo={'Sitios Responsivos'} />
          <Servicio titulo={'Tiendas Online'} />
          <Servicio titulo={'Portafolios Digitales'} />
          <Servicio titulo={'Apps Móviles'} />
        </div>
      </Seccion>

      <Seccion titulo="Contacto">
        <p>Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.</p>
      </Seccion>
    </>
  );
}