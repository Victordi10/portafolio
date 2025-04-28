'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Seccion from "./Seccion";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { RiArrowDownWideFill } from "react-icons/ri";
import { misContactos } from '../constants/contacto';


export default function Cover() {
    const correo = 'cordobav444@gmail.com';

    return (
        <Seccion
            id="inicio"
            className="min-h-[70vh] py-8 relative flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    className="flex flex-col gap-8 md:gap-4 items-center justify-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Profile picture with animation */}
                    <motion.div
                        className="mb-4 relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-28 h-28 rounded-full border-4 border-gradient p-1 relative overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-70 animate-spin-slow rounded-full"></div>
                            <div className="absolute inset-1 bg-gray-900 rounded-full overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/foto2.jpeg"
                                    alt="Victor Córdoba"
                                    width={140}
                                    height={140}
                                    className="rounded-full object-cover scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            ¡Hola, soy Victor Córdoba!
                        </span>
                    </motion.h1>

                    {/* Role title */}
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-gray-700"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-gray-200 font-medium">Desarrollador Full Stack</p>
                    </motion.div>

                    {/* Bio paragraph */}
                    <motion.p
                        className="text-gray-300 max-w-2xl mx-auto text-center text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Emprendedor apasionado por la tecnología y el crecimiento personal.
                        Estudio Análisis y Desarrollo de Software en el SENA, y he trabajado en diversos proyectos
                        que han fortalecido mi experiencia. Desde Medellín, busco aportar valor a grandes equipos.
                    </motion.p>

                    {/* CTA buttons */}

                    <motion.div
                        className="flex justify-between items-center mt.4 w-full gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <a
                            href={misContactos.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm justify-center p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-700 hover:text-white transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                            <span className='hidden md:block'>Linkedin</span>
                        </a>

                        <motion.div
                            className="flex flex-col relative items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <RiArrowDownWideFill className="text-4xl text-pink-400 animate-bounce" size={40} color="#fff" />
                            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                                <a
                                    href={`mailto:${correo}?subject=¡Quiero contactarte!&body=Hola Victor, vi tu portafolio y me gustaría conversar.`}
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 text-base rounded-lg shadow-lg hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                >
                                    <FaEnvelope size={20}/> Contactarme
                                </a>
                            </div>

                        </motion.div>
                        <a
                            href={misContactos.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm gap-2 justify-center p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                            <span className='hidden md:block'>Github</span>
                        </a>
                    </motion.div>

                </motion.div>

            </div>

            {/* Add custom styles for animations */}
            <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
        </Seccion>
    );
}

