import { FaLinkedin, FaGithub, FaTwitter, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Seccion from './Seccion';
import { MdContactPhone } from "react-icons/md";

const Contacto = () => {
    const correo = 'cordobav444@gmail.com'
    const claseA = 'flex items-center space-x-2 text-gray-100 hover:text-slate-600 transition'
    return (
        <Seccion id={'contacto'} icon={<MdContactPhone className='h-10 w-10'/>} titulo="Contacto" cover={true} className={`bg-cover mb-0 p-0 bg-center bg-[url('/contacto.jpeg')] sm:bg-[url('')] w-full`}>
            <div className="flex flex-col w-full sm:flex-row ">
                {/* Contenedor izquierdo */}
                <div className="sm:w-1/2 justify-center items-center hidden sm:block ">
                    <img
                        src="/contacto.jpeg"
                        alt="Imagen de contacto"
                        className="w-full h-full object-cover  "
                    />
                </div>

                {/* Contenedor derecho */}
                <div className="sm:w-1/2 w-full p-4">
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/victor-cordoba-a334b922a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={claseA}
                            >
                                <FaLinkedin className="w-6 h-6" />
                                <span>LinkedIn</span>
                            </a>
                        </li>


                        {/* Correo electrónico */}
                        <li>
                            <a
                                href={`mailto:${correo}?subject=¡Quiero contactarte!&body=Hola, Victor.`}
                                className="flex items-center space-x-2 text-gray-300 hover:text-blue-700 transition duration-300"
                            >
                                <FaEnvelope className="w-6 h-6" />
                                <span>{correo}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Seccion>
    );
};

export default Contacto;