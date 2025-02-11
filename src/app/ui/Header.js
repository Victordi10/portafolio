'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cover from './Cover';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const classLink = "hover:text-yellow-400 text-lg transition-colors duration-300 ease-in-out"

    const Menu = ({ navclass, listClass = 'flex', linkClass = classLink }) => {
        return (
            <nav className={`${navclass} sm:w-[60%] md:w-[50%]`}>
                <ul
                    className={`list-none text-white text-lg font-semibold 
                        w-full
                        ${listClass}
                        `} // Siempre visible en pantallas grandes
                >
                    <li>
                        <a
                            href="#inicio"
                            className={`${linkClass}`}
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sobre-mi"
                            className={`${linkClass}`}
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="#proyectos"
                            className={`${linkClass}`}
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#servicios"
                            className={`${linkClass}`}
                        >
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contacto"
                            className={`${linkClass}`}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        );
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="  sticky top-0 z-10 bg-[url('/cover.jpeg')] bg-cover bg-no-repeat items-center bg-center w-full rounded-lg shadow-lg ">
            <div className='inset-0 bg-gradient-to-t from-[rgba(3,7,18,0.7)]  via-[rgba(3,7,18,0.8)] to-[rgba(3,7,18,0.98)]  flex items-center w-full flex-col '>
            <div className={`flex items-center justify-between p-2 w-full px-4 sm:px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-[1.01] ${menuOpen
                        ? 'inherit'
                        : ' bg-inherit'
                    }`}>
                <Image
                    src="/vy.svg"
                    alt="Desarrollador de software"
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-white p-2 py-3"
                />

                {/* Botón Burger */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white text-3xl">
                        {menuOpen ? 'X' : '☰'}
                    </button>
                </div>

                <Menu navclass={'hidden sm:flex'} listClass="justify-between sm:flex-row sm:flex" />
            </div>

            {/* Menú con animación */}
            <div
                className={`sm:hidden w-full  transition-all duration-300 ease-in-out overflow-hidden ${menuOpen
                        ? 'max-h-[500px] opacity-100 scale-y-100'
                        : 'max-h-0 opacity-0 scale-y-0'
                    }`}
            >
                <Menu listClass={`flex flex-col w-full space-y-2 min-h-fit p-4`} />
            </div>
            </div>
        </header>
    );
}
