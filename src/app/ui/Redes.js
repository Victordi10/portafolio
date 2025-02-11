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

    export const Instagram = (red)=>{
        <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1  rounded-lg shadow-lg  bg-slate-900 p-2 text-gray-100 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
            <FaInstagram size={25} />
            Instagram
        </a>
    }
    export const Linkedin = (red)=>{
        <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1  rounded-lg shadow-lg  bg-slate-900 p-2 text-gray-100 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
            <FaLinkedin size={25} />
            Linkedin
        </a>
    }

const Redes = ({size = '1.1rem'}) => {
    return (
        <div className="text-end sm:text-start">
            {/* <p className="text-base mb-4 sm:text-lg font-semibold text-gray-300 text-end sm:text-start tracking-widest">Sígueme en</p> */}
            <div className="flex text-sm justify-center items-center space-x-4 sm:space-x-8  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                <a
                    href="https://www.linkedin.com/in/victor-cordoba-a334b922a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1  rounded-lg shadow-lg  bg-slate-900 p-2 text-gray-100 hover:text-blue-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
                >
                    <FaLinkedin size={size} />
                    Linkedin
                </a>
                
            </div>
        </div>
    );
};

export default Redes;
