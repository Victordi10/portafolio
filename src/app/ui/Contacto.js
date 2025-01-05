import { FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Seccion from './Seccion';

    const Contacto = () => {
        const claseA = 'flex items-center space-x-2 text-gray-100 hover:text-slate-600 transition'
        return (
            <Seccion titulo="Contacto" cover={true} className={`bg-cover p-0 bg-center bg-[url('/image.jpg')] sm:bg-[url('')] w-full`}>
                <div className="flex flex-col w-full sm:flex-row ">
                    {/* Contenedor izquierdo */}
                    <div className="sm:w-1/2 justify-center items-center hidden sm:block ">
                        <img
                            src="/image.jpg"
                            alt="Imagen de contacto"
                            className="w-full h-full object-cover  "
                        />
                    </div>

                    {/* Contenedor derecho */}
                    <div className="sm:w-1/2 w-full p-4">
                        <h3 className="text-xl font-bold mb-4">Sígueme en mis redes</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={claseA}
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={claseA}
                                >
                                    <FaGithub className="w-6 h-6" />
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={claseA}
                                >
                                    <FaTwitter className="w-6 h-6" />
                                    <span>Twitter</span>
                                </a>
                            </li>
                            {/* Número de teléfono */}
                            <li>
                                <a
                                    href="tel:+123456789"
                                    className={claseA}
                                >
                                    <FaPhoneAlt className="w-6 h-6" />
                                    <span>+1 234 567 89</span>
                                </a>
                            </li>
                            {/* Correo electrónico */}
                            <li>
                                <a
                                    href="mailto:correo@ejemplo.com"
                                    className={claseA}
                                >
                                    <FaEnvelope className="w-6 h-6" />
                                    <span>correo@ejemplo.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Seccion>
        );
    };

    export default Contacto;