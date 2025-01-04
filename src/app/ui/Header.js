'use client';

import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
return (
    <header 
            className="
                flex items-center justify-between 
                p-3 px-12
                bg-gradient-to-r from-gray-950 via-gray-950  to-gray-950
                rounded-lg shadow-lg 
                hover:shadow-xl 
                transition-all duration-500 ease-in-out transform 
                hover:scale-[1.01]
                ">
        <Image 
            src="/vy.svg" 
            alt="Desarrollador de software" 
            width={80} 
            height={80}
            className="rounded-full border-4 border-white p-2 py-3"
        />
    
        <nav>
            <ul className="flex gap-8 list-none text-white text-lg font-semibold">
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