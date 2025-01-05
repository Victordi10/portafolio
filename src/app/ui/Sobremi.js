'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Seccion from "./Seccion";
import Parrafo from "./Parrafo";

const Sobremi = () => {
    return (
        <Seccion titulo="¿Quien soy?" cover={true} classTitulo={'mb-10 sm:mb-2'} className={`relative `}>
            <div className='p-3 pt-0 flex flex-col sm:flex-row items-center justify-center sm:space-x-16'>
                <Image
                    src="/foto.jpeg"
                    alt="foto sobre mí"
                    width={200}
                    height={200}
                    className="rounded-3xl border-4 border-white p-2 py-3 sm:block"
                />
                <div className="flex flex-col sm:w-1/2 space-y-4 p-4 sm:p-6 rounded-lg shadow">
                    <Parrafo className=" text-lg">
                        <span className="font-semibold">Soy Victor Manuel Córdoba,</span> desarrollador full-stack con experiencia en tecnologías como
                        <span className="text-white font-medium"> React</span>,
                        <span className="text-white font-medium"> Node.js</span> y
                        <span className="text-white font-medium"> MySQL</span>.
                    </Parrafo>
                    <Parrafo className=" text-lg">
                        Actualmente estoy trabajando en proyectos innovadores como
                        <strong className=" text-indigo-500"> BarCol</strong>, una app para optimizar procesos en barberías.
                    </Parrafo>
                    <Parrafo className=" text-lg">
                        Como <span className="font-semibold ">freelance</span>, me especializo en crear <span className="text-indigo-500 font-semibold">soluciones digitales personalizadas</span> y eficientes, ayudando a empresas y emprendedores a transformar ideas en proyectos exitosos.
                    </Parrafo>
                </div>

            </div>
        </Seccion>
    );
};

export default Sobremi;