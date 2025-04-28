'use client';
import React from "react";
import { FaGithub, FaInstagram, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoMdClose } from "react-icons/io";
import Seccion from "./Seccion";
import Parrafo from "./Parrafo";

export default function Portafolio({ isModalOpen, toggleModal }) {
    // Projects data
    const projects = [
        {
            id: 'bysite-pro',
            title: 'Bysite Pro',
            subtitle: 'Plataforma para emprendedores',
            image: '/bysite4.png',
            description: `Bysite Pro fue una plataforma de comercio electrónico personalizada, que generaba catálogos web combinando un diseño atractivo con funcionalidades robustas.`,
            links: [
                { icon: FaInstagram, url: 'https://www.linkedin.com', label: 'Instagram' },
                { icon: FaGithub, url: 'https://github.com/Victordi10/bysite.pro', label: 'GitHub' }
            ],
            tags: ['E-commerce', 'Web', 'Catálogos']
        },
        {
            id: 'boricue',
            title: 'Boricue',
            subtitle: 'Plataforma para promover la sostenibilidad',
            image: '/boricue1.png',
            description: `Boricue es una plataforma en línea diseñada para promover la sostenibilidad y la economía circular al brindar a los usuarios la oportunidad de intercambiar, donar o vender residuos y desechos materiales.`,
            links: [],
            tags: ['Sostenibilidad', 'Economía circular', 'Intercambio']
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <Seccion
            id="proyectos"
            icon={<FaCode className="h-8 w-8 text-blue-400" />}
            className=""
            titulo="Proyectos Adicionales"
        >
            <motion.div
                className="space-y-12 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                        variants={itemVariants}
                    >
                        {/* Project Image */}
                        <div className="w-full sm:w-2/5 overflow-hidden rounded-lg">
                            <div className="relative group cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    <FaExternalLinkAlt className="text-white text-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="w-full sm:w-3/5 space-y-3">
                            <div>
                                <h3 className="text-xl font-semibold text-blue-300">{project.title}</h3>
                                <p className="text-sm text-gray-400">{project.subtitle}</p>
                            </div>

                            <Parrafo className="text-gray-300 text-sm leading-relaxed">
                                {project.description}
                            </Parrafo>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2 py-1 text-xs rounded bg-gray-700/70 text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            {project.links.length > 0 && (
                                <div className="flex items-center gap-3 pt-2">
                                    {project.links.map((link, linkIndex) => {
                                        const Icon = link.icon;
                                        return (
                                            <a
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center p-2 rounded-lg bg-gray-700/70 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                                                aria-label={link.label}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal for image zoom */}
        </Seccion>
    );
}