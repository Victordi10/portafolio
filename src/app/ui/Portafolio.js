'use client';
import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';

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
        title: 'Bysite Pro - plataforma diseñada para emprendedores.',
        images: '/bysite4.png',
        description: `Bysite Pro fue una plataforma de comercio electrónico personalizadas, que generaba catalogos web combinando un diseño atractivo con funcionalidades robustas.`,
    };

    const boricue = {
        title: 'Boricue - plataforma para promover la sostenibilidad',
        images: '/boricue1.png',
        description: `Boricue es una plataforma en línea diseñada para promover la sostenibilidad y la economía circular al brindar a los usuarios la oportunidad de intercambiar, donar o vender residuos y desechos materiales. `,
    };
    const claseA = 'flex items-center justify-center gap-1  rounded-lg shadow-lg  bg-slate-900 p-2 text-gray-100 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 ease-in-out'
    return (
        <Seccion id={'proyectos'} className="flex flex-col w-full" titulo={'Proyectos'}>
            {/* Proyecto Bysite Pro */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
                <div className="w-full sm:w-1/2">
                    <img alt={bysitePro.title} src={bysitePro.images} className="w-full rounded-lg" />
                </div>
                <div className="w-full sm:w-1/2 space-y-4">
                    <h3 className="sm:text-2xl text-xl text-start font-bold text-white">{bysitePro.title}</h3>
                    <Parrafo className="text-gray-400 ">{bysitePro.description}</Parrafo>
                    <div className="flex items-center justify-start gap-3">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={claseA}
                        >
                            <FaInstagram className="w-8 h-8" />
                        </a>
                        <a
                            href="https://github.com/Victordi10/bysite.pro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={claseA}
                        >
                            <FaGithub className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Proyecto Boricue */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="w-full sm:w-1/2">
                    <img alt={boricue.title} src={boricue.images} className="w-full rounded-lg" />
                </div>
                <div className="w-full sm:w-1/2 space-y-4">
                    <h3 className="sm:text-2xl text-xl font-bold text-white">{boricue.title}</h3>
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
