'use client';
import React, { useState, useEffect } from "react";
import { } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiPlay } from "react-icons/fi";
import { TfiControlPause } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import Seccion from "./Seccion";
import Boton from "./Boton";
import Parrafo from "./Parrafo";
import Redes from "./Redes";



export default function Portafolio({ isModalOpen, toggleModal }) {

    const bysitePro = {
        title: 'Bysite Pro',
        images: '/bysite4.png',
        description: `Bysite Pro fue una solución integral de desarrollo web diseñada para emprendedores. Ofrecía 
        plataformas de comercio electrónico personalizadas, combinando un diseño atractivo con funcionalidad robusta.`,
    };

    const boricue = {
        title: 'Boricue',
        images: '/boricue1.png',
        description: `Boricue es una app conceptual destinada a promover la cultura local a través de una plataforma 
        innovadora. Enfocada en destacar negocios regionales y fomentar el crecimiento de pequeñas empresas.`,
    };
    return (
        <Seccion className="flex flex-col w-full p-4 sm:p-6" titulo={'Proyectos'}>
            {/* Proyecto Bysite Pro */}
            <div className="flex flex-col my-16 sm:flex-row items-center gap-10">
                <div className="w-full sm:w-1/2">
                    <img alt={bysitePro.title} src={bysitePro.images} className="w-full rounded-lg"/>
                </div>
                <div className="w-full sm:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{bysitePro.title}</h3>
                    <Parrafo className="text-gray-400 ">{bysitePro.description}</Parrafo>
                </div>
            </div>

            {/* Proyecto Boricue */}
            <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="w-full sm:w-1/2">
                    <img alt={boricue.title} src={boricue.images} className="w-full rounded-lg" />
                </div>
                <div className="w-full sm:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{boricue.title}</h3>
                    <Parrafo className="text-gray-400">{boricue.description}</Parrafo>
                </div>
            </div>



            {/* Modal para zoom */}
            {isModalOpen && (
                <div
                    className="flex h-[80vh] w-full fixed inset-0 bg-black bg-opacity-75 items-center justify-center z-50"
                    onClick={toggleModal}
                >

                    <button
                        onClick={toggleModal}
                        className="bg-red-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
                    >
                        <IoMdClose size={35} color="#fff" />
                    </button>

                    {/*  {images[slide].endsWith('.mp4') ? (
                        <video
                            src={`/${images[slide]}`}
                            className="max-w-full max-h-full"
                            autoPlay
                            muted
                            loop
                        />
                    ) : (
                        <Image
                            src={`/${images[slide]}`}
                            fill
                            alt={`Slide ${slide}`}
                            className="object-contain"
                        />
                    )} */}
                </div>
            )}
        </Seccion>

    );
}
