'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Seccion from "./Seccion";
import Parrafo from "./Parrafo";
import { FaUserCheck } from "react-icons/fa";

const Sobremi = () => {
    return (
        <Seccion id={'sobre-mi'} icon={<FaUserCheck className='h-10 w-10'/>} titulo="¿Quien soy?"  classTitulo={''} className={`relative `}>
            <div className='flex flex-col sm:flex-row items-center justify-center sm:space-x-16'>
                <Image
                    src="/foto.jpeg"
                    alt="foto sobre mí"
                    width={190}
                    height={140}
                    className="rounded-3xl object-cover border-4 border-white sm:block"
                />
                <div className="flex flex-col sm:w-1/2 rounded-lg">
                    <Parrafo className=" ">
                        <span className="font-semibold">Soy Victor Manuel Córdoba,</span> desarrollador full-stack con experiencia en tecnologías como
                        <span className="text-white font-medium"> React</span>,
                        <span className="text-white font-medium"> Node.js</span> y
                        <span className="text-white font-medium"> MySQL</span>.
                    </Parrafo>
                    <Parrafo className=" ">
                        Actualmente estoy trabajando en proyectos innovadores como
                        <strong className=" text-indigo-500"> BarCol</strong>, una app para optimizar procesos en barberías.
                    </Parrafo>
                    <Parrafo className=" ">
                        Como <span className="font-semibold ">freelance</span>, me especializo en crear <span className="text-indigo-500 font-semibold">soluciones digitales personalizadas</span> y eficientes, ayudando a empresas y emprendedores a transformar ideas en proyectos exitosos.
                    </Parrafo>
                </div>

            </div>
        </Seccion>
    );
};

export default Sobremi;