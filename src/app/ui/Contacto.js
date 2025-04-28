import React from 'react';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import Seccion from './Seccion';
import { misContactos } from '../constants/contacto';
const Contacto = () => {
    const correo = misContactos.correo; // Cambia esto por tu correo real
    const telefono = misContactos.telefono; // cambia este número por el tuyo real
    const linkedin = misContactos.linkedin; // cambia el enlace
    const whatsappLink = misContactos.whatsappLink; // Cambia el enlace de WhatsApp

    const handleContactClick = () => {
        // Smooth scroll to the contact form or open email client
        window.location.href = `mailto:${correo}`;
    };

    return (
        <Seccion
            titulo="Contáctame"
            cover={true}
            icon={<FaEnvelope />}
            className="bg-cover bg-fixed bg-center bg-[url('/contacto.jpeg')] w-full flex justify-center items-center py-24"
            id="contacto"
        >
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-slate-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-700/50">
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Left column - Info */}
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl font-bold text-white">¿Hablamos?</h2>
                            <p className="text-gray-300 text-lg max-w-md">
                                Estoy disponible para colaborar en proyectos, oportunidades laborales o
                                simplemente intercambiar ideas creativas.
                            </p>

                            <button
                                onClick={handleContactClick}
                                className="mt-6 group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 
                                         hover:from-blue-500 hover:to-blue-300 text-white font-bold py-3 px-6 
                                         rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                            >
                                Contáctame Ahora
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Right column - Contact methods */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 gap-4">
                                <a
                                    href={`mailto:${correo}`}
                                    className="bg-slate-800/60 hover:bg-slate-700/80 p-4 rounded-xl flex items-center gap-4 
                                            transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                                >
                                    <div className="bg-blue-500 p-3 rounded-lg">
                                        <FaEnvelope size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Email</h3>
                                        <p className="text-gray-400 text-sm">{correo}</p>
                                    </div>
                                </a>

                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-800/60 hover:bg-slate-700/80 p-4 rounded-xl flex items-center gap-4 
                                            transition-all duration-300 border border-slate-700/50 hover:border-green-500/50"
                                >
                                    <div className="bg-green-500 p-3 rounded-lg">
                                        <FaWhatsapp size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">WhatsApp</h3>
                                        <p className="text-gray-400 text-sm">+57{telefono}</p>
                                    </div>
                                </a>

                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-800/60 hover:bg-slate-700/80 p-4 rounded-xl flex items-center gap-4 
                                            transition-all duration-300 border border-slate-700/50 hover:border-blue-700/50"
                                >
                                    <div className="bg-blue-700 p-3 rounded-lg">
                                        <FaLinkedin size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">LinkedIn</h3>
                                        <p className="text-gray-400 text-sm">Perfil Profesional</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Seccion>
    );
};

export default Contacto;