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

export default function Portafolio({ setIsPaused, handleProjectClick, isModalOpen, slide, images, portafolioGalery, toggleModal, isPaused, setSlide, selectedProject }) {
    return (
        <section className="flex flex-col sm:flex-row w-full sm:p-6">
            {/* Columna izquierda con texto y lista */}
            <Seccion className="w-full sm:w-1/2 p-4" titulo='Portafolio'>
                <div className="h-full">
                    <Parrafo className="mb-4">
                        Bienvenido a mi portafolio personal. Soy un desarrollador de software apasionado por la tecnología y el diseño web.
                    </Parrafo>
                    <ul className="space-y-2">
                        {portafolioGalery.map((project, index) => (
                            <li
                                key={index}
                                onClick={() => handleProjectClick(index)}
                                className={`cursor-pointer hover:text-indigo-500 transition ${selectedProject === index ? 'text-indigo-500 font-bold' : ''
                                    }`}
                            >
                                Proyecto {index + 1} - {project.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </Seccion>

            {/* Columna derecha con la imagen */}
            <div className="sm:w-1/2 h-[50vh] relative">
                {images[slide].endsWith('.mp4') ? (
                    <video
                        src={`/${images[slide]}`}
                        className="object-contain w-full h-full cursor-pointer"
                        autoPlay
                        muted
                        loop
                        onClick={toggleModal}
                    />
                ) : (
                    <Image
                        src={`/${images[slide]}`}
                        fill
                        alt={`Slide ${slide}`}
                        className="object-contain w-full h-full cursor-pointer"
                        onClick={toggleModal}
                    />
                )}

                {/* Controles del slider */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button
                        onClick={() => setSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)}
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
                    >
                        <IoIosArrowBack size={35} color="#fff" />
                    </button>
                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
                    >
                        {isPaused ? <FiPlay size={35} color='#fff' /> : <TfiControlPause size={35} color='#fff' />}
                    </button>
                    <button
                        onClick={() => setSlide((prevSlide) => (prevSlide + 1) % images.length)}
                        className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
                    >
                        <IoIosArrowForward size={35} color="#fff" />
                    </button>
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

                    {images[slide].endsWith('.mp4') ? (
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
                    )}
                </div>
            )}
        </section>

    );
}
