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
import Habilidades from "./ui/Habilidades";
import Barcol from "./ui/Barcol";
export default function Home() {

  return (
    <>
      <Cover />

      <Habilidades />

      <Barcol />

      <Portafolio   />

      <Contacto />
    </>
  );
}