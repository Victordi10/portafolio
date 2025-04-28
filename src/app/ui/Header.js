'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const NavLink = ({ href, children }) => (
        <li>
            <Link href={href} onClick={() => setMenuOpen(false)}>
                <span className="relative group text-lg font-medium cursor-pointer">
                    <span className="text-white hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300">
                        {children}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
            </Link>
        </li>
    );

    return (
        <header className={` sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 backdrop-blur-md bg-slate-900/80' : 'py-2 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="relative overflow-hidden rounded-full border-2 border-gradient p-0.5">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-spin-slow opacity-70"></div>
                            <div className="relative z-10 rounded-full overflow-hidden bg-black">
                                <Image
                                    src="/vy.svg"
                                    alt="Desarrollador de software"
                                    width={60}
                                    height={60}
                                    className="rounded-full border-4 border-white p-2 py-3"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-10">
                            <NavLink href="#inicio">Inicio</NavLink>
                            <NavLink href="#habilidades">Habilidades</NavLink>
                            <NavLink href="#barcol">Experiencia</NavLink>
                            <li>
                                <Link
                                    href="#contacto"
                                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105"
                                >
                                    Contrátame
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="relative w-10 h-10 text-white focus:outline-none"
                            aria-label="Menu"
                        >
                            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 ${menuOpen ? 'rotate-45' : ''} transition-all duration-300`}>
                                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform ${menuOpen ? 'rotate-0 translate-y-3' : ''} transition-all duration-300`}></span>
                                <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 -translate-y-1/2 ${menuOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}></span>
                                <span className={`absolute bottom-0 left-0 w-6 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform ${menuOpen ? 'rotate-90 -translate-y-3' : ''} transition-all duration-300`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden absolute left-0 right-0 backdrop-blur-md bg-slate-900/95 border-b border-gray-700/50 transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                    } overflow-hidden`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <ul className="flex flex-col space-y-5">
                        <NavLink href="#inicio">Inicio</NavLink>
                        <NavLink href="#habilidades">Habilidades</NavLink>
                        <NavLink href="#barcol">Experiencia</NavLink>
                        <li className="pt-2">
                            <Link
                                href="#contacto"
                                className="inline-block w-full text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-pink-500/40 transition-all duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contrátame
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
