'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiReactrouter, SiNodedotjs, SiMysql, SiFirebase,
    SiNextdotjs, SiTailwindcss, SiGit
} from 'react-icons/si';
import { FaPenNib, FaVideo } from 'react-icons/fa';
import Seccion from './Seccion';

export default function Habilidades() {
    const skills = [
        { name: 'React', icon: SiReact, color: 'text-sky-400', category: 'Frontend' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-300', category: 'Frontend' },
        { name: 'React Native', icon: SiReactrouter, color: 'text-cyan-500', category: 'Mobile' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', category: 'Backend' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', category: 'Backend' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-400', category: 'Backend' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-teal-400', category: 'Frontend' },
        { name: 'Git', icon: SiGit, color: 'text-red-500', category: 'Herramientas' },
        { name: 'Copywriting', icon: FaPenNib, color: 'text-pink-400', category: 'Otros' },
        { name: 'Edición de Videos', icon: FaVideo, color: 'text-purple-500', category: 'Otros' },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <Seccion
            id="habilidades"
            titulo="Habilidades"
            className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white py-14"
        >
            <motion.div
                className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => {
                    const Icono = skill.icon;
                    return (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/80 border border-gray-700 hover:border-gray-500 hover:bg-gray-700/80 transform hover:translate-y-[-3px] transition-all duration-300"
                            variants={itemVariants}
                        >
                            <div className={`p-2 rounded-full bg-gray-900 mb-3`}>
                                <Icono className={`${skill.color}`} size={22} />
                            </div>
                            <p className="text-center text-sm font-medium">{skill.name}</p>
                            <span className="text-xs text-gray-400 mt-1">{skill.category}</span>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Optional compact stats row */}
            <div className="mt-10 max-w-4xl mx-auto grid grid-cols-4 gap-2 text-center px-6">
                {[
                    { value: '4+', label: 'Años' },
                    { value: '20+', label: 'Proyectos' },
                    { value: '10+', label: 'Tecnologías' },
                    { value: '100%', label: 'Dedicación' },
                ].map((stat, index) => (
                    <div key={index} className="p-3 rounded-lg bg-gray-800/50">
                        <h4 className="text-lg font-bold text-indigo-400">{stat.value}</h4>
                        <p className="text-gray-400 text-xs">{stat.label}</p>
                    </div>
                ))}
            </div>
        </Seccion>
    );
}