import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';


/* const tamaño = ()=>{
    let ancho = window.innerWidth;
    if(ancho <= 650){
        return 25;
    }else{
        return 25;
    }
} */

const Redes = ({size = 25}) => {
    return (
        <div className="text-end sm:text-start">
            <p className="text-base mb-4 sm:text-lg font-semibold text-gray-300 text-end sm:text-start tracking-widest">Sígueme en</p>
            <div className="flex justify-center items-center space-x-4 sm:space-x-8  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
                >
                    <FaLinkedin size={size} />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
                >
                    <FaInstagram size={size} />
                </a>
                <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
                >
                    <FaYoutube size={size} />
                </a>
            </div>
        </div>
    );
};

export default Redes;
