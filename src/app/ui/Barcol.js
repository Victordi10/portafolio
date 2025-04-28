'use client';

import React, { useState, useEffect, useRef } from 'react';
import Seccion from './Seccion';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaBriefcase, FaPlay } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { misContactos } from '../constants/contacto';
// Sample images for the slider - replace with your actual images
const images = [
    '/barcol1.jpeg',
    '/barcol2.jpeg',
    '/barcol3.jpeg',
    '/barcol4.jpeg',

];

export default function Barcol() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        let interval;

        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [isPaused]);

    // Navigation functions
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <Seccion
            id="barcol"
            titulo="Mi experiencia"
            classTitulo={'text-3xl md:text-4xl'}
            icon={<FaBriefcase />}
            className="bg-gradient-to-b from-gray-950 to-gray-950 text-white px-0 md:px-2 py-4"
        >
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto  md:px-8">
                {/* Modern Image Slider */}
                <div
                    className="w-full md:w-[40%] relative overflow-hidden rounded-2xl shadow-2xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    ref={sliderRef}
                >
                    <div className="relative h-full w-full">
                        {/* Slides */}
                        <div
                            className="h-full w-full transition-all duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex' }}
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex items-center justify-center h-full relative"
                                >
                                    <Image
                                        src={image}
                                        alt={`Barcol App Preview ${index + 1}`}
                                        width={250}
                                        height={150}
                                        className=" object-contain rounded-xl shadow-lg transition-transform duration-500 ease-in-out"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-all"
                            aria-label="Previous slide"
                        >
                            <HiChevronLeft size={24} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-all"
                            aria-label="Next slide"
                        >
                            <HiChevronRight size={24} />
                        </button>

                        {/* Slide indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Status indicator for pause/play */}
                        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-xs text-white">
                            {isPaused ? 'Pausado' : 'Auto'}
                        </div>
                    </div>
                </div>

                {/* Enhanced Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full md:w-[60%] flex p-4 flex-col gap-6"
                >
                    <div>
                        <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">Aplicación Multiplataforma</span>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">¿Qué es Barcol?</h3>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-justify md:text-left text-lg">
                        Barcol es una aplicación innovadora que revoluciona la conexión entre barberos y clientes.
                        Con una interfaz intuitiva y moderna, facilita la gestión de citas y la exhibición de trabajos
                        profesionales para inspirar a la comunidad.
                    </p>

                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 className="text-xl font-semibold text-indigo-300 mb-4">Características principales:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                            <li className="flex items-start gap-2 text-base">
                                <span className="text-green-400 font-bold">✓</span> Perfiles personalizados
                            </li>
                            <li className="flex items-start gap-2 text-base">
                                <span className="text-green-400 font-bold">✓</span> Feed de inspiración
                            </li>
                            <li className="flex items-start gap-2 text-base">
                                <span className="text-green-400 font-bold">✓</span> Reserva de citas en línea
                            </li>
                            <li className="flex items-start gap-2 text-base">
                                <span className="text-green-400 font-bold">✓</span> Notificaciones en tiempo real
                            </li>
                            <li className="flex items-start gap-2 text-base">
                                <span className="text-green-400 font-bold">✓</span> Gestión de servicios
                            </li>
                            <li className="flex items-start gap-2 text-base">
                                <span className="text-green-400 font-bold">✓</span> Control de horarios
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-indigo-300 mb-2">Stack tecnológico:</h4>
                        <div className="flex flex-wrap gap-2">
                            {['React Native', 'Next.js', 'Node.js', 'Firebase', 'MySQL', 'TailwindCSS'].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-gradient-to-r from-purple-800 to-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Call-to-action buttons */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <a
                            href={misContactos.barcolLink}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-700/30 text-base"
                        >
                            Ver Demo <FaExternalLinkAlt size={18}/>
                        </a>

                        <a
                            href={misContactos.barcolPlay}
                            className="inline-flex items-center gap-2 bg-gray-800 text-white border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 text-base"
                        >
                            Ver App <FaPlay size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </Seccion>
    );
}