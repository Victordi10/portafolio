'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    // Estado para controlar la visibilidad del menú en pantallas pequeñas
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="flex items-center justify-between p-2 w-full px-2 sm:px-12 bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-[1.01] relative">
            <Image
                src="/vy.svg"
                alt="Desarrollador de software"
                width={70}
                height={70}
                className={`rounded-full border-4 border-white p-2 py-3 ${menuOpen ? 'hidden' : 'block'} sm:block`}
            />

            {/* Botón Burger */}
            <div className="sm:hidden">
                <button onClick={toggleMenu} className="text-white text-3xl">
                    {menuOpen ? 'X' : '☰'}
                </button>
            </div>

            {/* Menú de navegación */}
            <nav className={`w-[70%] md:w-[50%] ${menuOpen ? 'flex order-first' : 'hidden'} sm:flex sm:order-3`}>
            <ul
                className={`list-none text-white text-lg font-semibold 
                    justify-between
                    w-full
                    ${menuOpen ? 'flex flex-col' : 'hidden'} 
                    sm:flex-row sm:flex // Mantener en fila en pantallas medianas
                    md:flex`} // Siempre visible en pantallas grandes
            >
                    <li>
                        <Link
                            href="/"
                            className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
                        >
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
                        >
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-yellow-400 transition-colors duration-300 ease-in-out"
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
